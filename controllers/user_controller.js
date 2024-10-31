//getAllUser, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend

const { Thought, User } = require("../models");

module.exports = {
    async getAllUsers (req, res) {
        try {
        //getting all users
          const users = await User.find();
          res.json(users);
        } catch (err) {
          // Handles any errors that happen when trying to get all the users
          console.error(err);
          res.status(500).json(err);
        }
      },

    async getUserById (req, res) {
        try {
            // finds a user by ID and populates both their thoughts and friends
            const user = await User.findById(req.params.userId).populate('thoughts').populate('friends');
            if (!user) {
              return res.status(404).json({ message: 'No user with that ID' });
            }
            res.json(user);
          } catch (err) {
            res.status(500).json(err);
          }
    },

    async createUser (req, res) {
        try {
            // creates a new user
            const newUser = await User.create(req.body);
            res.status(201).json(newUser);
          } catch (err) {
            // console logs any errors during the process
            console.error(err);
            res.status(400).json(err)
        }
    },
    
    async updateUser (req, res) {
        try {
            //updates the user by finding the id and updating
            const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
            if (!updatedUser) {
              return res.status(404).json({ message: 'No user with that ID' });
            }
            res.json(updatedUser);
          } catch (err) {
            res.status(400).json(err);
          }
    },

    async deleteUser (req, res) {
        try {
            //deletes the user by id
            const deletedUser = await User.findByIdAndDelete(req.params.userId);
            if (!deletedUser) {
              return res.status(404).json({ message: 'No user with that id' });
            }
            res.json({ message: 'User was successfully deleted' });
          } catch (err) {
            res.status(500).json(err)
          }
    },

    async addFriend (req, res) {
        try {
            //finds the user by id, adds the friendID the the user
            const user = await User.findByIdAndUpdate(
              req.params.userId,
              { $addToSet: { friends: req.params.friendId } },
              { new: true } //option in mongoose: has an updated document returned rather than the original document before changes
            );
            if (!user) {
              return res.status(404).json({ message: 'No user with that id' });
            }
            //sends the updated user
            res.json(user);
          } catch (err) {
            res.status(500).json(err)
          }
    },

    async removeFriend (req, res) {
        try {
            //finds user by id and removes the friend id from user's array
            const user = await User.findByIdAndUpdate(
              req.params.userId,
              { $pull: { friends: req.params.friendId } },
              { new: true } //option in mongoose: has an updated document returned rather than the original document before changes
            );
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
            //sedns updated user with the friendid removed
            res.json(user);
          } catch (err) {
            res.status(500).json(err)
          }
    },

}