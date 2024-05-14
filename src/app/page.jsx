import AboutPage from "@/components/AboutPage";
import CVPage from "@/components/CVPage";
import Main from "@/components/Main";
import Portfolio from "@/components/Portfolio";
import ParticleContainer from "@/components/particles/ParticleContainer";

export default function Home() {
  return (

    <>
      {/* Home section */}
      <section className="bg-blue-900" id="home">
        {/* Particle Animation */}
        <ParticleContainer />

        {/* Page Content */}
        <Main />
      </section>

      {/* About section */}
      <section className="" id="about">
        <AboutPage />
      </section>

      {/* Portfolio section */}
      {/* <section className="bg-gray-200" id="cv">
        <CVPage />
      </section> */}

      {/* Portfolio section */}
      <section className="" id="portfolio">
        <Portfolio />
      </section>

      {/* Contact Section */}
      <section id="contact">

      </section>
    </>

  )
}
