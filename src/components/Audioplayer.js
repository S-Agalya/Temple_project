// import React, { useState } from 'react';
// import { FaFileAudio } from "react-icons/fa6";

// const Audioplayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = React.useRef(new Audio('/audio.mpeg')); // Path to your audio file

//   const toggleAudio = () => {
//     if (!isPlaying) {
//       audioRef.current.play();
//     } else {
//       audioRef.current.pause();
//     }
//     setIsPlaying(!isPlaying); // Toggle the state
//   };

//   return (
//     <div>
//       <button className="ml-auto flex items-center mr-40" onClick={toggleAudio}>
//         <p className="text-lg font-bold mr-1">OM NAMAH SHIVAYA</p> {/* OM symbol */}
//         <FaFileAudio />
//       </button>
//     </div>
//   );
// }

// export default Audioplayer;


import React, { useState, useEffect, useRef } from 'react';
import { FaFileAudio } from "react-icons/fa6";

const Audioplayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio.mpeg'); // Path to your audio file
  }, []);

  const toggleAudio = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying); // Toggle the state
  };

  return (
    <div>
      <button className="ml-auto flex items-center mr-40" onClick={toggleAudio}>
        <p className="text-lg font-bold mr-1">OM NAMAH SHIVAYA</p> {/* OM symbol */}
        <FaFileAudio />
      </button>
    </div>
  );
}

export default Audioplayer;
