import { r as registerInstance, h } from './index-745b6bec.js';
import { i as intervalString } from './price-af9f0dbf.js';
import { a as addQueryArgs } from './add-query-args-0e2a8393.js';
import './currency-a0c9bff4.js';

const scSubscriptionAdHocConfirmCss = ":host{display:block}";
const ScSubscriptionAdHocConfirmStyle0 = scSubscriptionAdHocConfirmCss;

const ScSubscriptionAdHocConfirm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = undefined;
        this.price = undefined;
        this.currencyCode = undefined;
        this.busy = false;
    }
    async handleSubmit(e) {
        const { ad_hoc_amount } = await e.target.getFormJson();
        this.busy = true;
        return window.location.assign(addQueryArgs(window.location.href, {
            action: 'confirm',
            ad_hoc_amount,
        }));
    }
    render() {
        return (h("sc-dashboard-module", { key: 'bb5940347cf9480364b5d0bd80242a334e4ce048', heading: this.heading || wp.i18n.__('Enter An Amount', 'surecart'), class: "subscription-switch" }, h("sc-card", { key: '42657c15f23c9c79c6f28c177bd5401fd1bedd3d' }, h("sc-form", { key: '2e418bd74140bcfcedabe937fd265d8b4e81d1d6', onScSubmit: e => this.handleSubmit(e) }, h("sc-price-input", { key: 'a596b7ba0df54ae44365c7f3a94e5d4ec6c146e7', label: "Amount", name: "ad_hoc_amount", currencyCode: this.currencyCode, autofocus: true, required: true }, h("span", { key: '0295dedc9b7b170c2f168c487f67f5ca8e039e1f', slot: "suffix", style: { opacity: '0.75' } }, intervalString(this.price))), h("sc-button", { key: 'dcf0b3f2f6f5ee815213998df57bb9acf11e128f', type: "primary", full: true, submit: true, loading: this.busy }, wp.i18n.__('Next', 'surecart'), " ", h("sc-icon", { key: 'b34ea76f75d72695ccbe8bdebb00e14f8585b104', name: "arrow-right", slot: "suffix" })))), this.busy && h("sc-block-ui", { key: '0210ee58c7683a7246412c6318c12b9b69d0ad4e', style: { zIndex: '9' } })));
    }
};
ScSubscriptionAdHocConfirm.style = ScSubscriptionAdHocConfirmStyle0;

export { ScSubscriptionAdHocConfirm as sc_subscription_ad_hoc_confirm };

//# sourceMappingURL=sc-subscription-ad-hoc-confirm.entry.js.map