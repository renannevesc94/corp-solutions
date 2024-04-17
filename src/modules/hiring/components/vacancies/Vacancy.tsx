import S from './styles.module.css';

interface VacancyProps {
    name: string;
    type: string;
}

const Vacancy: React.FC<VacancyProps> = (props)  => {
    const {name, type} = props;
    return( 
        <a className={S.vacancyItem}>
            <div className={S.vacancyName}>{name}</div>
            <div className={S.vacancyType}>{type}</div>
        </a>
    )
}

export { Vacancy }