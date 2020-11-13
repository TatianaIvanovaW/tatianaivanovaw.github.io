let express = require('express');
let app = express();
let port = 3000;
var path = require('path');

function onListen () {
    console.log(`listening port ${port}`);
}

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join('/Users/tatianaivanova/tatianaivanovaw.github.io/index.html'));
});


app.listen(port, onListen);

