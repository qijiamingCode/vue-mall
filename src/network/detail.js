import {request} from './request'

export function getDetail(iid) {
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export class Goods {
    constructor(columns,itemInfo,services){
        this.title = itemInfo.title;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discountDesc = itemInfo.discountDesc;
        this.discountBgColor = itemInfo.discountBgColor;
        this.columns = columns;
        this.services = services;
    }
}

export class ShopInfo {
    constructor(shopInfo,score){
        this.shopLogo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.cSells = shopInfo.cSells;
        this.cGoods = shopInfo.cGoods;
        this.score = score;

    }
}