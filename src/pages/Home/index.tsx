// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

export default function Home() {
  // example 1
  // const { slug } = useParams<{ slug: string }>();
  // useEffect(() => {
  //   if (slug) {
  //     getPost(slug);
  //   }
  // }, [slug]);
  // const getPost = (slug: string) => {
  //   console.log(slug);
  // };

  // example 2
  const queryParameters = new URLSearchParams(window.location.search)
  const type = queryParameters.get("type")
  const name = queryParameters.get("name")

  return (
    <>
      {/* <p className="text-red-500">Selamat Datang {slug}</p> */}
      <p>Type: {type}</p>
      <p>Name: {name}</p>
    </>
  )
}