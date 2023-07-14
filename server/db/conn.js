const mongoose = require("mongoose");
// mongodb+srv://rajanyadav:<password>@cluster0.pwjl6yo.mongodb.net/?retryWrites=true&w=majority
//  const DB= "mongodb+srv://rajanyadav:rajanyd@cluster0.pwjl6yo.mongodb.net/mernstackdev?retryWrites=true&w=majority"
//  const DB= "mongodb+srv://rajan:<password>@cluster0.zvbhclg.mongodb.net/MERNREGISTERANDLOGIN"
 const DB= "mongodb+srv://rajan:9005330511@cluster0.8szluu2.mongodb.net/userDetails"
 
//  mongodb+srv://m220student:@PASSWORDmflix-fhl5s.mongodb.net/test?retryWrites=true&w=majority 

 mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));