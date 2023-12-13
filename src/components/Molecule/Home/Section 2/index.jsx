import {Container, Hed1} from "../../../Atom";

function SecondSection() {
  return (
    <Container className="mt-10">
      <Hed1 variant="sm-title">Tentukan Lokasi Pilihan Anda</Hed1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="h-64 bg-[url('../img/banjar.jpg')] bg-cover rounded-3xl overflow-hidden shadow-lg">
          <div className="w-full h-full bg-black/30 flexbox-center hover:scale-125 hover:transition ease-in-out duration-300">
            <h3 className="text-white font-bold">Banjarmasin</h3>
          </div>
        </div>
        <div className="h-64 bg-[url('../img/malang.jpg')] bg-cover rounded-3xl overflow-hidden shadow-lg">
          <div className="w-full h-full bg-black/30 flexbox-center hover:scale-125 hover:transition ease-in-out duration-300">
            <h3 className="text-white font-bold">Malang</h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
        <div className="h-64 bg-[url('../img/lombok.jpg')] bg-cover rounded-3xl overflow-hidden shadow-lg">
          <div className="w-full h-full bg-black/30 flexbox-center hover:scale-125 hover:transition ease-in-out duration-300">
            <h3 className="text-white font-bold">Lombok</h3>
          </div>
        </div>
        <div className="h-64 bg-[url('../img/bandung.jpg')] bg-cover rounded-3xl overflow-hidden shadow-lg">
          <div className="w-full h-full bg-black/30 flexbox-center hover:scale-125 hover:transition ease-in-out duration-300">
            <h3 className="text-white font-bold">Bandung</h3>
          </div>
        </div>
        <div className="h-64 bg-[url('../img/section1.jpg')] bg-cover rounded-3xl overflow-hidden shadow-lg">
          <div className="w-full h-full bg-black/30 flexbox-center hover:scale-125 hover:transition ease-in-out duration-300">
            <h3 className="text-white font-bold">Bali</h3>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SecondSection;
