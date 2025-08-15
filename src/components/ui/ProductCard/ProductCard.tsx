import './productCard.scss'
export default function ProductCard() {
    return (
        <article className="product__card">
            <a href="#" className="product__card-linkImage">
                <img src="#" alt="#" />
            </a>
            <p className="product__card-name">Lorem, ipsum dolor sit amet consectetur adipisicing </p>
            <div aria-label="informações de preço" className="product__card-priceInfo">
                <p className="product__card-originalPrice" aria-label="preço original">R$ 30,90</p>
                <p className="product__card-discountPrice" aria-label="preço com desconto">R$ 10,90</p>
                <p className="product__card-installment" aria-label="preço parcelado">ou até 2x de R$ 15,90 sem juros</p>
                <p className="product__card-shipping">Frete grátis</p>
            </div>
            <button className="product__card-button">COMPRAR</button>
        </article>
    )
}
