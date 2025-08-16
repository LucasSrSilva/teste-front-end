
export default function Footer() {
    return (
        <footer className="footer">
            <section className="footer__newsletter" aria-label='newsletter'>
                <div>
                    <h1>Inscreva-se na nossa newsletter</h1>
                    <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos <br /> da Econverse.</p>
                </div>
                <form action="">
                    <input type="text" id="" placeholder='Digite seu nome' />
                    <input type="text" id="" placeholder='Digite seu e-mail' />
                    <button type="submit">INSCREVER</button>
                    <div>
                        <input type="checkbox" id="terms" /><label htmlFor="terms">Aceito os termos e condições</label>
                    </div>
                </form>
            </section>
            <section className="footer__links" aria-label="links">
                <div>
                    <img src="/logo.svg" alt="econverse" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <nav><a href=""></a><a href=""></a><a href=""></a></nav>
                </div>
                <nav>
                    <h1>Institucional</h1>
                    <a href="">Sobre Nós</a><a href="">Movimento</a><a href="">Trabalhe conosco</a></nav>
                <nav>
                    <h1>Ajuda</h1>
                    <a href="">Suporte</a><a href="">Fale Conosco</a><a href="">Perguntas Frequentes</a></nav>
                <nav>
                    <h1>Termos</h1>
                    <a href="">Termos e Condições</a><a href="">Política de Privacidade</a><a href="">Troca e Devolução</a></nav>
            </section>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </footer>
    )
}
