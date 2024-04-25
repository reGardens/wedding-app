import CoverLetter from "../../components/CoverLetter"
import Layout from "../../components/Layout"
import dummyAvatar from "../../assets/image/avatar.webp"
import Countdown, { CountdownRenderProps } from 'react-countdown';
import gifMusic from '../../../public/gif/music.gif'
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  // set target time
  const countDownTimer = new Date('2025-04-26T00:00:00');
  // start custom style date
  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      // Render completed state
      return <span>Acara telah selesai!</span>;
    } else {
      // Custom format for days
      const formattedDays = days < 10 ? `0${days}` : days;
      // Render the countdown with custom format
      return (
        <div className="grid grid-cols-4 backdrop-blur-xl bg-white/30 dark:bg-black/30 py-2 rounded-lg">
          <div><span className="text-4xl">{formattedDays}</span> <br /> <span>Hari</span></div>
          <div><span className="text-4xl">{hours}</span> <br /> <span>Jam</span></div>
          <div><span className="text-4xl">{minutes}</span> <br /> <span>Menit</span></div>
          <div><span className="text-4xl">{seconds}</span> <br /> <span>Detik</span></div>
        </div>
      );
    }
  };

  // handle music
  const [music, setMusic] = useState<boolean>(true)
  const audio = new Audio('../../../public/Mp3/song.mp3');

  // useEffect(() => {

  //   audio.addEventListener('ended', handleEnded);

  //   return () => {
  //     audio.removeEventListener('ended', handleEnded);
  //   };
  // }, [audio]);
  // ``
  const handleMusic = () => {
    // setMusic(music)
    const playMusic = localStorage.getItem("play");
    if (playMusic !== null && playMusic === "true") {
      audio.pause();
      localStorage.setItem('play', JSON.stringify(false));
    } else {
      audio.play();
    }
    // setMusic(!music);
    // if (!music) {
    //     audio.play();
    // } else {
    //     audio.pause();
    // }
  }

  return (
    <Layout>
      <main className="bg-header max-w-screen-sm h-screen mx-auto relative overflow-hidden">
        <CoverLetter />
        <div className="w-full h-full absolute top-0 left-0">
          <img src={dummyAvatar} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="text-center py-4 lg:py-10 absolute bottom-0 w-full grid justify-center z-10">
          <p className="drop-shadow-2xl font-extrabold text-4xl lg:text-6xl font-greatVibes tracking-widest relative">Personalia <br /> & <br /> Personalia</p> <br />
          <Countdown
            date={countDownTimer}
            renderer={renderer}
          >
          </Countdown>
        </div>

        {/* play button music */}
        <Button sx={{
          marginLeft: '15px'
        }}
          onClick={handleMusic}
        >
          <img src={gifMusic} alt="" className="fixed top-1 z-[888] w-14 md:w-20 md:h-20 object-contain drop-shadow-2xl" />
        </Button>
      </main>
    </Layout>
  )
}