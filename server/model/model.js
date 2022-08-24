const schema = new mongoose.Schema({});

//accessing existing Ad Collection from the database
const Ad = mongoose.model("Ad", schema, "ad");

//accessing existing Brands Collection from the database
const Brands = mongoose.model("Brands", schema, "brands");

module.exports = { Ad, Brands };
