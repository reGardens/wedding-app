import Layout from "../Layout";
import bgEnvelope from "../../assets/image/bg-envelope.webp";
import { Avatar, Button, styled } from "@mui/material";
import gsap from "gsap";
import { useEffect, useMemo, useState } from "react";
import gifMusic from "/gif/music.gif";
import gifPause from "/icon/pause-button.webp";
import { purple } from "@mui/material/colors";
import { ButtonProps } from "@mui/base";
// import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function CoverLetter() {
  // get query parameter url
  const queryParameters = new URLSearchParams(window.location.search);
  const to = queryParameters.get("to");
  const and = queryParameters.get("and");

  // modal
  const [showModal, setShowModal] = useState<boolean>(true);

  // audio
  const [play, setPlay] = useState(false);
  const audio = useMemo(() => {
    return new Audio("/Mp3/thousand-years.mp3");
  }, []);

  //   Button
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText("#7E60BF"),
    backgroundColor: "#7E60BF",
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  useEffect(() => {
    localStorage.setItem("play", JSON.stringify(play));

    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [play, showModal]);

  const handleCoverLetter = () => {
    // handle modal animation
    gsap.to(".cover", {
      rotation: -50,
      x: "-100%",
      duration: 1,
      opacity: 0,
      display: "none",
    });
    gsap.to(".modal", {
      duration: 1,
      opacity: 0,
      display: "none",
    });

    // handle button play
    const playMusic = localStorage.getItem("play");
    if (playMusic !== null && playMusic === "false") {
      audio.play();
      audio.volume = 0.3;
      audio.loop = true;
      localStorage.setItem("play", JSON.stringify(true));
      setPlay(true);
    } else if (playMusic !== null && playMusic === "true") {
      audio.pause();
      localStorage.setItem("play", JSON.stringify(false));
      setPlay(false);
    } else {
      audio.pause();
    }

    setShowModal(false);
  };

  return (
    <Layout>
      {/* Cover Latter */}
      <div className="modal w-full h-full top-0 left-0 mx-auto z-[999] fixed">
        <div className="cover max-w-screen-sm h-screen mx-auto relative z-[998]">
          <img
            src={bgEnvelope}
            alt=""
            loading="lazy"
            srcSet=""
            className="h-screen absolute top-0 left-0 w-full object-cover mx-auto"
          />
          <div className="cover flex flex-col justify-start sm:justify-center max-w-screen-sm h-screen mx-auto text-white dark:text-white text-center overflow-y-auto backdrop-blur-xl bg-white/30 dark:bg-black/30 p-4 lg:p-10">
            <p className="font-bold lg:text-lg mb-5 tracking-widest uppercase">
              Undangan Pernikahan
            </p>
            <div className="mb-3">
              <div className="left-0 top-0 flex justify-center items-center border-1 w-full my-3">
                <div className="absolute rounded-full bg-[#7E60BF] w-[230px] h-[230px]"></div>
                <div className="absolute rounded-full bg-white w-[215px] h-[215px]"></div>
                <Avatar
                  alt="Remy Sharp"
                  src={bgEnvelope}
                  sx={{ width: 200, height: 200, margin: "0 auto" }}
                  className="!relative"
                />
              </div>
            </div>
            <p className="font-bold text-3xl font-greatVibes tracking-[10px] py-4">
              R & R
            </p>
            <p className="text-center">
              Dengan rasa syukur kepada Tuhan Yang Maha Esa,
              <br /> kami dengan bahagia mengundang Anda
            </p>

            <div className="rounded-lg py-3 my-5 bg-[#7E60BF] shadow-xl">
              <p className="font-bold text-lg lg:text-xl uppercase">
                Dear <br />
                {to} & {and}
                {/* test & test */}
              </p>
            </div>

            <p className="text-center mb-4">
              Untuk berbagi kebahagiaan kami dalam upacara pernikahan kami.
            </p>

            <ColorButton
              variant="contained"
              sx={{
                fontWeight: "bold",
                width: 190,
                marginX: "auto",
              }}
              endIcon={<DraftsIcon />}
              onClick={handleCoverLetter}
            >
              Buka Undangan
            </ColorButton>
          </div>
        </div>
      </div>

      {/* Play Button Music */}
      <div className="fixed w-full mx-auto z-[997]">
        <div className="max-w-screen-sm mx-auto">
          {localStorage.getItem("play") !== null &&
          localStorage.getItem("play") === "true" ? (
            <Button className="" onClick={handleCoverLetter}>
              <img
                src={gifMusic}
                alt=""
                className="w-14 md:w-16 md:h-20 object-contain drop-shadow-2xl"
              />
            </Button>
          ) : (
            <Button className="" onClick={handleCoverLetter}>
              <img
                src={gifPause}
                alt=""
                className="w-14 md:w-16 md:h-20 p-2 object-contain drop-shadow-2xl"
              />
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
}
