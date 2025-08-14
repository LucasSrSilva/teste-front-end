import Icon from "./ui/Icon"

export default function Header() {
    return (
        <header className="header">
            <ul role="region" aria-label="Benefícios" className="header__benefits">
                <li><Icon hidden src="/icons/ShieldCheck.svg" /><p>Compra <span>100% segura</span></p></li>
                <li><Icon hidden src="/icons/Truck.svg" /><p><span>Frete grátis</span> acima de R$ 200</p></li>
                <li><Icon hidden src="/icons/CreditCard.svg" /><p><span>Parcele</span> suas compras</p></li>
            </ul>

            <div className="header__container">
                <img src="/logo.svg" alt="econverse" />
                <form className="header__container-form">
                    <input type="text" name="search" aria-label="Digite sua busca" placeholder="O que você está buscando?" />
                    <button type="submit" aria-label="Pesquisar"><Icon src="/icons/MagnifyingGlass.svg" hidden /></button>
                </form>
                <nav aria-label="Funções de Usuário" className="header__container-navigation">
                    <ul>
                        <li>
                            <a href="#" aria-label="Meus pedidos"><Icon src="/icons/box.svg" hidden /></a>
                        </li>
                        <li>
                            <a href="#" aria-label="Favoritos"><Icon src="/icons/Heart.svg" hidden /></a>
                        </li>
                        <li>
                            <a href="#" aria-label="Meu perfil"><Icon src="/icons/UserCircle.svg" hidden /></a>
                        </li>
                        <li>
                            <a href="#" aria-label="Carrinho"><Icon src="/icons/ShoppingCart.svg" hidden /></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <nav aria-label="Menu principal" className="header__menu">
                <ul>
                    <li>
                        <a href="#">  <p>TODAS CATEGORIAS</p></a>
                    </li>
                    <li>
                        <a href="#"><p>SUPERMERCADO</p></a>
                    </li>
                    <li>
                        <a href="#"><p>LIVROS</p></a>
                    </li>
                    <li>
                        <a href="#"><p>MODA</p></a>
                    </li>
                    <li>
                        <a href="#"><p>LANÇAMENTOS</p></a>
                    </li>
                    <li>
                        <a href="#"><p>OFERTAS DO DIA</p></a>
                    </li>
                    <li>
                        <a href="#">
                            <Icon src="/icons/CrownSimple.svg" hidden />
                            <p>ASSINATURA</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
