import Conn from "./connection.js";
import Express from "express";
import cors from "cors"

const app=Express()
const PORT=3000


app.use(Express.json());
app.use(cors("http://localhost:5173/"));

app.get("/",(req,res)=>{
    Conn.query("SELECT * FROM cru",(err,resp)=>{
        if(err){
            
            console.error(err);
        }else{
            return res.send(resp)
        }
    })
}
)

app.post("/",(req,res)=>{
    const Tipo=req.body.tipo
    const Estado=req.body.estado
    Conn.query(`INSERT INTO cru (Tipo,Estado) VALUES('${Tipo}','${Estado}')`,(err,resp)=>{

        if(err){
            console.error(err);
        }else{
            res.send("Inserido Com Sucesso")
        }
    })
})
app.put("/:id",(req,res)=>{
const id=req.params.id
const Id=req.body.id
const Tipo=req.body.tipo
const estado=req.body.estado
Conn.query(`UPDATE cru SET id=${Id}, Tipo="${Tipo}", Estado="${estado}" WHERE id=${id}`,(err,resp)=>{
    if(err){
        console.error(err);
    }else{
        res.send("Atualizado Com Sucesso!.")
    }
}
)
});

app.delete("/:id",(req,res)=>{
    const id=req.params.body
    Conn.query(`DELETE FROM cru WHERE id=${id} `,(err,resp)=>{
        if(err){
            console.error(err);
        }else{
            res.send("DELETADO COM SUCESSO")
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Servidor Rodando Em https://localhost:${PORT}\nAperte Cntrl C Para Derrubar`)
})