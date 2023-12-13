import {items} from "./db";
import {Container} from "../Atom";
import {IoMenu} from "react-icons/io5";
import {useState} from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-black/50 w-full backdrop-blur-sm fixed z-50">
      <Container className="h-16 flexbox-between-center text-white">
        <div className="flex md:hidden">
          <button onClick={toggle} className="text-4xl">
            <IoMenu />
          </button>
        </div>
        <div>
          <span className="text-xl font-bold">KuyTour</span>
        </div>
        <ul
          className={`flex gap-3 scale-0 md:scale-100 absolute md:static top-20 bg-black/50 md:bg-transparent flex-col md:flex-row p-5 rounded-xl ${
            isOpen ? "scale-100 duration-300" : " duration-300"
          } `}
        >
          {items.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className="font-semibold text-lg hover:border-b-2"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden"></div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
