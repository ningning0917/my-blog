FROM node:10-alpine
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm install -g @vue/cli && \
    npm i && \
    npm run build:prod
#pm2在docker中使用命令为pm2-docker
CMD ["pm2-runtime", "start", "--json"]
