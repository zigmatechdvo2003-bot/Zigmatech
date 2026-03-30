'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');

const ScPaymentMethodDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.paymentMethod = undefined;
        this.editHandler = undefined;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (index.h("sc-card", { key: '5dc361c39a660ab59c6f5a57ff7280b7d3e313d6' }, index.h("sc-flex", { key: '6d18af97690354eb468ef4d209023c9eb00e629d', alignItems: "center", justifyContent: "flex-start", style: { gap: '0.5em' } }, index.h("sc-payment-method", { key: '3be96857587dadcf87cbf76ca05c50109c6f0377', paymentMethod: this.paymentMethod }), index.h("div", { key: '2575064f372d62298a6dea715eb139d586889474' }, !!((_b = (_a = this.paymentMethod) === null || _a === void 0 ? void 0 : _a.card) === null || _b === void 0 ? void 0 : _b.exp_month) && (index.h("span", { key: '4d36dfe7f7ee73a54f11e02c186f1d82803709c8' }, 
        // Translators: %d/%d is month and year of expiration.
        wp.i18n.sprintf(wp.i18n.__('Exp. %d/%d', 'surecart'), (_d = (_c = this.paymentMethod) === null || _c === void 0 ? void 0 : _c.card) === null || _d === void 0 ? void 0 : _d.exp_month, (_f = (_e = this.paymentMethod) === null || _e === void 0 ? void 0 : _e.card) === null || _f === void 0 ? void 0 : _f.exp_year))), !!((_h = (_g = this.paymentMethod) === null || _g === void 0 ? void 0 : _g.paypal_account) === null || _h === void 0 ? void 0 : _h.email) && ((_k = (_j = this.paymentMethod) === null || _j === void 0 ? void 0 : _j.paypal_account) === null || _k === void 0 ? void 0 : _k.email)), index.h("sc-button", { key: '9149047b8abd55a9e54758d967793591dda1dca5', type: "text", circle: true, onClick: this.editHandler }, index.h("sc-icon", { key: '18983d7beafbb993bd4bac441d195f13980dedf4', name: "edit-2" })))));
    }
};

exports.sc_payment_method_details = ScPaymentMethodDetails;

//# sourceMappingURL=sc-payment-method-details.cjs.entry.js.map