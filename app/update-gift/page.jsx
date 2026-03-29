'use client'
import { useEffect,useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"

import Form from "@components/Form"

const EditGift = () => {

  //  const {data:session} = useSession();
   const router = useRouter();
   const searchParams = useSearchParams();
   const giftId = searchParams.get('id');
    const [submitting, setsubmitting] = useState(false);

    const [post, setpost] = useState({
        desc:'',
        price:'',
        tag:'',
    });

    useEffect(()=>{
       const getGiftDetails = async ()=>{
           const response = await fetch(`/api/gift/${giftId}`);

           const data = await response.json();

           setpost({
            desc:data.desc,
            price:data.price,
            tag:data.tag,
           })
       }
       if(giftId) getGiftDetails();
    },[giftId])

   const updateGift = async (e) => {
        e.preventDefault();
        setsubmitting(true);

        if(!giftId) return alert('Gift id not found')
        try{
           const response = await fetch(`/api/gift/${giftId}`,
           {
            method:'PATCH',
            body:JSON.stringify({
                desc:post.desc,
                price:parseFloat(post.price),
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
    type="Update"
    post = {post}
    setpost = {setpost}
    submitting = {submitting}
    handleSubmit = {updateGift}
    />
  )
}

export default EditGift