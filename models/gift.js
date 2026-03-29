

import mongoose, {Schema,model,models} from 'mongoose';

const GiftSchema = new Schema({
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
    ,
    desc:{
        type:String,
        required:[true,'description is required']
    },
    price:{
        type:Number,
        required:[true,'price is required']
    },
    tag:{
        type:String,
        required:[true,'tag is required']
    },

});

const Gift = models.Gift || model("Gift",GiftSchema);

export default Gift;