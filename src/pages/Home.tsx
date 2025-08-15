import Header from "../components/Header"
import Icon from "../components/ui/Icon"


function Home() {

  return (
    <>
      <Header />
      <section className="hero" aria-label="Banner">
        <h1 className="hero__title">Venha conhecer nossas promoções</h1>
        <h2 className="hero__subtitle"><span>50% off </span>nos produtos</h2>
        <a href="#" className="hero__button">Ver produto</a>
      </section>
      <section className="category" aria-label="Categorias">
        <nav className="category__navigation">
          <ul>
            <li><a id="tecnology" href="#"><Icon size={61} hidden src="/icons/categories/tecnology.svg" /></a><label htmlFor="tecnology">Tecnologia</label></li>
            <li><a id="supermarket" href="#"><Icon size={61} hidden src="/icons/categories/supermarket.svg" /></a><label htmlFor="supermarket">Supermercado</label></li>
            <li><a id="drinks" href="#"><Icon size={61} hidden src="/icons/categories/drinks.svg" /></a><label htmlFor="drinks">Bebidas</label></li>
            <li><a id="tools" href="#"><Icon size={61} hidden src="/icons/categories/tools.svg" /></a><label htmlFor="tools">Ferramentas</label></li>
            <li><a id="health" href="#"><Icon size={61} hidden src="/icons/categories/health.svg" /></a><label htmlFor="health">Saúde</label></li>
            <li><a id="sports" href="#"><Icon size={61} hidden src="/icons/categories/sports.svg" /></a><label htmlFor="sports">Esportes e Fitness</label></li>
            <li><a id="fashion" href="#"><Icon size={61} hidden src="/icons/categories/fashion.svg" /></a><label htmlFor="fashion">Moda</label></li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default Home
