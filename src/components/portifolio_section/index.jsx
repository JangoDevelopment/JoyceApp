import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

/**
 *
 * @param {string} section_title O titulo que sera escrito em maior fonte no bloco
 * @param {string} section_description O texto que virá abaixo do titulo explicando um pouco sobre o bloco
 * @param {object} section_list um objeto que contenha todos os projetos dessa sessão
 *
 */

import img1 from "../portifolio/images/1.png";
import img2 from "../portifolio/images/2.png";
import img3 from "../portifolio/images/3.png";

const PortifolioSection = ({ section_title, section_description, section_list }) => {
    let lowercase_section = section_title.toLowerCase();
    let uppercase_section = section_title.toUpperCase();

    if (lowercase_section === "acessoria de obras") {
        lowercase_section = "obras";
    }

    return (
        <div>
            <div className="flex title_line">
                {lowercase_section === "obras" || lowercase_section === "reformas" ? (
                    <img class="section_icon" src={lowercase_section === "obras" ? img3 : img2} alt="" />
                ) : (
                    false
                )}
                <h2 className="subsection_title">{lowercase_section === "obras" || lowercase_section === "reformas" ? uppercase_section : section_title}</h2>
            </div>
            <h4 className="subsection_description">{section_description}</h4>
            <div className="project_galery flex">
                {section_list ? section_list.map((item, i) => (
                    <Link key={i} className="project" to={`/projeto/${lowercase_section}/${item.id}`}>
                        <img src={item.capa} alt="projeto_capa" />
                        <h3 className="project_name unselectable">{item.titulo}</h3>
                    </Link>
                )) : ""}
            </div>
        </div>
    );
};

export default PortifolioSection;
