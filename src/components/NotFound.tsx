
import errorImg from "../assets/Error 404@2x (2).png"

const NotFound = () => {
  return (
    <div className="relative"    >
      <img className="h-screen w-screen object-cover" src={errorImg} alt="" />
      <div className="absolute  top-[80%] left-1/2 flex flex-col items-center justify-center gap-4 transform -translate-x-1/2 -translate-y-1/2">
      <h1  className="text-5xl text-white font-black">Oops! This Page is Not Found.
        
      </h1>
      <p className="text-center text-white text-lg">The requested page does not exists</p>
      <button className="bg-[#e9ecef] px-3 py-1 rounded text-center">Back to Home</button>
      </div>
    </div>
  )
}

export default NotFound