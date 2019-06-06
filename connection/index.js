const mysql = require('mysql')

const connection = mysql.createConnection({
    host     :'localhost',
    user     :'root',
    password :'P@5$w0rd',
    database :'rimukahfeh',
    port     :3306
})

module.exports = connection