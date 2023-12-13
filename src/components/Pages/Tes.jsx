import {Button, Container, Card, CardBody, Par, Hed1} from "../Atom";
function Tes() {
  return (
    <Container>
      <div className="my-32"></div>
      HomePage
      <Button variant="outline-primary" className="py-1 px-5 mr-5">
        Silahkan klik
      </Button>
      <Button variant="primary" className="py-1 px-5 mr-5">
        Silahkan klik
      </Button>
      <Hed1 variant="md-title">ini adalah h1 md</Hed1>
      <Hed1 variant="lg-title">ini adalah h1 md</Hed1>
      <Par variant="p-15-semi">
        Mengundang pengguna untuk menjelajahi kekayaan alam, budaya, dan
        keindahan yang dimiliki Indonesia. Ini menyoroti keberagaman destinasi
        wisata yang dapat ditemukan di berbagai pulau dan daerah di Indonesia
      </Par>
      <Card variant="grid-1-2" className="gap-2">
        <CardBody variant="lg-card" className="bg-purple-500 h-36"></CardBody>
        <CardBody variant="lg-card" className="bg-sky-400 h-36"></CardBody>
      </Card>
      <div className="my-20"></div>
      <Card variant="grid-2-4" className="gap-4">
        <CardBody variant="md-card" className="bg-green-400 h-36"></CardBody>
        <CardBody variant="md-card" className="bg-green-400 h-36"></CardBody>
        <CardBody variant="md-card" className="bg-green-400 h-36"></CardBody>
        <CardBody variant="md-card" className="bg-green-400 h-36"></CardBody>
      </Card>
      <div className="my-20"></div>
      <Card variant="grid-2-6" className="gap-4">
        <CardBody variant="md-card" className="bg-purple-500 h-36"></CardBody>
        <CardBody variant="md-card" className="bg-purple-500 h-36"></CardBody>
        <CardBody variant="md-card" className="bg-purple-500 h-36"></CardBody>
        <CardBody variant="md-card" className="bg-purple-500 h-36"></CardBody>
        <CardBody variant="md-card" className="bg-purple-500 h-36"></CardBody>
        <CardBody variant="md-card" className="bg-purple-500 h-36"></CardBody>
      </Card>
      <div className="my-20"></div>
      <div className="my-20"></div>
      <CardBody variant="lg-card" className="bg-purple-500 h-36"></CardBody>
      <div className="my-20"></div>
    </Container>
  );
}

export default Tes;
