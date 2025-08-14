import Icon from "./ui/Icon"

export default function Header() {
    return (
        <header className="header">
            <div role="region" aria-label="Benefícios" className="header__benefits">
                <ul>
                    <li><Icon hidden src="/icons/ShieldCheck.svg" /><p>Compra <span>100% segura</span></p></li>
                    <li><Icon hidden src="/icons/Truck.svg" /><p><span>Frete grátis</span> acima de R$ 200</p></li>
                    <li><Icon hidden src="/icons/CreditCard.svg" /><p><span>Parcele</span> suas compras</p></li>
                </ul>
            </div>
            <div className="header__container">
                <img src="/logo.svg" alt="econverse" />
                <form>
                    <input type="text" name="search" aria-label="Digite sua busca" placeholder="O que você está buscando?" />
                    <button type="submit" aria-label="Pesquisar"><Icon src="/icons/MagnifyingGlass.svg" hidden /></button>
                </form>
                <nav aria-label="Funções de Usuário">
                    <ul>
                        <li>
                            <button aria-label="Meus pedidos"><Icon src="/icons/box.svg" hidden /></button>
                        </li>
                        <li>
                            <button aria-label="Favoritos"><Icon src="/icons/Heart.svg" hidden /></button>
                        </li>
                        <li>
                            <button aria-label="Meu perfil"><Icon src="/icons/UserCircle.svg" hidden /></button>
                        </li>
                        <li>
                            <button aria-label="Carrinho"><Icon src="/icons/ShoppingCart.svg" hidden /></button>
                        </li>
                    </ul>
                </nav>
            </div>
            <nav aria-label="Menu principal">
                <ul>
                    <li>
                        <p>TODAS CATEGORIAS</p>
                    </li>
                    <li>
                        <p>SUPERMERCADO</p>
                    </li>
                    <li>
                        <p>LIVROS</p>
                    </li>
                    <li>
                        <p>MODA</p>
                    </li>
                    <li>
                        <p>LANÇAMENTOS</p>
                    </li>
                    <li>
                        <p>OFERTAS DO DIA</p>
                    </li>
                    <li>
                        <Icon src="/icons/CrownSimple.svg" hidden />
                        <p>ASSINATURA</p>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
