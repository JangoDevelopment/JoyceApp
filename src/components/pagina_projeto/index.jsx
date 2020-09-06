import React from "react";
import "./styles.css";

const info = {
    titulo: "Projeto X",
    ano: "2020",
    local: "São José dos Campos",
    capa: "images/capa.jpg",
    descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo non erat in ultrices. Maecenas ultricies maximus risus et posuere. Vivamus non dolor luctus, interdum orci ac, suscipit lectus. Vivamus a nunc ut leo faucibus viverra. Mauris sed vulputate nisl. Aliquam et ex ac justo tristique scelerisque vitae sagittis purus. Donec aliquam, nunc sed elementum ultricies, sapien justo condimentum nulla, sed convallis nulla nunc at ligula. Nullam lacus diam, pretium vitae pellentesque eu, tempor at enim. Fusce vulputate condimentum metus vel feugiat. Donec consequat odio ex, sed elementum magna fringilla vel. Integer iaculis odio quis elit rutrum maximus. Pellentesque vulputate dignissim fringilla. Duis non lectus dictum, pellentesque libero ut, fringilla orci. Nunc mattis lacus eget sodales venenatis. Donec in ante felis.",
};

const PaginaComponente = (props) => {
    return (
        <div className="projeto_component flex-column">
            <h1 className="titulo">{info.titulo}</h1>
            <div className="banner_principal flex">
                <img src={require(`../../${info.capa}`)} className="img_principal" />
                <div className="description">
                    <p className="texto">{info.descricao}</p>
                </div>
            </div>
            <div className="additional_info flex">
                <div className="bloco entrega flex">
                    <p className="bloco_titulo">Ano do Projeto</p>
                    <p className="bloco_info">{info.ano}</p>
                </div>
                <div className="bloco local flex">
                    <p className="bloco_titulo">Local</p>
                    <p className="bloco_info">{info.local}</p>
                </div>
            </div>
        </div>
    );
};

export default PaginaComponente;
