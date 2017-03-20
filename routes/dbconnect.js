/**
 * Created by consultadd on 9/2/17.
 */

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'fokatdb'
});


connection.connect();

// connection.query()
module.exports = connection;


// var employee = { first_name: 'ishaaa', last_name: 'buk' ,mobile:55555};
// connection.query('INSERT INTO customers SET ?', employee, function(err,res){
//     if(err) throw err;
//
//     console.log('Last insert ID:', res.insertId);
// });
//     if (!err)
//         console.log('The solution is: ', rows);
//     else
//         console.log('Error while performing Query.');
// });
// connection.end();