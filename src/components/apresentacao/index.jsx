import React, { useState } from "react";
import "./styles.css";

import useWindowDimensions from "../../hooks/getWindowDimensions";

import curriculo from "../../data/curriculo.js";
import servicos from "../../data/servicos.js";

const ApresentacaoComponent = (props) => {
    const { width } = useWindowDimensions();
    const defaultServicesImageBackgroundClass = "default_background_image";

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
        return index === 0 || index === 2 ? "hideListElement" : toggleServices.services[index].toggled ? "showListElement" : "hideListElement";
    }

    function toggleSubSubDescriptionClass(index) {
        return index !== 1 && index !== 4 && index !== 5 ?  "hideListElement" : toggleServices.services[index].toggled ? "showListElement" : "hideListElement";
    }

    function toggleSubSubSubDescriptionClass(index) {
        return index !== 5 ? "hideListElement" : toggleServices.services[index].toggled ? "showListElement" : "hideListElement";
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
                                    <p className={"descricao " + toggleDescriptionClass(i)}>{servico.descricao}</p>
                                    <p className={"subdescricao " + toggleSubDescriptionClass(i)}>{servico.subDescription}</p>
                                    <p className={"subdescricao " + toggleSubSubDescriptionClass(i)}>{servico.subSubDescription}</p>
                                    <p className={"subdescricao " + toggleSubSubSubDescriptionClass(i)}>{servico.subSubSubDescription}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={"background_image " + servicesImageBackgroundClass}></div>
            </div>
            <div className="block_2" id="formacao">
                <div className="info">
                    <h1>Apresentação</h1>
                    <div className="scrollable">
                        <section className="curriculo flex-column">
                            <div className="curso flex-column">
                                <h4>Apaixonada pelo meu trabalho, acredito que a Arquitetura e o Urbanismo tem o poder de transformar vidas. Minha missão é apresentar o melhor
                                    resultado dentro dos parâmetros desejados e buscar sempre as melhores soluções para o cliente.</h4>

                                <h4>Sou natural de Guaratinguetá, contudo sou formada em Arquitetura e Urbanismo pela Pontifícia Universidade Católica de Campinas (PUC-Campinas).</h4>

                                <h4>Meus primeiros passos no universo da Arquitetura se deram em um escritório de renome na cidade de Guaratinguetá, Ricardo Rabello Arquitetura, onde estagiei por 1 ano e 3 meses.</h4>

                                <h4>Após minha graduação tive oportunidade de trabalhar por quase 2 anos em um escritório em São Paulo, Thais Ruiz Arquitetura Colaborativa, onde era responsável pelos Projetos Legais
                                    do escritório e onde também tive oportunidade de participar de diversos e incríveis projetos, tanto no setor de criação, quanto no setor de detalhamento e gerenciamento de obra.</h4>

                                <h4>Hoje, atuo regularmente em minha cidade natal e região do Vale do Paraíba, porém, acredito que arquitetura tem o poder de quebrar barreiras geográficas, assim oferecemos nossos
                                    serviços de projeto e consultoria para qualquer lugar do mundo.</h4>

                                <h4>Tenho me especializado na metodologia BIM de projetos, por entender que esse método oferece os melhores resultados para meus clientes, garantindo um projeto preciso e compatível com outros
                                    setores da construção. Desta forma, melhorando o planejamento da obra e evitando imprevistos indesejáveis.</h4>

                                <h4>Meu sonho é fazer uma arquitetura de qualidade para todos e te ajudar a planejar os seus sonhos. Quer saber mais? Entre em contato e vamos descobrir como eu posso te ajudar.</h4>
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
                                    <h4 className={"descricao " + toggleDescriptionClass(i)}>{servico.descricao}</h4>
                                    <h4 className={"subdescricao " + toggleSubDescriptionClass(i)}>{servico.subDescription}</h4>
                                    <h4 className={"subdescricao " + toggleSubSubDescriptionClass(i)}>{servico.subSubDescription}</h4>
                                    <h4 className={"subdescricao " + toggleSubSubSubDescriptionClass(i)}>{servico.subSubSubDescription}</h4>
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
                                <h4>Apaixonada pelo meu trabalho, acredito que a Arquitetura e o Urbanismo tem o poder de transformar vidas. Minha missão é apresentar o melhor
                                    resultado dentro dos parâmetros desejados e buscar sempre as melhores soluções para o cliente.</h4>

                                <h4>Sou natural de Guaratinguetá, contudo sou formada em Arquitetura e Urbanismo pela Pontifícia Universidade Católica de Campinas (PUC-Campinas).</h4>

                                <h4>Meus primeiros passos no universo da Arquitetura se deram em um escritório de renome na cidade de Guaratinguetá, Ricardo Rabello Arquitetura, onde estagiei por 1 ano e 3 meses.</h4>

                                <h4>Após minha graduação tive oportunidade de trabalhar por quase 2 anos em um escritório em São Paulo, Thais Ruiz Arquitetura Colaborativa, onde era responsável pelos Projetos Legais
                                    do escritório e onde também tive oportunidade de participar de diversos e incríveis projetos, tanto no setor de criação, quanto no setor de detalhamento e gerenciamento de obra.</h4>

                                <h4>Hoje, atuo regularmente em minha cidade natal e região do Vale do Paraíba, porém, acredito que arquitetura tem o poder de quebrar barreiras geográficas, assim oferecemos nossos
                                    serviços de projeto e consultoria para qualquer lugar do mundo.</h4>

                                <h4>Tenho me especializado na metodologia BIM de projetos, por entender que esse método oferece os melhores resultados para meus clientes, garantindo um projeto preciso e compatível com outros
                                    setores da construção. Desta forma, melhorando o planejamento da obra e evitando imprevistos indesejáveis.</h4>

                                <h4>Meu sonho é fazer uma arquitetura de qualidade para todos e te ajudar a planejar os seus sonhos. Quer saber mais? Entre em contato e vamos descobrir como eu posso te ajudar.</h4>
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
