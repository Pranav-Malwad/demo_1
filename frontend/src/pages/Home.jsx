import Navbar1 from "../Componants/Navbar1.jsx";
import Carasoule from "../Componants/Carasoule.jsx";
import Categories from "../Componants/Categories.jsx";
import Card from "../Componants/Card.jsx";
const Home = () => {
  return (
    <div className="">
      <Carasoule />
      <Categories />

      <div className="grid grid-cols-4 ">
        <Card></Card>
      </div>
    </div>
  );
};

export default Home;
