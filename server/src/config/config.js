module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_NAME || 'tabtracker',
        password: process.env.DB_NAME || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.sqlite'
        }
    },
    Authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
