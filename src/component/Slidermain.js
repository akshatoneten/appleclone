import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
export default function App() {
   const [imageNum, setImageNum] = useState(1);
   const sliderImages = [
      {
         url: "https://tiki.vn/blog/wp-content/uploads/2023/02/quay-man-hinh-iphone.jpg",
      },
      {
         url: "https://www.techthirsty.com/wp-content/uploads/2021/02/iPhone-13-ultra-wide-camera.jpg",
      },
      {
         url: "https://www.bridportnews.co.uk/resources/images/13556280/?type=og-image",
      },
      {
         url: "https://cdn.siasat.com/wp-content/uploads/2022/09/iPhone-14-Pro-Max-660x495.jpg",
      },
      {
         url: "https://storage.googleapis.com/tradeinn-images/images/landing-pages/appleNovetats-1.jpg",
      }
   ];
 
   return (
      <div>
        <div className="bg-no-repeat bg-center bg-cover">
         <SimpleImageSlider
            width={922}
            height={580}
            images={sliderImages}
            // showBullets={true}
            // showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            
            }}
               autoPlayDelay = {1}
         />
         {/* <div style = {{ fontSize: "1.5rem" }}>
            The current image slide No is {imageNum}.
         </div> */}
      </div>
      </div>
   );
}