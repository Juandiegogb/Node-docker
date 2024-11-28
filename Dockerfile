FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install pnpm -g
RUN pnpm i
COPY * .
EXPOSE 3000
CMD ["npm", "start"]
