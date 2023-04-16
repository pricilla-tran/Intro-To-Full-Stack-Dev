const Fortune = requre("../models/fortuneModel")

module.exports.getAllFortunes = async (req, res) => {
    await Fortune.find().then((fortunes) => { // then means success
        res.status(200).send(fortunes);
    }).catch(err =>
        res.status(400).json({
            error: [
                {
                    error: "Failed to retrieve from the database",
                },
            ],
        })    
    ); 
};

module.exports.getRandomFortune = async (req, res) => { // 10/1 Last Point, Need to refine this 
    await Fortune.find()
        .then((fortunes) => { // then means success
            // produce integer to access fortune
            const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
            res.status(200).send(randomFortune);
        })
        .catch(err =>
            res.status(400).json({
                error: [
                    {
                        error: "Failed to retrieve from the database",
                    },
                ],
            })    
        ); 
};

module.exports.createNewFortune = async (req, res) => {
    // create new fortune locally
    let newFortune = new Fortune(req.body);
    // MongoDB function is save() to save object or doc to database, err can be passed or new fortune created
    await newFortune.save((err, Fortune) => {
        if (err) {
            return res.status(400).json({
              error: [
                {
                    error: "Failed to create new fortune in the database"
                },
              ],  
            });
        }
        // if err does not error, sent back in response. reason we don't use send is because this is the way the send saves the data itself into the JSON of the response
        res.json(Fortune); 
    });
};

module.exports.updateExistingFortune = async (req, res) => {
    await Fortune.findOneAndUpdate( {_id: req.params.FortuneID} , req.body, {
        new: true, // used to show if fortune had been updated
    })
        .then((fortunes) => { // then means success
            res.status(200).send(fortune);
        })
        .catch(err =>
            res.status(400).json({
                error: [
                    {
                        error: "Failed to updated existing fortune",
                    },
                ],
            })    
        ); 
};

module.exports.deleteExistingFortune = async (req, res) => {
    await Fortune.deleteOne({_id: req.params.id})
        .then(() => {
            res.json({message: "Successfully deleted fortune from database"});
        })
        .catch((err) => 
            res.status(400).json({
                error: [
                    {
                        error: "Failed to delete existing for tune from the database"
                    },
                ],
            })
        );
};
