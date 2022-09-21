/*const lista = ['douglas',
'enzo',
'romarios']

console.log(lista);
lista.push('enzo');
console.log(lista);*/
/*for(const elemente of lista){
    console.log(element);
}*/

//lista.forEach(element => {console.log(element)});

/*const enzohentai = (element) => {
    console.log(element);
}
lista.forEach(enzohentai);*/

/*const douglas = require("express")
const app = douglas()
const port = 4000

app.get('/', (req, res)=>{
     res.send("<a href='https://www.youtube.com/watch?v=Hp7Pvppmgqs'><input type='button' value='não clique aqui '></a><a href='https://www.youtube.com/watch?v=QJJYpsA5tv8'><input type='button' value='clique aqui '></a><br>⠄⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄<br>⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄<br>⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄<br>⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄<br>⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰<br>⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤<br>⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗<br>⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄<br>⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄<br>⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄<br>⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄<br>⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄<br>⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄<br>⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴<br>⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿"); 
});

app.listen(port, ()=>{
    console.log(`exemple app listening na porta ${port}`)
})*/

const danilo = require("express")
const app = danilo()
const bodyParser = require ('body-parser')
const port = 3024
const mysql = require('mysql')
const md5 =require('md5')
const jwt = require('jsonwebtoken');




app.get('/user', (req, res)=>{
    const connection = require('./conection').connect();

    connection.connect((error) => {
        if (error){
            res.json({error : true}); 
            console.error(error);
            return;
        }
    })

    connection.query('SELECT * from user', function (err, result) {
        if (err) throw err
        res.send(result)
      });
});


app.post('/user', (req, res)=>{
    const connection = require('./conection').connect();

    connection.connect((error) => {
        if (error){
            res.json({error : true}); 
            console.error(error);
            return;
        }
    })

    connection.query("INSERT INTO User (iduser, name, cpf, status, senha) VALUES ("+req.body.iduser+",'"+req.body.name+"','"+req.body.cpf+"',"+req.body.status+",'"+md5(req.body.senha)+"')", function (err, result) {
        if (err) throw err
        res.send(result)
      });
    
});

const execSQL = (sql) => {
    
    
    return new Promise((resolve, reject) => {
        const connection = require('./conection').connect();
    
        connection.connect((error) => {
            if (error){
                reject(error);
                return;
            }
                   
            connection.query(sql, (error, result) => {
                if (error){
                    reject(error);
                    return;
                }
                
                connection.destroy();
                resolve(result);
            })
        })
    })
}


app.post('/login', async (req, res) => {

    const connection = require('./conection').connect();

    connection.connect((error) => {
        if (error){
            res.json({error : true}); 
            console.error(error);
            return;
        }
    })

    const name  = req.body.name;
    const senha = md5(req.body.senha);
  
    const sql    = `SELECT * FROM USER WHERE USER.NAME = '${name}' AND SENHA = '${senha}' AND STATUS = 1 `
    const result =  await execSQL(sql);
  
    if (result == undefined || result.length == 0){
      res.status(500).json({message: 'Login inválido!'});
      return;
    }
  
    const id = result[0].iduser;
      const token = jwt.sign({ id }, '1234', {
          expiresIn: 300 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    });

app.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
});


app.listen(port, ()=>{
    console.log(`exemple app listening na porta ${port}`)
});



