import React, { useState, useEffect } from "react";
import Papa from "papaparse";
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
    const vazio = "";

    const [projetosResidencial, setProjetosResidencial] = useState(false);
    const [projetosComercial, setProjetosComercial] = useState(false);

    function parseProjetosResidencial() {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vS1ZpvBypy_l6Idnz5ljp8cOFfMp7QZU4MVt0Zne--x42W5MQDhLOdquJJOoVtj9Vak_Br5ejtSlCcw/pub?output=csv", {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                setProjetosResidencial(results.data.reverse());
            },
        });
    }

    function parseProjetosComercial() {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3XvPrJ45E2-uIP3oMXrFKxlu9MpJ_oTcwwcqNGovTAwzwGXqula83UVFs65hictNSpELUA7E7eKAw/pub?output=csv", {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                setProjetosComercial(results.data.reverse());
            },
        });
    }

    useEffect(() => {
        parseProjetosResidencial();
        parseProjetosComercial();
    }, []);

    return (
        <div className="portifolio">
            <div name="test1" className="projetos flex-column">
                <div className="grey_block">
                    <div className="subsection">
                        <div className="flex title_line">
                            <img class="section_icon" src={img1} alt="" />
                            <h1 className="section_title">Veja nossas diferentes sessões de projeto</h1>
                        </div>
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
                    <PortifolioSection section_title={"residencial"} section_list={projetosResidencial} section_description={vazio} />
                </div>
                <div name="comercial" className="sub_subsection">
                    <PortifolioSection section_title={"comercial"} section_list={projetosComercial} section_description={vazio} />
                </div>
            </div>
        </div>
    );
};

export default PortifolioComponent;
