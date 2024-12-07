import s from "../../components/footer/footer.module.scss"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import tt from "../../assets/tt.png"
import linkedin from "../../assets/linkedin.png"
import youtube from "../../assets/youtube.png"

export default function Footer() {
    return (
        <footer className={s.Footerprincipal}>

            <section className={s.redesocial}>
                <section className={s.footercima}>
                    <p>4002-8922</p>
                </section>
                <nav>

                    <a href=""><img src={facebook} alt="Logo da rede social Facebook clicavel com direcionamento para a pagina"></img></a>
                    <a href=""><img src={tt} alt="Logo da rede social Twitter clivavel com direncionamento para a pagina"></img></a>
                    <a href=""><img src={youtube} alt="Logo da rede social Youtuber clicavel com direcionamento para a pagina"></img></a>
                    <a href=""><img src={linkedin} alt="Logo da rede social Linkedin clicavel com direcionamento para a pagina"></img></a>
                    <a href=""><img src={instagram} alt="Logo da rede social Instagram clicavel com direcionamento para a pagina"></img></a>

                </nav>
            </section>
            <section className={s.footerbaixo}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}