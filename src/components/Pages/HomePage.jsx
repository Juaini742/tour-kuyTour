import Template from "../Template";
import HomeOrganism from "../Organism/Home";
import Tes from "./Tes";

function HomePage() {
  return (
    <Template>
      <HomeOrganism />
      <div className="my-80"></div>
      <Tes />
    </Template>
  );
}

export default HomePage;
