import {Button, Container, Hed1, Par} from "../../../Atom";
import Box from "@mui/joy/Box";

function ThirdSection() {
  const data = [
    {
      src: "../img/offer1.jpg",
      title: "Nikmati Liburan Terpanjang Anda",
      description:
        "Telusuri Properti yang Menawarkan Penginapan Jangka Panjang,Banyak dengan Tarif Bulanan yang Dikurangi",
    },
    {
      src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
      title: "Mulai Perjalanan Retreat yang Paling Ultimate",
      description:
        "Temukan Akomodasi yang Ideal untuk Liburan yang Panjang, Seringkali Dengan Harga Lebih Murah",
    },
  ];
  return (
    <Container className="mt-10">
      <Hed1 variant="sm-title">Tawaran kami</Hed1>
      <div className="w-full flex gap-3 p-5 overflow-auto">
        {data.map((item) => (
          <div key={item.title} className="shadow-xl flex gap-3">
            <div
              className="w-[500px] bg-cover rounded-l-xl"
              style={{backgroundImage: `url(${item.src})`}}
            />
            <Box className="py-3 px-5 flex flex-col justify-center">
              <h3 className="font-bold mb-2">{item.title}</h3>
              <Par variant="p-12" className="leading-6 mb-2">
                {item.description}
              </Par>
              <div>
                <Button variant="primary" className="py-1 px-5">
                  Ambil
                </Button>
              </div>
            </Box>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ThirdSection;
