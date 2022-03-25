FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app/server
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN yarn install --silent && mv node_modules ../
COPY . .
EXPOSE 5000
RUN chown -R node /usr/src/app/server
USER node
CMD ["yarn", "start"]
