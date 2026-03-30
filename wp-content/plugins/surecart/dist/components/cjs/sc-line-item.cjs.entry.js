'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const pageAlign = require('./page-align-5a2ab493.js');

const scLineItemCss = ":host{display:block;--mobile-size:380px;--price-size:var(--sc-font-size-medium);--line-item-grid-template-columns:auto 1fr 1fr;line-height:var(--sc-line-height-dense)}.item{display:grid;align-items:center;grid-template-columns:var(--line-item-grid-template-columns)}@media screen and (min-width: var(--mobile-size)){.item{flex-wrap:no-wrap}}.item__title{color:var(--sc-line-item-title-color)}.item__price{color:var(--sc-input-label-color)}.item__title,.item__price{font-size:var(--sc-font-size-medium);font-weight:var(--sc-font-weight-semibold)}.item__description,.item__price-description{font-size:var(--sc-font-size-small);line-height:var(--sc-line-height-dense);color:var(--sc-input-label-color)}::slotted([slot=price-description]){margin-top:var(--sc-line-item-text-margin, 5px);color:var(--sc-input-label-color);text-decoration:none}.item__end{flex:1;display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;align-self:flex-end;width:100%;margin-top:20px}@media screen and (min-width: 280px){.item__end{width:auto;text-align:right;margin-left:20px;margin-top:0}.item--is-rtl .item__end{margin-left:0;margin-right:20px}.item__price-text{text-align:right;display:flex;flex-direction:column;align-items:flex-end}}.item__price-currency{font-size:var(--sc-font-size-small);color:var(--sc-input-label-color);text-transform:var(--sc-currency-transform, uppercase);margin-right:8px}.item__text{flex:1}.item__price-description{display:-webkit-box}::slotted([slot=image]){margin-right:20px;width:50px;height:50px;object-fit:cover;border-radius:4px;border:1px solid var(--sc-color-gray-200);display:block;box-shadow:var(--sc-input-box-shadow)}::slotted([slot=price-description]){display:inline-block;width:100%;line-height:1}.item__price-layout{font-size:var(--sc-font-size-x-large);font-weight:var(--sc-font-weight-semibold);display:flex;align-items:center}.item__price{font-size:var(--price-size)}.item_currency{font-weight:var(--sc-font-weight-normal);font-size:var(--sc-font-size-xx-small);color:var(--sc-input-label-color);margin-right:var(--sc-spacing-small);text-transform:var(--sc-currency-text-transform, uppercase)}.item--is-rtl.item__description,.item--is-rtl.item__price-description{text-align:right}.item--is-rtl .item__text{text-align:right}@media screen and (min-width: 280px){.item--is-rtl .item__end{width:auto;text-align:left;margin-left:0;margin-top:0}.item--is-rtl .item__price-text{text-align:left}}";
const ScLineItemStyle0 = scLineItemCss;

const ScLineItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.price = undefined;
        this.currency = undefined;
        this.hasImageSlot = undefined;
        this.hasTitleSlot = undefined;
        this.hasDescriptionSlot = undefined;
        this.hasPriceSlot = undefined;
        this.hasPriceDescriptionSlot = undefined;
        this.hasCurrencySlot = undefined;
    }
    componentWillLoad() {
        this.hasImageSlot = !!this.hostElement.querySelector('[slot="image"]');
        this.hasTitleSlot = !!this.hostElement.querySelector('[slot="title"]');
        this.hasDescriptionSlot = !!this.hostElement.querySelector('[slot="description"]');
        this.hasPriceSlot = !!this.hostElement.querySelector('[slot="price"]');
        this.hasPriceDescriptionSlot = !!this.hostElement.querySelector('[slot="price-description"]');
        this.hasCurrencySlot = !!this.hostElement.querySelector('[slot="currency"]');
    }
    render() {
        return (index.h("div", { key: 'a70753f7731f83b4ab2fba64d350cdbf49eeed2c', part: "base", class: {
                'item': true,
                'item--has-image': this.hasImageSlot,
                'item--has-title': this.hasTitleSlot,
                'item--has-description': this.hasDescriptionSlot,
                'item--has-price': this.hasPriceSlot,
                'item--has-price-description': this.hasPriceDescriptionSlot,
                'item--has-price-currency': this.hasCurrencySlot,
                'item--is-rtl': pageAlign.isRtl(),
            } }, index.h("div", { key: '57713051e8ba5e48c074039df492e20b74e43b86', class: "item__image", part: "image" }, index.h("slot", { key: 'a261fc5009ece04feb6e36f768cbbdd24038708c', name: "image" })), index.h("div", { key: '95b8f2f9ef3fc4e15b306b978efb42a8a0752c4b', class: "item__text", part: "text" }, index.h("div", { key: 'd3f75f880a1040d7e1ab8eae18cf07dc94baa828', class: "item__title", part: "title" }, index.h("slot", { key: '303be1f91e673e5993470d7ef80fa0ae7c55abbd', name: "title" })), index.h("div", { key: '7436044cc38969c5f99ca54d375d7a6c3a2bcff4', class: "item__description", part: "description" }, index.h("slot", { key: '33cf68faff2769f8da148346c38391db4c6aeafe', name: "description" }))), index.h("div", { key: '39027e10bfb8d80f7c91c06383f0ec3cdec5d443', class: "item__end", part: "price" }, index.h("div", { key: '47122c9b3629b49423ea2bb69aed28c6b7efa32d', class: "item__price-currency", part: "currency" }, index.h("slot", { key: 'b600d66b4a1e4827c481c69d894f0749bb6cb162', name: "currency" })), index.h("div", { key: 'ea85e7e0a5361dee3edf62c9194be7febc4e90c0', class: "item__price-text", part: "price-text" }, index.h("div", { key: '41ebd1ab2522ac683ac420c27b761fac52615662', class: "item__price", part: "price" }, index.h("slot", { key: '8af3955a76ccd3a732c830067d15dab72259f3a0', name: "price" })), index.h("div", { key: '8b15e813632bc800ae2809f8c6b70d99f1c9c10d', class: "item__price-description", part: "price-description" }, index.h("slot", { key: 'd099806eddbbea6e81b2f976eccb007f23635915', name: "price-description" }))))));
    }
    get hostElement() { return index.getElement(this); }
};
ScLineItem.style = ScLineItemStyle0;

exports.sc_line_item = ScLineItem;

//# sourceMappingURL=sc-line-item.cjs.entry.js.map