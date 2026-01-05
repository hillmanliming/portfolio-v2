"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Watch from "./Watch";
import Link from "next/link";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container h-full">
        <div
          className="embla__slide flex items-center justify-center"
          data-cursor="hover"
          data-title="Swipe left or right"
        >
          <Watch />
        </div>
        <div className="embla__slide flex items-center justify-center">
          <Link
            href="/projects/defensie"
            data-cursor="hover"
            data-title="Ministry of Defense"
          >
            <Image
              className="image-sizing"
              src="/defensie-mb.avif"
              height={1500}
              width={2000}
              alt="Ministry of Defense project"
            ></Image>
          </Link>
        </div>
        <div className="embla__slide flex items-center justify-center">
          <Link
            href="/projects/hornemannhuis"
            data-cursor="hover"
            data-title="Het Hornemannhuis"
          >
            <Image
              className="image-sizing"
              src="/hornemannhuis-green.avif"
              height={1500}
              width={2000}
              alt="Minstry of Defense project"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}
