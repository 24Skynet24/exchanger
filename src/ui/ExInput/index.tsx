import "./exinput.css"

export default function ExInput( {params, title, change} ) {
    return (
        <>
            <article className="ex_input">
                <span>{ title }</span>
                <input
                    type="number"
                    name={params.name}
                    placeholder={params.placeholder}
                    value={+params.value}
                    min={0}
                    onChange={ e => change(+e.target.value)}
                />
            </article>
        </>
    )
}