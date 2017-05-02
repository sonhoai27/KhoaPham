let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'));
let pg = require('pg')
let config ={
    user: 'postgres',
    database: 'NODE1102',
    password: 'sontungmtp27',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 1000,
}
var pool = new pg.Pool(config)

//client cho ph1p thu75c hien65 nhieu query, client no ko tu mat di, nhung ko su dung trong thoi gian dai thi se mat di trong 1 khoang thoi gian nao do
//muốn huỷ client thì gọi done để huỷ bỏ
pool.connect((err, client, done)=>{
    if(err){
        return console.log("error fetching client");
    }

    client.query('SELECT *FROM "News"', (err, result)=>{
        done(err);
        if(err) return console.log(err + '');
        console.log(result.rows);
    })
})
