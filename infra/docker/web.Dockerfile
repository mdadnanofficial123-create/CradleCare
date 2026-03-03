FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY . .

RUN npm run build --workspace=apps/web

WORKDIR /app/apps/web

EXPOSE 3000

CMD ["npm", "start"]