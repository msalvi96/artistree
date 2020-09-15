const express = require('express');
const router = express.Router();
var firestore = require('../../Server-Config/ServerConfig')

router.get('/Test', async (req, res) => {
    res.send("In User")
});

router.post('/createUser', async (req, res) => {
    //console.log(req.body)
    firestore.db.collection('users').doc(req.body.id).set({
        DOB: req.body.DOB, profilePictureURl: "sampleURL", userEmail: req.body.userEmail, userName: req.body.userName
    }).then(function () {
        console.log("Document successfully written!");
        res.sendStatus(200)
    })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        })
})

router.get('/profile/:id', async(req,res)=>{
   // res.send(req.params.id)
    firestore.db.collection('users').doc(req.params.id).get()
    .then(function(doc){
        if (doc.exists) {
            //console.log("Document data:", doc.data());
            res.json(doc.data());
        } else {
            // doc.data() will be undefined in this case
            res.sendStatus(404)
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
});



module.exports = router;