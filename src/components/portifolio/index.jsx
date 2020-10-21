import React from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import { Link, animateScroll as scroll } from "react-scroll";
import PortifolioSection from "../portifolio_section";
import "./styles.css";

import projetos from "../../data/projetos";

const PortifolioComponent = (props) => {
    const description_residencial =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem pulvinar, interdum odio quis, sollicitudin sapien. Donec ullamcorper convallis urna, eu gravida nulla faucibus tristique. Nunc mollis pulvinar purus, sit amet aliquam nulla dignissim et. Duis posuere, enim ac tempor venenatis, orci eros blandit nibh, sed sollicitudin ante erat id lacus.";

    return (
        <div className="portifolio">
            <div className="parte1 flex">
                <div className="section flex-column">
                    <Link activeClass="active" to="test1" spy={true} smooth={true} duration={500} offset={-50}>
                        <div className="box flex block_1">
                            <img className="unselectable box_img" src={img1} alt="" />
                            <h3 className="title unselectable">projetos</h3>
                        </div>
                    </Link>
                    <div className="description">
                        <p>Você tem um sonho e não sabe por onde começar? Comece por um projeto que tenha a sua ...</p>
                    </div>
                </div>
                <div className="section flex-column">
                    <Link activeClass="active" to="reforma" spy={true} smooth={true} duration={500} offset={-50}>
                        <div className="box flex block_2">
                            <img className="unselectable box_img" src={img2} alt="" />
                            <h3 className="title unselectable">reformas</h3>
                        </div>
                        <div className="description">
                            <p>Precisando de uma cara nova pro seu espaço?--- Se seu ambiente/imóvel está precisando ser adaptado...</p>
                        </div>
                    </Link>
                </div>
                <div className="section flex-column">
                    <Link activeClass="active" to="obras" spy={true} smooth={true} duration={500} offset={-50}>
                        <div className="box flex block_3">
                            <img className="unselectable box_img" src={img3} alt="" />
                            <h3 className="title unselectable">acessoria de obras</h3>
                        </div>
                        <div className="description">
                            <p>Trabalhamos com visitas técnicas e cronogramas de obras. Acreditamos que o sucesso de uma obra...</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div name="test1" className="projetos flex-column">
                <div className="grey_block">
                    <div className="subsection">
                        <h1 className="section_title">Projetos</h1>
                        <h4 className="section_description">{description_residencial}</h4>
                        <div className="section_options flex">
                            <Link className="section_box flex block_1" activeClass="active" to="residencial" spy={true} smooth={true} duration={500}>
                                <h3 className="title unselectable">residencial</h3>
                            </Link>

                            <Link className="section_box flex block_2" activeClass="active" to="comercial" spy={true} smooth={true} duration={500}>
                                <h3 className="title unselectable">comercial</h3>
                            </Link>

                            <Link className="section_box flex block_3" activeClass="active" to="interiores" spy={true} smooth={true} duration={500}>
                                <h3 className="title unselectable">interiores</h3>
                            </Link>
                        </div>
                    </div>
                </div>

                <div name="residencial" className="subsection">
                    <PortifolioSection section_title={"residencial"} section_list={projetos.residencial} section_description={description_residencial} />
                </div>
                <div name="comercial" className="subsection">
                    <PortifolioSection section_title={"comercial"} section_list={projetos.comercial} section_description={description_residencial} />
                </div>
                <div name="interiores" className="subsection">
                    <PortifolioSection section_title={"interiores"} section_list={projetos.interiores} section_description={description_residencial} />
                </div>
            </div>
            <div className="grey_block">
                <div name="reforma" className="subsection">
                    <PortifolioSection section_title={"Reformas"} section_list={projetos.reformas} section_description={description_residencial} />
                </div>
            </div>
            <div name="obras" className="subsection">
                <PortifolioSection section_title={"Acessoria de Obras"} section_list={projetos.obras} section_description={description_residencial} />
            </div>
        </div>
    );
};

export default PortifolioComponent;
