const express = require("express")
const { get } = require("http")
const app = express()
const path = require("path")

app.listen(3030, () => {
    console.log("Servidor activo en el puerto 3030.")
})

app.get("/", (req, res) => {
    const HTML = path.resolve(__dirname, "./views/index.html")
    res.sendFile(HTML)
})

app.get("/babbage", (req, res) => {
    const HTML = path.resolve(__dirname, "./views/babbage.html")
    res.sendFile(HTML)
})

app.get("/berners-lee", (req, res) => {
    const HTML = path.resolve(__dirname, "./views/berners-lee.html")
    res.sendFile(HTML)
})

app.get("/clarke", (req, res) => {
    const HTML = path.resolve(__dirname, "./views/clarke.html")
    res.sendFile(HTML)
})

app.get("/hamilton", (req, res) => {
    const HTML = path.resolve(__dirname, "./views/hamilton.html")
    res.sendFile(HTML)
})

app.get("/hopper", (req, res) => {
    const HTML = path.resolve(__dirname, "./views/hopper.html")
    res.sendFile(HTML)
})

app.get("/lovelace", (req, res) => {
    const HTML = path.resolve(__dirname, "./views/lovelace.html")
    res.sendFile(HTML)
})

app.get("/turing", (req, res) => {
    const HTML = path.resolve(__dirname, "./views/turing.html")
    res.sendFile(HTML)
})

app.use(express.static("public"))

