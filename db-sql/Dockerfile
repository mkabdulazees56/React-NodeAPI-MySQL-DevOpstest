FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=testdb

ADD users.sql /docker-entrypoint-initdb.d/
RUN chmod +r /docker-entrypoint-initdb.d/users.sql

EXPOSE 3306
CMD ["mysqld"]
