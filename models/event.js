const fs = require('fs');
const patch = require('path');
const filePath = path.join(__dirname,'../db/events.json');

// Per leggere il file json
function readFile (){
    let data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

// Per scrivere sul file Json
function writeFile(data){
    fs.writeFileSync(filePath, JSON.stringify(data));
}

class event {
    constructor(id, title , description, date, maxSeats){
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
    }