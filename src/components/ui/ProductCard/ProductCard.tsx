import { useRef, useState } from 'react';
import type { Product } from '../../../services/product/product.type'
import './productCard.scss'
export default function ProductCard(product: Product) {
    const [counter, setCounter] = useState(1)
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
                <button onClick={handleDialog} aria-controls="product-dialog" aria-expanded className="product__card-linkImage">
                    <img src={product.photo} alt={product.productName} />
                </button>
                <p className="product__card-name">{product.productName}</p>
                <div aria-label="informações de preço" className="product__card-priceInfo">
                    <p className="product__card-originalPrice" aria-label="preço original">R$ {formatPrice(product.price)}</p>
                    <p className="product__card-discountPrice" aria-label="preço com desconto">R$ {formatPrice(product.price - (product.price * 0.10))}</p>
                    <p className="product__card-installment" aria-label="preço parcelado">ou até 2x de R$ {formatPrice(product.price / 2)} sem juros</p>
                    <p className="product__card-shipping">Frete grátis</p>
                </div>
                <button onClick={handleDialog} aria-controls="product-dialog" aria-expanded className="product__card-button">COMPRAR</button>
            </article>
            <dialog onClick={e => {
                if (e.target === dialog.current) {
                    handleDialog();
                }
            }} aria-modal id='product-dialog' className='product__dialog' ref={dialog}>
                <div className='product__dialog-container'>
                    <button className='product__dialog-closeBtn' aria-label='Fechar modal' onClick={handleDialog}>
                        <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="18" y1="6" x2="6" y2="18" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <line x1="6" y1="6" x2="18" y2="18" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                    <img className='product__dialog-image' src={product.photo} alt={product.photo} />
                    <div aria-label="informações do produto" className="product__dialog-productInfo">
                        <p className="product__dialog-name">{product.productName}</p>
                        <p className="product__dialog-discountPrice" aria-label="preço com desconto">R$ {formatPrice(product.price - (product.price * 0.10))}</p>
                        <p className='product__dialog-description'>{product.descriptionShort}</p>
                        <a className='product__dialog-details' href="#">Veja mais detalhes do produto {">"}</a>
                    </div>
                    <div className='product__dialog-buttons'>
                        <div className='product__dialog-counter'><button disabled={counter === 1} onClick={() => setCounter(counter - 1)}>&#8722;</button><span>{counter < 10 && "0"}{counter}</span><button onClick={() => setCounter(counter + 1)}>&#43;</button></div>
                        <button className="product__dialog-button">COMPRAR</button>
                    </div>
                </div>
            </dialog>
        </>
    )
}
