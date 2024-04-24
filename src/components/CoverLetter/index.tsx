import Layout from "../Layout";
import dummyAvatar from "../../assets/image/avatar.webp"
import { Avatar, Button } from "@mui/material"
import gsap from "gsap";
// import backgroundDummy from "../../assets/image/background-dummy.webp"

export default function CoverLetter() {
    // get query parameter url
    const queryParameters = new URLSearchParams(window.location.search)
    const to = queryParameters.get("to")
    const and = queryParameters.get("and")

    const handleCoverLetter = () => {
        gsap.to(".cover", {
            rotation: -50,
            x: '-100%',
            duration: 1,
            opacity: 0,
            display: 'none'
        });
    }
    return (
        <Layout>
            <div className="cover max-w-screen-sm h-screen absolute top-0 left-0 z-[999]">
                <img src={dummyAvatar} alt="" loading="lazy" srcSet="" className="max-w-screen-sm h-screen absolute top-0 left-0 w-full object-cover" />
                <div className="cover max-w-screen-sm h-screen mx-auto text-white dark:text-white text-center overflow-y-auto backdrop-blur-xl bg-white/30 dark:bg-black/30 p-4 lg:p-10">
                    <div className="mb-10">
                        <Avatar
                            alt="Remy Sharp"
                            src={dummyAvatar}
                            sx={{ width: 200, height: 200, margin: '0 auto' }}
                        />
                    </div>
                    <p className="font-bold lg:text-lg">Pernikahan</p>
                    <p className="font-bold text-3xl lg:text-4xl font-greatVibes tracking-widest py-1">Personalia & Personalia</p>
                    <p>Dengan rasa syukur kepada Tuhan Yang Maha Esa,<br /> kami dengan bahagia mengundang Anda untuk berbagi kebahagiaan kami dalam upacara pernikahan kami.</p>

                    <div className="border rounded-lg py-5 mt-4 mb-5">
                        <p className="font-bold text-lg lg:text-xl uppercase py-1">{to} & {and}</p>
                        <p className="font-bold text-3xl lg:text-4xl font-greatVibes tracking-widest pb-1">03. 05. 1997</p>
                        <p>Di Tempat: </p>
                    </div>

                    {/* <div className="grid grid-cols-7 text-left">
                    <p className="col-span-1">Lokasi:</p>
                    <p className="col-span-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate <br />
                    <Button variant="contained" className="!font-bold">Klik Untuk Lihat Lokasi</Button>
                    </p>
                </div> */}

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