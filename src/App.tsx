import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Previsão do Tempo</h1>
        <div className="city-result">
          <span>Niterói, RJ - Brasil</span>
          <h2>20ºC Nublado</h2>
          <div className="city-result__detail">
            <p><span>- 16</span><span>- 25</span></p>
            <p>Sensação <strong>19ºC</strong></p>
            <p>Vento <strong>18km/k</strong></p>
            <p>Humidade <strong>89%</strong></p>
          </div>
          <div className="city-result__week">
            <div className="">
              <strong>Terça</strong>
              <p><span>18</span><span>16</span></p>
            </div>
            <div className="">
              <strong>Quarta</strong>
              <p><span>10</span><span>10</span></p>
            </div>
            <div className="">
              <strong>Quinta</strong>
              <p><span>22</span><span>23</span></p>
            </div>
            <div className="">
              <strong>Sexta</strong>
              <p><span>2</span><span>22</span></p>
            </div>
            <div className="">
              <strong>Sábado</strong>
              <p><span>12</span><span>22</span></p>
            </div>
          </div>
        </div>
        <div className="city-search">
          <input type="search" placeholder="Digite aqui o nome da Cidade4"/>
        </div>
        
        <div className="capitals">
          <h2>Capitais</h2>
          <div className="capitals__list">
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
