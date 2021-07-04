FROM node:latest
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
ENV PORT=4000
EXPOSE $PORT
CMD ["yarn", "start:dev"]