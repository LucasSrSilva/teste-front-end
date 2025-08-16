import Footer from "../components/Footer"
import Header from "../components/Header"
import PartnersSection from "../components/PartnersSection"
import RelationedProducts from "../components/RelationedProducts"
import BrandCard from "../components/ui/brandCard/brandCard"
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
            <li><a href="#"><div className="category__navigation-icon"><Icon size={61} hidden src="/icons/categories/tecnology.svg" /></div><p>Tecnologia</p></a></li>
            <li><a href="#"><div className="category__navigation-icon"><Icon size={61} hidden src="/icons/categories/supermarket.svg" /></div><p>Supermercado</p></a></li>
            <li><a href="#"><div className="category__navigation-icon"><Icon size={61} hidden src="/icons/categories/drinks.svg" /></div><p>Bebidas</p></a></li>
            <li><a href="#"><div className="category__navigation-icon"><Icon size={61} hidden src="/icons/categories/tools.svg" /></div><p>Ferramentas</p></a></li>
            <li><a href="#"><div className="category__navigation-icon"><Icon size={61} hidden src="/icons/categories/health.svg" /></div><p>Saúde</p></a></li>
            <li><a href="#"><div className="category__navigation-icon"><Icon size={61} hidden src="/icons/categories/sports.svg" /></div><p>Esportes e Fitness</p></a></li>
            <li><a href="#"><div className="category__navigation-icon"><Icon size={61} hidden src="/icons/categories/fashion.svg" /></div><p>Moda</p></a></li>
          </ul>
        </nav>
      </section>
      <RelationedProducts category />
      <PartnersSection />
      <RelationedProducts />
      <PartnersSection />
      <section aria-labelledby="brand-title" className="brands" >
        <h1 className="brands__title">Navegue por marcas</h1>
        <div className="brands__container">
          {
            Array.from({ length: 5 }).map((_, idx) => (
              <BrandCard key={idx} />
            ))
          }
        </div>
      </section>
      <RelationedProducts />
      <Footer />
    </>
  )
}

export default Home
