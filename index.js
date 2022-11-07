const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
let reqCount = 0;

app.use(cors());

app.get('/', (req, res) => {

    reqCount++;
    
    console.log("/");
    return res.status(200).json({

        message: "Hello Default API",
        "request Count": reqCount
    });
});


app.get('/user/:id', (req, res) => {

    reqCount++;
    console.log("/ID");
    return res.status(200).json({

        message: `Route ID ${req.params.id}`,
        "request Count": reqCount
    });

});
app.listen(PORT, ()=> console.log(`Server is up and running on ${PORT}`));