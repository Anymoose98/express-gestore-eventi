const path = require("path");
const fs = require("fs");
const eventsdb = require("../db/events.json")
const classEvent = require("../models/event.js")


const index = (req, res) => {
    res.format({
        html: () => {
            let html = 'index'
            res.send(html)
        }
    })
}

const store = (req, res) => {

    let events = classEvent.readFile();

    // prendo i dati 
    const { id, title, description, date, maxSeats } = req.body;

    console.log(id)
    // richiamo la classe event
    const NuovoEvento = new classEvent(id, title, description, date, maxSeats)

    // aggiungo il file
    events.push(NuovoEvento)

    // Scrivo l'array nel file json
    classEvent.writeFile(events);

    res.send('Elemento salvato')
}

const update = (req, res) => {
    res.format({
        html: () => {
            let html = 'update'
            res.send(html)
        }
    })
}

module.exports = {
    index,
    store,
    update,
}