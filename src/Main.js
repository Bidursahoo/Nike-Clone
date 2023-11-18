import React from 'react'
import NavBar from "./Components/NavBar";
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
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviewSection />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subcribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}
