FROM php:8.2-fpm-alpine

# Penser à se positionner sur /var/www/html qui est le dossier utilisé par notre serveur web
WORKDIR /var/www/html

# docker-php-ext-install est l'outil qui permet d'installer les dépendances php
RUN docker-php-ext-install pdo pdo_mysql