Under-developement

git clone https://github.com/MAmmarRaza/React-NodeAPI-MySQL.git

sudo apt-get update
sudo apt install docker.io
sudo usermod -aG docker $USER
sudo systemctl restart docker

sudo curl -L "https://github.com/docker/compose/releases/download/v2.23.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.23.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version

docker-compose -f docker-compose.yaml up -d
