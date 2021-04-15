# ECS Cluster: 5 REPOS | 5 APPS | 5 SERVICES
# ELLE | AWWFOOD | FOODNZ | Gourmet Traveller (gt) | Harpers Bazaar (hb)
#

FROM 317367993082.dkr.ecr.ap-southeast-2.amazonaws.com/node-base-lite-aws:10.19.0
MAINTAINER AreMedia arm.builduser@gmail.com

COPY ./src /app
WORKDIR /app
EXPOSE 3001

CMD ["npm", "start"]

#
