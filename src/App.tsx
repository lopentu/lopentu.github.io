import "@mantine/core/styles.css";
import Footer from "./components/Footer";
import Publications from "./sections/Publications";
import About from "./sections/About";
import Resources from "./sections/Resources";
import News from "./sections/News";
import MainVisual from "./sections/MainVisual";
import Alumni from "./sections/Alumni";
import Member from "./sections/Member";
import { AppShell, MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsArchive from "./sections/NewsArchive";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <AppShell>
          <Header />
          <AppShell.Main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <MainVisual />
                    <div id="news">
                      <News />
                    </div>
                    <div id="about">
                      <About />
                    </div>
                    <div id="resources">
                      <Resources />
                    </div>
                    <div id="member">
                      <Member />
                    </div>
                    <div id="alumni">
                      <Alumni />
                    </div>
                    <div id="publications">
                      <Publications />
                    </div>
                  </>
                }
              />
              <Route path="/news" element={<NewsArchive />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
        <Footer />
      </Router>
    </MantineProvider>
  );
}
