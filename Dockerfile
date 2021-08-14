FROM alpine:latest
EXPOSE 8080
WORKDIR /the-myspace
COPY . .
COPY init.sh /bin
RUN rm /the-myspace/init.sh
RUN chmod +x /bin/init.sh
ENTRYPOINT "init.sh"
