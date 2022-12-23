const router = require('express').Router();

const userRoutes = require('./userrouters');
const postRoutes = require('./postroutes');
const commentRoutes = require('./textarea');

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;