var express = require("express"),
    router = express.Router();
var Campground = require("../models/campground"),
    Comment = require("../models/comment");
var middleware = require("../middleware");
// ====================
// COMMENTS ROUTES
// ====================

router.get("/campgrounds/:id/comments/new", middleware.isLoggedIn, function (req, res) {
    // find campground by id
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", {
                campground: campground
            });
        }
    });
});

router.post("/campgrounds/:id/comments", middleware.isLoggedIn, function (req, res) {
    //lookup campground using ID
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {

            Comment.create(req.body.comment, function (err, comment) {
                if (err) {
                    req.flash("error", "Something Went Wrong");
                    console.log(err);
                } else {
                    // add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    // save comment
                    campground.comments.push(comment);
                    campground.save();
                    req.flash("success", "Succesfully added comment");
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
    });

});
// Edit routes
router.get("/campgrounds/:id/comments/:comment_id/edit", middleware.checkCommentOwnership, function (req, res) {
    Comment.findById(req.params.comment_id, function (err, foundComment) {
        if (err) {
            res.redirect("back");
        }
        res.render("comments/edit", {
            campground_id: req.params.id,
            comment: foundComment
        });
    });

});

// update comment
router.put("/campgrounds/:id/comments/:comment_id", middleware.checkCommentOwnership, function (req, res) {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function (err, updatedComment) {
        if (err) {
            res.redirect("back");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// Comment Destroy Route

router.delete("/campgrounds/:id/comments/:comment_id", middleware.checkCommentOwnership, function (req, res) {
    // find by d and remove 
    Comment.findByIdAndRemove(req.params.comment_id, function (err) {
        if (err) {
            res.redirect("back");
        } else {
            req.flash("Success", "Comment Deleted");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});





module.exports = router;