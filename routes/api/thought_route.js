const router = require("express").Router();
//importing controller functions from the thought_controller file
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought_controller");

// /api/thoughts
//route gets all thoughts and sends request to create a new thought
router.route("/").get(getAllThought).post(createThought);

// /api/thoughts/:id
// gets thoughts by id, updates a thought and deletes a thought
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// this adds a reaction to a thought through a thoughtId
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
// deletes a reaction based on reactionId from a thought
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;