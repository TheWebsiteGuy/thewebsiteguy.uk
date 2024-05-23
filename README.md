# thewebsiteguy.uk
Main website for The Website Guy built on Winter CMS

# Installation

** Install composer components **
`composer install`

** Install nodejs components (for development only)
`npm install`

# Create database
`touch storage/database.sqlite`

# Create ENV file
`php artisan winter:env`

# Update variables (.env)
```
DB_CONNECTION="sqlite"
DB_DATABASE="storage/database.sqlite"
```

# Migrate database and create admin account
`php artisan winter:up`