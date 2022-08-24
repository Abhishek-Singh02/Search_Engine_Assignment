const model = require("../model/model");

async function get_Ads(req, res) {
  const keyword = req.body.keyword;

  //return brands with macthing keywords in name field
  const brandData = await model.Brands.find({ name: { $regex: keyword } });

  //get Id's of brands
  const ids = await brandData.filter((brand) => brand._id);
  //return ads with the matching company Id
  var result1 = await model.Ad.find({ companyId: { $in: ids } });

  //return ads with keywords matching fields of Ad collection
  var result2 = await model.Ad.find({
    $or: [{ primaryText: { $regex: keyword, $options: "i" } }, { headline: { $regex: keyword, $options: "i" } }, { description: { $regex: keyword, $options: "i" } }],
  });

  //merge results of Ads found using Brand collection and Ad collection and return it as response
  const adReults = result1.filter((elem) => !result2.find((subElem) => subElem["_id"] === elem["_id"])).concat(result2);
  return res.json(adReults);
}

module.exports = { get_Ads };
