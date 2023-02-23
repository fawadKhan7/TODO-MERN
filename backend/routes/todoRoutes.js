const express = require("express");
const mongoose = require("mongoose");
const Todo = require("../models/Todo");
const router = express.Router()

router.get("/", async (req, res, next) => {
    const todos = await Todo.find()
    res.status(200).json({
        todos: todos,
        success: true
    })
})

router.get("/:id", async (req, res, next) => {
    const todo = await Todo.findById(req.params.id)
    res.status(200).json({
        todo: todo,
        success: true
    })
})

router.post("/", async (req, res, next) => {
    const todo = await Todo.create(req.body)
    res.status(201).json({
        todo: todo,
        success: true
    })
})

router.put("/:id", async (req, res, next) => {
    let todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({
        todo: todo,
        success: true
    })
})

router.delete("/:id", async (req, res, next) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.status(200).json({
        todo: {},
        success: true
    })
})
module.exports = router

