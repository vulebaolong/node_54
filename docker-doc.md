
<!-- Build image -->
docker build -t img-gateway .

<!-- list ra tất cả image -->
docker image list

<!-- xoá image -->
docker image remove img-gateway

<!-- chạy image -->
docker run --name con-gateway -d -p 3070:3069 img-gateway
docker run --name con-gateway -d -p 3070:3069 --env-file .env img-gateway

<!-- truy cập vào terminal của container -->
docker exec -it con-gateway sh

<!-- coi log của container -->
docker logs  con-gateway