const createError = require('http-errors');
const mongoose = require('mongoose');

const findWithID = async (Model, id, options = {}) => {
    try {
        const item = await Model.findById(id, options);
        if(!item) {
            throw createError(404, `${Model.modelName} not found`);
        }
        return item;
    } catch (error) {
        if(error instanceof mongoose.Error){
            throw createError(400, `Invalid ${Model.modelName} ID`);
        }
        throw error;
    }
};

module.exports = { findWithID };