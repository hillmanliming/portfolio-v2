"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Watch from "./Watch";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container h-full">
        <div className="embla__slide flex items-center justify-center">
          <Watch />
        </div>
        <div
          className="embla__slide flex items-center justify-center"
          data-cursor="hover"
        >
          <Image
            className="image-sizing"
            src="/defensie-mb.avif"
            height={1500}
            width={2000}
            alt="Minstry of Defense project"
          ></Image>
        </div>
        <div
          className="embla__slide flex items-center justify-center"
          data-cursor="hover"
        >
          <Image
            className="image-sizing"
            src="/hornemannhuis-green.avif"
            height={1500}
            width={2000}
            alt="Minstry of Defense project"
          ></Image>
        </div>
      </div>
    </div>
  );
}
