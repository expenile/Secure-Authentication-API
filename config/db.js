const mongoose =  require('mongoose')
const url  = process.env.MONGO_URL;

mongoose.connect(url)
.then(()=>{
    console.log('Mongodb connected...')
}).catch(()=>{
    console.log('Error while creating mongodb connection')
})