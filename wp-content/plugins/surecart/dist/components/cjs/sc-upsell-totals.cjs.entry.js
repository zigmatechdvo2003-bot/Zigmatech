'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
require('./watchers-e8b5d9a0.js');
const store = require('./store-ce062aec.js');
require('./watchers-db03ec4e.js');
require('./index-bcdafe6e.js');
require('./google-03835677.js');
require('./currency-71fce0f0.js');
require('./google-59d23803.js');
require('./utils-2e91d46c.js');
require('./util-b877b2bd.js');
require('./index-fb76df07.js');
require('./getters-a0ce2d19.js');
require('./mutations-86c3aa04.js');
require('./fetch-d374a251.js');
require('./add-query-args-49dcb630.js');
require('./remove-query-args-b57e8cd3.js');
require('./mutations-11c8f9a8.js');

const scUpsellTotalsCss = ":host{display:block}sc-divider{margin:16px 0 !important}.conversion-description{color:var(--sc-color-gray-500);font-size:var(--sc-font-size-small);margin-right:var(--sc-spacing-xx-small)}";
const ScUpsellTotalsStyle0 = scUpsellTotalsCss;

const ScUpsellTotals = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    renderAmountDue() {
        var _a, _b;
        return store.state.amount_due > 0 ? (_a = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _a === void 0 ? void 0 : _a.total_display_amount : !!((_b = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _b === void 0 ? void 0 : _b.trial_amount) ? wp.i18n.__('Trial', 'surecart') : wp.i18n.__('Free', 'surecart');
    }
    // Determine if the currency should be displayed to avoid duplication in the amount display.
    getCurrencyToDisplay() {
        var _a, _b, _c, _d, _e, _f, _g;
        return ((_c = (_b = (_a = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _a === void 0 ? void 0 : _a.total_default_currency_display_amount) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === null || _c === void 0 ? void 0 : _c.includes((_e = (_d = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _d === void 0 ? void 0 : _d.currency) === null || _e === void 0 ? void 0 : _e.toLowerCase()))
            ? ''
            : (_g = (_f = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _f === void 0 ? void 0 : _f.currency) === null || _g === void 0 ? void 0 : _g.toUpperCase();
    }
    renderConversion() {
        var _a, _b, _c, _d, _e, _f;
        // need to check the checkout for a few things.
        const checkout = store.state === null || store.state === void 0 ? void 0 : store.state.checkout;
        if (!(checkout === null || checkout === void 0 ? void 0 : checkout.show_converted_total)) {
            return null;
        }
        // the currency is the same as the current currency.
        if ((checkout === null || checkout === void 0 ? void 0 : checkout.currency) === (checkout === null || checkout === void 0 ? void 0 : checkout.current_currency)) {
            return null;
        }
        // there is no amount due.
        if (!((_a = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _a === void 0 ? void 0 : _a.total_amount)) {
            return null;
        }
        return (index.h(index.Fragment, null, index.h("sc-divider", null), index.h("sc-line-item", { style: { '--price-size': 'var(--sc-font-size-x-large)' } }, index.h("span", { slot: "title" }, index.h("slot", { name: "charge-amount-description" }, wp.i18n.sprintf(wp.i18n.__('Payment Total', 'surecart'), (_c = (_b = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _b === void 0 ? void 0 : _b.currency) === null || _c === void 0 ? void 0 : _c.toUpperCase()))), index.h("span", { slot: "price" }, this.getCurrencyToDisplay() && index.h("span", { class: "currency-label" }, this.getCurrencyToDisplay()), (_d = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _d === void 0 ? void 0 :
            _d.total_default_currency_display_amount)), index.h("sc-line-item", null, index.h("span", { slot: "description", class: "conversion-description" }, wp.i18n.sprintf(wp.i18n.__('Your payment will be processed in %s.', 'surecart'), (_f = (_e = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _e === void 0 ? void 0 : _e.currency) === null || _f === void 0 ? void 0 : _f.toUpperCase())))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (index.h("sc-summary", { key: 'f2a9a789c5ab146aa85b10ccb620ed5f747d88ec', "open-text": "Total", "closed-text": "Total", collapsible: true, collapsed: true }, !!((_a = store.state.line_item) === null || _a === void 0 ? void 0 : _a.id) && index.h("span", { key: '183566a39c2765e17de88d985d1f93eb335c18c7', slot: "price" }, this.renderAmountDue()), index.h("sc-divider", { key: '8322051ddcfcf14fdce826ca43b8fd717920999e' }), index.h("sc-line-item", { key: 'de33cabc82f633851da4bae515fcf9642176ea2e' }, index.h("span", { key: '25a1a714932dd6bce87691fdeb745f0aecf60c2a', slot: "description" }, wp.i18n.__('Subtotal', 'surecart')), index.h("span", { key: 'c60058156150311acac7727e2e006e7356e19d59', slot: "price" }, (_b = store.state.line_item) === null || _b === void 0 ? void 0 : _b.subtotal_display_amount)), (((_d = (_c = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _c === void 0 ? void 0 : _c.fees) === null || _d === void 0 ? void 0 : _d.data) || [])
            .filter(fee => fee.fee_type === 'upsell') // only upsell fees.
            .map(fee => {
            return (index.h("sc-line-item", null, index.h("span", { slot: "description" }, fee.description, " ", `(${wp.i18n.__('one time', 'surecart')})`), index.h("span", { slot: "price" }, fee === null || fee === void 0 ? void 0 : fee.display_amount)));
        }), !!((_e = store.state.line_item) === null || _e === void 0 ? void 0 : _e.tax_amount) && (index.h("sc-line-item", { key: '0830506eb419cf4f91d7b9ae97bde09a1ec85c48' }, index.h("span", { key: '6bb33b6d66a3daf7ed274996a2910b44b4d158b0', slot: "description" }, wp.i18n.__('Tax', 'surecart')), index.h("span", { key: '7f0fd638d841715fc280f8be94ac572f1141f1ca', slot: "price" }, (_f = store.state.line_item) === null || _f === void 0 ? void 0 : _f.tax_display_amount))), index.h("sc-divider", { key: '535d5ebcbd3eb12bbc401dc673e08e8b3dae0fda' }), index.h("sc-line-item", { key: 'f34a3e1b42306842cd8418f91a91c3af33d70aa5', style: { '--price-size': 'var(--sc-font-size-x-large)' } }, index.h("span", { key: '42cd6bd3e4ac3210e2a2a08b35b0b9fd942292bd', slot: "title" }, wp.i18n.__('Total', 'surecart')), index.h("span", { key: '68ca302cb45dec0716b10b8215c0cd582a606167', slot: "price" }, (_g = store.state.line_item) === null || _g === void 0 ? void 0 : _g.total_display_amount)), this.renderConversion()));
    }
};
ScUpsellTotals.style = ScUpsellTotalsStyle0;

exports.sc_upsell_totals = ScUpsellTotals;

//# sourceMappingURL=sc-upsell-totals.cjs.entry.js.map