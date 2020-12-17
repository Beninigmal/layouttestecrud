//imports
const express = require('express')
const expressLayouts =require('express-ejs-layouts')

const app = express()
const port = 3001

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))

//set template engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')

app.set('views', './views')
app.set('view engine', 'ejs')

//navigation
app.get('', (req, res) => {
    res.render('index') 
})
app.get('/alunos', (req, res) => {
    res.render('alunos') 
})
app.get('/campus', (req, res) => {
    res.render('campus') 
})
app.get('/cursos', (req, res) => {
    res.render('cursos') 
})
app.get('/disciplinas', (req, res) => {
    res.render('disciplinas') 
})
app.get('/laboratorio', (req, res) => {
    res.render('laboratorio') 
})
app.get('/professores', (req, res) => {
    res.render('professores') 
})



//listen on port 3001
app.listen(port, () => console.info(`Listening on port ${port}`))