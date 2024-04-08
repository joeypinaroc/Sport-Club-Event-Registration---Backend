const responsesData = require('../models/responses');

const getAllResponses = (req, res) => {
    res.json(responsesData);
}
const addResponse = (req, res) => {
    const newResponse = {
        id: req.body.id,
        name: req.body.name,
        address: req.body.address,
        status: req.body.status
    }
    responsesData.push(newResponse);
    res.status(201).json(newResponse);
}
const deleteResponse = (req, res) => {
    let index = responsesData.findIndex(response => response.id == req.params.id)
    responsesData.splice(index, 1);
    res.json(responsesData);
}

module.exports = {getAllResponses, addResponse, deleteResponse};