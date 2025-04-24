import image from "../../assets/image.png"

const ImageBg = () => {
  return (
    <div className=' object-cover'>
        <img className="h-screen w-screen object-cover" src={image} alt="img" />

    </div>
  )
}

export default ImageBg