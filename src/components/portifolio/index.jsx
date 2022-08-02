import React from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import houseImg from "./images/house.png";
import marketImg from "./images/market.png";
import { Link } from "react-scroll";
import PortifolioSection from "../portifolio_section";
import "./styles.css";

import projetos from "../../data/projetos";

const PortifolioComponent = (props) => {
    const description_residencial =
        "Você tem um sonho e não sabe por onde começar? \n Comece por um projeto que tenha a sua identidade. \n Da residência aos projetos comerciais, aqui pensamos em um projeto funcional e esteticamente agradável sobre medida para você. ";
        const description_reformas =
        "Precisando dar uma cara nova para o seu espaço? Se seu ambiente/imóvel está precisando ser adaptado ou ganhar novo significado pode contar com nossa criatividade. Derrubando paredes ou respeitando a história do lugar, acharemos a melhor solução de acordo com as suas necessidades.";
        const description_obras =
        "O sucesso de uma obra envolve dedicação e um bom planejamento. Trabalhamos com visitas técnicas, cronograma de obras e planilha orçamentária. ";
    const vazio = "";

    return (
        <div className="portifolio">
            <div name="test1" className="projetos flex-column">
                <div className="grey_block">
                    <div className="subsection">
                        <div className="flex title_line">
                            <img class="section_icon" src={img1} alt="" />
                            <h1 className="section_title">Veja nossas diferentes sessões de projeto</h1>
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
                                <img className="unselectable box_img" src={houseImg} alt="Desenho de uma casa" />
                                <h3 className="title unselectable">residencial</h3>
                            </Link>

                            <Link className="section_box flex block_2" activeClass="active" to="comercial" spy={true} smooth={true} duration={500} offset={-50}>
                                <img className="unselectable box_img" src={marketImg} alt="Desenho de uma loja" />
                                <h3 className="title unselectable">comercial</h3>
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
            </div>
        </div>
    );
};

export default PortifolioComponent;
