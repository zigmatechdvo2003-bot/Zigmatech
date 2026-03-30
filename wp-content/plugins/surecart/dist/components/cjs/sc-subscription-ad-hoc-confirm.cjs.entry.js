'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const price = require('./price-5b1afcfe.js');
const addQueryArgs = require('./add-query-args-49dcb630.js');
require('./currency-71fce0f0.js');

const scSubscriptionAdHocConfirmCss = ":host{display:block}";
const ScSubscriptionAdHocConfirmStyle0 = scSubscriptionAdHocConfirmCss;

const ScSubscriptionAdHocConfirm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.heading = undefined;
        this.price = undefined;
        this.currencyCode = undefined;
        this.busy = false;
    }
    async handleSubmit(e) {
        const { ad_hoc_amount } = await e.target.getFormJson();
        this.busy = true;
        return window.location.assign(addQueryArgs.addQueryArgs(window.location.href, {
            action: 'confirm',
            ad_hoc_amount,
        }));
    }
    render() {
        return (index.h("sc-dashboard-module", { key: 'bb5940347cf9480364b5d0bd80242a334e4ce048', heading: this.heading || wp.i18n.__('Enter An Amount', 'surecart'), class: "subscription-switch" }, index.h("sc-card", { key: '42657c15f23c9c79c6f28c177bd5401fd1bedd3d' }, index.h("sc-form", { key: '2e418bd74140bcfcedabe937fd265d8b4e81d1d6', onScSubmit: e => this.handleSubmit(e) }, index.h("sc-price-input", { key: 'a596b7ba0df54ae44365c7f3a94e5d4ec6c146e7', label: "Amount", name: "ad_hoc_amount", currencyCode: this.currencyCode, autofocus: true, required: true }, index.h("span", { key: '0295dedc9b7b170c2f168c487f67f5ca8e039e1f', slot: "suffix", style: { opacity: '0.75' } }, price.intervalString(this.price))), index.h("sc-button", { key: 'dcf0b3f2f6f5ee815213998df57bb9acf11e128f', type: "primary", full: true, submit: true, loading: this.busy }, wp.i18n.__('Next', 'surecart'), " ", index.h("sc-icon", { key: 'b34ea76f75d72695ccbe8bdebb00e14f8585b104', name: "arrow-right", slot: "suffix" })))), this.busy && index.h("sc-block-ui", { key: '0210ee58c7683a7246412c6318c12b9b69d0ad4e', style: { zIndex: '9' } })));
    }
};
ScSubscriptionAdHocConfirm.style = ScSubscriptionAdHocConfirmStyle0;

exports.sc_subscription_ad_hoc_confirm = ScSubscriptionAdHocConfirm;

//# sourceMappingURL=sc-subscription-ad-hoc-confirm.cjs.entry.js.map