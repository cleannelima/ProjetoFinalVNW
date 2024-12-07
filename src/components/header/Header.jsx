import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import s from "../../components/header/header.module.scss"
import livrovnw from "../../assets/livrovnw.png"
import lupa from "../../assets/lupa.png"
import Inicio from "../../Pages/Inicio/Inicio"
import LivrosDoados from "../../Pages/livrosDoados/LivrosDoados"
import QueroDoar from "../../Pages/Querodoar/QueroDoar"


export default function Header(){
return(
    <BrowserRouter>
       
        <header className={s.header}>
            <section className={s.logoheader}>
                <img src={livrovnw} alt="Um livro branco aberto sobre a logo do site"/>
                <h1>Livros Vai na Web</h1>
            </section>
            <section>
                <nav className={s.navheader}>
                    <ul>
                        <li><Link className={s.Link} to="/">Inicio</Link></li>
                        <li><Link className={s.Link} to="/LivrosDoados">Livros Doados</Link></li>
                        <li><Link className={s.Link} to="/QueroDoar">Quero Doar</Link></li>
                    </ul>
                </nav>
            </section>
            <section className={s.barraDeBusca}>
                    <input type="search" name="" id="barraDeBusca" placeholder='O que você procura? '></input>
                    <button><img src={lupa} alt="Imagem de uma lupa branca de pesquisa"></img></button>
                </section>
        </header>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/LivrosDoados" element={<LivrosDoados />} />
            <Route path="/QueroDoar" element={<QueroDoar />} />
        </Routes>

    </BrowserRouter> 
)
}