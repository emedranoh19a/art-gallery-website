import About from "./components/About"
import Hero from "./components/Hero"
import Footer from "./components/Footer"


export default function Page() {
  return (
  <div className="w-full min-h-screen">
    <Hero />
    <About />
    <Footer />
  </div>
  );
}
