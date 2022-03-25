FROM node:lts-alpine as builder
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN yarn install --silent
COPY . .
# RUN chown -R node /app
# USER node
# CMD ["yarn", "start"]
RUN yarn build

FROM nginx
COPY ./nginx/default.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /var/www
ENTRYPOINT ["nginx", "-g", "daemon off;"]