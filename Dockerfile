FROM nginx
COPY /dist/pmmp-ng/ /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d
EXPOSE 80
