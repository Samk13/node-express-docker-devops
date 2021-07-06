FROM node:latest
WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then yarn; \
    else yarn --only=production; \
    fi
COPY . .
ENV PORT=4000
EXPOSE $PORT
CMD ["yarn", "start:dev"]