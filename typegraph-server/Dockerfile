FROM node:alpine
WORKDIR /usr/server
COPY package.json .
RUN npm install\
    && npm install typescript -g\
    && npm install -D
COPY . .
EXPOSE 4000
CMD ["npm", "run", "start"]