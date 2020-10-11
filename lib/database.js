const config = require("./../config.json");
var mysql = require('mysql2');

var con  = mysql.createPool({
  connectionLimit : config.database.connectionLimit,
  host            : config.database.host,
  user            : config.database.username,
  password        : config.database.password,
  database		  : config.database.database
});

// Check if table "osu_users" is existed or not.
// Create "osu_users" table if the table is not existed.

con.query("SELECT * FROM information_schema.tables WHERE table_schema = '"+config.database.database+"' AND table_name = 'osu_users' LIMIT 1;", function (err, result) {
    if (!result) throw err;
    if (result.length == 0) {
        con.query("CREATE TABLE osu_users (id INT AUTO_INCREMENT PRIMARY KEY, discord_id VARCHAR(20), player_name VARCHAR(100))", function (err, result) {
            if (err) throw err;
            console.log('\x1b[32m', `[Database] Created table "osu_users" for database ${config.database.name}.`)
        });
    }
})

module.exports = con;