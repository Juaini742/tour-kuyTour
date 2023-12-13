import {Container, Hed1, Button, Par} from "../../../Atom";

function FisrtSection() {
  return (
    <Container className="mt-10">
      <Hed1 variant="sm-title">Mau Kemanakah Anda...?</Hed1>
      <div className="mt-4 relative">
        <input
          type="search"
          className="pl-5 border-2 w-full h-14 rounded-full border-primary shadow-md shadow-primary/40"
          placeholder="Silahkan Masukkan Keyword Disini..."
        />
        <Button
          variant="primary"
          className="px-10 py-2 absolute right-3 bottom-2"
        >
          Cari
        </Button>
      </div>
      <div className="mt-10 rounded-3xl w-full h-[400px] bg-[url('../img/section1.jpg')] bg-cover overflow-hidden">
        <div className="w-full h-full bg-black/30 flex justify-center flex-col p-5 text-white">
          <h3>Pantai Bali</h3>
          <Hed1 variant="md-title">Bersatu Dalam Hemat!</Hed1>
          <Par variant="p-15" className="w-full md:w-[80%]">
            Gabungkan Penerbangan dan Hotel, Rasakan Penawaran Istimewa untuk
            Liburan yang Lebih Terjangkau.
          </Par>
          <div>
            <Button variant="primary" className="px-5 py-2 mt-3">
              Lihat detail paket
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default FisrtSection;
