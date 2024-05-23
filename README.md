# thewebsiteguy.uk
Main website for The Website Guy built on Winter CMS

## Installation

### Install composer components

```shell
composer install
```

### Install nodejs components (for development purposes only)

```shell
npm install
```

### Create database

```shell
touch storage/database.sqlite
```

### Create ENV file

```shell
php artisan winter:env
```

### Update variables (.env)
```shell
DB_CONNECTION="sqlite"
DB_DATABASE="storage/database.sqlite"
```

### Migrate database and create admin account
```shell
php artisan winter:up
```