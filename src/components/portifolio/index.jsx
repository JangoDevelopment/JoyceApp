import React from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import "./styles.css";

const gallery = [{ name: "project 0" }, { name: "project 2" }, { name: "project 3" }, { name: "project 4" }, { name: "project 5" }, { name: "project 6" }];

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
            <div className="projetos flex-column">
                <h1 className="section_title">Projetos</h1>
                <div className="parte1 flex">
                    <div className="section flex-column">
                        <div className="box flex block_1">
                            <h3 className="title unselectable">residencial</h3>
                        </div>
                    </div>
                    <div className="section flex-column">
                        <div className="box flex block_2">
                            <h3 className="title unselectable">comercial</h3>
                        </div>
                    </div>
                    <div className="section flex-column">
                        <div className="box flex block_3">
                            <h3 className="title unselectable">interiores</h3>
                        </div>
                    </div>
                </div>

                <div className="subsection">
                    <h2 className="subsection_title">residencial</h2>
                    <div className="project_galery flex">
                        {gallery.map((item, i) => (
                            <div className="project">
                                <h3 className="project_name unselectable">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="subsection">
                    <h2 className="subsection_title">comercial</h2>
                    <div className="project_galery flex">
                        {gallery.map((item, i) => (
                            <div className="project">
                                <h3 className="project_name unselectable">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="subsection">
                    <h2 className="subsection_title">interiores</h2>
                    <div className="project_galery flex">
                        {gallery.map((item, i) => (
                            <div className="project">
                                <h3 className="project_name unselectable">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="reformas">
                <h1>Reformas</h1>
            </div>
            <div className="obras">
                <h1>Acessoria de Obras</h1>
            </div>
        </div>
    );
};

export default PortifolioComponent;
