import CoverLetter from "../../components/CoverLetter"
import Layout from "../../components/Layout"
import dummyAvatar from "../../assets/image/avatar.webp"
import DateCountdown from 'react-date-countdown-timer';

export default function Home() {
  // let DateCountdown: any;
  return (
    <Layout>
      <main className="bg-header max-w-screen-sm h-screen mx-auto relative">
        <CoverLetter />
        <div className="w-full h-full absolute top-0 left-0">
          <img src={dummyAvatar} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="text-center py-4 lg:py-10 absolute bottom-0 w-full grid justify-center z-10">
          <p className="drop-shadow-2xl font-extrabold text-4xl lg:text-6xl font-greatVibes tracking-widest relative">Personalia <br /> & <br /> Personalia</p> <br />
          <DateCountdown dateTo='January 01, 2025 00:00:00 GMT+07:00' callback={() => alert('Datang Ya')} />
        </div>
      </main>
    </Layout>
  )
}