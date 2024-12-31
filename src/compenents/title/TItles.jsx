import './titles.css'
export default function Tiltles({subtitle , title}){

    return(
        <div className='titles'>
            <h4>{subtitle}</h4>
            <h1>{title}</h1>
        </div>
    )
}