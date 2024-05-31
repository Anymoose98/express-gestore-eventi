const path = require("path");
const fs = require("fs");

const index = (req, res) => {
    res.format({
        html: () => {
            let html = 'index'
            res.send(html)
        }
    })
}

const store = (req, res) => {
    res.format({
        html: () => {
            let html = 'store'
            res.send(html)
        }
    })
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