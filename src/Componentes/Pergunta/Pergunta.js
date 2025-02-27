import {useState} from 'react'
import "./Pergunta.css"
import Virar from "../../assets/virar.svg"

export default function Pergunta(props) {
    const [RevelarCard, setRevelarCard] = useState("card escondido");
    const [CaixaOpcao, setCaixaOpcao] = useState("caixa-opcao");
    const [VirarFrente, setVirarFrente] = useState("front-face face");
    const [VirarTras, setVirarTras] = useState("back-face face");
    const [Icone, setIcone] = useState("play-outline");
    const {alterarArrayRespostas} = props

    function manterCartasViradas() {
        setVirarFrente("front-face face virar-frente-fixo")
        setVirarTras("back-face face virar-tras-fixo")
    }

    function revelarPergunta() {
        setRevelarCard("card")
        setCaixaOpcao("caixa-opcao escondido")
    }

    function responderNao() {
        console.log()
        alterarArrayRespostas("close-circle")
        setRevelarCard("card escondido")
        setCaixaOpcao("caixa-opcao pergunta_respondida-nao")
        setIcone("close-circle")
    }

    function responderQuase() {
        alterarArrayRespostas("help-circle")
        setRevelarCard("card escondido")
        setCaixaOpcao("caixa-opcao pergunta_respondida-quase")
        setIcone("help-circle")
    }

    function responderZap() {
        alterarArrayRespostas("checkmark-circle")
        setRevelarCard("card escondido")
        setCaixaOpcao("caixa-opcao pergunta_respondida-zap")
        setIcone("checkmark-circle")
    }

    return (
        <div className="pergunta">
            <div className={CaixaOpcao}>
                <p>{props.perguntaNum}</p>
                <ion-icon name={Icone} onClick={() => revelarPergunta()}></ion-icon>
            </div>
            <div className={RevelarCard}>
                <div className={VirarFrente}>
                    <p>{props.perguntaTexto}</p>
                    <img src={Virar} alt="virar" onClick={() => {manterCartasViradas()}}></img>
                </div>
                <div className={VirarTras}>
                    <p>{props.resposta}</p>
                    <div className="resposta">
                        <div className="resposta-nao" onClick={responderNao}>Não lembrei</div>
                        <div className="resposta-quase" onClick={responderQuase}>Quase não lembrei</div>
                        <div className="resposta-zap" onClick={responderZap}>Zap!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}