//help from module 18, activity 26 (/api/userRoutes)
const router = require('express').Router();
//importing controller functions from the user_controller file
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user_controller');

// /api/users
// get route to get all users, post route to create a user
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:id
//get route ot get users by ID, then calls update user and then to delete a user
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
//calls to add a friend to a users list, deletes a friend from users list
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;