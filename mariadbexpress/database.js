import mariadb from 'mariadb';
import dotenv from 'dotenv'
dotenv.config()

const pool = mariadb.createPool({
    host:process.env.MARIADB_HOST,
    user:process.env.MARIADB_USER,
    password:process.env.MARIADB_PASSWORD,
    database:process.env.MARIADB_DATABASE
})

export async function getnotes(){
    try {
        const rows = await pool.query('select * from notes')
        return rows
    } catch (error) {
        console.log(error)
    }
}


export async function getnote(id){
    try {
        const [rows] = await pool.query(`
        select * 
        from notes
        where id=?
        `, [id])
        return rows
    } catch (error) {
        console.log(error)
    }
}


export async function createNote(title,contents){
    try {
        const result = await pool.query(`
        insert into notes (title, contents)
        values (?, ?)
        `, [title,contents])

        const id = result.insertId
        return getnote(id)

        return result
    } catch (error) {
        console.log(error)
    }
}



