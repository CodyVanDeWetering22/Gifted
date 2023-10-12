import { AppState } from "../AppState.js"
import { giftedService } from "../services/GiftedService.js"
import { sandboxService } from "../services/SandboxService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"



export class SandboxController {
    constructor() {

    }

    createGift(event) {
        try {
            event.preventDefault()

            const form = event.target

            const giftData = getFormData(form)

            console.log(giftData);

            sandboxService.createGift(giftData)

            form.reset()


        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }




}