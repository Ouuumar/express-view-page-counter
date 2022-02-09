FROM node:13.12.0-alpine

# install app dependencies
COPY . .

RUN npm install

EXPOSE 3000


# start app
CMD ["npm", "start"]