import { useState } from 'react'

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);

    let classificacao = '';
    let corTexto = "";

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
      classificacao = 'Peso normal';
    } else if (imc < 30) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }
    console.log(peso+'  '+altura+'  '+alturaMetros+'  '+imc)
    setResultado(classificacao);
  };

  return (
    <div className='container text-center w-50 mx-auto'>
      <h2 className='mt-5'>Calculadora de IMC</h2>
      <div className="row">
        <div className='col-6 mt-5'>
          <label className='mb-2'>Altura (cm):</label>
          <input className='form-control text-center mb-5 fw-bold'
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div className='col-6 mt-5'>
          <label className='mb-2'>Peso (kg):</label>
          <input className='form-control text-center fw-bold'
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <button 
          className='btn btn-primary mb-5'
          onClick={calcularIMC}>Calcular</button>
      </div>
      {resultado && (
        <div className="row">
          <div>
            <h3>Resultado:</h3>
            <p>Classificação: {resultado}</p>
          </div>
          </div>
      )}
    </div>
  );
};

export default App;
