import styles from './Resultado.module.css'
function Resultado(props){
    return(
        <>
            <div className={styles.resultado}>
                <h2>Seu IMC é:</h2>
                <h3> {props.valor} </h3>
                <table> 
                    <thead>
                        <tr>
                            <th>IMC</th>
                            <th>Classificação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={props.valor < 17 ? styles.cor : ''}>
                            <td className={styles.c1}>Menor que 16,9</td>
                            <td className={styles.c2}>Muito Abaixo do Peso</td>
                        </tr>
                        <tr className={props.valor >= 17 && props.valor <= 18.4 ? styles.cor : ''}>
                            <td className={styles.c1}>Entre 17 e 18,4</td>
                            <td className={styles.c2}>Abaixo do Peso</td>
                        </tr>
                        <tr className={props.valor >= 18.5 && props.valor <= 24.9 ? styles.cor : ''}>
                            <td className={styles.c1}>Entre 18,5 e 24,9</td>
                            <td className={styles.c2}>Peso Normal</td>
                        </tr>
                        <tr className={props.valor >= 25 && props.valor <= 29.9 ? styles.cor : ''}>
                            <td className={styles.c1}>Entre 25 e 29,9</td>
                            <td className={styles.c2}>Acima do Peso</td>
                        </tr>
                        <tr className={props.valor >= 30 && props.valor <= 34.9 ? styles.cor : ''}>
                            <td className={styles.c1}>Entre 30 e 34,9</td>
                            <td className={styles.c2}>Obesidade Grau I</td>
                        </tr>
                        <tr className={props.valor >= 35 && props.valor <= 39.9 ? styles.cor : ''}>
                            <td className={styles.c1}>Entre 35 e 39,9</td>
                            <td className={styles.c2}>Obesidade Grau II</td>
                        </tr>
                        <tr className={props.valor > 39.9 ? styles.cor : ''}>
                            <td className={styles.c1}>Acima de 40</td>
                            <td className={styles.c2}>Obesidade Grau III</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Resultado;