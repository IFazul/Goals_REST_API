const asyncHandler = require("express-async-handler");

exports.getGoal =  asyncHandler(async (req,res) => {
    res.status(200).json({
        message : "get goals"
    });
})

exports.postGoal = asyncHandler(async (req,res) => {

    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field"); 
    }

    res.status(201).json({
        message : "set goals"
    });
})

exports.updateGoal = asyncHandler(async (req,res) => {
    res.status(200).json({
        message : `update goal ${req.params.id}`
    });
})

exports.deleteGoal = asyncHandler(async (req,res) => {
    res.status(200).json({
        message : `delete goal ${req.params.id}`
    });
})