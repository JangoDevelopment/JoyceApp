import React from "react";
import "./styles.css";

/**
 *
 * @param {string} section_title O titulo que sera escrito em maior fonte no bloco
 * @param {string} section_description O texto que virá abaixo do titulo explicando um pouco sobre o bloco
 * @param {object} section_list um objeto que contenha todos os projetos dessa sessão
 *
 */

const PortifolioSection = ({ section_title, section_description, section_list }) => {
    return (
        <div>
            <h2 className="subsection_title">{section_title}</h2>
            <h4 className="subsection_description">{section_description}</h4>
            <div className="project_galery flex">
                {section_list.map((item, i) => (
                    <div key={i} className="project">
                        <h3 className="project_name unselectable">{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortifolioSection;
