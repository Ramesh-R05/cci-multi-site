MAINTAINER AreMedia Developer <bxmdeveloper@gmail.com>

ARG APP_KEY
ENV APP_KEY=${APP_KEY}

COPY ./src /app
WORKDIR /app
EXPOSE 3001

CMD ["npm", "start"]
