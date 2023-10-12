import { AppState } from "../AppState.js";
import { Gifts } from "../models/Gifts.js";
import { Pop } from "../utils/Pop.js";
import { api } from "./AxiosService.js"




class GiftedService {
    async unlockGift(id) {
        const gift = AppState.gifts.find(gift => gift.id == id)
        const giftIndex = AppState.gifts.findIndex(gift => gift.id == id)
        if (!gift) {
            Pop.error("Can't find gift.")
            return
        }
        console.log('gift', gift);
        gift.opened = true
        console.log('gift', gift);
        const res = await api.put(`api/gifts/${id}`, gift)
        const newGift = new Gifts(res.data)


        AppState.gifts.splice(giftIndex, 1, newGift)

        AppState.emit('gifts')






    }



    async getAllGifts() {
        const res = await api.get('api/gifts')
        console.log('gifts', res.data);
        const newGifts = res.data.map(giftPOJO => new Gifts(giftPOJO))
        AppState.gifts = newGifts

    }

}




export const giftedService = new GiftedService