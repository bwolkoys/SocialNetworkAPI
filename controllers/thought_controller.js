//getAllThought, getThoughtById, createThought, updateThought, deleteThought, addReaction, removeReaction

const { Thought, User } = require("../models");

module.exports = {
    async getAllThought (req, res) {
        try {
            //retrieves all thoughts
            const thought = await Thought.find();
            //sends the thoughts retrieved as a json response
            res.status(200).json(thought); 
          } catch (err) {
            res.json(err);
          }
    },

    async getThoughtById (req, res) {
        try {
            //finds thr thought by id
            const thought = await Thought.findById(req.params.thoughtId);
            if (!thought) {
              return res.status(404).json({ message: 'No thought with that id' });
            }
            res.json(thought);
          } catch (err) {
            res.status(500).json(err);
          }
    },

    async createThought (req, res) {
        try {
            //creates a new thought with the data provided
            const newThought = await Thought.create(req.body);
            await User.findByIdAndUpdate(req.params.userId, {$push: {thoughts: newThought._id}})
            //sends the thought created as a json response
            res.status(201).json(newThought);
          } catch (err) {
            res.json(err);
          }
    },

    async updateThought (req, res) {
        try {
            //finds the thought id and updates it
            const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
            if (!updatedThought) {
              return res.status(404).json({ message: 'Thought not found' });
            }
            //sends the updated thought as a json response
            res.json(updatedThought); 
          } catch (err) {
            res.status(400).json(err);
          }
    },

    async deleteThought (req, res) {
        try {
            //finds thought by id and deletes it
            const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
            if (!deletedThought) {
              return res.status(404).json({ message: 'thought with id not found' });
            }
            res.json({ message: 'Thought was successfully deleted' }); 
          } catch (err) {
            res.status(500).json(err);
          }
    },

    async addReaction (req, res) {
        try {
            //finds the thought by id, adds a reaction to the thought
            const thought = await Thought.findByIdAndUpdate(
              req.params.thoughtId,
              { $addToSet: { reactions: req.body } },
              { new: true } //option in mongoose: has an updated document returned rather than the original document before changes
            );
            if (!thought) {
              return res.status(404).json({ message: 'Thought id not found' });
            }
            res.json(thought);
          } catch (err) {
            res.status(500).json(err);
          }
    },

    async removeReaction (req, res) {
        try {
            //finds thought by id and removes the reaction from the thought
            const thought = await Thought.findByIdAndUpdate(
              req.params.thoughtId,
              { $pull: { reactions: { reactionId: req.params.reactionId } } },
              { new: true } //option in mongoose: has an updated document returned rather than the original document before changes
            );
            if (!thought) {
              return res.status(404).json({ message: 'Thought id not found' }); 
            }
            res.json(thought); 
          } catch (err) {
            res.status(500).json(err);
          }
        },
    }