import "@mantine/core/styles.css";
import Footer from "./components/Footer";
import Publications from "./sections/Publications";
import About from "./sections/About";
import Resources from "./sections/Resources";
import News from "./sections/News";
import MainVisual from "./sections/MainVisual";
import Alumni from "./sections/Alumni";
import Member from "./sections/Member";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", 
      }}
    >

      <MainVisual/>
      <News/>
      <About/>
      <Resources/>
      <Member/>
      <Alumni/>
      <Publications/>
      <Footer />

    </div>
  );
}


