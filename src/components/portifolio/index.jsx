import React from "react";
import "./styles.css";

const PortifolioComponent = (props) => {
    return (
        <div className="portifolio">
            <div className="parte1 flex">
                <div className="section flex-column">
                    <div className="box block_1">
                        <h3 className="title">projetos</h3>
                    </div>
                    <div className="description">
                        <p>Você tem um sonho e não sabe por onde começar? Comece por um projeto que tenha a sua ...</p>
                    </div>
                </div>
                <div className="section flex-column">
                    <div className="box block_2">
                        <h3 className="title">reformas</h3>
                    </div>
                    <div className="description">
                        <p>Precisando de uma cara nova pro seu espaço?--- Se seu ambiente/imóvel está precisando ser adaptado...</p>
                    </div>
                </div>
                <div className="section flex-column">
                    <div className="box block_3">
                        <h3 className="title">acessoria de obras</h3>
                    </div>
                    <div className="description">
                        <p>Trabalhamos com visitas técnicas e cronogramas de obras. Acreditamos que o sucesso de uma obra...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortifolioComponent;
