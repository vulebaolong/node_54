<!-- đối với máy mac chip M -->
--platform linux/amd64

<!-- Build image -->
docker build --platform linux/amd64 -t vulebaolong/img-gateway:latest .
docker build --platform linux/amd64 -t vulebaolong/img-email:latest .
docker build --platform linux/amd64 -t vulebaolong/img-order:latest .

<!-- list ra tất cả image -->
docker image list

<!-- xoá image -->
docker image remove img-gateway

<!-- chạy image -->
docker run --name con-gateway -d -p 3070:3069 img-gateway
docker run --name con-gateway -d -p 3070:3069 --env-file .env img-gateway
docker run --name con-gateway -d -p 3070:3069 --env-file .env.production img-gateway

<!-- truy cập vào terminal của container -->
docker exec -it con-gateway sh

<!-- coi log của container -->
docker logs con-gateway

<!-- xoá container -->
docker container remove con-gateway

<!-- stop container -->
docker container stop con-gateway

<!-- restart container -->
docker container restart con-gateway

<!-- start compose -->
<!-- sẽ chỉ start lại những service bị stop -->
<!-- TẠO NETWORK chỉ sài bên trong compose -->
docker compose up -d

<!-- down conpose -->
docker compose down

<!-- đăng nhập docker -->
docker login

<!-- push image -->
<!-- tên image: taikhoan_docker/ten_image:version -->
<!-- đăng nhập thành công docker bằng terminal -->
docker push vulebaolong/img-gateway:latest
docker push vulebaolong/img-email:latest
docker push vulebaolong/img-order:latest


<!-- lệnh linux -->
mkdir nestjs

nano .env
ctrl + O: save trong nano
enter: xác nhận save
ctrl + X: thoát nano
ctrl + K : xoá dòng trong nano

<!-- liệt kê các container đang chạy -->
docker container list
docker ps

<!-- liệt kê các container đang chạy và off (tất cả) -->
docker container list -a
docker ps -a

sudo ./svc.sh install
sudo ./svc.sh start