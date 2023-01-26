export let theStyle;
export default function Card(props){
    // const [style, setStyle] = useState('dnone')
   
    return(
        <div className={props.containerStyle} onClick={props.changeStyle}>
            <h1 className="cardTitle">{props.title}</h1>
            <h2 className={props.style}>{props.subtitle}</h2>
            <p className={props.style}>{props.description}</p>
        </div>
    )
}