const express = require('express')
const app = express()
const port = 80
const path= require('path')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const {pdfMerger} = require('./script')
const fs = require('fs')
app.use('/static', express.static(path.join(__dirname, 'static')))
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"templates/index.html"))
})


function deleteFile (file) {
    fs.unlink(file, function (err) {
        if (err) {
            console.error(err.toString());
        } else {
            console.warn(file + ' deleted');
        }
    });
}

app.post('/merge', upload.array('file'), async (req, res) => {
    console.log(req.files)
    let d = await pdfMerger(req.files)
    res.redirect(`http://localhost/static/pdf/${d}.pdf`)
    for (let i = 0; i < req.files.length; i++){
        fs.rmSync(req.files[i].path)
    }
})


app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`)
})