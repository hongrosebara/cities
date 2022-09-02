import { useState, useEffect, useRef } from "react";
import { BsFillPlayFill} from "react-icons/bs"
import { BsPauseFill} from "react-icons/bs"

export default function Player({sound}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, SetVolume] = useState(1);
  const audioPlayer = useRef();
  const volumeBar = useRef();

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (prevValue) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
  }

  const changeVolume = () => {
    SetVolume(volumeBar.current.value);
    audioPlayer.current.volume = volumeBar.current.value;
  }

  return (
    // <div>
    //   <button
    //     className="btn bg-primary-100 px-10 py-5 text-center rounded-md" 
    //     key={sound.id}
    //     onClick={playPause}
    //   >
    //     {isPlaying ? <BsPauseFill /> : <BsFillPlayFill /> } {sound.name}
    //   </button>
    // </div>
    <div>
      <audio ref={audioPlayer} src={sound.audio}></audio>
      <button onClick={togglePlayPause}>
        {isPlaying ? <BsPauseFill /> : <BsFillPlayFill /> }
      </button>

      <div>
        <input
          type="range"
          ref={volumeBar}
          value={volume}
          min={0.1} max={1}
          step={0.01}
          onChange={changeVolume}
        />
      </div>
    </div>
  )
}