import Header from "../components/Header"


function Home() {

  return (
    <>
      <Header />
      <section className="hero" aria-label="Banner">
        <h1 className="hero__title">Venha conhecer nossas promoções</h1>
        <h2 className="hero__subtitle"><span>50% off </span>nos produtos</h2>
        <a href="#" className="hero__button">Ver produto</a>
      </section>
    </>
  )
}

export default Home
