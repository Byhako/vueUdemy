# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Comands

adonis make:model Cinema --migration
adonis make:model Rom --migration
adonis make:model Movie --migration
adonis make:model MovieShowing --migration

==========================================
Instalamos mariaDb

brew install mariadb
mysql.server start
mkdir /usr/local/etc/my.cnf.d
mysql.server start

CREATE USER 'ruben'@'localhost' IDENTIFIED BY '123';
CREATE DATABASE IF NOT EXISTS cinema;
GRANT ALL PRIVILEGES ON cinema . * TO 'ruben'@'localhost';

Configurar usuario y password en el archivo .env de la aplicacion adonis.

==========================================

adonis migration:refresh

https://github.com/ME-Studio/mysql-workbench-export-adonisjs-migrations
