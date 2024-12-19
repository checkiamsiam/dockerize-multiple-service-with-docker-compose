FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --force

COPY . .

EXPOSE 3000

# CMD ["node", "server.js"]

RUN ["chmod", "+x", "./entrypoint.sh"]

ENTRYPOINT [ "sh","./entrypoint.sh" ]