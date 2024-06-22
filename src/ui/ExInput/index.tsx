import "./exinput.css"

export default function ExInput( {params, title} ) {
    return (
        <>
            <article className="ex_input">
                <span>{ title }</span>
                <input
                    type="number"
                    name={params.name}
                    placeholder={params.placeholder}
                    value={params.value}
                />
            </article>
        </>
    )
}