import S from './styles.module.css';

const Info = () => {
    return(
        <div className={S.infoContainer}>
            <h3 className={S.title}>CORP SOLUTION - BUSINESS EVOLUTION</h3>
            <span className={S.text}> 
                Conectamos o que os clientes querem com o que as empresas precisam. Fazemos isso ao criar tecnologias e experiências superiores para as marcas. <strong>Quando falamos sobre evolução digital e solução de desafios, pra nós, tudo é possível. Se ainda não for possível, a gente descobre como.</strong><br/><br/>
                Entendemos os principais desafios de marketing, vendas e tecnologia das empresas para gerar resultados financeiros. Transformamos conhecimento em insights. Desenhamos novas tecnologias e novas experiências. Implementamos e gerenciamos jornadas. <strong>Tudo para que clientes tenham a melhor experiência com as marcas. Clientes satisfeitos. Empresas líderes.</strong><br/><br/>
                As melhores cabeças do mercado em um lugar que elas podem ser elas mesmas: é assim que entregamos soluções disruptivas. Em conjunto com um exclusivo ecossistema de parcerias estratégicas e fornecedores ponta de lança, <strong>criamos soluções para todos os momentos do ciclo de vida do cliente.</strong><br/><br/>
                Site oficial: corpsolutions.com.br
            </span>
            <h3 className={S.title}>PRONTO PRA REVOLUÇÃO DA SUA CARREIRA? VEM SER CORPSOLUTION!</h3>
            <span className={S.text}> 
                Quando você decide ser Corp Solution, você decide dar um passo diferente na sua vida e na sua carreira. Ser Corp Solution é aceitar ser parte de um grupo com coragem para traçar
                novos caminhos e ambição para chegar mais longe a cada dia. Conheça nossas vagas.
            </span>
            <hr />
        </div>
    )
}

export { Info }