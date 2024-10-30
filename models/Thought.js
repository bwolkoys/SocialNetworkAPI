//module 18, student activity 28, models/assignment
const { Schema, Types, model } = require('mongoose');
const data = require("../utils/data");

const ThoughtSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => data(timestamp),
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionSchema]
},

    {
        toJSON: {
            virtuals: true, //allows properties that arent stored in the database to be included
            getters: true //allows you to define how a property should be returned when calling for it
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});



const ReactionSchema = new Schema(
    {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => data(timestamp),
    }
},
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
    }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;