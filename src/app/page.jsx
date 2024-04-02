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
      <section id="about">

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
