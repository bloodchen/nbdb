cp data/config_mx1.js data/config.js
docker pull bloodchen/nbdb
docker run --name nb_mx1 -p 9100:9000 -v $(pwd)/data:/home/node/app/data --restart=always bloodchen/nbdb:latest
