const { Router } = require("express");
const router = Router();

//get post put delete

router.get("/atendimentos", (req, res) => {
    res.send("Chegou aqui, estamos listando todos os atendimentos...");
});

router.post("/atendimentos", (req, res) => {
    res.send("Chegou aqui, estamos criando um novo")
});