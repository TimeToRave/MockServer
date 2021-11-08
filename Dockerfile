FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 
# for production use next command:
# RUN npm ci --only=production

# copy all files and directories from root directory to image
COPY . .

EXPOSE 3000

CMD ["npm", "server.js"]


