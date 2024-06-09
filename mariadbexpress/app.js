import express from 'express'
import {getnote,getnotes,createNote} from './database.js'

const app = express()
app.use(express.json())


app.get('/notes', async (req,res)=>{
    const notes = await getnotes()
    res.send(notes)
    res.json(notes)
})

app.get('/notes/:id', async (req,res)=>{
    const id = req.params.id
    const note = await getnote(id)

    res.send(note)
})
app.post('/notes',async (req,res)=>{
    const {title,contents} = req.body
    const note = await createNote(title,contents)
    res.status(201).send(note)
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('something broke down')
})


app.listen(8080,()=>{
    console.log('application is runninig on 8080')
})