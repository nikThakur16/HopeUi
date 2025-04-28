import React from "react";

import figma from "../../assets/Figma.png";
import flutter from "../../assets/Gallery/flutter.png";
import blender from "../../assets/Gallery/blender.png";

const FeedData = [{title:"Figma",username:"@figma",image:figma},
{title:"Flutter",username:"@flutter",image:flutter},
{title:"Blender",username:"@blender",image:blender},
]



const Feeds = () => {
  return (
    <div>
          {FeedData.map((user,index)=>(
          <div key={index} className="ml-2 mb-6">
          <div className="flex gap-4">
            <img className="h-[40px] w-[40px]" src={user.image} alt="" />
            <div>
              <p className="text-sm mb-1 font-medium">{user.title}</p>
              <p className="text-sm text-gray-400">{user.username}</p>
            </div>
          </div>
          
          <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quam?</p>
          <p className="text-sm text-[#0048B2] font-medium mt-2">#html #bootstrp</p>
          <p className="text-sm text-gray-400 mt-2">07 Jan 2020</p>
          {index !== FeedData.length - 1 && (
            <hr className="border-gray-200 mt-6" />
          )}
        </div>
        
        ))}
    </div>
    
  );
};

export default Feeds;
