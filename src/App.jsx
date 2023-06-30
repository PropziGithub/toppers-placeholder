import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Rules from "@/components/Rules";
import "@/styles/tailwind.css";
import { Route, Routes } from "react-router-dom";

function Index() {
  return (
    <>
      <Header />
      <main className="grid h-[calc(100vh-225px)] place-items-center bg-black px-4">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">This contest is now closed.</h1>
          <p className="md:w-[850px] mx-auto mt-7 font-semibold ">
            A sincere thanks to everyone who submitted an entry. We were
            delightfully overwhelmed by the number of entries we received and so
            it may take us a little longer than anticipated to select the
            finalists. Keep checking here to see the final recipes and for your
            chance to vote for your favourite!
          </p>

          <div className="flex justify-center items-center mt-10 w-[187px] h-[100px] mx-auto">
            <img src="./toppers-main-section-logo.png" className="w-full h-full" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/rules" element={<Rules />} />
      <Route
        path="*"
        element={
          <div>
            <h1 className="font-bold">Not Found</h1>
          </div>
        }
      />
    </Routes>
  );
}
export default App;
