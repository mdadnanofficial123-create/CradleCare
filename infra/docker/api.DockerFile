FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY . .

RUN npm run build --workspace=apps/api

WORKDIR /app/apps/api

EXPOSE 4000

CMD ["node", "dist/main.js"]