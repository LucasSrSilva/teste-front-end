import type { Product } from '../../../services/product/product.type'
import './productCard.scss'
export default function ProductCard(product: Product) {
    return (
        <article className="product__card">
            <a href="#" className="product__card-linkImage">
                <img src={product.photo} alt={product.descripstionShort} />
            </a>
            <p className="product__card-name">{product.productName}</p>
            <div aria-label="informações de preço" className="product__card-priceInfo">
                <p className="product__card-originalPrice" aria-label="preço original">R$ {product.price.toFixed(2)}</p>
                <p className="product__card-discountPrice" aria-label="preço com desconto">R$ {(product.price - (product.price * 0.10)).toFixed(2)}</p>
                <p className="product__card-installment" aria-label="preço parcelado">ou até 2x de R$ {(product.price / 2).toFixed(2)} sem juros</p>
                <p className="product__card-shipping">Frete grátis</p>
            </div>
            <button className="product__card-button">COMPRAR</button>
        </article>
    )
}
