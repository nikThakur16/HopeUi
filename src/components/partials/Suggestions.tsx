import React from "react";
import html from "../../assets/Gallery/html.png"
import figma from "../../assets/Figma.png"
import ios from"../../assets/Gallery/ios.png"
import abstract from "../../assets/Gallery/abstract.png"
import flutter from "../../assets/Gallery/flutter.png"
import blender from "../../assets/Gallery/blender.png"
import android from "../../assets/Gallery/android.png"
import wordpress from "../../assets/Gallery/wordpress.png"


const Suggestions = () => {
  const suggestionData = [
    { image: html, title: "Paul Molive" },
    { image: figma, title: "Robert Fox" },
    { image: ios, title: "Jenny Wilson" },
    { image: abstract, title: "Cody Fisher" },
    { image: flutter, title: "Wessie Warden" },
    { image: blender, title: "Wade Cooper" },
    { image: android, title: "Guy Hawkins" },
    { image: wordpress, title: "Floyd Milies" },
  ];
  return <div className="flex flex-col gap-2 lg:gap-4 ">

    {suggestionData.map((data,index)=>(
        <div key={index} className="flex items-center justify-between">
            <div className="flex gap-2 xl:gap-6 items-center">
                <img className="xl:h-[56px] xl:w-[56px] md:h-[30px] md:w-[30px] rounded-full border border-gray-400" src={data.image} alt="" />
                <div>
                    <p className="font-medium xl:text-[16px] lg:text-xs">{data.title}</p>
                    <p className="text-gray-400 xl:text-[16px] lg:text-xs mt-1"> 4 Mutual Friends</p>
                </div>
            </div>
            <i class="ri-user-add-line border border-[#0048B2]  rounded-full px-2 py-1 text-[#0048B2] "></i>
        </div>

    ))}
  </div>;
};

export default Suggestions;
