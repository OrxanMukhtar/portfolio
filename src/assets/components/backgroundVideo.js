// import { useEffect } from "react";
// // import "./BackgroundVideo.css";
// import videoSrc from "../img/video.mp4"; // Videoyu "public" yerine "src/assets" içine koyduysan böyle import edebilirsin.

// const BackgroundVideo = () => {
//   useEffect(() => {
//     document.body.style.margin = "0"; // Sayfa kenar boşluklarını kaldır
//     document.body.style.overflow = "hidden"; // Scroll olmasını engelle

//     return () => {
//       document.body.style.margin = "";
//       document.body.style.overflow = "";
//     };
//   }, []);

//   return (
//     <video autoPlay loop muted playsInline id="bg-video">
//       <source src={videoSrc} type="video/mp4" />
//     </video>
//   );
// };

// export default BackgroundVideo;
