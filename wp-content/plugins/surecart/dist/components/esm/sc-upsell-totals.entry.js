import { r as registerInstance, h, F as Fragment } from './index-745b6bec.js';
import './watchers-c215fc6b.js';
import { s as state } from './store-4bc13420.js';
import './watchers-fbf07f32.js';
import './index-06061d4e.js';
import './google-dd89f242.js';
import './currency-a0c9bff4.js';
import './google-a86aa761.js';
import './utils-cd1431df.js';
import './util-50af2a83.js';
import './index-c5a96d53.js';
import './getters-1899e179.js';
import './mutations-b0435825.js';
import './fetch-bc141774.js';
import './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';
import './mutations-ed6d0770.js';

const scUpsellTotalsCss = ":host{display:block}sc-divider{margin:16px 0 !important}.conversion-description{color:var(--sc-color-gray-500);font-size:var(--sc-font-size-small);margin-right:var(--sc-spacing-xx-small)}";
const ScUpsellTotalsStyle0 = scUpsellTotalsCss;

const ScUpsellTotals = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    renderAmountDue() {
        var _a, _b;
        return state.amount_due > 0 ? (_a = state === null || state === void 0 ? void 0 : state.line_item) === null || _a === void 0 ? void 0 : _a.total_display_amount : !!((_b = state === null || state === void 0 ? void 0 : state.line_item) === null || _b === void 0 ? void 0 : _b.trial_amount) ? wp.i18n.__('Trial', 'surecart') : wp.i18n.__('Free', 'surecart');
    }
    // Determine if the currency should be displayed to avoid duplication in the amount display.
    getCurrencyToDisplay() {
        var _a, _b, _c, _d, _e, _f, _g;
        return ((_c = (_b = (_a = state === null || state === void 0 ? void 0 : state.line_item) === null || _a === void 0 ? void 0 : _a.total_default_currency_display_amount) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === null || _c === void 0 ? void 0 : _c.includes((_e = (_d = state === null || state === void 0 ? void 0 : state.line_item) === null || _d === void 0 ? void 0 : _d.currency) === null || _e === void 0 ? void 0 : _e.toLowerCase()))
            ? ''
            : (_g = (_f = state === null || state === void 0 ? void 0 : state.line_item) === null || _f === void 0 ? void 0 : _f.currency) === null || _g === void 0 ? void 0 : _g.toUpperCase();
    }
    renderConversion() {
        var _a, _b, _c, _d, _e, _f;
        // need to check the checkout for a few things.
        const checkout = state === null || state === void 0 ? void 0 : state.checkout;
        if (!(checkout === null || checkout === void 0 ? void 0 : checkout.show_converted_total)) {
            return null;
        }
        // the currency is the same as the current currency.
        if ((checkout === null || checkout === void 0 ? void 0 : checkout.currency) === (checkout === null || checkout === void 0 ? void 0 : checkout.current_currency)) {
            return null;
        }
        // there is no amount due.
        if (!((_a = state === null || state === void 0 ? void 0 : state.line_item) === null || _a === void 0 ? void 0 : _a.total_amount)) {
            return null;
        }
        return (h(Fragment, null, h("sc-divider", null), h("sc-line-item", { style: { '--price-size': 'var(--sc-font-size-x-large)' } }, h("span", { slot: "title" }, h("slot", { name: "charge-amount-description" }, wp.i18n.sprintf(wp.i18n.__('Payment Total', 'surecart'), (_c = (_b = state === null || state === void 0 ? void 0 : state.line_item) === null || _b === void 0 ? void 0 : _b.currency) === null || _c === void 0 ? void 0 : _c.toUpperCase()))), h("span", { slot: "price" }, this.getCurrencyToDisplay() && h("span", { class: "currency-label" }, this.getCurrencyToDisplay()), (_d = state === null || state === void 0 ? void 0 : state.line_item) === null || _d === void 0 ? void 0 :
            _d.total_default_currency_display_amount)), h("sc-line-item", null, h("span", { slot: "description", class: "conversion-description" }, wp.i18n.sprintf(wp.i18n.__('Your payment will be processed in %s.', 'surecart'), (_f = (_e = state === null || state === void 0 ? void 0 : state.line_item) === null || _e === void 0 ? void 0 : _e.currency) === null || _f === void 0 ? void 0 : _f.toUpperCase())))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("sc-summary", { key: 'f2a9a789c5ab146aa85b10ccb620ed5f747d88ec', "open-text": "Total", "closed-text": "Total", collapsible: true, collapsed: true }, !!((_a = state.line_item) === null || _a === void 0 ? void 0 : _a.id) && h("span", { key: '183566a39c2765e17de88d985d1f93eb335c18c7', slot: "price" }, this.renderAmountDue()), h("sc-divider", { key: '8322051ddcfcf14fdce826ca43b8fd717920999e' }), h("sc-line-item", { key: 'de33cabc82f633851da4bae515fcf9642176ea2e' }, h("span", { key: '25a1a714932dd6bce87691fdeb745f0aecf60c2a', slot: "description" }, wp.i18n.__('Subtotal', 'surecart')), h("span", { key: 'c60058156150311acac7727e2e006e7356e19d59', slot: "price" }, (_b = state.line_item) === null || _b === void 0 ? void 0 : _b.subtotal_display_amount)), (((_d = (_c = state === null || state === void 0 ? void 0 : state.line_item) === null || _c === void 0 ? void 0 : _c.fees) === null || _d === void 0 ? void 0 : _d.data) || [])
            .filter(fee => fee.fee_type === 'upsell') // only upsell fees.
            .map(fee => {
            return (h("sc-line-item", null, h("span", { slot: "description" }, fee.description, " ", `(${wp.i18n.__('one time', 'surecart')})`), h("span", { slot: "price" }, fee === null || fee === void 0 ? void 0 : fee.display_amount)));
        }), !!((_e = state.line_item) === null || _e === void 0 ? void 0 : _e.tax_amount) && (h("sc-line-item", { key: '0830506eb419cf4f91d7b9ae97bde09a1ec85c48' }, h("span", { key: '6bb33b6d66a3daf7ed274996a2910b44b4d158b0', slot: "description" }, wp.i18n.__('Tax', 'surecart')), h("span", { key: '7f0fd638d841715fc280f8be94ac572f1141f1ca', slot: "price" }, (_f = state.line_item) === null || _f === void 0 ? void 0 : _f.tax_display_amount))), h("sc-divider", { key: '535d5ebcbd3eb12bbc401dc673e08e8b3dae0fda' }), h("sc-line-item", { key: 'f34a3e1b42306842cd8418f91a91c3af33d70aa5', style: { '--price-size': 'var(--sc-font-size-x-large)' } }, h("span", { key: '42cd6bd3e4ac3210e2a2a08b35b0b9fd942292bd', slot: "title" }, wp.i18n.__('Total', 'surecart')), h("span", { key: '68ca302cb45dec0716b10b8215c0cd582a606167', slot: "price" }, (_g = state.line_item) === null || _g === void 0 ? void 0 : _g.total_display_amount)), this.renderConversion()));
    }
};
ScUpsellTotals.style = ScUpsellTotalsStyle0;

export { ScUpsellTotals as sc_upsell_totals };

//# sourceMappingURL=sc-upsell-totals.entry.js.map