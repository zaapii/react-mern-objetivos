const asyncHandler = require('express-async-handler')
const { update } = require('../models/goalModel')
const Goal  = require('../models/goalModel')
const User  = require('../models/userModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {

    const goals = await Goal.find({user: req.user.id})

    res.status(200).json(goals)
})

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Agregar un texto')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(goal)
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Objetivo no encontrado')
    }

    //chequear el usuario
    if(!req.user){
        res.status(401)
        throw new Error('Usuario no encontrado')
    }

    //chequear que cada usuario pueda borrar solo sus objetivos
    if(goal.user.toString() !== req.user.id)
    {
        res.status(401)
        throw new Error('No autorizado')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedGoal)
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Objetivo no encontrado')
    }

    //chequear el usuario
    if(!req.user){
        res.status(401)
        throw new Error('Usuario no encontrado')
    }

    //chequear que cada usuario pueda borrar solo sus objetivos
    if(goal.user.toString() !== req.user.id)
    {
        res.status(401)
        throw new Error('No autorizado')
    }

    await goal.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {getGoals, updateGoal, deleteGoal, setGoal}