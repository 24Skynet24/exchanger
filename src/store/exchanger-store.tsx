import {makeAutoObservable} from "mobx";

class ExchangerStore {
    usd: number = 0
    eur: number = 0
    valueChange = (val: number, target: boolean = true): void => {
        target ? this.usd = val : this.eur = val
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new ExchangerStore()