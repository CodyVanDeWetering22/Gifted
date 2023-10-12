import { AppState } from "../AppState.js"
import { Gifts } from "../models/Gifts.js"
import { api } from "./AxiosService.js"



class SandboxService {

    async createGift(giftData) {
        const res = await api.post('api/gifts', giftData)
        const newGift = new Gifts(res.data)
        AppState.gifts.unshift(newGift)
        AppState.emit('gifts')

    }



}


export const sandboxService = new SandboxService