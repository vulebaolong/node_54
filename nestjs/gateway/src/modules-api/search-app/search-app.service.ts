import { Injectable, OnModuleInit } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';

@Injectable()
export class SearchAppService implements OnModuleInit {
  constructor(
    private prisma: PrismaService,
    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  async onModuleInit() {
    this.initArticle();
    this.initUser();
    this.initFood();
  }

  async searchApp(text: string) {
    console.log({ text });

    const reuslt = await this.elasticsearchService.search({
      index: ['articles', 'foods', 'users'],
      query: {
        multi_match: {
          query: text,
          fields: [
            'title',
            'content',
            'email',
            'fullName',
            'name',
            'description',
          ],
          operator: 'or', // chỉ cần khớp 1 phần từ khoá, tìm kiếm mềm,
          fuzziness: 'AUTO', // hỗ trợ tìm kiếm bị thiếu, user gõ thiếu chữ
          minimum_should_match: '60%', // yêu cầu khớp bao nhiêu % số từ trong câu search của user
        },
      },
    });
    
    return reuslt;
  }

  async initArticle() {
    // để xoá index
    // this.elasticsearchService.indices.delete({
    //   index: 'articles',
    //   ignore_unavailable: true,
    // });

    const articles = await this.prisma.articles.findMany();
    articles.forEach((article) => {
      this.elasticsearchService.index({
        index: 'articles',
        id: String(article.id),
        document: article,
      });
    });
  }

  async initUser() {
    // để xoá index
    // this.elasticsearchService.indices.delete({
    //   index: 'users',
    //   ignore_unavailable: true,
    // });

    const users = await this.prisma.users.findMany();
    users.forEach((user) => {
      this.elasticsearchService.index({
        index: 'users',
        id: String(user.id),
        document: user,
      });
    });
  }

  async initFood() {
    // để xoá index
    // this.elasticsearchService.indices.delete({
    //   index: 'foods',
    //   ignore_unavailable: true,
    // });

    const foods = await this.prisma.foods.findMany();
    foods.forEach((food) => {
      this.elasticsearchService.index({
        index: 'foods',
        id: String(food.id),
        document: food,
      });
    });
  }
}
