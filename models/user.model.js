const connection = require("../config/db.config");
const config = require("../config/db.config");

const User = function (user) {
    this.username = user.username;
    this.email = user.email;
    this.phone = user.phone;
    this.timeforcall = user.timeforcall;
}

User.getaAll = (result) => {
    connection.query('SELECT * FROM userTable', (err, res) => {
        if (err) {
            console.log("Error", err);
            return (err, null);
            return;
        }
        result(null, res)
    });
};

User.create = (newUser, result) => {
    connection.query('INSERT INTO userTable SET?', newUser, (err, res) => {
        if (err) {
            console.log("Error", err);
            return (err, null);
            return;
        }
        result(null, { id: res.insertId, ...newUser });
    });
};

User.delete = (id, result) => {
    connection.query('DELETE FROM userTable WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Error:', err);
            result(err, null);
            return;
        }
        if (res.affectedRows === 0) {
            result({ kind: 'not_found' }, null);
            return;
        }
        result(null, res);
    });
};

module.exports = User;