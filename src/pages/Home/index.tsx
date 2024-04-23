import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Home() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    if (slug) {
      getPost(slug);
    }
  }, [slug]);
  
  const getPost = (slug: string) => {
    console.log(slug);
  };

  return(
    <p className="text-red-500">Selamat Datang {slug}</p>
  )
}