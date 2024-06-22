import ExInput from "../../ui/ExInput/index";
import "./exchanger.css"

const test = {
    name: "test1",
    placeholder: "test1",
    value: 0,
}

export default function ExChanger() {
    return (
        <>
            <article className="exchanger">
                <ExInput params={test} title="USD"/>
                <svg className="equally" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 9H19M5 15H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <ExInput params={test} title="EUR"/>
            </article>
        </>
    )
}