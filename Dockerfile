FROM node:alpine


WORKDIR /app
COPY * /app/

RUN pnpm i
RUN pnpm run start