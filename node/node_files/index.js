const express  = require('express')
const app = express()
const port = 3000
const config = {
	host: 'db',
	user: 'root',
	password: 'root',
	database: 'nodedb'
}
const mysql = require('mysql2')
const sql = `insert into people (name) values('Joe')`
connection = mysql.createConnection(config)
connection.query(sql)
connection.end()


app.get('/', (req, res) => {
	connection = mysql.createConnection(config)
	connection.query('SELECT name FROM people',
	  function (err, results, fields) {
        html = "<h1>Full Cycle Rocks!</h1>"
        html += "<ul>"
        for (var i in results) html += "<li>" + results[i].name + "</li>";
        html += "</ul>"
    	res.send(html)
	  }
	);	
	connection.end()
})


app.listen(port, () => {
	console.log('Rodando na porta ' + port)
})