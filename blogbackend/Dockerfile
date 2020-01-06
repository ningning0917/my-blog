FROM node:10.16.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app
RUN npm install
#暴露端口给宿主机
EXPOSE 7001
#容器启动时执行的命令，启动应用
CMD npx egg-scripts start

#WORKDIR /usr/src/app
#ADD . /usr/src/app
# RUN npm config set registry https://registry.npm.taobao.org/ && \
#     npm i
#RUN npm i
#EXPOSE 3000
#pm2在docker中使用命令为pm2-docker
# CMD ["pm2-runtime", "start", "--json", "process.json"]
#CMD ["npm", "start"]


#工作目录切换到应用目录

##构建应用镜像
#docker build -t node/egg-study .
##NODE_ENV通过启动容器时进行参数传递
#docker run --name egg-study -p 9988:7001 -d node/egg-study
