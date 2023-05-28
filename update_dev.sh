cp data/config_mx1.js data/config.js
docker pull bloodchen/nbdb_dev
docker-compose -f dev-compose.yaml up -d
