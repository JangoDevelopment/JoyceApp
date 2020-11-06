import React from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import { Link } from "react-scroll";
import PortifolioSection from "../portifolio_section";
import "./styles.css";

import projetos from "../../data/projetos";

const PortifolioComponent = (props) => {
    const description_residencial =
        "Você tem um sonho e não sabe por onde começar? \n Comece por um projeto que tenha a sua identidade. \n Da residência aos projetos comerciais, aqui pensamos em um projeto funcional e esteticamente agradável sobre medida para você. ";
    const vazio = "";

    return (
        <div className="portifolio">
            <div className="parte1 flex-column">
                <h1 className="section_title center_text">Veja nossas diferentes sessões de projetos </h1>
                <div className="flex first_panel">
                    <div className="section flex-column">
                        <Link activeClass="active" to="test1" spy={true} smooth={true} duration={500} offset={-50}>
                            <div className="box flex block_1">
                                <img className="unselectable box_img" src={img1} alt="" />
                                <h3 className="title unselectable">projetos</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="section flex-column">
                        <Link activeClass="active" to="reforma" spy={true} smooth={true} duration={500} offset={-50}>
                            <div className="box flex block_2">
                                <img className="unselectable box_img" src={img2} alt="" />
                                <h3 className="title unselectable">reformas</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="section flex-column">
                        <Link activeClass="active" to="obras" spy={true} smooth={true} duration={500} offset={-50}>
                            <div className="box flex block_3">
                                <img className="unselectable box_img" src={img3} alt="" />
                                <h3 className="title unselectable">acessoria de obras</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div name="test1" className="projetos flex-column">
                <div className="grey_block">
                    <div className="subsection">
                        <div className="flex title_line">
                            <img class="section_icon" src={img1} alt="" />
                            <h1 className="section_title">Projetos</h1>
                        </div>
                        <h4 className="section_description">{description_residencial}</h4>
                        <div className="section_options flex">
                            <Link
                                className="section_box flex block_1"
                                activeClass="active"
                                to="residencial"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-50}>
                                <h3 className="title unselectable">residencial</h3>
                            </Link>

                            <Link className="section_box flex block_2" activeClass="active" to="comercial" spy={true} smooth={true} duration={500} offset={-50}>
                                <h3 className="title unselectable">comercial</h3>
                            </Link>

                            <Link
                                className="section_box flex block_3"
                                activeClass="active"
                                to="interiores"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-50}>
                                <h3 className="title unselectable">interiores</h3>
                            </Link>
                        </div>
                    </div>
                </div>

                <div name="residencial" className="sub_subsection">
                    <PortifolioSection section_title={"residencial"} section_list={projetos.residencial} section_description={vazio} />
                </div>
                <div name="comercial" className="sub_subsection">
                    <PortifolioSection section_title={"comercial"} section_list={projetos.comercial} section_description={vazio} />
                </div>
                <div name="interiores" className="sub_subsection">
                    <PortifolioSection section_title={"interiores"} section_list={projetos.interiores} section_description={vazio} />
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
