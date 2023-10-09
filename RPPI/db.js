const Pool = require("pg").Pool;
const pool = new Pool({
host:'localhost',
user:'postgres',
password:'Inyange',
port: 5432,
database:'IMALI_Properties'
});
module.exports = pool;