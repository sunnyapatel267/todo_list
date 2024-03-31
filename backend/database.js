import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getList(){
    const [rows] = await pool.query('SELECT * FROM list')
    return rows
}

export async function getTask(id){
    const [rows] = await pool.query(`SELECT * 
    FROM list 
    WHERE id = ?
    `, [id])
    return rows
}

export async function createTask(content){
    const [result] = await pool.query(`INSERT INTO list (content)
    VALUES (?)
    `, [content])
    const id = result.insertId
    return getTask(id)

}

export async function removeTask(id){
    const [result] = await pool.query(`DELETE FROM list WHERE id = ?
    `, [id])
    return result
}


