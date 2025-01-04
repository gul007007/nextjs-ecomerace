import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import Navbar from "../components/nav/Navbar";
import Banner from "./banner/Banner";

const page = () => {
  return (
    <>
      <Navbar />
      <Banner />

      <div className="my-4 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default page;
