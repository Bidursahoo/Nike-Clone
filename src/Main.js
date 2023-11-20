import React from 'react'
import NavBar from "./Components/NavBar";
import Fade from 'react-reveal/Fade';
import {
  CustomerReviewSection,
  Footer,
  Hero,
  PopularProduct,
  Services,
  SpecialOffers,
  Subcribe,
  SuperQuality,
} from "./Sections/SectionController";

export default function Main() {
  return (
    
    <main className="relative">
      <NavBar/>
      <Fade bottom>
      <section className="xl:padding-l wide:padding-r padding-b">

        <Hero />
      </section>
      </Fade>
      <Fade bottom>
      <section className="padding">
        <PopularProduct />
      </section>
      </Fade>
      <Fade bottom>
      <section className="padding">
        <SuperQuality />
      </section>
      </Fade>
      <Fade bottom>
      <section className="padding-x py-10">
        <Services />
      </section>
      </Fade>
      <Fade bottom>
      <section className="padding">
        <SpecialOffers />
      </section>
      </Fade>
      <Fade bottom>
      <section className="bg-pale-blue padding">
        <CustomerReviewSection />
      </section>
      </Fade>
      <Fade bottom>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subcribe />
      </section>
      </Fade>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}
