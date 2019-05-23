const db = require("../../db");

const getCitiesController = (req, res) => {
    db.collection("cities")
        .get()
        .then(snapshot => {
            res.json({
                data: snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    };
                })
            });
        })
        .catch(error => {
            res.json({ error });
        });

};

const postCitiesController = (req, res) => {
    db.collection("cities")
    .add({
       ...req.body
    })
    .then(docRef => {
        res.status(201)
            .json({
                id: docRef.id,
                message: "City successfully created"
            });
    })
    .catch(error => {
        res.json({ error });
    });
};

module.exports = {
    getCitiesController,
    postCitiesController
}
