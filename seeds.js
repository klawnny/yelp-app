var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [{
        name: "money jar",
        image: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__340.jpg",
        description: "Ea pro ludus conceptam definitiones. Eu lorem docendi corpora eam, legere feugiat percipit in his, mea ubique electram aliquando eu. Eos cu everti argumentum. Errem iriure mei et. No nec possim reprimique, his eros illum graeci an, ea omnes timeam per. Ius iusto consul vivendum cu, ius eius semper eripuit eu, ad causae adipisci mea.  Mei impetus praesent et, unum fabellas aliquando eam te. Est at inani antiopam, ex repudiandae neglegentur quo, oblique oporteat comprehensam nec no. Eam suas nominavi neglegentur ad, quo dolore liberavisse et, sea duis graeco te. Cu mutat denique vulputate pro, eum cu saperet persecuti, te minimum fierent mei. Eu quod offendit est, ex iisque sanctus ius. Eum impetus aeterno voluptatibus in, duo ipsum quodsi eligendi ea."
    },

    {
        name: "horse",
        image: "https://cdn.pixabay.com/photo/2013/10/09/02/26/sky-192983__340.jpg",
        description: "Ea pro ludus conceptam definitiones. Eu lorem docendi corpora eam, legere feugiat percipit in his, mea ubique electram aliquando eu. Eos cu everti argumentum. Errem iriure mei et. No nec possim reprimique, his eros illum graeci an, ea omnes timeam per. Ius iusto consul vivendum cu, ius eius semper eripuit eu, ad causae adipisci mea.  Mei impetus praesent et, unum fabellas aliquando eam te. Est at inani antiopam, ex repudiandae neglegentur quo, oblique oporteat comprehensam nec no. Eam suas nominavi neglegentur ad, quo dolore liberavisse et, sea duis graeco te. Cu mutat denique vulputate pro, eum cu saperet persecuti, te minimum fierent mei. Eu quod offendit est, ex iisque sanctus ius. Eum impetus aeterno voluptatibus in, duo ipsum quodsi eligendi ea."
    },

    {
        name: "statue",
        image: "https://cdn.pixabay.com/photo/2014/10/28/22/42/badenixe-507342__340.jpg",
        description: "Ea pro ludus conceptam definitiones. Eu lorem docendi corpora eam, legere feugiat percipit in his, mea ubique electram aliquando eu. Eos cu everti argumentum. Errem iriure mei et. No nec possim reprimique, his eros illum graeci an, ea omnes timeam per. Ius iusto consul vivendum cu, ius eius semper eripuit eu, ad causae adipisci mea.  Mei impetus praesent et, unum fabellas aliquando eam te. Est at inani antiopam, ex repudiandae neglegentur quo, oblique oporteat comprehensam nec no. Eam suas nominavi neglegentur ad, quo dolore liberavisse et, sea duis graeco te. Cu mutat denique vulputate pro, eum cu saperet persecuti, te minimum fierent mei. Eu quod offendit est, ex iisque sanctus ius. Eum impetus aeterno voluptatibus in, duo ipsum quodsi eligendi ea."
    }

];

function seedDB() {
    // remove all campgrounds
    Campground.deleteMany({}, function (err) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("remove a campground");
    //         // add a few campgrounds
    //         data.forEach(function (seed) {
    //             Campground.create(seed, function (err, campground) {
    //                 if (err) {
    //                     console.log(err);
    //                 } else {
    //                     console.log("added a campground");
    //                     Comment.create({
    //                             text: "This place is great",
    //                             author: "Klawnny"

    //                         },
    //                         function (err, comment) {
    //                             if (err) {
    //                                 console.log(err);
    //                             } else {
    //                                 campground.comments.push(comment);
    //                                 campground.save();
    //                                 console.log("comment created");
    //                             }
    //                         }
    //                     );
    //                 }

    //             });
    //         });
    //     }
    });


    // add a few comments
}
module.exports = seedDB;