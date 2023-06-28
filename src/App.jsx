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
          <h1 className="text-5xl font-bold">This contest has now closed.</h1>
          <p className="md:w-[600px] mx-auto mt-7 font-semibold ">
            Thank you to everyone who submitted a recipe. We are currently
            reviewing all submissions and will reveal the finalists soon.
            <br />
            <br /> Stay tuned!
          </p>
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
