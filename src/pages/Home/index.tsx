import CoverLetter from "../../components/CoverLetter"
import Layout from "../../components/Layout"
import dummyAvatar from "../../assets/image/avatar.webp"
import Countdown, { CountdownRenderProps } from 'react-countdown';
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import defaultImage from "../../assets/image/Default/default-image.png";
import { Link } from "react-router-dom";
import { Divider, FilledInput } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';

interface dataType {
  img: string;
  name: string;
  col: number;
  row: number;
  // customClass: string;
}

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
        <div className="grid grid-cols-4 gap-3 backdrop-blur-xl bg-gradient-to-br from-[#32CD32] to-[#C8A2C8] text-black py-2 px-4 rounded-lg">
          <div><span className="text-2xl md:text-3xl">{formattedDays}</span> <br /> <span>Hari</span></div>
          <div><span className="text-2xl md:text-3xl">{hours}</span> <br /> <span>Jam</span></div>
          <div><span className="text-2xl md:text-3xl">{minutes}</span> <br /> <span>Menit</span></div>
          <div><span className="text-2xl md:text-3xl">{seconds}</span> <br /> <span>Detik</span></div>
        </div>
      );
    }
  };

  // get dataImage
  const [dataThumb, setDataThumb] = useState([])
  const getDataImage = () => {
    fetch('thumbnail.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      setDataThumb(json)
    });
  }

  // konfirmasi kehadiran
  const [value, setValue] = useState('female');
  const handleRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  // ------

  // gmaps
  // const containerStyle = {
  //   width: '100%',
  //   height: '500px'
  // };
  // const center = {
  //   lat: -6.389928,
  //   lng: 106.654667
  // };

  // const mapContainerRef = useRef<HTMLDivElement>(null);
  // const [map, setMap] = useState<google.maps.Map | null>(null);
  // ------

  // copy text
  const copyText = () => {
    // Get the text field
    // var copyText = document.getElementById("myInput");

    // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    // navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  }
  // ------

  useEffect(() => {
    // section animation doa
    const doa = gsap.timeline({
      scrollTrigger: {
        trigger: '.doa',
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      }
    });
    doa.to(".doa div", { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1 });

    // section animation the bride
    const wrapperBride = document.querySelectorAll('.card-wrapper');
    wrapperBride.forEach(el => {
      const bride = el.querySelector('.card');
      if (bride) {
        const card = gsap.timeline({
          scrollTrigger: {
            trigger: bride,
            start: "top center",
            end: "+=500 center",
            toggleActions: "play none none reverse",
            // markers: true,
          }
        });
        card.to(bride, { y: 0, duration: 1.8, ease: "back.out(1.1)", opacity: 1, rotate: 0 });
      }
    });

    getDataImage();

    // gmaps
    // if (mapContainerRef.current) {
    //   const mapOptions: google.maps.MapOptions = {
    //     center: { lat: -6.389928, lng: 106.654667 },
    //     zoom: 13
    //   };

    //   const newMap = new google.maps.Map(
    //     mapContainerRef.current,
    //     mapOptions
    //   );

    //   setMap(newMap);
    // }
    // ------
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

      <section className="max-w-screen-sm mx-auto relative overflow-hidden backdrop-blur-md bg-black/30 py-4 lg:py-10 px-4">
        <p className="font-bold text-3xl lg:text-4xl tracking-widest pb-5">PENGANTIN</p>

        <div className="card-wrapper">
          <div className="card translate-y-10 opacity-0 rotate-90 origin-top-left">
            <Card sx={{}} className="!backdrop-blur-md !bg-[#32CD32]/30">
              <CardMedia
                sx={{ height: 340 }}
                image={defaultImage}
                title="green lime"
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
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" />
        <div className="card-wrapper">
          <div className="card translate-y-10 opacity-0 -rotate-90 origin-top-right">
            <Card sx={{}} className="!card !backdrop-blur-md !bg-[#C8A2C8]/30">
              <CardMedia
                sx={{ height: 340 }}
                image={defaultImage}
                title="purple lilac"
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
          </div>
        </div>
      </section>

      <section className="max-w-screen-sm mx-auto relative overflow-hidden backdrop-blur-md bg-black/30 py-4 lg:py-10 px-4">
        <p className="font-bold text-3xl lg:text-4xl tracking-widest pb-5 uppercase">Moments</p>

        <div className="grid grid-cols-7 grid-rows-4 gap-1.5 backdrop-blur-sm bg-white">
          {dataThumb && dataThumb.map((res: dataType, index: number) => {
            return (
              <div className={`col-span-${res.col} row-span-${res.row}`} key={index}>
                <img src={res.img} alt={res.name} className={`object-cover h-full`} />
              </div>
            )
          })}
        </div>
      </section>

      <section className="max-w-screen-sm mx-auto relative overflow-hidden backdrop-blur-md bg-black/30 py-4 lg:py-10 px-4 text-center">
        <p className="text-2xl uppercase">akad nikah</p>
        <p className="py-3 text-xl leading-none">Lorem, 51 Lorem 1212 <br /> pukul 08:00 WIB - 09:00 WIB</p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus minima corrupti, ullam beatae repellat iure
        </p>

        <br />

        <p className="text-2xl uppercase">resepsi</p>
        <p className="py-3 text-xl leading-none">Lorem, 51 Lorem 1212 <br /> pukul 08:00 WIB - 09:00 WIB</p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus minima corrupti, ullam beatae repellat iure
        </p>

        <br />

        <Button variant="contained" sx={{ fontWeight: "bold" }}>
          {/* open google calendar > create event > save > copy link url */}
          <Link to={"https://calendar.google.com/calendar/u/0/r/eventedit/MWQ3bDI5OWZ1dTZkMWdpbDlzamR2OHJrdnIgcmV6emFiYWd1cy5yYkBt"} target="_blank">
            simpan acara ke kalender
          </Link>
        </Button>
      </section>

      <section className="max-w-screen-sm mx-auto relative overflow-hidden backdrop-blur-md bg-black/30 py-4 lg:py-10 px-4">
        <p className="font-bold text-3xl lg:text-4xl tracking-widest pb-5 uppercase">konfirmasi kehadiran</p>

        <form className="">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                error
                id="filled-error"
                label="Error"
                defaultValue="Hello World"
                variant="filled"
                disabled
              />
            </div>

            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleRadioButton}
              >
                <FormControlLabel value="iya" control={<Radio />} label="Iya, saya akan datang" />
                <FormControlLabel value="maaf" control={<Radio />} label="Maaf, Sepertinya tidak bisa" />
              </RadioGroup>
            </FormControl>
          </Box>

          <Button variant="contained" sx={{ fontWeight: "bold", width: "30%" }}>kirim respon</Button>
        </form>

        <div className="mt-5">
          {/* cari di google maps desktop > cari lokasi > bagikan > pilih embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63440.59240449354!2d106.5776308486328!3d-6.389223999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e7361b4cbb37%3A0x9fbe330da8cfbcbe!2sGriya%20adika%20narama!5e0!3m2!1sid!2sus!4v1715145540947!5m2!1sid!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>

          <Button variant="contained" sx={{ width: "100%", marginTop: "20px" }}>
            {/* cari di google maps desktop */}
            <Link
              target="_blank"
              to={"https://www.google.com/maps/place/6%C2%B023'23.7%22S+106%C2%B039'16.8%22E/@-6.3899227,106.6520867,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-6.389928!4d106.654667?hl=id-ID&entry=ttu"}
              style={{ fontWeight: "bold" }}
            >
              Buka di google maps
            </Link>
          </Button>
        </div>
      </section>

      <section className="max-w-screen-sm mx-auto relative overflow-hidden backdrop-blur-md bg-black/30 py-4 lg:py-10 px-4">
        <p className="font-bold text-3xl lg:text-4xl tracking-widest pb-5 uppercase">kirim hadiah</p>

        <div className="">
          <p>
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
          </p>
          <FormControl sx={{ width: "100% !important" }}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleRadioButton}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }} >
                <FormControlLabel
                  value="qris"
                  control={<Radio />}
                  label="QRIS"
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="transfer"
                  control={<Radio />}
                  label="TRANSFER"
                  labelPlacement="bottom"
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </div>

        <div className="">
          <form action="" method="post" id="qris" className="">
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { marginY: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="filled-basic"
                  label="Nama Lengkap"
                  variant="filled"
                  fullWidth
                />
                <FilledInput
                  id="filled-adornment-weight"
                  endAdornment={<InputAdornment position="end">@gmail.com</InputAdornment>}
                  aria-describedby="filled-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  placeholder="Email"
                  fullWidth
                />
                <TextField
                  // error
                  id="filled-basic"
                  label="silahkan masukan jumlah pembayaran yang di inginkan"
                  // helperText="Incorrect entry."
                  variant="filled"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  />
                <TextField
                  // error
                  id="filled-textarea"
                  label="Pesan atau Kesan"
                  placeholder="Placeholder"
                  multiline
                  fullWidth
                  variant="filled"
                />
              </div>
            </Box>
          </form>

          <div id="transfer" className="hidden">
            <p>Kamu bisa transfer ke rekening di bawah ini:</p>
            <p>
              Bank Central Asia (BCA) <br />
              <div className="flex">
                <span id="myInput">0000000000</span>
                <Button onClick={copyText}>Copy text</Button>
              </div> <br />
              a/n Lorem Lorem
            </p>
            <p>
              Bank Central Asia (BCA) <br />
              <div className="flex">
                <span id="myInput">0000000000</span>
                <Button onClick={copyText}>Copy text</Button>
              </div> <br />
              a/n Lorem Lorem
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2">
        <div className="">
          <p>ucapan & doa</p>
          <form action="" method="post">
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  error
                  id="filled-error"
                  label="Error"
                  defaultValue="Hello World"
                  variant="filled"
                />
                <TextField
                  error
                  id="filled-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                  variant="filled"
                />
              </div>
            </Box>
            <Button>Kirim Pesan</Button>
          </form>
        </div>

        <div className="">
          <ul>
            <li>
              <p>Lorem Lorem</p>
              <p>di Lorem</p>
              <p>"Hallo, salam dari kami ya :)"</p>
            </li>
            <li>
              <p>Lorem Lorem</p>
              <p>di Lorem</p>
              <p>"Hallo, salam dari kami ya :)"</p>
            </li>
            <li>
              <p>Lorem Lorem</p>
              <p>di Lorem</p>
              <p>"Hallo, salam dari kami ya :)"</p>
            </li>
            <li>
              <p>Lorem Lorem</p>
              <p>di Lorem</p>
              <p>"Hallo, salam dari kami ya :)"</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="relative w-full h-screen">
        <div className="absolute top-0 right-0">
          <p>
            Suatu kehormatan dan kebahagiaan bagi kami jika Bapak/Ibu/Saudara/i. Jika berkenan hadir untuk memberikan restu, kami ucapkan terima kasih.
          </p>
          <p>lorem dan Lorem</p>
        </div>
      </section>
    </Layout >
  )
}