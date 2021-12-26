const express=require("express")
const app=express()
const PORT=3000

app.get('/',(req,res)=>
{
    res.send('welcome to node js express by hassan shalash')

}
)
app.listen(PORT,() =>
{
    console.log('Exaples app listening at hhtp://localhost: '+PORT)
}
)




