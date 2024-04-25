// import { useMemo } from "react";

// interface MusicProps {
//     url: string;
// }

// export default function Music({ url }: MusicProps) {
//     const audio = useMemo(() => {
//         return new Audio('../../../public/Mp3/song.mp3');
//     }, [url]);
//     return null
// }
export const Music = () => {
    new Audio('../../../public/Mp3/song.mp3');
}