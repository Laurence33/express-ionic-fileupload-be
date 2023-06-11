const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});


const app = express();


app.use(cors());
app.use(morgan('combined'));
app.use(express.json());    
app.use(express.urlencoded({extended : true}));


app.post('/upload', upload.single('photo'), (req, res) => {
    console.log(req.file);
});

app.post('/uploads', upload.array('photos[]'), (req,res) => {
    console.log(req.files);
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server listening at port:', port);
})
