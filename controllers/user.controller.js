const User = require('../models/user.model');

exports.renderForm = (req, res) => {
    res.render('index', { user: [] })
}

exports.getAll = (req, res) => {
    User.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "some error occurred while retrieving users"
            });
        } else {
            res.send(data)
        };
    });
};

exports.create = (req, res) => {
    if (!res.body) {
        res.satus(400).sent({
            message: 'Content cannot be empty!'
        });
        return;
    };
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        timeForCall: req.body.timeForCall
    });

    User.create(newUser, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while creating the user.'
            });
        } else {
            res.send(data);
        }
    });
};

exports.delete = (req, res) => {
    User.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found user with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: 'Could not delete user with id ' + req.params.id
                });
            }
        } else {
            res.send({ message: `User was deleted successfully!` });
        }
    });
};