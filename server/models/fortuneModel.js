// import mongoose
const mongoose = requre("mongoose");

// Go into mongoose library and access the schema (blueprint)
const Schema = mongoose.Schema;

const fortuneSchema = new Schema(
    {
        fortuneName: {
            type: String,
            required: true,
        },
    },
    { collection: "fortunes"} // to store documents of the same type
);

const Fortune = mongoose.model("Fortune", fortuneSchema); // name of model then the schema itself

module.exports = Fortune;
