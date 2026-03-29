import { connectToDB } from "@utils/database";
import Gift from "@models/gift";


export const POST = async (req) => {
    const {userId,desc,price,tag} = await req.json();

    try {
        await connectToDB();

        const newGift = new Gift({
            creator:userId,
            desc,
            price,
            tag
        })

        await newGift.save();

        return new Response(JSON.stringify(newGift),{status:201});

    } catch (error) {

        return new Response("failed to create a new gift",{status:500});
    }
}