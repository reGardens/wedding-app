import Layout from "../Layout";
import dummyAvatar from "../../assets/image/avatar.webp"
import { Avatar, Button } from "@mui/material"
import gsap from "gsap";
import { useEffect, useMemo, useState } from "react";
import { Music } from "../Music";

interface MusicProps {
    url: string;
}

export default function CoverLetter({ url }: MusicProps) {
    // get query parameter url
    const queryParameters = new URLSearchParams(window.location.search)
    const to = queryParameters.get("to")
    const and = queryParameters.get("and")

    const [play, setPlay] = useState(false)
    // const audio = useMemo(() => {
    //     return new Audio('../../../public/Mp3/song.mp3');
    // }, [url]);

    useEffect(() => {
        localStorage.setItem('play', JSON.stringify(play));
    }, []);

    const handleCoverLetter = () => {
        // handle animation
        gsap.to(".cover", {
            rotation: -50,
            x: '-100%',
            duration: 1,
            opacity: 0,
            display: 'none'
        });

        // handle button play
        const playMusic = localStorage.getItem("play");
        if (playMusic !== null && playMusic === "false") {
            Music.play();
            localStorage.setItem('play', JSON.stringify(true));
        } else {
            Music.pause();
        }
    }

    return (
        <Layout>
            <div className="cover max-w-screen-sm h-screen absolute top-0 left-0 z-[999]">
                <img src={dummyAvatar} alt="" loading="lazy" srcSet="" className="max-w-screen-sm h-screen absolute top-0 left-0 w-full object-cover" />
                <div className="cover max-w-screen-sm h-screen mx-auto text-white dark:text-white text-center overflow-y-auto backdrop-blur-xl bg-white/30 dark:bg-black/30 p-4 lg:p-10">
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
                            fontWeight: 'bold'
                        }}
                        onClick={handleCoverLetter}
                    >
                        Buka Undangan
                    </Button>
                </div>
            </div>
        </Layout>
    )
}