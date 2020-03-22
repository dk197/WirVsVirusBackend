import mongoose from 'mongoose'

export const User = mongoose.model(
    "User",
    {
        vorname: String,
        nachname: String,
        email: String,
        password: { type: String, select: false },
        guthaben: Number,
        picurl: String,
        chargeid: String,
        credit: Number,
    }
)