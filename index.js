 const bodyParser = require('body-parser')
 const express = require('express')
 const path = require('path')
 const port = 3000

 const app = express()
 
 //method declaration
const loginRequestHandler = (req, res) => {
    if(req.body.password != req.body.confirm_password){
        res.send('Password incorrect')
    }
    // let body = ''
    // req.on('data', chunk => {
    //     body += chunk
    // })
    // req.on('end', () => {
    //     console.log(body)
    // })
    else{
        console.log(req.body)
        res.sendFile('Done')
    }
}

const signupRequestHandler = (req, res) => {
    res.send('Welcome enjoy ur stay')   
}

const homepageRequestHandler = (req, res) => {
    res.send('Logged In')
}

//middleware defination
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))

//route
app.post('/login', loginRequestHandler)
app.get('/signup', signupRequestHandler)
app.get('/', homepageRequestHandler)

 app.listen(port, () => console.log('server ready'))

//GET - get resource from the server
//POST - create resources on the server
//UPDATE - update resource on the server
//PATCH - update part of resource on the server
//DELETE - delete resource from the server
//OPTION - determin wherther a followup request is allowed