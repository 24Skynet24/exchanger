import exchangerStore from "../../store/exchanger-store"
import ExInput from "../../ui/ExInput/index";
import {exInputType} from "../../types/index";
import {observer} from "mobx-react-lite";

import "./exchanger.css"

export const ExChanger = observer(() => {
    const {usd, eur, valueChange} = exchangerStore

    const usdInput: exInputType = {
        name: "usd",
        placeholder: "USD",
        value: usd,
    }
    const eurInput: exInputType = {
        name: "eur",
        placeholder: "EUR",
        value: eur,
    }

    const handleChange = (value: number, target: boolean = true): void => {
        valueChange(value, target)
        const exVal = target ? 1.07 : 0.93
        valueChange(value * exVal, !target)
        usdInput.value = +usd
        eurInput.value = +eur
    }

    return (
        <>
            <article className="exchanger">
                <ExInput params={usdInput} title="USD" change={e => handleChange(e)}/>
                <svg className="equally" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 9H19M5 15H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <ExInput params={eurInput} title="EUR" change={e => handleChange(e, false)}/>
            </article>
        </>
    )
})