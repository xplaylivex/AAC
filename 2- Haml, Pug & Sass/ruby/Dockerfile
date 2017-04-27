FROM ruby:2.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

VOLUME /var/www/app
EXPOSE 3000

WORKDIR /var/www/app

RUN gem install haml
CMD [ "tail", "-f", "/dev/null" ]