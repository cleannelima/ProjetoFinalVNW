import s from "../../Pages/livrosDoados/livrosdoados.module.scss"
import protagonista from "../../assets/protagonista.png"

export default function LivrosDoados() {
    return (
        <main>
            <h2 className={s.title}>Livros Doados</h2>
            <section className={s.card}>
                <img
                    src={protagonista}
                    alt="Imagem de um ícone de um livro, nomeado como protagonista."
                    className={s.cardImage}
                />
                <section className={s.cardContent}>
                    <p className={s.tituloDoLivro}>O protagonista</p>
                    <p className={s.autor}>Susanne Andrade</p>
                    <p className={s.genero}>Ficção</p>
                </section>
            </section>
        </main>
    )
}