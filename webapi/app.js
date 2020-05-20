const express = require('express')
const session = require('express-session')
const mongodbStore = require('connect-mongodb-session')(session)
const app = express()


const store = new mongodbStore(
    {
        uri:'mongodb+srv://emma:bytmig123@cluster0-2pqwy.mongodb.net/webapidb?retryWrites=true&w=majority',
        databaseName:'ecommerce',
        collection: 'sessions',
        secret: 'mongodbSecretKey',
        autoRemove: 'interval',
        autoRemoveInterval: 10,
        ttl: 1000 * 60 * 60 * 24 * 7
    }
)

app.use(session({
    secret: 'sessionSecretKey',
    resave: true,
    saveUninitialized: false,
    store: store,
    cookie:{
        httpOnly: true,
        sameSite: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7,

    }
}))

app.get('/', (req,res) => {
    const token = jwt.sign()
    req.session.userId = 1
    res.status(200).json(req.session)
})
app.listen(9999, () => { console.log('http://localhost:9999');
})
