import { useEffect, useState } from "react";
import { getProducts } from "../services/product/product.service";
import ProductCard from "./ui/ProductCard/ProductCard";
import type { Product } from "../services/product/product.type";

export default function RelationedProducts() {
    // const [current, setCurrent] = useState(0)
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        async function fetchProducts() {
            const products = await getProducts()
            if (products) {
                setProducts(products)
            }
        }
        fetchProducts()
    }, [])
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
                {products.map((product, index) => (
                    <ProductCard key={index} descripstionShort={product.descripstionShort} photo={product.photo} price={product.price} productName={product.productName} />
                ))}
                <button>Next</button>
            </div>
        </section>
    )
}
