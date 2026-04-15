
# install
sudo apt update
sudo apt install nginx

# remove
sudo apt remove nginx

# cài chứng chỉ https
cd /etc/ssl

mkdir cf-origin

cd cf-origin

nano vulebaolong_ssl_certificate_key.pem
nano vulebaolong_ssl_certificate.pem

sudo chmod 600 /etc/ssl/cf-origin/vulebaolong_ssl_certificate_key.pem
sudo chmod 644 /etc/ssl/cf-origin/vulebaolong_ssl_certificate.pem

# kích hoạt file code nginx
sudo nano /etc/nginx/sites-available/gateway.vulebaolong.com

sudo ln -s /etc/nginx/sites-available/domain.vulebaolong.com /etc/nginx/sites-enabled/
ls -l /etc/nginx/sites-enabled/

sudo rm -f /etc/nginx/sites-enabled/default

# kiểm tra
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl status nginx
ec2 mo port 
- 443 để HTTPS
- 80 để HTTP