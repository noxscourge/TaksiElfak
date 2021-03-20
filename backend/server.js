
const express = require('express')

var app =  module.exports = express();
const cassandra = require('cassandra-driver');
app.use(express.json())

const client = new cassandra.Client({contactPoints: ['127.0.0.1'],
localDataCenter: 'datacenter1', keyspace: 'taksisti' });
client.connect((err,result)=>{
    console.log("Index: cassandra connected");
});





const getAllTaksisti = "SELECT * FROM taksisti.vozaci";

///////////////////////////////////////////////////////////////////////////////////////
//                                    VOZACI
///////////////////////////////////////////////////////////////////////////////////////


//DOSTAVI SVE VOZACE
app.get('/api/vozaci',(req,res) => 
{
    {
        client.execute(getAllTaksisti,(err,result)=>{
            var vozaci = result.rows;
            res.json(vozaci)
        }
        )
    }
})



app.get('/api/getTaksistaById/:id',(req,res)=> 
{
    const getTaksistaById=  "SELECT * FROM taksisti.vozaci WHERE id = ? ";
  
    client.execute(getTaksistaById, [req.params.id], 
    (err,result) => 
    {
       
           var vozac = 
           {
               
            id: result.rows[0].id,
            ime: result.rows[0].ime,
            prezime: result.rows[0].prezime,
            status: result.rows[0].status,
            kompanija: result.rows[0].kompanija,
            trenutna_lokacija: result.rows[0].trenutna_lokacija,
            cena: result.rows[0].cena,

           }
           res.json(vozac)
    }
    )
})

//EDIT VOZACA
app.post("/api/EditVozaca/:id", (req,res)=>{
    
    console.log(req.body.id);
    const upsertVozaca = "INSERT INTO taksisti.vozaci(id,ime,prezime,status,kompanija,trenutna_lokacija,cena) VALUES (?,?,?,?,?,?,?)";
    client.execute(upsertVozaca,[req.body.id,req.body.ime,req.body.prezime,req.body.status,req.body.kompanija,req.body.trenutna_lokacija,req.body.cena],
        (err,result)=>
        {
           
                if (err)
                {
                        console.log(err);
                }
          else {
                console.log("Editovan!");
               
          }
        });
})

//DELETE TAKSISTU

const deleteTaksista="DELETE FROM taksisti.vozaci WHERE id = ? ";
app.delete('/api/deleteVozaca/:id', (req, res)=>
{
    console.log(req.body.id)
    client.execute(deleteTaksista,[req.params.id], (err, result)=>
    {
      if(err){
        console.log(err)
      } else {
          console.log("Uspesno obrisan takstista");
        res.json(result);
      }
    });
  });



//DODAJ NOVOG VOZACA  (POST METODA)

app.post("/api/dodajVozaca", (req,res)=>{
    id = cassandra.types.uuid();
  
    const upsertVozaca = "INSERT INTO taksisti.vozaci(id,ime,prezime,status,kompanija,trenutna_lokacija,cena) VALUES (?,?,?,?,?,?,?)";
    client.execute(upsertVozaca,[id,req.body.ime,req.body.prezime,req.body.status,req.body.kompanija,req.body.trenutna_lokacija,req.body.cena],
        (err,result)=>
        {
           
                if (err)
                {
                        console.log(err);
                }
          else {
                console.log("Uspesno dodat vozac");
               
          }
        });
})

///////////////////////////////////////////////////////////////////////////////////////
//                                    VOZNJA
///////////////////////////////////////////////////////////////////////////////////////





//GET ALL ZAKAZANE_VOZNJE


const query = "SELECT * FROM zakazivanje_voznje.voznja";
app.get('/api/voznje',(req,res) => 
{
  
    {
      client.execute(query,(err,result)=>{
            var voznje = result.rows;
            res.json(voznje)
        }
        )
    }
})


//GET VOZNJU BY ID
const querybyId = "SELECT * FROM zakazivanje_voznje.voznja WHERE id= ? ";
app.get('/api/voznja/:id',(req,res) => 
{
  
    {
      client.execute(querybyId,[req.params.id],
        (err,result)=>{
         
          var voznja = 
          {

          id: result.rows[0].id,
          email: result.rows[0].email,
          od: result.rows[0].od,
          do: result.rows[0].do,
          vozac_ime: result.rows[0].vozac_ime,
          vozac_prezime: result.rows[0].vozac_prezime,
          vozac_kompanija: result.rows[0].vozac_kompanija,
          cena: result.rows[0].cena,
          vozac_id : result.rows[0].vozac_id,
          broj_telefona : result.rows[0].broj_telefona,
          }
          res.json(voznja);
        
         })}})



//CREATE Zakazanu_voznju

app.post("/api/zakazi_voznju/:id", (req,res)=>{
  id = cassandra.types.uuid();                    
  const upsertVozaca = "INSERT INTO zakazivanje_voznje.voznja(id,email,od,do,vozac_ime,vozac_prezime,vozac_kompanija,cena,broj_telefona, vozac_id)  VALUES (?,?,?,?,?,?,?,?,?,?)";
  client.execute(upsertVozaca,
    [id,
    req.body.email,
    req.body.broj_telefona,
    req.body.od,
    req.body._do,
    req.body.ime,
    req.body.prezime,
    req.body.kompanija
    ,req.body.cena,
    req.body.vozac_id],

    (err,result)=>
    {
       
            if (err)
            {
                    console.log(err);
            }
      else {
            console.log("Uspesno dodata voznja");
           
      }
    });
})

//DELETE zakazanuvoznjuById 

app.delete('/api/deleteVoznja/:id', (req,res)=>{

  const queryDelete = "DELETE FROM zakazivanje_voznje.voznja WHERE id= ? ";

  client.execute(queryDelete, [req.params.id], (result,err)=>{

   

      console.log("Uspesno obrisana voznja")
      res.json(result);

    }
)
  }
)

app.listen(5000,console.log("Server je pokrenut na port 5000"))
