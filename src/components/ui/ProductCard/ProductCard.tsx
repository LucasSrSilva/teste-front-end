import { useRef, useState } from 'react';
import type { Product } from '../../../services/product/product.type'
import './productCard.scss'
export default function ProductCard(product: Product) {
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    const dialog = useRef<HTMLDialogElement>(null)
    function formatPrice(price: number) {
        return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function handleDialog() {
        if (dialog.current) {
            if (isOpenDialog) {
                dialog.current.close()
                setIsOpenDialog(false)
            } else {
                dialog.current.showModal()
                setIsOpenDialog(true)
            }
        }
    }

    return (
        <>
            <article className="product__card">
                <button onClick={handleDialog} className="product__card-linkImage">
                    <img src={product.photo} alt={product.descripstionShort} />
                </button>
                <p className="product__card-name">{product.productName}</p>
                <div aria-label="informações de preço" className="product__card-priceInfo">
                    <p className="product__card-originalPrice" aria-label="preço original">R$ {formatPrice(product.price)}</p>
                    <p className="product__card-discountPrice" aria-label="preço com desconto">R$ {formatPrice(product.price - (product.price * 0.10))}</p>
                    <p className="product__card-installment" aria-label="preço parcelado">ou até 2x de R$ {formatPrice(product.price / 2)} sem juros</p>
                    <p className="product__card-shipping">Frete grátis</p>
                </div>
                <button className="product__card-button">COMPRAR</button>
            </article>
            <dialog className='product__dialog' ref={dialog}>
                {product.descripstionShort}
                <div>aolá</div>
            </dialog>
        </>
    )
}
