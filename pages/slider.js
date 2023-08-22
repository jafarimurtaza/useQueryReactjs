import sliderData from "@/lib/sliderData";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export default function slider() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div
      className="overflow-hidden bg-gray-200 w-full mx-auto flex items-center justify-center h-screen"
      ref={emblaRef}>
      <div className="flex">
        {sliderData?.map((item) => {
          return (
            <div className="embla__slide relative h-full w-full" key={item.id}>

                {/* the image */}
              <img className="w-full h-full" src={item.url} alt="" />

              {/* title/subtitle */}
              <h1 className="absolute top-1/2 left-1/2 w-full md:w-auto transform -translate-x-1/2 translate-y-[3rem] md:translate-y-[9rem]  lg:translate-y-48 bg-cyan-600 py-2 lg:py-4 px-2 lg:px-8 text-xl lg:text-2xl text-white font-extrabold">
                {item.title}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
