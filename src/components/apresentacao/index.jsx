import React, { useState } from "react";
import "./styles.css";

import useWindowDimensions from "../../hooks/getWindowDimensions";

import curriculo from "../../data/curriculo.js";
import servicos from "../../data/servicos.js";

const ApresentacaoComponent = (props) => {
    const { width } = useWindowDimensions();
    const defaultServicesImageBackgroundClass= "default_background_image";

    const [toggleServices, setToggleServices] = useState({
        services: servicos
    });
    const [servicesImageBackgroundClass, setServicesImageBackgroundClass] = useState(defaultServicesImageBackgroundClass);

    function toggleActive(index) {
        let arrayCopy = [...toggleServices.services];

        arrayCopy[index].toggled = !arrayCopy[index].toggled;
        setToggleServices({ ...toggleServices, services: arrayCopy });
        changeServiceImage(arrayCopy[index].toggled, arrayCopy[index].imageBackgroundClass);
    }

    function toggleDescriptionClass(index) {
        return toggleServices.services[index].toggled ? "showListElement" : "hideListElement";
    }

    function toggleSubDescriptionClass(index) {
        return index !== 1 ? "hideListElement" : toggleServices.services[index].toggled ? "showListElement" : "hideListElement";
    }

    function toggleIconClass(index) {
        return toggleServices.services[index].toggled ? "arrow toggle-down" : "arrow toggle-right";
    }

    function changeServiceImage(serviceJustOpened, imageBackgroundClass) {
        if (serviceJustOpened) {
            setServicesImageBackgroundClass(imageBackgroundClass);
        }
        if (!toggleServices.services.find(service => service.toggled)) {
            setServicesImageBackgroundClass(defaultServicesImageBackgroundClass);
        }
    }

    const pc_component = (
        <div className="apresentacao flex-column">
            <div className="block_1">
                <div className="info">
                    <h1>Serviços</h1>
                    <div className="scrollable">
                        {toggleServices.services.map((servico, i) => {
                            return (
                                <div className="servico">
                                    <h3 className="titulo" onClick={() => toggleActive(i)}>{servico.titulo} <div className={toggleIconClass(i)}></div> </h3>
                                    <h4 className={"descricao " + toggleDescriptionClass(i)}>&nbsp;&nbsp;&nbsp;&nbsp;{servico.descricao}</h4>
                                    <h4 className={"subdescricao " + toggleSubDescriptionClass(i)}>&nbsp;&nbsp;&nbsp;&nbsp;{servico.residential}</h4>
                                    <h4 className={"subdescricao " + toggleSubDescriptionClass(i)}>&nbsp;&nbsp;&nbsp;&nbsp;{servico.comercial}</h4>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={"background_image "+servicesImageBackgroundClass}></div>
            </div>
            <div className="block_2" id="formacao">
                <div className="info">
                    <h1>Apresentação</h1>
                    <div className="scrollable">
                        <section className="curriculo flex-column">
                            <div className="curso flex-column">
                                <h4 className="texto-apresentacao">
                                    Apaixonada pelo meu trabalho, acredito que a Arquitetura e o Urbanismo tem o poder de transformar vidas. <br /> <br /> Minha missão é
                                    apresentar o melhor resultado dentro dos parâmetros desejados e buscar sempre as melhores soluções para o cliente.
                                </h4>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="background_image"></div>
            </div>
        </div>
    );

    const mobile_component = (
        <div className="mobile flex-column">
            <div className="block_1">
                <div className="info">
                    <h1>Serviços</h1>
                    <div className="servicos scrollable">
                        {toggleServices.services.map((servico, i) => {
                            return (
                                <div className="servico">
                                    <h3 className="titulo" onClick={() => toggleActive(i)}>{servico.titulo} <div class={toggleIconClass(i)}></div></h3>
                                    <h4 className={"descricao " + toggleDescriptionClass(i)}>&nbsp;&nbsp;&nbsp;&nbsp;{servico.descricao}</h4>
                                    <h4 className={"subdescricao " + toggleSubDescriptionClass(i)}>&nbsp;&nbsp;&nbsp;&nbsp;{servico.residential}</h4>
                                    <h4 className={"subdescricao " + toggleSubDescriptionClass(i)}>&nbsp;&nbsp;&nbsp;&nbsp;{servico.comercial}</h4>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="block_2" id="formacao">
                <div className="info">
                    <h1>Apresentação</h1>
                    <div className="scrollable">
                        <section className="curriculo flex-column">
                            <div className="curso flex-column">
                            <h4 className="texto-apresentacao">
                                    Apaixonada pelo meu trabalho, acredito que a Arquitetura e o Urbanismo tem o poder de transformar vidas. <br /> <br /> Minha missão é
                                    apresentar o melhor resultado dentro dos parâmetros desejados e buscar sempre as melhores soluções para o cliente.
                                </h4>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );

    return <div className="flex-column">{width > 768 ? pc_component : mobile_component}</div>;
};

export default ApresentacaoComponent;
