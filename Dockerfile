FROM alpine:latest
EXPOSE 3000
WORKDIR /the-myspace
COPY . .
COPY init.sh /bin
RUN rm /the-myspace/init.sh
RUN chmod +x /bin/init.sh
ENTRYPOINT "init.sh"
