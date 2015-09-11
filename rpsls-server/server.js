import Firebase from 'firebase';
import express from 'express';
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.json());
app.use(express.static('static'));

app.post('/register', (req, resp) => {
  let {name} = req.body,
    usersRef = new Firebase('https://rpslsonline.firebaseio.com/users/');
  console.log('Player registration -- name: ', name);
  usersRef.push({name}, (err) => {
    if(err) resp.sendStatus(500);
    else resp.sendStatus(200);
  });
});

app.post('/logoff', (req, resp) => {
  let {id} = req.body,
    usersRef = new Firebase(`https://rpslsonline.firebaseio.com/users/${id}`);
    console.log('Player log off -- id: ', id);
    usersRef.remove({name}, (err) => {
      if(err) resp.sendStatus(500);
      else resp.sendStatus(200);
    });
});

let server = app.listen(3000, () => {
  let {address, port} = server.address();
  console.log(`RPSLS server is running at ${address}:${port}`);
});
