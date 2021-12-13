const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const Customer = require("./models/Customer");
const NewUser = require("./models/Newuser");
const App = require("./models/App");
const Version = require("./models/Version");
const Environment = require("./models/Environment");
const Ecustomer = require("./models/CustomerEnvironment");
const Capp = require("./models/CreateCustomerApp");



dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("connected to MongoBD")).catch((err)=> console.log(err));


//Routes

//Post 


// app.post("/login", (req, res)=> {
//     const { email, password} = req.body
//     User.findOne({ email: email}, (err, user) => {
//         if(user){
//             if(password === user.password ) {
//                 res.send({message: "Login Successfull", user: user})
//             } else {
//                 res.send({ message: "Password didn't match"})
//             }
//         } else {
//             res.send({message: "User not registered"})
//         }
//     })
// }) 

// app.post("/register", (req, res)=> {
//     const { name, email, password} = req.body
//     User.findOne({email: email}, (err, user) => {
//         if(user){
//             res.send({message: "User already registerd"})
//         } else {
//             const user = new User({
//                 name,
//                 email,
//                 password
//             })
//             user.save(err => {
//                 if(err) {
//                     res.send(err)
//                 } else {
//                     res.send( { message: "Successfully Registered, Please login now." })
//                 }
//             })
//         }
//     })
    
// }) 



app.post("/createcustomer", async (req, res) => {
    const user = req.body;
    const customer = new Customer(user);
    await customer.save();


    res.json(user);
});

app.post("/createuser", async (req, res) => {
    const user = req.body;
    const newUser = new NewUser(user);
    await newUser.save();

    res.json(user);
})

app.post("/createapp", async (req, res) => {
    const app = req.body;
    const newApp = new App(app);
    await newApp.save();

    res.json(app);
})

app.post("/createappversion",  async (req, res) => {
    const version = req.body;
    const newVersion = new Version(version);
    await newVersion.save();

    res.json(version);
})

app.post("/createenvironment", async (req, res) => {
    const environment = req.body;
    const newEnvironment = new Environment(environment);
    await newEnvironment.save();

    res.json(environment);
})

app.post("/createcustomerenvironment", async (req, res) => {
    const customerEnvironment = req.body;
    const newCustomerEnvironment = new Ecustomer(customerEnvironment);
    await newCustomerEnvironment.save();


    res.json(customerEnvironment);
})

app.post("/createcustomerapp", async (req, res) => {
    const customerApp = req.body;
    const newCustomerApp = new Capp(customerApp);
    await newCustomerApp.save();


    res.json(customerApp);
})


//Get


app.get("/getCustomer", async (req, res) => {
    try{
        const customers = await Customer.find();
        res.status(200).json(customers);
    }catch (err) {
        res.status(500).json(err);
    }
});


app.get("/getAppName", async (req, res) => {
    try{
        const app = await App.find();
        res.status(200).json(app);
    } catch(err){
        res.status(500).json(err);
    }
});

app.get("/getEnvironment", async (req, res) => {
    try{
        const environment = await Environment.find();
        res.status(200).json(environment);
    }catch(err){
        res.status(500).json(err);
    }
});


app.get("/getAppVersion", async (req, res) => {
    try{
        const version = await Version.find();
        res.status(200).json(version);
    }catch(err){
        res.status(500).json(err);
    }
});


app.get("/getusers", async(req, res) =>{
    try{
        const newUser = await NewUser.find();
        res.status(200).json(newUser);
    }catch(err){
        res.status(500).json(err)
    }
});


//UPDATE


app.put("/updateCustomer/:id", (req, res) => {
     Customer.findById(req.params.id, function(err, updateCustomer){
         if(!updateCustomer){
             res.status(404).send("Data no found");
         }else{
             updateCustomer.name = req.body.name;
             updateCustomer.password = req.body.password;
             updateCustomer.email = req.body.email;

             updateCustomer.save().then(updateCustomer => {
                 res.json("Updated")
             })
             .catch(err => {
                 res.status(400).send("Update failed.")
             })
         }
     })
});


app.put("/updateApp/:id", (req, res) => {
    App.findById(req.params.id, function(err, updateApp){
        if(!updateApp){
            res.status(404).send("Data no found");
        }else{
            updateApp.name = req.body.name;
            updateApp.desc = req.body.desc;

            updateApp.save().then(updateApp => {
                res.json("Updated")
            })
            .catch(err => {
                res.status(400).send("Update failed.")
            })
        }
    })
});


app.put("/updateEnvironment/:id", (req, res) => {
    Environment.findById(req.params.id, function(err, updateEnvironment){
        if(!updateEnvironment){
            res.status(404).send("Data no found");
        }else{
            updateEnvironment.name = req.body.name;
            updateEnvironment.desc = req.body.desc;

            updateEnvironment.save().then(updateEnvironment => {
                res.json("Updated")
            })
            .catch(err => {
                res.status(400).send("Update failed.")
            })
        }
    })
});


app.put("/updateUser/:id", (req, res) => {
    NewUser.findById(req.params.id, function(err, updateUser){
        if(!updateUser){
            res.status(404).send("Data no found");
        }else{
            updateUser.name = req.body.name;
            updateUser.password = req.body.password;
            updateUser.firstname = req.body.firstname;
            updateUser.lastname = req.body.lastname;
            updateUser.customer = req.body.customer;
            updateUser.email = req.body.email;

            updateUser.save().then(updateUser => {
                res.json("Updated")
            })
            .catch(err => {
                res.status(400).send("Update failed.")
            })
        }
    })
});




//DELETE

app.delete("/deleteCustomer/:id", async (req, res) => {
    const id = req.params.id;

    await Customer.findByIdAndRemove(id).exec();
    res.send("Customer Deleted.")

});

app.delete("/deleteApp/:id", async (req, res) => {
    const id = req.params.id;

    await App.findByIdAndRemove(id).exec();
    res.send("App Deleted.")

});

app.delete("/deleteEnvironment/:id", async (req, res) => {
    const id = req.params.id;

    await Environment.findByIdAndRemove(id).exec();
    res.send("Environment Deleted.")

});

app.delete("/deleteUser/:id", async (req, res) => {
    const id = req.params.id;

    await NewUser.findByIdAndRemove(id).exec();
    res.send("User Deleted.")

});





if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.listen(PORT,() => {
    console.log(`Server is running at ${PORT}`)
})