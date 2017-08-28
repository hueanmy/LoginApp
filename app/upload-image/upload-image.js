let express = require('express');
let multer  = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

let upload = multer({ storage: storage }).single('avatar');

module.exports = function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            next(err);
        }
        if (req.file){
            res.json({
                status: 'success',
                link: `http://localhost:8000/image/${req.file.filename}`
            });
        }
        else {
            res.json({
                status: 'fail'
            });
        }

        // Everything went fine
    })
};

