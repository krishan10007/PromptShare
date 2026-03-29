import Feed from "@components/Feed";


const Home   = () => {
  return (
   <section className="w-full  flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share 
      <br className="max-md:hidden"/>
    <span className="bluee_gradient text-center" >
      Unique Customized Gifts
      </span>
      </h1>
      <p className="desc text-center">
      Explore our collection of hand-crafted and uniquely customized gifts,
      perfect for every occasion. Share your own creations and find inspiration
      from others!
      </p>

      
      <Feed />
   </section>
  )
}

export default Home