import React, { useState, useEffect }from "react";
import Papa from "papaparse";
import "./styles.css";

import Gallery from "react-photo-gallery";
import useWindowDimensions from "../../hooks/getWindowDimensions";

const PaginaComponente = (props) => {
    const { width } = useWindowDimensions();
    const [projeto, setProjeto] = useState(false);
    const [galeria, setGaleria] = useState(false);

    const urlParams = window.location.hash;
    const splicedParams = urlParams.split("/", 4);

    const comercialSheetPath = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3XvPrJ45E2-uIP3oMXrFKxlu9MpJ_oTcwwcqNGovTAwzwGXqula83UVFs65hictNSpELUA7E7eKAw/pub?output=csv";
    const residencialSheetPath = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS1ZpvBypy_l6Idnz5ljp8cOFfMp7QZU4MVt0Zne--x42W5MQDhLOdquJJOoVtj9Vak_Br5ejtSlCcw/pub?output=csv";

    function parseProjeto() {
        let sheetPath = "";
        if(splicedParams[2] === 'comercial') {
            sheetPath = comercialSheetPath;
        } else {
            sheetPath = residencialSheetPath;
        }
        Papa.parse(sheetPath, {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                const findedProject = results.data.find((x) => x.id === parseInt(splicedParams[3]));
                setProjeto(findedProject);
                parseGaleria(findedProject.galeria)
            },
        });
    }

    function parseGaleria(linkToGalerySheet) {
        if (linkToGalerySheet) {
            Papa.parse(linkToGalerySheet, {
                download: true,
                header: true,
                dynamicTyping: true,
                complete: (results) => {
                    setGaleria(results.data);
                },
            });
        }
    }

    useEffect(() => {
        parseProjeto();
    }, []);
    const pc_component = (
        <div className="projeto_component flex-column">
            <h1 className="titulo">{projeto.titulo}</h1>
            <div className="banner_principal flex">
                <img src={projeto.capa} className="img_principal" alt="" />
                <div className="description">
                    <p className="texto">{projeto.descricao}</p>
                </div>
            </div>
            <div className="additional_info flex">
                <div className="bloco entrega flex">
                    <p className="bloco_titulo">Ano do Projeto</p>
                    <p className="ano">{projeto.ano}</p>
                </div>
                <div className="bloco local flex">
                    <p className="bloco_titulo">Local</p>
                    <p className="bloco_info">{projeto.local}</p>
                </div>
            </div>
            <div className="project_gallery">
                {galeria ? <Gallery photos={galeria} direction={"column"}/> : ""}
            </div>
        </div>
    );

    const mobile_component = (
        <div className="projeto_component_mobile flex-column">
            <h1 className="titulo">{projeto.titulo}</h1>
            <div className="banner_principal flex">
            <img src={`https://drive.google.com/uc?export=view&id=${projeto.capa}`} className="img_principal" alt="" />
                <div className="description">
                    <p className="texto">{projeto.descricao}</p>
                </div>
            </div>
            <div className="additional_info flex">
                <div className="bloco entrega flex">
                    <p className="bloco_titulo">Ano do Projeto</p>
                    <p className="bloco_info ano">{projeto.ano}</p>
                </div>
                <div className="bloco local flex">
                    <p className="bloco_titulo">Local</p>
                    <p className="bloco_info">{projeto.local}</p>
                </div>
            </div>
            <div className="project_gallery">
            {galeria ? <Gallery photos={galeria} direction={"column"}/> : ""}
            </div>
        </div>
    );

    return <div>{width > 768 ? pc_component : mobile_component}</div>;
};

export default PaginaComponente;
