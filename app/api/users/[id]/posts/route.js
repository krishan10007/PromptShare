import { connectToDB } from "@utils/database";
import Gift from "@models/gift";
import User from "@models/user";

export const GET  = async (request,{params}) =>{
    try {
        await connectToDB();

        
        const gifts = await Gift.find({
            creator:params.id,
        }).populate('creator');

        return new Response(JSON.stringify(gifts),{status:200});

    } catch (error) {
         return new Response("Failed to fetch all gifts",{status:500});
    }
}