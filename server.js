const express = require('express'); 
const morgan = require('morgan')
const bodyParser = require('body-parser');
const accountSid = 'AC4480c9415996a5622bdcad84e418d535';
const authToken = '47ee0f912a3c3e9aafb672f600430289';
const client = require('twilio')(accountSid, authToken);


const app = express();

app.use(morgan('dev'))
app.use(express.static('dist'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    const data = {
        person:{

            firstName: 'Romer',
            lastName: 'Alfonso'
        }
    }
    res.render('index',data);
});

app.get('/contact', (req, res) => {
    res.render('contact');
  });
  
  
app.post('/thanks', (req, res) => {
    console.log('Here is some awesome stuff: ' + req.body.firstName);
    client.messages.create({
        to:'+16195815682',
        from:'+16195471346',
        body:'Finishing up my Portfolio'
    })
    .then((message) => {
        res.render('thanks', { contact: req.body });        
    })
    .catch(err => console.log(err.message));
});


  app.listen(8080, () => {
    console.log('listening at http://localhost:8080');
});
