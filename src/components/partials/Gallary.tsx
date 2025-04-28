import flutter from "../../assets/Gallery/flutter.png";
import android from "../../assets/Gallery/android.png";
import cube from "../../assets/Gallery/cube.png";
import cube2 from "../../assets/Gallery/cube2.png";
import html from "../../assets/Gallery/html.png";
import ring from "../../assets/Gallery/ring.png";
import wordpress from "../../assets/Gallery/wordpress.png";
 import blender from "../../assets/Gallery/blender.png";
 import cylinder from "../../assets/Gallery/cylinder.png";

const Gallary = () => {

    const images = [
        flutter,
        android,
        cube,
        cube2,
        html,
        ring,
        wordpress,
        blender,
        cylinder
    ];
  return (
    

        <div className="grid grid-cols-3 gap-4 mt-4">
            {images.map((image, index) => (
            <div key={index} className=" group">
                <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                />
            </div>
            ))}
        </div>

    
  )
}

export default Gallary