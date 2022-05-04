import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect("mongodb+srv://tungxm123:123qwe@cluster0.vtigv.mongodb.net/appData", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true, collection: 'users' })

const TokenSchema = new Schema({
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true }
}, { timestamps: true, collection: 'tokens' })

export const User = mongoose.model('users', UserSchema)
export const Token = mongoose.model('tokens', TokenSchema)