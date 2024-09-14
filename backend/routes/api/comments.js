/**
 * Express router providing comment related routes.
 * @module routes/api/comments
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * Route serving a list of comments.
 * @name get/comments
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {JSON} - A JSON array of comments
 */
router.get("/", (req, res) => {
    Comment.find()
        .then((comments) => {
            res.json(comments);
        })
        .catch((err) => console.log(err));
});

module.exports = router;
