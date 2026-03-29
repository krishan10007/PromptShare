'use client'
import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Form from "@components/Form"

const CreateGift = () => {

    const {data:session} = useSession();
   const router = useRouter();
    const [submitting, setsubmitting] = useState(false);

    const [post, setpost] = useState({
        desc:'',
        price:'',
        tag:'',
    });

   const createGift = async (e) => {
        e.preventDefault();
        setsubmitting(true);
        try{
           const response = await fetch('/api/gift/new',
           {
            method:'POST',
            body:JSON.stringify({
                desc:post.desc,
                price:parseFloat(post.price),
                userId:session?.user.id,
                tag:post.tag

            })
           }
           )
           if(response.ok)
           {
              router.push('/');
           }
        }catch(error){
         console.log(error)
        }finally{
            setsubmitting(false);
        }
        
    }
  return (
    <Form 
    type="Create"
    post = {post}
    setpost = {setpost}
    submitting = {submitting}
    handleSubmit = {createGift}
    />
  )
}

export default CreateGift