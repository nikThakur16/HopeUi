import image from "../assets/webImages/image.png"



const ImageBg = () => {
  return (
    <div className='xl:w-full xl:min-h-screen xl:object-cover hidden sm:hidden md:block md:w-[80%] '>
    <img className="min-h-screen w-full  object-cover " src={image} alt="img" />

</div>
  )
}

export default ImageBg
