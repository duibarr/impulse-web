/* // Informa ao TS quais os formatos e as propriedades que o botão irá receber.
interface ButtonProps {
    text: String
}

function Button(props: ButtonProps) {
    console.log(props.text)
    //posso colocar uma cor que quiser apenas usando colchetes [], ex: bg-[#000000]
    // goto global.css pra ver algumas opções
    return <button className="bg-violet-500 p-2 text-white hover:bg-violet-800 transition-colors">{props.text}</button>
}

function App() {
    return (
        <div className="flex gap-2">
            <Button text="Enviar"/>
            <Button text="Ok"/> 
        </div>
    )
}

export default App */

import { Widget } from "./components/Widget";

export function App() {
    return (
        <Widget />
    )
}
