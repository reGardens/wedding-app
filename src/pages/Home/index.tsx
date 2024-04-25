import CoverLetter from "../../components/CoverLetter"
import Layout from "../../components/Layout"
import dummyAvatar from "../../assets/image/avatar.webp"
import Countdown, { CountdownRenderProps } from 'react-countdown';

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

  return (
    <Layout>
      <main className="bg-header max-w-screen-sm h-screen mx-auto relative">
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
      </main>
    </Layout>
  )
}