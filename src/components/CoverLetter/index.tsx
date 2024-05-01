import Layout from "../Layout";
import dummyAvatar from "../../assets/image/avatar.webp"
import { Avatar, Button } from "@mui/material"
import gsap from "gsap";
import { useEffect, useMemo, useState } from "react";
import gifMusic from '/gif/music.gif'
import gifPause from '/icon/pause-button.webp'

export default function CoverLetter() {
    // get query parameter url
    const queryParameters = new URLSearchParams(window.location.search)
    const to = queryParameters.get("to")
    const and = queryParameters.get("and")

    // modal
    const [showModal, setShowModal] = useState<boolean>(true);

    // audio
    const [play, setPlay] = useState(false)
    const audio = useMemo(() => {
        return new Audio('/Mp3/test.mp3');
    }, []);

    useEffect(() => {
        localStorage.setItem('play', JSON.stringify(play));

        if (showModal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [play, showModal]);

    const handleCoverLetter = () => {
        // handle modal animation
        gsap.to(".cover", {
            rotation: -50,
            x: '-100%',
            duration: 1,
            opacity: 0,
            display: 'none'
        });
        gsap.to(".modal", {
            duration: 1,
            opacity: 0,
            display: 'none'
        });

        // handle button play
        const playMusic = localStorage.getItem("play");
        if (playMusic !== null && playMusic === "false") {
            audio.play();
            audio.volume = 0.3;
            audio.loop = true;
            localStorage.setItem('play', JSON.stringify(true));
            setPlay(true)
        } else if (playMusic !== null && playMusic === "true") {
            audio.pause();
            localStorage.setItem('play', JSON.stringify(false));
            setPlay(false)
        } else {
            audio.pause();
        }

        setShowModal(false)
    }

    return (
        <Layout>
            <div className="modal w-full h-full top-0 left-0 mx-auto flex justify-center z-[999] overflow-hidden fixed">
                <div className="cover max-w-screen-sm h-screen mx-auto relative z-[998]">
                    <img src={dummyAvatar} alt="" loading="lazy" srcSet="" className="h-screen absolute top-0 left-0 w-full object-cover mx-auto" />
                    <div className="cover flex flex-col justify-start sm:justify-center max-w-screen-sm h-screen mx-auto text-white dark:text-white text-center overflow-y-auto backdrop-blur-xl bg-white/30 dark:bg-black/30 p-4 lg:p-10">
                        <p className="font-bold lg:text-lg mb-5 tracking-widest uppercase">Undangan Pernikahan</p>
                        <div className="">
                            <Avatar
                                alt="Remy Sharp"
                                src={dummyAvatar}
                                sx={{ width: 200, height: 200, margin: '0 auto' }}
                            />
                        </div>
                        <p className="font-bold text-3xl lg:text-4xl font-greatVibes tracking-widest pt-5 pb-1">Personalia & Personalia</p>
                        <p className="font-bold text-3xl lg:text-4xl font-greatVibes tracking-widest pb-5">03. 05. 1997</p>
                        <p>Dengan rasa syukur kepada Tuhan Yang Maha Esa,<br /> kami dengan bahagia mengundang Anda untuk berbagi kebahagiaan kami dalam upacara pernikahan kami.</p>

                        <div className="border rounded-lg py-3 mt-4 mb-5">
                            <p className="font-bold text-lg lg:text-xl uppercase py-1">{to} & {and}</p>
                            <p>Di Tempat: </p>
                        </div>

                        <Button
                            variant="contained"
                            sx={{
                                fontWeight: 'bold',
                                width: 170,
                                marginX: 'auto',
                            }}
                            onClick={handleCoverLetter}
                        >
                            Buka Undangan
                        </Button>
                    </div>
                </div>
            </div>

            {/* play button music */}
            <div className="fixed w-full mx-auto z-[997]">
                <div className="max-w-screen-sm mx-auto">
                    {localStorage.getItem("play") !== null && localStorage.getItem("play") === "true" ?
                        <Button
                            className=""
                            onClick={handleCoverLetter}
                        >
                            <img src={gifMusic} alt="" className="w-14 md:w-16 md:h-20 object-contain drop-shadow-2xl" />
                        </Button>
                        :
                        <Button
                            className=""
                            onClick={handleCoverLetter}
                        >
                            <img src={gifPause} alt="" className="w-14 md:w-16 md:h-20 p-2 object-contain drop-shadow-2xl" />
                        </Button>
                    }
                </div>
            </div>
        </Layout>
    )
}