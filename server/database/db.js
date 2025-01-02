import mongoose from 'mongoose'

const Connection= async (username, password)=>{
    const URL= `mongodb+srv://${username}:${password}@notes-app.iauuv.mongodb.net/`;
    try{
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database', error);
    }
}
export default Connection;