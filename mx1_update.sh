docker pull bloodchen/nbdb
docker container stop nb_mx1
docker container rm nb_mx1
docker run --name nb_mx1 -p 9100:9000 -v $(pwd)/data:/home/node/app/data --restart=always -d bloodchen/nbdb:latest
