FROM node:18-alpine3.21 as base 


FROM base as development

WORKDIR /app
COPY  backend/package.json ./
RUN npm install
COPY backend/. .
EXPOSE 3000
CMD [ "npm" , "run" , "dev"  ]

FROM base as production

WORKDIR /app
COPY  backend/package.json ./
RUN npm install  --only=production
COPY backend/. .
EXPOSE 3000
CMD [ "npm" , "start" ]