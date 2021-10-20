import React from "react";

import EstruturaPagina from '../../componentes/EstruturaPagina';
import Mapa from '../../componentes/Mapa';
import './estilo_contato.css';

const Contato = () => {
    return(
        <EstruturaPagina>
            <div className="contato-container">
                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Horários de <b>Atendimento</b></h2>
                    <p>Agende uma consulta pelo telefone: (11) 5647 - 0007</p>

                    <ul className="lista-medicos">
                        <li>
                            <img src="assets/medico01.png" className="img-apareçho" alt="Dr. Hélio" title="Dr. Hélio" />
                            <p>Dr. Hélio</p>
                            <p>Segundas, quartas e sextas das 9:00 ás 16:00</p>
                        </li>

                        <li>
                            <img src="assets/medico02.png" className="img-apareçho" alt="Dr. Carlos" title="Dr. Carlos" />
                            <p>Dr. Carlos</p>
                            <p>Terças e quintas das 13:00 ás 18:00</p>
                        </li>

                        <li>
                            <img src="assets/medico03.png" className="img-apareçho" alt="Dra. Suzana " title="Dra. Suzana" />
                            <p>Dr. Suzana</p>
                            <p>Terças e quintas e sábados das 8:00 ás 12:00</p>
                        </li>
                    </ul>
                </div>

                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Onde estamos <b>localizados</b>?</h2>
                    <p>Rua Bento Branco de Andrade Filho, 379 - Santo Amaro, São Paulo - SP</p>
                    <Mapa />
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Contato;