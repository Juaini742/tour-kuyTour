import {Hed1, Par} from "../../../Atom";
import {IoBed} from "react-icons/io5";
import {FaPlaneDeparture, FaRoute} from "react-icons/fa";

function HeroSection() {
  return (
    <section className="h-[800px] bg-[url('../img/hero.jpg')] bg-cover relative text-white">
      <div className="w-full h-full bg-black/30 absolute" />
      <div className="">
        <img src="" alt="" className="" />
      </div>
      <div className="container absolute z-10 top-64 left-0 right-0">
        <div className="w-full lg:w-[70%]">
          <div className="flex gap-2 mb-3">
            <button className="flex gap-2 text-lg py-1 px-3 icon-hover">
              <IoBed /> Stay
            </button>
            <button className="flex gap-2 text-lg py-1 px-3 icon-hover">
              <FaPlaneDeparture /> Tour
            </button>
            <button className="flex gap-2 text-lg py-1 px-3 icon-hover">
              <FaRoute /> Destinasi
            </button>
          </div>
          <Hed1 variant="lg-title">
            Jelajahi Keindahan Indonesia, Satu Paket Wisata pada Satu Klik
          </Hed1>
          <Par variant="p-15">
            Mengundang pengguna untuk menjelajahi kekayaan alam, budaya, dan
            keindahan yang dimiliki Indonesia. Ini menyoroti keberagaman
            destinasi wisata yang dapat ditemukan di berbagai pulau dan daerah
            di Indonesia.
          </Par>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
