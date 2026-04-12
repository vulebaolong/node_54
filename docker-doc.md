<!-- Build image -->
docker build -t img-gateway .

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
