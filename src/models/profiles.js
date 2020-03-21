import mongoose from 'mongoose'

export const Profiles = mongoose.model(
    "Profiles",
    {
        nachname: String,
        strasse: String,
        hausnummer: String,
        adresszusatz: String,
        stadt: String,
        plz: String,
        land: String,
        long: Number,
        lat: Number,
    }
)