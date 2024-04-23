import { useRouteError } from "react-router-dom";
import { useEffect } from "react";
import imgUrl from '../public/Error/404.gif'

export default function ErrorPage() {
  const error = useRouteError();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div id="error-page">
      <img id="hero-img" src={imgUrl} alt="error-page" className="w-full h-screen object-contain" />
      <h1>xixixi!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{typeof error === "string" ? error : (error as Error).message}</i>
      </p>
    </div>
  );
}
