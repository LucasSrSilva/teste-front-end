import ProductCard from "./ui/ProductCard/ProductCard";

export default function RelationedProducts() {
    // const [current, setCurrent] = useState(0)
    return (
        <section className="products" aria-labelledby="products-title">
            <div className="products__title">
                <span className="products__title-line" aria-hidden />
                <h1 id="products-title">Produtos relacionados</h1>
                <span className="products__title-line" aria-hidden />
            </div>
            <nav className="products__navigation"><ul>
                <li><a href="#">CELULAR</a></li>
                <li><a href="#">ACESSÓRIOS</a></li>
                <li><a href="#">TABLETS</a></li>
                <li><a href="#">NOTEBOOKS</a></li>
                <li><a href="#">TVS</a></li>
                <li><a href="#">VER TODOS</a></li>
            </ul></nav>
            <div aria-label="Lista de produtos" className="products__carousel">
                <button>Prev</button>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <button>Next</button>
            </div>
        </section>
    )
}
