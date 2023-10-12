export class Gifts {
    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.creatorId = data.creatorId
    }

    get giftCardTemplate() {
        if (this.opened == true) {
            return `   <div class="col-3 card m-2 locked-template">
        <img class="p-3 img-fluid"
        src="${this.url}"
        alt="">
    <p class="text-center">${this.tag}</p>
    </div>`
        }
        else {
            return `<div type="button" onclick="app.GiftedController.openGift('${this.id}')" class="col-4 card m-2 locked-template">

        <p class="text-center">open me</p>
    </div>`
        }
    }

}
