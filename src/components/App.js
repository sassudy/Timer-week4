import PageHeading from "./PageHeading";
import List from "./List";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Timer from "./Timer";

export default function App() {
  return (
    <div className="center">
      <PageHeading />
      <Timer />
      <List />
      <Gallery />
      <Footer />
    </div>
  );
}
