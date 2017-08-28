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
    },
    'googleAuth' : {
        'clientID': '96870945709-56lk906511ia6cqvpo41gph1i8r8ghod.apps.googleusercontent.com',
        'clientSecret': 'Izh94jU92SyMTRkYQViiUDMW',
        'callbackURL': "http://localhost:8000/auth/google/callback"
    },
    'twitterAuth' : {
        'consumerKey': 'G5wZo138fwqGNsE5McN8fHKDa',
        'consumerSecret': 'OSlh8maxji7wAjnMogXpnnT5FTbt9DroosPJCvrBzKNHMVMS47',
        'callbackURL': 'http://localhost:8000/auth/twitter/callback'
    }
};