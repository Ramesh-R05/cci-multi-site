# ECS Cluster: 5 APPS | 5 REPOS | 5 TASKS | 5 SERVICES
FROM 317367993082.dkr.ecr.ap-southeast-2.amazonaws.com/node-base-lite-aws:10.19.0
MAINTAINER AreMedia arm.builduser@gmail.com

ARG APP_KEY
ENV APP_KEY=${APP_KEY}

COPY ./src /app
WORKDIR /app
EXPOSE 3001

CMD ["npm", "start"]
