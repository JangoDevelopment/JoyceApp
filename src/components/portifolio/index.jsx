import React from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import "./styles.css";

const PortifolioComponent = (props) => {
    return (
        <div className="portifolio">
            <div className="parte1 flex">
                <div className="section flex-column">
                    <div className="box flex block_1">
                        <img className="unselectable box_img" src={img1} alt="" />
                        <h3 className="title unselectable">projetos</h3>
                    </div>
                    <div className="description">
                        <p>Você tem um sonho e não sabe por onde começar? Comece por um projeto que tenha a sua ...</p>
                    </div>
                </div>
                <div className="section flex-column">
                    <div className="box flex block_2">
                        <img className="unselectable box_img" src={img2} alt="" />
                        <h3 className="title unselectable">reformas</h3>
                    </div>
                    <div className="description">
                        <p>Precisando de uma cara nova pro seu espaço?--- Se seu ambiente/imóvel está precisando ser adaptado...</p>
                    </div>
                </div>
                <div className="section flex-column">
                    <div className="box flex block_3">
                        <img className="unselectable box_img" src={img3} alt="" />
                        <h3 className="title unselectable">acessoria de obras</h3>
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
