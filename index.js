const express = require('express');
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>prova</h1>');
})

// app.use("/events" , eventsRouter);

app.listen(port, () => {
    console.log(`Server http://localhost:${port}`);
})

