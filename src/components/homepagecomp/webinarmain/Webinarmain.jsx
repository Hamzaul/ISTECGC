// "use client";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import Link from "next/link";
// import Image from "next/image";

// const Webinarmain = () => {
//   const webinarcontent = [
//     {
//       title: "VITAA",
//       path: "https://www.youtube.com/watch?v=fOnjz5p2CYM",
//       imgpath: "/Pictures/webinarthumbnails/vitaa.png",
//     },
//     {
//       title: "Exploring Flutter Framework",
//       path: "https://www.youtube.com/watch?app=desktop&v=u1PIIWxUia4",
//       imgpath: "/Pictures/webinarthumbnails/flutter.png",
//     },
//     {
//       title: "OpenCV and Beyond",
//       path: "https://www.youtube.com/watch?v=SenRcmWz6A8",
//       imgpath: "/Pictures/webinarthumbnails/opencv.png",
//     },
//     {
//       title: "SDG: Key to Sustainable future",
//       path: "https://www.youtube.com/watch?v=xjG74e2fpMo",
//       imgpath: "/Pictures/webinarthumbnails/sdg.png",
//     },
//     {
//       title: "CASA",
//       path: "https://www.youtube.com/watch?app=desktop&v=i21ByWUoXDQ",
//       imgpath: "/Pictures/webinarthumbnails/casa.png",
//     },
//     {
//       title: "Delve Into Github Fundamentals",
//       path: "https://www.youtube.com/watch?v=qVSRpNegp3I",
//       imgpath: "/Pictures/webinarthumbnails/GITHUB.png",
//     },
//     {
//       title: "Sustainable & Corporate India",
//       path: "https://www.youtube.com/watch?v=wyVmRqEkEq8&pp=ygUMaXN0ZSB2aXQgc2Rn",
//       imgpath: "/Pictures/webinarthumbnails/SDG2.png",
//     },
//     {
//       title: "TaskFlow With GCP",
//       path: "https://www.youtube.com/live/-M-cwRXmAnw?feature=shared",
//       imgpath: "/Pictures/webinarthumbnails/GCP.png",
//     },
//   ];

//   return (
//     <div
//       id="webinar"
//       className="relative w-full my-10 grayscale hover:grayscale-0 transition-all duration-150 overflow-x-hidden"
//     >
//       <div className="absolute inset-0 z-20 flex items-center justify-center text-white bg-center bg-fixed bg-repeat bg-cover bg-[url('/Pictures/webinarbg.png')]">
//         <div className="absolute inset-0 justify-center">
//           <Carousel
//             opts={{
//               align: "center",
//               loop: true,
//             }}
//             plugins={[
//               Autoplay({
//                 delay: 3000, // Faster autoplay for better user engagement
//                 stopOnInteraction: false,
//               }),
//             ]}
//           >
//             <CarouselContent className="items-center">
//               {webinarcontent.map((item, index) => (
//                 <CarouselItem key={index} className="z-30 px-10">
//                   <Link
//                     href={item.path}
//                     target="_blank"
//                     className="flex justify-center"
//                   >
//                     <div className="px-10" key={item.title}>
//                       <Image
//                         src={item.imgpath}
//                         height={1080}
//                         alt="webinar"
//                         width={1080}
//                         className="w-fit h-fit mt-9 md:mt-36 md:w-[1080px] md:h-[600px] border-4 md:border-[10px] border-black"
//                       />
//                     </div>
//                   </Link>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious className="absolute left-5 md:left-8 top-1/2 transform -translate-y-1/2 text-black rounded-full shadow-lg transition z-40 size-1 p-3 md:size-5 md:p-6" />
//             <CarouselNext className="absolute right-5 md:right-8 top-1/2 transform -translate-y-1/2 text-black rounded-full shadow-lg transition z-40 size-1 p-3 md:size-5 md:p-6" />
//           </Carousel>
//         </div>
//       </div>
//       <div className="md:w-full md:h-full relative z-10 overflow-hidden">
//         <video
//           src="https://iste-website-v2.s3.ap-south-1.amazonaws.com/abstract-gradient-background.mp4"
//           autoPlay
//           loop
//           muted
//           preload="auto" // Ensures video starts instantly
//           playsInline
//           controls={false}
//           style={{
//             pointerEvents: "none",
//             objectFit: "cover",
//             objectPosition: "center",
//             willChange: "transform",
//           }}
//           className="w-full h-full object-cover z-10"
//         ></video>
//         <div className="absolute inset-0 bg-transparent pointer-events-auto"></div>
//       </div>
//     </div>
//   );
// };

// export default Webinarmain;
