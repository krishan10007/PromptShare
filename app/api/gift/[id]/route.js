import { connectToDB } from "@utils/database";
import Gift from "@models/gift";
import User from "@models/user";
//GET request
export const GET  = async (request,{params}) =>{
    try {
        await connectToDB();
        const gift = await Gift.findById(params.id).populate('creator');

        if(!gift)
        return new Response("Gift not found",{status:401});

         return new Response(JSON.stringify(gift),{
            status:200
         })
    } catch (error) {
         return new Response("Failed to fetch all gifts",{status:500});
    }
}

export const PATCH = async (request,{params}) => {
    const {desc,price,tag} = await request.json();
    try {
        await connectToDB();

        const existingGift = await Gift.findById(params.id);
        if(!existingGift) return new Response("gift not found",{status:404});

        existingGift.desc = desc;
        existingGift.price = price;
        existingGift.tag = tag;
        await existingGift.save();

        return new Response("successfully updated the gift",{status:200})
    } catch (error) {
        return new Response("failed to update",{status:500})
    }
}

export const DELETE = async (request,{params}) => {

    try {
        await connectToDB();
        await Gift.findByIdAndRemove(params.id);
        return new Response("Gift deleted succesfully", {status:200});

    } catch (error) {
        return new Response("Failed to delete gift",{
            status:500
        });
    }
}