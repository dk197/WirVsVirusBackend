import mongoose from 'mongoose'

export const User = mongoose.model(
    "User",
    {
        vorname: String,
        nachname: String,
        email: String,
        password: String,
        guthaben: Number,
        picurl: String,
        chargeid: String,
    }
)