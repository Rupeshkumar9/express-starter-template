import "dotenv/config"

const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT
const IsProducion = process.env.NODE_ENV === "production"
const cookie_secret = process.env.cookie_secret


export default {
    NODE_ENV,
    PORT,
    IsProducion,
    cookie_secret
}


