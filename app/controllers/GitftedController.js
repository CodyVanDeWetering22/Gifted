import { AppState } from "../AppState.js";
import { giftedService } from "../services/GiftedService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";









function _drawGifts() {
    const gifts = AppState.gifts
    let content = ''
    gifts.forEach(gift => content += gift.giftCardTemplate)

    setHTML('giftCard', content)
    console.log('drawing gifts', content);




}



export class GiftedController {
    constructor() {
        this.getMyGifts()

        AppState.on('gifts', _drawGifts)
        // AppState.on('gifts', ge)
    }


    async getMyGifts() {
        try {
            await giftedService.getAllGifts()
        } catch (error) {
            Pop.error(error)
            console.error(error);

        }
    }


    async openGift(id) {
        await giftedService.unlockGift(id)


    }



}