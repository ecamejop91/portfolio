#!/usr/bin/env bash

set -e
# -e = stop the script immediately if any command fails

cd ~/portfolio
# cd = go into your portfolio repo folder

cat > Dockerfile <<'EOF'
FROM caddy:2

COPY Caddyfile /etc/caddy/Caddyfile
COPY . /srv
EOF
# cat > Dockerfile = create/overwrite the Dockerfile
# <<'EOF' ... EOF = write the block exactly as-is into the file

cat > Caddyfile <<'EOF'
:80 {
    root * /srv
    file_server
}
EOF
# cat > Caddyfile = create/overwrite the Caddy config file
# :80 = make Caddy listen on port 80 inside the container
# root * /srv = serve files from /srv
# file_server = enable static website hosting

docker build -t portfolio-site .
# build = create a Docker image
# -t portfolio-site = tag/name the image as portfolio-site
# . = use the current folder as the build context

docker rm -f portfolio 2>/dev/null || true
# rm = remove container
# -f = force stop and remove if it already exists
# 2>/dev/null = hide error output if container does not exist
# || true = do not fail the script if that remove command errors

docker run -d --name portfolio -p 22222:80 --restart unless-stopped portfolio-site
# run = start a new container
# -d = run in background
# --name portfolio = name the container portfolio
# -p 22222:80 = map host port 22222 to container port 80
# --restart unless-stopped = restart automatically unless you manually stop it
# portfolio-site = image to run

docker ps
# ps = show running containers
