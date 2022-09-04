import React, { useState, useEffect }from "react";
import Papa from "papaparse";
import "./styles.css";

import Gallery from "react-photo-gallery";
import useWindowDimensions from "../../hooks/getWindowDimensions";

const PaginaComponente = (props) => {
    const { width } = useWindowDimensions();
    const [projeto2, setProjeto] = useState(false);
    const [galeria, setGaleria] = useState(false);

    const urlParams = window.location.hash;
    const splicedParams = urlParams.split("/", 4);

    const comercialSheetPath = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQg_klbkHuCDKR1ChFI-rw4ZID2lqr_2v427Xvv5kAfCdW9X0ndKKe_zAtCGk-zFKUZY-JrU6iEer61/pub?output=csv";
    const residencialSheetPath = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlSgXAvEkwjl4u2U2cSTK2h8JlrACZSddxgZMOPEuK2xwkMZwiRarAMKYfRI00NbdtUvTNS07hkoZV/pub?output=csv";

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
        Papa.parse(linkToGalerySheet, {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                setGaleria(results.data);
            },
        });
    }

    useEffect(() => {
        parseProjeto();
    }, []);
    const pc_component = (
        <div className="projeto_component flex-column">
            <h1 className="titulo">{projeto2.titulo}</h1>
            <div className="banner_principal flex">
                <img src={projeto2.capa} className="img_principal" alt="" />
                <div className="description">
                    <p className="texto">{projeto2.descricao}</p>
                </div>
            </div>
            <div className="additional_info flex">
                <div className="bloco entrega flex">
                    <p className="bloco_titulo">Ano do Projeto</p>
                    <p className="ano">{projeto2.ano}</p>
                </div>
                <div className="bloco local flex">
                    <p className="bloco_titulo">Local</p>
                    <p className="bloco_info">{projeto2.local}</p>
                </div>
            </div>
            <div className="project_gallery">
                {galeria ? <Gallery photos={galeria} direction={"column"}/> : ""}
            </div>
        </div>
    );

    const mobile_component = (
        <div className="projeto_component_mobile flex-column">
            <h1 className="titulo">{projeto2.titulo}</h1>
            <div className="banner_principal flex">
            <img src={`https://drive.google.com/uc?export=view&id=${projeto2.capa}`} className="img_principal" alt="" />
                <div className="description">
                    <p className="texto">{projeto2.descricao}</p>
                </div>
            </div>
            <div className="additional_info flex">
                <div className="bloco entrega flex">
                    <p className="bloco_titulo">Ano do Projeto</p>
                    <p className="bloco_info ano">{projeto2.ano}</p>
                </div>
                <div className="bloco local flex">
                    <p className="bloco_titulo">Local</p>
                    <p className="bloco_info">{projeto2.local}</p>
                </div>
            </div>
            <div className="project_gallery">
                <Gallery photos={galeria} direction={"column"} />
            </div>
        </div>
    );

    return <div>{width > 768 ? pc_component : mobile_component}</div>;
};

export default PaginaComponente;
