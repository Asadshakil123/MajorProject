const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default:  "https://images.unsplash.com%252fphoto-1541526855570-9154d61f6a8b%253fixlib%253drb-1.2.1%2526q%253d80%2526fm%253djpg%2526crop%253dentropy%2526cs%253dtinysrgb%2526w%253d1080%2526fit%253dmax%26ehk%3dfl07u6e2UzwDXpgL57bYq38KFYHBJCIDmjbhJ%252bpDMoE%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1620&expw=1080&q=unsplash&simid=608046539522726255&FORM=IRPRST&ck=BF7177286C76C81FDE59C8A1C014D4B9&selectedIndex=3&itb=0&ajaxhist=0&ajaxserp=0" ,
        set: (v) => 
        v === "" ? 
        "https://images.unsplash.com%252fphoto-1541526855570-9154d61f6a8b%253fixlib%253drb-1.2.1%2526q%253d80%2526fm%253djpg%2526crop%253dentropy%2526cs%253dtinysrgb%2526w%253d1080%2526fit%253dmax%26ehk%3dfl07u6e2UzwDXpgL57bYq38KFYHBJCIDmjbhJ%252bpDMoE%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1620&expw=1080&q=unsplash&simid=608046539522726255&FORM=IRPRST&ck=BF7177286C76C81FDE59C8A1C014D4B9&selectedIndex=3&itb=0&ajaxhist=0&ajaxserp=0" 
        : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;