import image from "../../assets/image.png"

const ImageBg = () => {
  return (
    <div className='xl:w-full xl:min-h-screen xl:object-cover hidden sm:hidden md:block '>
        <img className="min-h-screen w-full  object-cover " src={image} alt="img" />

    </div>
  )
}

export default ImageBg