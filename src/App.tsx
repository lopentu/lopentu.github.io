import "@mantine/core/styles.css";
import Footer from "./components/Footer";
import Publications from "./sections/Publications";
import About from "./sections/About";
import Resources from "./sections/Resources";
import News from "./sections/News";
import MainVisual from "./sections/MainVisual";
import Alumni from "./sections/Alumni";
import Member from "./sections/Member";
import { AppShell, MantineProvider, Button } from "@mantine/core";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewsArchive from "./sections/NewsArchive";
import NewsDetail from "./sections/NewsDetail";

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

                    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                      <Button component={Link} to="/alumni" variant="outline">
                        歷任成員
                      </Button>
                    </div>

                    {/* Alumni is a separate page */}
                    <div id="publications">
                      <Publications />
                    </div>
                  </>
                }
              />
              <Route path="/news" element={<NewsArchive />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/alumni" element={<Alumni />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
        <Footer />
      </Router>
    </MantineProvider>
  );
}
