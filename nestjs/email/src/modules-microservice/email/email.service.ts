import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { transporter } from 'src/common/nodemailer/init.nodemailer';
import * as nodemailer from 'nodemailer';
import { HttpService } from '@nestjs/axios';
import { OLLAMA_URL } from 'src/common/constant/app.constant';

@Injectable()
export class EmailService {
  constructor(private readonly httpService: HttpService) {}

  async create(createEmailDto: CreateEmailDto) {
    try {
      const createOrderId = createEmailDto.id;
      const email = createEmailDto.Users.email;
      const fullName = createEmailDto.Users.fullName;
      const foodName = createEmailDto.Foods.name;

      const prompt = `
      Khách hàng tên ${fullName} vừa mua món ${foodName}.
      ${foodName} là tên sản phẩm

      Bạn là một nhân viên chăm sóc khách hàng.
      Hãy viết đúng 1 câu cảm ơn ngắn gọn, chân thành, lịch sử bằng tiếng Việt để gửi cho khách hàng.
      Chỉ trả ra nội dung cảm ơn, không giải thích thêm.
      `

      const { data } = await this.httpService.axiosRef.post(
        OLLAMA_URL!,
        {
          model: 'llama3.2',
          prompt: prompt,
          stream: false,
        },
      );

      console.log(data);

      const info = await transporter.sendMail({
        from: 'vulebaolong@gmail.com', // sender address
        // to: email, // list of recipients
        to: 'vulebaolong@gmail.com', // list of recipients
        subject: 'Notification Order', // subject line
        text: `Create Order Id: ${createOrderId}, food: ${foodName}`, // plain text body
        html: `
          <div>
            <h3>Đặt hàng thành công</h3>          
            <p>Đơn hàng mã: ${createOrderId}</p>
            <p>Sản phẩm: ${foodName}</p>
            <p>${data.response}</p>
          </div>
        `, // HTML body
      });

      console.log('Message sent: %s', info.messageId);
      // Preview URL is only available when using an Ethereal test account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      console.log({ createEmailDto });
    } catch (err) {
      console.error('Error while sending mail:', err);
    }
  }

  findAll() {
    return `This action returns all email`;
  }

  findOne(id: number) {
    return `This action returns a #${id} email`;
  }

  update(id: number, updateEmailDto: UpdateEmailDto) {
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  }
}
