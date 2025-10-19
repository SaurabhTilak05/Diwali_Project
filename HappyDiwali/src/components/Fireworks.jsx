import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function Fireworks() {
  const { width, height } = useWindowSize();

  useEffect(() => {
    const audio = new Audio("/sound.mp3");
    audio.play();
    return () => { audio.pause(); };
  }, []);

  return <Confetti width={width} height={height} recycle={true} numberOfPieces={200} />;
}

export default Fireworks;
