import S from './styles.module.css';

const Fullbanner = () => {
    return (
        <div className={S.container}> 
            <img className={S.fullbanner} src="fullbanner_hiring.png" alt="Conheça as vagas da Corp Solution" />
            <div className={S.hero}>
                <img src="logo_hiring.png" alt="Logo da Corp Solution" />
                <h2>Corp Solution</h2>
            </div>
        </div>
    )
}

export { Fullbanner }