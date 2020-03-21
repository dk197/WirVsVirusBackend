import mongoose from 'mongoose'

export const Profiles = mongoose.model(
    "Profiles",
    {   
        uid: String,
        pid: String,
        vorname: String,
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