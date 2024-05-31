const path = require("path");
const fs = require("fs");
const eventsdb = require("../db/events.json")
const classEvent = require("../models/event.js")

let events = classEvent.readFile();

const index = (req, res) => {
    const id = req.query

    if(Object.keys(id).length !== 0) {
        classEvent.getEventById(id, res)
    }
    else{
        classEvent.allEvents(events, res);
    }
}

const store = (req, res) => {

    // prendo i dati 
    const { id, title, description, date, maxSeats } = req.body;

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