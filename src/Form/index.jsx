import { useState } from 'react'
import styles from './Form.module.css'
import Resultado from '../Resultado'
function Form() {
  let [controlador, setControlador] = useState(false)
  let [peso, setPeso] = useState(0)
  let [altura, setAltura] = useState(0)
  let [resultado, setResultado] = useState(0)
  let [erro, setErro] = useState(false)
  return(
      <>
        <form className={styles.form}>
          <h1>Calculadora de IMC</h1>
          <div className={styles.formContainer}>
            <h2 className={styles.formContainerH2}>Altura:</h2>
            <input  onFocus={ evt => (setControlador(false), setErro(false))}   onChange={evt => setAltura(evt.target.value)}  className={styles.formContainerInput} type="number" placeholder='Exemplo: 1.70' />
          </div>
          <div className={styles.formContainer}>
            <h2 className={styles.formContainerH2}>Peso:</h2>
            <input onFocus={ evt => (setControlador(false), setErro(false))} onChange={evt => setPeso(evt.target.value)} className={styles.formContainerInput} type="number" placeholder='Exemplo: 90.2' />
          </div>
          <div className={styles.formErro}>{erro&&<p className='erro'> VALOR INVÁLIDO!</p>} </div>
          <button className={styles.formButton} onClick={evt =>
             (setResultado((Number(peso) / (Number(altura) ** 2)).toFixed(2)), evt.preventDefault(), setControlador(true),
              setErro((Number(peso) / (Number(altura) ** 2)) <= 0 || (Number(peso) / (Number(altura) ** 2)).toString() == 'NaN' || (Number(peso) / (Number(altura) ** 2)).toString() == 'Infinity'))}>Calcular
          </button>
        </form>
        {!erro&&controlador&&<Resultado valor={resultado}/>}
      </>
    )
}

export default Form;