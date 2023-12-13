import {Button, Card, CardBody, Container, Hed1, Par} from "../../../Atom";

function FourthSectin() {
  const data = [
    {
      id: 1,
      img: "../img/card1.jpg",
      title: "Banjarmasin Indah",
      desc: " Temukan tempat refresing terbaik hanya disini",
      price: "IDR. 45.000",
    },
    {
      id: 2,
      img: "../img/card2.jpg",
      title: "Air Terjun Somo",
      desc: " Temukan tempat refresing terbaik hanya disini",
      price: "IDR. 105.000",
    },
    {
      id: 3,
      img: "../img/card3.jpg",
      title: "Pantai Malang",
      desc: " Temukan tempat refresing terbaik hanya disini",
      price: "IDR. 100.000",
    },
    {
      id: 4,
      img: "../img/card4.jpg",
      title: "Pantai Batam",
      desc: " Temukan tempat refresing terbaik hanya disini",
      price: "IDR. 120.000",
    },
    {
      id: 5,
      img: "../img/card5.jpg",
      title: "Kota Malang",
      desc: " Temukan tempat refresing terbaik hanya disini",
      price: "IDR. 110.000",
    },
    {
      id: 6,
      img: "../img/card6.jpg",
      title: "Bali",
      desc: " Temukan tempat refresing terbaik hanya disini",
      price: "IDR. 450.000",
    },
    {
      id: 7,
      img: "../img/card7.jpg",
      title: "Pantai Alang",
      desc: " Temukan tempat refresing terbaik hanya disini",
      price: "IDR. 400.000",
    },
    {
      id: 8,
      img: "../img/card8.jpg",
      title: "Telok Pasit",
      desc: " Temukan tempat refresing terbaik hanya disini",
      price: "IDR. 450.000",
    },
  ];
  return (
    <Container className="mt-10">
      <Hed1 variant="sm-title">Pilih Destinasi Keinginan Anda</Hed1>
      <Card variant="grid-2-4" className="gap-4 mt-10">
        {data.map((item) => (
          <CardBody
            key={item.id}
            variant="md-card"
            className="h-80 lg:h-[550px] overflow-hidden relative shadow-xl hover:scale-110 trans-300"
          >
            <div className="rounded-t-2xl overflow-hidden  ">
              <img src={item.img} alt="" />
            </div>
            <div className="h-full w-full absolute bg-gradient-to-t from-black via-black to-black/0 text-white px-3 pt-16 lg:pt-48 top-24 lg:top-40 rounded-b-2xl">
              <h3 className="font-bold text-sm">{item.title}</h3>
              <Par variant="p-12">{item.desc}</Par>
              <h3 className="font-bold text-base">{item.price}</h3>
              <div>
                <Button variant="outline-primary" className="mt-2 px-3">
                  Ambil
                </Button>
              </div>
            </div>
          </CardBody>
        ))}
      </Card>
    </Container>
  );
}

export default FourthSectin;
