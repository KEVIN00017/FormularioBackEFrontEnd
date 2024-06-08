import mysql from "mysql2"
import {} from 'dotenv/config'

const Conn=mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})
console.log('HOST:', process.env.HOST); // Deve exibir "localhost"
console.log('USER:', process.env.USER); // Deve exibir "root"
console.log('PASSWORD:', process.env.PASSWORD); // Deve exibir "ke230107"
console.log('DATABASE:', process.env.DATABASE); // Deve exibir "cru"
Conn.connect()
export default Conn