module.exports = {

    mysqlDbConfig: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    'facebookAuth' : {
        'clientID' : '128357184465952',
        'clientSecret' : '1bb6c53090117d00eebff9733823b005',
        'callbackURL'   : 'http://localhost:8000/auth/facebook/callback',
        'profileFields': ['id', 'displayName', 'photos', 'emails']
    }
};