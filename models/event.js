const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../db/events.json');

// Per leggere il file json
function readFile() {
    let data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

// Per scrivere sul file Json
function writeFile(data) {
    fs.writeFileSync(filePath, JSON.stringify(data));
}

class event {
    constructor(id, title, description, date, maxSeats) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }
    // Metodo statico per leggere il file JSON
    static readFile() {
        let data = fs.readFileSync(filePath);
        return JSON.parse(data);
    }

    // Metodo statico per scrivere sul file JSON
    static writeFile(data) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }

    
    // Metodo statico per ottenere un evento tramite ID
    static getEventById(id, res) {
        const events = this.readFile();

        const event = events.find(event => event.id === id.id);
        console.log('Evento trovato:', event);

        if (!event) {
            res.status(404).send('<h1>Evento non trovato</h1>');
        } else {
            res.send(`<h1>${event.title}</h1><p>${event.description}</p><div>${event.date}</div>`);
        }
    }

    // Metodo statico per vedere tutti gli eventi
    static allEvents(events, res) {
        let html = '<ul>';

        events.forEach(e => {
            html += `<li>
                <div>
                    <h1>${e.title}</h1>
                    <p>${e.description}</p>
                    <div>${e.date}</div>
                </div>
            </li>`;
        });
        html += '</ul>';

        res.send(html);
    }

}

module.exports = event