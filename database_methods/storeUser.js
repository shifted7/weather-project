const client = require('../libs/client');


// replace the username and password here, they will have to be sent over the wire unencrypted to store
let storeUser = 'INSERT INTO users (user_name, password) VALUES(<username>, crypt(<password>, gen_salt("bf")));';


// replace the username and password in <> and this
let getUser = 'SELECT id FROM users WEHRE username=<username> and password = crypt(<password>, password);';



