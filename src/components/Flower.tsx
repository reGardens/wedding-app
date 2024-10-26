import React, { useEffect, useRef } from "react";

import daunAtas01 from "../assets/image/flower/daun-atas-01.png";
import daunAtas02 from "../assets/image/flower/daun-atas-02.png";
import daunAtas03 from "../assets/image/flower/daun-atas-03.png";
import daunBottom03 from "../assets/image/flower/daun-bottom-03.png";
import daunBottom03Reverse from "../assets/image/flower/daun-bottom-03Reverse.png";
import daunBottom05 from "../assets/image/flower/daun-bottom-05.png";
import daunBottom0501 from "../assets/image/flower/daun-bottom-0501.png";
import daunBottom01Scale from "../assets/image/flower/daun-bottom-01Scale.png";
import daunBottom01Turu from "../assets/image/flower/daun-bottom-01Turu.png";
import daunBottom02 from "../assets/image/flower/daun-bottom-02.png";
import daunBottom04 from "../assets/image/flower/daun-bottom-04.png";

import anime from "animejs";

const useAnimeAnimation = (selector: string, options: anime.AnimeParams) => {
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    animationRef.current = anime({
      targets: selector,
      ...options,
    });
  }, [selector, options]);

  return animationRef;
};

export const DaunTopLeftAmplop: React.FC = () => {
  useAnimeAnimation(".animation-customTLA", {
    translateX: [-100, 0],
    translateY: [-100, 0],
    scale: [0, 1],
    easing: "easeInOutSine",
    duration: 1000,
  });

  return (
    <>
      <div className="animation-customTLA absolute -top-2 left-0 z-30">
        <img
          src={daunAtas01}
          className="animate-spinTopLeft01"
          alt="Daun Atas 01"
        />
      </div>
      <div className="animation-customTLA absolute top-0 -left-2 z-30">
        <img
          src={daunAtas02}
          className="animate-spinTopLeft02"
          alt="Daun Atas 02"
        />
      </div>
      <div className="animation-customTLA absolute top-3 -left-1 z-30">
        <img
          src={daunAtas03}
          className="animate-spinTopLeft03"
          alt="Daun Atas 03"
        />
      </div>
    </>
  );
};

export const DaunTopLeft: React.FC = () => {
  useAnimeAnimation(".animation-customTL", {
    translateX: [-100, 0],
    translateY: [-100, 0],
    scale: [0, 1],
    easing: "easeInOutSine",
    duration: 1000,
  });

  return (
    <>
      <div className="animation-customTL absolute -top-2 left-0 z-30">
        <img
          src={daunAtas01}
          className="animate-spinTopLeft01"
          alt="Daun Atas 01"
        />
      </div>
      <div className="animation-customTL absolute top-0 -left-2 z-30">
        <img
          src={daunAtas02}
          className="animate-spinTopLeft02"
          alt="Daun Atas 02"
        />
      </div>
      <div className="animation-customTL absolute top-3 -left-1 z-30">
        <img
          src={daunAtas03}
          className="animate-spinTopLeft03"
          alt="Daun Atas 03"
        />
      </div>
    </>
  );
};

export const DauntTopRight: React.FC = () => {
  useAnimeAnimation(".animation-customTR", {
    translateX: [100, 0],
    translateY: [-100, 0],
    scale: [0, 1],
    easing: "easeInOutSine",
    duration: 1000,
  });

  return (
    <>
      <div className="animation-customTR absolute top-[0] right-[40px] z-30">
        <img
          src={daunBottom05}
          className="animate-spinTopRight01"
          alt="Daun Bottom 05"
        />
      </div>
      <div className="animation-customTR absolute top-0 right-0 z-30">
        <img
          src={daunBottom03}
          className="animate-spinTopRight02"
          alt="Daun Bottom 03"
        />
      </div>
      <div className="animation-customTR absolute top-[45px] right-[0] z-30">
        <img
          src={daunBottom0501}
          className="animate-spinTopRight03"
          alt="Daun Bottom 0501"
        />
      </div>
    </>
  );
};

export const DaunBottomLeft: React.FC = () => {
  useAnimeAnimation(".animation-customBL", {
    translateX: [-100, 0],
    translateY: [100, 0],
    scale: [0, 1],
    easing: "easeInOutSine",
    duration: 1000,
  });

  return (
    <>
      <div className="animation-customBL absolute bottom-1 left-2 z-30">
        <img
          src={daunBottom01Scale}
          className="animate-spinBottomLeft01"
          alt="Daun Bottom 01 Scale"
        />
      </div>
      <div className="animation-customBL absolute bottom-1 left-2 z-30">
        <img
          src={daunBottom01Turu}
          className="animate-spinBottomLeft02"
          alt="Daun Bottom 01 Turu"
        />
      </div>
    </>
  );
};

export const DaunBottomRight: React.FC = () => {
  useAnimeAnimation(".animation-customBR", {
    translateX: [100, 0],
    translateY: [100, 0],
    scale: [0, 1],
    easing: "easeInOutSine",
    duration: 1000,
  });

  return (
    <>
      <div className="animation-customBR absolute -bottom-2 -right-2 z-30">
        <img
          src={daunBottom02}
          className="animate-spinBottomRight02"
          alt="Daun Bottom 02"
        />
      </div>
      <div className="animation-customBR absolute bottom-0 right-0 z-30">
        <img
          src={daunBottom03Reverse}
          className="animate-spinBottomRight03"
          alt="Daun Bottom 03 Reverse"
        />
      </div>
      <div className="animation-customBR absolute -bottom-4 right-7 z-30">
        <img
          src={daunBottom04}
          className="animate-spinBottomRight04"
          alt="Daun Bottom 04"
        />
      </div>
    </>
  );
};
