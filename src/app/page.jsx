import AboutPage from "@/components/AboutPage";
import Main from "@/components/Main";
import ParticleContainer from "@/components/particles/ParticleContainer";

export default function Home() {
  return (

    <>
      {/* Home section */}
      <section className="bg-blue-900" id="home">
        <ParticleContainer />
        <Main />
      </section>

      {/* About section */}
      <section className="bg-gray-200" id="about">
        <AboutPage />
      </section>

      {/* Portfolio section */}
      <section id="portfolio">

      </section>

      {/* Contact Section */}
      <section id="contact">

      </section>
    </>

  )
}
