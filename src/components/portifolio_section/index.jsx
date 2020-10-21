import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

/**
 *
 * @param {string} section_title O titulo que sera escrito em maior fonte no bloco
 * @param {string} section_description O texto que virá abaixo do titulo explicando um pouco sobre o bloco
 * @param {object} section_list um objeto que contenha todos os projetos dessa sessão
 *
 */

const PortifolioSection = ({ section_title, section_description, section_list }) => {
    const lowercase_section = section_title.toLowerCase();

    return (
        <div>
            <h2 className="subsection_title">{section_title}</h2>
            <h4 className="subsection_description">{section_description}</h4>
            <div className="project_galery flex">
                {section_list.map((item, i) => (
                    <Link key={i} className="project" to={`/projeto/${lowercase_section}/${item.id}`}>
                        <h3 className="project_name unselectable">{item.titulo}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PortifolioSection;
