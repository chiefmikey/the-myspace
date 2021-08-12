FROM node:latest
EXPOSE 8080
WORKDIR /the-myspace
COPY . .
COPY init.sh /bin
RUN rm /the-myspace/init.sh
RUN chown -R node:node /the-myspace
RUN chown node:node /bin/init.sh
RUN chmod +x /bin/init.sh
USER node
ENTRYPOINT "init.sh"
