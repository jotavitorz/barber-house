import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Plans } from "./_components/plans";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Plans />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )

}
