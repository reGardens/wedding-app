import CoverLetter from "../../components/CoverLetter"
import Layout from "../../components/Layout"
import dummyAvatar from "../../assets/image/avatar.webp"
import Countdown, { CountdownRenderProps } from 'react-countdown';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgTheBride from "../../assets/image/bg-about-black.jpeg";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import defaultImage from "../../assets/image/Default/default-image.png";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger)

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
        <div className="grid grid-cols-4 gap-3 backdrop-blur-xl bg-white/30 dark:bg-black/30 py-2 px-4 rounded-lg">
          <div><span className="text-2xl md:text-3xl">{formattedDays}</span> <br /> <span>Hari</span></div>
          <div><span className="text-2xl md:text-3xl">{hours}</span> <br /> <span>Jam</span></div>
          <div><span className="text-2xl md:text-3xl">{minutes}</span> <br /> <span>Menit</span></div>
          <div><span className="text-2xl md:text-3xl">{seconds}</span> <br /> <span>Detik</span></div>
        </div>
      );
    }
  };

  useEffect(() => {
    const doa = gsap.timeline({
      scrollTrigger: {
        trigger: '.doa',
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      }
    });
    doa.to(".doa div", { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 });
  }, []);

  return (
    <Layout>
      <CoverLetter />

      <main className="bg-header max-w-screen-sm h-screen mx-auto relative overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0">
          <img src={dummyAvatar} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="text-center py-4 lg:py-10 absolute bottom-0 w-full grid justify-center z-10">
          <p className="drop-shadow-2xl font-extrabold text-4xl lg:text-5xl font-greatVibes tracking-widest relative">Personalia <br /> & <br /> Personalia</p> <br />
          <Countdown
            date={countDownTimer}
            renderer={renderer}
          >
          </Countdown>
        </div>
      </main>

      <section className="doa text-center max-w-screen-sm mx-auto relative overflow-hidden backdrop-blur-md bg-black/30 py-4 lg:py-10 px-4">
        <div className="translate-y-10 opacity-0">
          <p className="text-lg mb-3"> QS. Ar-Rum Ayat 21 </p>
          <p className="">
            <span className="text-xl py-5">وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ</span> <br />
            <span className="text-base"> "Dan di antara tanda-tanda (kebesaran)-Nya adalah Dia menciptakan sekutu bagimu dari jenismu sendiri, agar kamu condong dan merasa tenteram terhadapnya, dan Dia menciptakan di antara kamu perasaan cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi orang-orang yang berpikir."</span>
          </p>
        </div>
      </section>

      <section className="max-w-screen-sm mx-auto relative overflow-hidden py-4 lg:py-10 px-4">
        <img src={bgTheBride} alt="" srcSet="" className="absolute top-0 left-0 w-full h-full object-cover opacity-75 -z-10" />
        <p className="font-bold text-3xl lg:text-4xl tracking-widest pb-5">THE BRIDE</p>

        <Card sx={{}} className="!backdrop-blur-md !bg-[#32CD32]/30">
          <CardMedia
            sx={{ height: 340 }}
            image={defaultImage}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="!font-greatVibes !tracking-[5px] !text-4xl">
              Personalia
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PUTRO PERTAMA DARI:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Bpk. ............... dan Ibu. ............... <br />
              Alamat ...............
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to="test">Instagram</Link>
            </Button>
          </CardActions>
        </Card>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Card sx={{}} className="!backdrop-blur-md !bg-[#800080]/30">
          <CardMedia
            sx={{ height: 340 }}
            image={defaultImage}
            title="green iguana"
          />
          <CardContent sx={{ textAlign: 'right' }}>
            <Typography gutterBottom variant="h5" component="div" className="!font-greatVibes !tracking-[5px] !text-4xl">
              Personalia
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PUTRO PERTAMA DARI:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Bpk. ............... dan Ibu. ............... <br />
              Alamat ...............
            </Typography>
          </CardContent>
          <CardActions sx={{ float: 'right' }}>
            <Button size="small">
              <Link to="test">Instagram</Link>
            </Button>
          </CardActions>
        </Card>
      </section>
    </Layout>
  )
}