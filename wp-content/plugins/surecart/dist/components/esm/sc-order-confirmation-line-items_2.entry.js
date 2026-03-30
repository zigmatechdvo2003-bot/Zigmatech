import { r as registerInstance, h, F as Fragment } from './index-745b6bec.js';
import { o as openWormhole } from './consumer-e06b16d3.js';
import { a as getHumanDiscount } from './price-af9f0dbf.js';
import { f as formatTaxDisplay } from './tax-a03623ca.js';
import './currency-a0c9bff4.js';

const scOrderConfirmationLineItemsCss = ":host{display:block}.line-items{display:grid;gap:var(--sc-spacing-small)}.line-item{display:grid;gap:var(--sc-spacing-small)}.fee__description{opacity:0.75}";
const ScOrderConfirmationLineItemsStyle0 = scOrderConfirmationLineItemsCss;

const ScOrderConfirmationLineItems = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.order = undefined;
        this.loading = undefined;
    }
    render() {
        var _a, _b;
        if (!!this.loading) {
            return (h("sc-line-item", null, h("sc-skeleton", { style: { 'width': '50px', 'height': '50px', '--border-radius': '0' }, slot: "image" }), h("sc-skeleton", { slot: "title", style: { width: '120px', display: 'inline-block' } }), h("sc-skeleton", { slot: "description", style: { width: '60px', display: 'inline-block' } }), h("sc-skeleton", { style: { width: '120px', display: 'inline-block' }, slot: "price" }), h("sc-skeleton", { style: { width: '60px', display: 'inline-block' }, slot: "price-description" })));
        }
        return (h("div", { class: { 'confirmation-summary': true } }, h("div", { class: "line-items", part: "line-items" }, (_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.line_items) === null || _b === void 0 ? void 0 : _b.data.map(item => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            return (h("div", { class: "line-item" }, h("sc-product-line-item", { key: item.id, image: (_b = (_a = item === null || item === void 0 ? void 0 : item.price) === null || _a === void 0 ? void 0 : _a.product) === null || _b === void 0 ? void 0 : _b.line_item_image, name: `${(_d = (_c = item === null || item === void 0 ? void 0 : item.price) === null || _c === void 0 ? void 0 : _c.product) === null || _d === void 0 ? void 0 : _d.name}`, price: (_e = item === null || item === void 0 ? void 0 : item.price) === null || _e === void 0 ? void 0 : _e.name, variant: item === null || item === void 0 ? void 0 : item.variant_display_options, editable: false, removable: false, quantity: item.quantity, fees: (_f = item === null || item === void 0 ? void 0 : item.fees) === null || _f === void 0 ? void 0 : _f.data, note: item === null || item === void 0 ? void 0 : item.display_note, amount: item.ad_hoc_display_amount ? item.ad_hoc_display_amount : item.subtotal_display_amount, scratch: !item.ad_hoc_display_amount && (item === null || item === void 0 ? void 0 : item.scratch_display_amount), trial: (_g = item === null || item === void 0 ? void 0 : item.price) === null || _g === void 0 ? void 0 : _g.trial_text, interval: `${(_h = item === null || item === void 0 ? void 0 : item.price) === null || _h === void 0 ? void 0 : _h.short_interval_text} ${(_j = item === null || item === void 0 ? void 0 : item.price) === null || _j === void 0 ? void 0 : _j.short_interval_count_text}`, purchasableStatus: item === null || item === void 0 ? void 0 : item.purchasable_status_display, sku: item === null || item === void 0 ? void 0 : item.sku })));
        }))));
    }
};
openWormhole(ScOrderConfirmationLineItems, ['order', 'busy', 'loading', 'empty'], false);
ScOrderConfirmationLineItems.style = ScOrderConfirmationLineItemsStyle0;

const scOrderConfirmationTotalsCss = ":host{display:block}";
const ScOrderConfirmationTotalsStyle0 = scOrderConfirmationTotalsCss;

const ScOrderConfirmationTotals = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.order = undefined;
    }
    renderDiscountLine() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (!((_c = (_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.discount) === null || _b === void 0 ? void 0 : _b.promotion) === null || _c === void 0 ? void 0 : _c.code)) {
            return null;
        }
        let humanDiscount = '';
        if ((_e = (_d = this.order) === null || _d === void 0 ? void 0 : _d.discount) === null || _e === void 0 ? void 0 : _e.coupon) {
            humanDiscount = getHumanDiscount((_g = (_f = this.order) === null || _f === void 0 ? void 0 : _f.discount) === null || _g === void 0 ? void 0 : _g.coupon);
        }
        return (h("sc-line-item", { style: { marginTop: 'var(--sc-spacing-small)' } }, h("span", { slot: "description" }, wp.i18n.__('Discount', 'surecart'), h("br", null), ((_k = (_j = (_h = this.order) === null || _h === void 0 ? void 0 : _h.discount) === null || _j === void 0 ? void 0 : _j.promotion) === null || _k === void 0 ? void 0 : _k.code) && (h("sc-tag", { type: "success", size: "small" }, (_o = (_m = (_l = this.order) === null || _l === void 0 ? void 0 : _l.discount) === null || _m === void 0 ? void 0 : _m.promotion) === null || _o === void 0 ? void 0 : _o.code))), humanDiscount && (h("span", { class: "coupon-human-discount", slot: "price-description" }, "(", humanDiscount, ")")), h("span", { slot: "price" }, (_p = this.order) === null || _p === void 0 ? void 0 : _p.discounts_display_amount)));
    }
    renderCheckoutFees(checkout) {
        var _a, _b, _c, _d;
        if (!((_b = (_a = checkout === null || checkout === void 0 ? void 0 : checkout.checkout_fees) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length)) {
            return null;
        }
        return (h(Fragment, null, (_d = (_c = checkout === null || checkout === void 0 ? void 0 : checkout.checkout_fees) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.map(fee => (h("sc-line-item", { key: fee === null || fee === void 0 ? void 0 : fee.id }, h("span", { slot: "description" }, fee === null || fee === void 0 ? void 0 : fee.description), h("span", { slot: "price" }, fee === null || fee === void 0 ? void 0 : fee.display_amount))))));
    }
    renderShippingFees(checkout) {
        var _a, _b, _c, _d;
        if (!((_b = (_a = checkout === null || checkout === void 0 ? void 0 : checkout.shipping_fees) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length)) {
            return null;
        }
        return (h(Fragment, null, (_d = (_c = checkout === null || checkout === void 0 ? void 0 : checkout.shipping_fees) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.map(fee => (h("sc-line-item", { key: fee === null || fee === void 0 ? void 0 : fee.id }, h("span", { slot: "description" }, fee === null || fee === void 0 ? void 0 : fee.description), h("span", { slot: "price" }, fee === null || fee === void 0 ? void 0 : fee.display_amount))))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18;
        const shippingMethod = (_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.selected_shipping_choice) === null || _b === void 0 ? void 0 : _b.shipping_method;
        const shippingMethodName = shippingMethod === null || shippingMethod === void 0 ? void 0 : shippingMethod.name;
        return (h("div", { key: '7905ff73d7fb0c09bd5cf3b04975101891377663', class: { 'line-item-totals': true } }, ((_c = this.order) === null || _c === void 0 ? void 0 : _c.subtotal_amount) !== ((_d = this.order) === null || _d === void 0 ? void 0 : _d.total_amount) && (h(Fragment, { key: '54ed2e70e1ff1d6e97e036d6a996118fd1bd92ca' }, h("sc-line-item", { key: '1916bd8da4a951ff91e9c1609ad87ace3863c66a' }, h("span", { key: '806250c5e6f721feba596f99a21152cc500438d1', slot: "description" }, wp.i18n.__('Subtotal', 'surecart')), h("span", { key: 'e67e41477c302ab5433ff7e24b4cfc3a70dd8fb0', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_e = this.order) === null || _e === void 0 ? void 0 : _e.subtotal_display_amount)), this.renderCheckoutFees(this.order))), !!((_f = this.order) === null || _f === void 0 ? void 0 : _f.trial_amount) && (h("sc-line-item", { key: 'b9592d9ce147ff82fd13953a928546c2cd35d823' }, h("span", { key: 'e89e7a946e75c5c8a24a19b930d4c1e3e0c019b9', slot: "description" }, wp.i18n.__('Trial', 'surecart')), h("span", { key: 'd67cb4d399c272b52daff659c3c7f767cf0cf720', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_g = this.order) === null || _g === void 0 ? void 0 : _g.trial_display_amount))), !!((_h = this.order) === null || _h === void 0 ? void 0 : _h.discounts) && (h("sc-line-item", { key: 'c67f4924f48f2a787102d0ce273b7e1d5fcfc9b0' }, h("span", { key: '8ff940d826b3ad9393417ee3d05a89f49eb03abf', slot: "description" }, wp.i18n.__('Discounts', 'surecart')), h("span", { key: '77c37a688bc6fc0aaa24e70531455cb95421917e', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_j = this.order) === null || _j === void 0 ? void 0 : _j.discounts_display))), !!((_m = (_l = (_k = this.order) === null || _k === void 0 ? void 0 : _k.discount) === null || _l === void 0 ? void 0 : _l.promotion) === null || _m === void 0 ? void 0 : _m.code) && (h("sc-line-item", { key: '781f93e4f54130fdb41914483f56bddceb917eb0' }, h("span", { key: '95a6c9d35a81a81d7565beb6c6bf901f056985ee', slot: "description" }, wp.i18n.__('Discount', 'surecart'), h("br", { key: 'f30f5ec4a162bc073201fb47b047984a4c80ff6d' }), h("sc-tag", { key: 'c2dc4fc80499495421ec8ad347d6c8930b9bc0b3', type: "success" }, wp.i18n.__('Coupon:', 'surecart'), " ", (_q = (_p = (_o = this.order) === null || _o === void 0 ? void 0 : _o.discount) === null || _p === void 0 ? void 0 : _p.promotion) === null || _q === void 0 ? void 0 :
            _q.code)), h("span", { key: '59c5eeb1ad96078fad29fdb02da0569a13f4eb56', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_r = this.order) === null || _r === void 0 ? void 0 : _r.discounts_display_amount))), !!((_s = this.order) === null || _s === void 0 ? void 0 : _s.shipping_amount) && (h(Fragment, { key: 'fc16b9cba2ef7be61e466f716a130114f380f63f' }, h("sc-line-item", { key: '81abb1fb7655e3bb672c359d18390efda37d0b25' }, h("span", { key: '2add4634be4f66861aaca57ec7dca0631c094e5d', slot: "description" }, `${wp.i18n.__('Shipping', 'surecart')} ${shippingMethodName ? `(${shippingMethodName})` : ''}`), h("span", { key: 'ed66822347289f922d7be1eb02d8e166585119b1', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_t = this.order) === null || _t === void 0 ? void 0 : _t.shipping_display_amount)), this.renderShippingFees(this.order))), !!((_u = this.order) === null || _u === void 0 ? void 0 : _u.tax_amount) && (h("sc-line-item", { key: 'b1a7fef17e2c0c868a84c7c4e67be8fa2969fadd' }, h("span", { key: 'd64ab15b7186d994590cafc42e0e144f03909f8b', slot: "description" }, `${formatTaxDisplay((_v = this.order) === null || _v === void 0 ? void 0 : _v.tax_label, ((_w = this.order) === null || _w === void 0 ? void 0 : _w.tax_status) === 'estimated')} (${(_x = this.order) === null || _x === void 0 ? void 0 : _x.tax_percent}%)`), h("span", { key: '53594a68aeaafbfd615d8691b84f9f24cb2bd908', slot: "price" }, (_y = this.order) === null || _y === void 0 ? void 0 : _y.tax_display_amount), !!((_z = this.order) === null || _z === void 0 ? void 0 : _z.tax_inclusive_amount) && h("span", { key: 'eeefdd6a2fa8ded12ca4c90da35566e4654503dd', slot: "price-description" }, `(${wp.i18n.__('included', 'surecart')})`))), h("sc-divider", { key: '745891bc62f3abf0c7c96de0be16e31fff81835e', style: { '--spacing': 'var(--sc-spacing-x-small)' } }), h("sc-line-item", { key: '555aefb1e1c0e6688bbc810fd534201833f60b0d', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, h("span", { key: '8cc81a8ea8e87b42c7eee17fa8abe2561d8d9d01', slot: "title" }, wp.i18n.__('Total', 'surecart')), h("span", { key: 'e09100d7a542232c151b99cd368401690fa361d3', slot: "price" }, (_0 = this.order) === null || _0 === void 0 ? void 0 : _0.total_display_amount), h("span", { key: '796fcfdf686474f707c0cb88cd7526e7d23e8f51', slot: "currency" }, (_1 = this.order) === null || _1 === void 0 ? void 0 : _1.currency)), !!((_2 = this.order) === null || _2 === void 0 ? void 0 : _2.proration_amount) && (h("sc-line-item", { key: 'bd224f0b5d7db84bf95d914f3b0094445b3f3e57' }, h("span", { key: '8ca20929ec3148a718c45e7fceed3ae1edd90f9a', slot: "description" }, wp.i18n.__('Proration', 'surecart')), h("span", { key: '1eb9da8071cddc51689cbaa5b1eeac2304054875', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_3 = this.order) === null || _3 === void 0 ? void 0 : _3.proration_display_amount))), !!((_4 = this.order) === null || _4 === void 0 ? void 0 : _4.applied_balance_amount) && (h("sc-line-item", { key: '54818e1dfaa5823ec2071e42505b0ecd70da3edd' }, h("span", { key: 'aa850bae77b4c02f299e842fc743b68430c2e383', slot: "description" }, wp.i18n.__('Applied Balance', 'surecart')), h("span", { key: '301ce8bff1d60bd98bea692f2320ea7e1df2c312', style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            }, slot: "price" }, (_5 = this.order) === null || _5 === void 0 ? void 0 : _5.applied_balance_display_amount))), !!((_6 = this.order) === null || _6 === void 0 ? void 0 : _6.credited_balance_amount) && (h("sc-line-item", { key: 'ddac5a8dbae8dd17d3086fe421b665abcf1035fd' }, h("span", { key: '935a3c9048a2c42127daad07554df3043e7c1d00', slot: "description" }, wp.i18n.__('Credited Balance', 'surecart')), h("span", { key: 'b25653cd44c0345dd666696ee3866f4603c94077', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_7 = this.order) === null || _7 === void 0 ? void 0 : _7.credited_balance_display_amount))), ((_8 = this.order) === null || _8 === void 0 ? void 0 : _8.amount_due) !== ((_9 = this.order) === null || _9 === void 0 ? void 0 : _9.total_amount) && (h("sc-line-item", { key: '6c6c4f7de8920a5319861b3eea191aee8de8ccda', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, h("span", { key: 'b0db1cfdf22211984353bf0fd56128e7dd764cb2', slot: "title" }, wp.i18n.__('Amount Due', 'surecart')), h("span", { key: '2e939382b72e1a3a65a6279dca56127fd42da319', slot: "price" }, (_10 = this.order) === null || _10 === void 0 ? void 0 : _10.amount_due_display_amount), h("span", { key: '0505b5d201fc48b39b5d17f834d80479bf27cbe1', slot: "currency" }, (_11 = this.order) === null || _11 === void 0 ? void 0 : _11.currency))), h("sc-divider", { key: '5247e4b5e7a54ef47a18adfdd4bb4fa102f355be', style: { '--spacing': 'var(--sc-spacing-x-small)' } }), !!((_12 = this.order) === null || _12 === void 0 ? void 0 : _12.paid_amount) && (h("sc-line-item", { key: '791572bf758c3206d2642c0c6b91724876e09ddd', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, h("span", { key: 'fe53fa0bf391b43d8b3f50ad1d07b2a3fd777097', slot: "title" }, wp.i18n.__('Paid', 'surecart')), h("span", { key: 'f64053cf8b14cc10afff9aa89d3cb12be000749d', slot: "price" }, (_13 = this.order) === null || _13 === void 0 ? void 0 : _13.paid_display_amount), h("span", { key: '486a92d061fca3b54b29e421cd30436e9f83587d', slot: "currency" }, (_14 = this.order) === null || _14 === void 0 ? void 0 : _14.currency))), !!((_15 = this.order) === null || _15 === void 0 ? void 0 : _15.refunded_amount) && (h(Fragment, { key: '743a0b91b939cad95dc434e0656f716db1df07af' }, h("sc-line-item", { key: '729acad876d36835e69ee52a1ad5ec346d452d3b', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, h("span", { key: '4ddfea07741ff409cdb11d2162636b61efa102cf', slot: "description" }, wp.i18n.__('Refunded', 'surecart')), h("span", { key: '81ec53fe12278668e7cd0cb3af4afd794b683105', slot: "price" }, (_16 = this.order) === null || _16 === void 0 ? void 0 : _16.refunded_display_amount)), h("sc-line-item", { key: 'd09046ad733b898c0de5f63257251271d1ad7100', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, h("span", { key: '4342a05a76451eb8a0a6148df1c2d891e4f092a2', slot: "title" }, wp.i18n.__('Net Payment', 'surecart')), h("span", { key: '3ffca702242ed7b86d889abc6c1a2b082b7da330', slot: "price" }, (_17 = this.order) === null || _17 === void 0 ? void 0 : _17.net_paid_display_amount)))), ((_18 = this.order) === null || _18 === void 0 ? void 0 : _18.tax_reverse_charged_amount) > 0 && (h("sc-line-item", { key: '6430beb4fac86b64098d4633a9ad955e4d1dd74e' }, h("span", { key: 'eba65d724dc6a0ceb610e40f34c9b23b75de39ec', slot: "description" }, wp.i18n.__('*Tax to be paid on reverse charge basis', 'surecart'))))));
    }
};
openWormhole(ScOrderConfirmationTotals, ['order', 'busy', 'loading', 'empty'], false);
ScOrderConfirmationTotals.style = ScOrderConfirmationTotalsStyle0;

export { ScOrderConfirmationLineItems as sc_order_confirmation_line_items, ScOrderConfirmationTotals as sc_order_confirmation_totals };

//# sourceMappingURL=sc-order-confirmation-line-items_2.entry.js.map