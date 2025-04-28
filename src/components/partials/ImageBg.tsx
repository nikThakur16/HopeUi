import image from "../../assets/image.png"

const ImageBg = () => {
  return (
    <div className='w-full min-h-screen object-cover '>
        <img className="min-h-screen w-full  object-cover " src={image} alt="img" />

    </div>
  )
}

export default ImageBg