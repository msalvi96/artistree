const express = require('express');
const router = express.Router();
var firestore = require('../../Server-Config/ServerConfig')
const admin = require('firebase-admin')

router.post('/createArtist', async (req, res) => {
    //console.log(req.body)
    firestore.db.collection('artists').doc(req.body.id).set({
        AKA: req.body.AKA, DOB: req.body.DOB, profilePictureURl: "sampleURL", artistEmail: req.body.artistEmail, artistName: req.body.artistName, description: req.body.description
    }).then(function () {
        console.log("Document successfully written!");
        res.sendStatus(200)
    })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        })
})

// router.post('/addPictures', async(req,res)=>{
//     console.log(req.body.portfolioMediaList)

//     firestore.db.collection('artists').doc(req.body.id).update({
//         portfolioMediaList: admin.firestore.FieldValue.arrayUnion(req.body.portfolioMediaList)
//     }).then(function(){
//         res.sendStatus(200);
//     }).catch(function(error){
//         console.error("Error",error);
//     })
// })

router.get('/profile/:id', async(req,res)=>{
    // res.send(req.params.id)
     firestore.db.collection('artists').doc(req.params.id).get()
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