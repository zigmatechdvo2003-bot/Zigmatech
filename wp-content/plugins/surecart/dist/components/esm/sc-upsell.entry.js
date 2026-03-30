import { r as registerInstance, h, H as Host } from './index-745b6bec.js';
import './watchers-c215fc6b.js';
import { s as state } from './store-4bc13420.js';
import { a as isBusy } from './getters-1899e179.js';
import { t as trackOffer, p as preview } from './mutations-b0435825.js';
import './watchers-fbf07f32.js';
import './index-06061d4e.js';
import './google-dd89f242.js';
import './currency-a0c9bff4.js';
import './google-a86aa761.js';
import './utils-cd1431df.js';
import './util-50af2a83.js';
import './index-c5a96d53.js';
import './add-query-args-0e2a8393.js';
import './fetch-bc141774.js';
import './remove-query-args-938c53ea.js';
import './mutations-ed6d0770.js';

const scUpsellCss = ":host{display:block}.confirm__icon{margin-bottom:var(--sc-spacing-medium);display:flex;justify-content:center}.confirm__icon-container{background:var(--sc-color-primary-500);width:55px;height:55px;border-radius:999999px;display:flex;align-items:center;justify-content:center;font-size:26px;line-height:1;color:white}";
const ScUpsellStyle0 = scUpsellCss;

const ScUpsell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        trackOffer();
        preview();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const manualPaymentMethod = (_a = state.checkout) === null || _a === void 0 ? void 0 : _a.manual_payment_method;
        return (h(Host, { key: '265d1e33c0e48a3e133ca523e56cbb121df5f947' }, h("slot", { key: 'baf81adf55e3cf252f2623341cbeb62bf7a86093' }), isBusy() && h("sc-block-ui", { key: 'b188f69bcd10d23797e099f1c74298b8b013cc5d', style: { 'z-index': '30', '--sc-block-ui-position': 'fixed' } }), h("sc-dialog", { key: '306d16fc510dc1abdd79fd0c728cf050cd9902c7', open: state.loading === 'complete', style: { '--body-spacing': 'var(--sc-spacing-xxx-large)' }, noHeader: true, onScRequestClose: e => e.preventDefault() }, h("div", { key: '9e0235e66e4bd2e73991925ee83a1fe661f8525f', class: "confirm__icon" }, h("div", { key: 'c7b15fae542b50bc70a1be8b93b3faaf50c85f08', class: "confirm__icon-container" }, h("sc-icon", { key: 'ab4201d117a356cb9292fdbaf1ee458ed40a5c4e', name: "check" }))), h("sc-dashboard-module", { key: '24536ea537ede8ed42d03144f547c668d66ea539', heading: ((_c = (_b = state === null || state === void 0 ? void 0 : state.text) === null || _b === void 0 ? void 0 : _b.success) === null || _c === void 0 ? void 0 : _c.title) || wp.i18n.__('Thank you!', 'surecart'), style: { '--sc-dashboard-module-spacing': 'var(--sc-spacing-x-large)', 'textAlign': 'center' } }, h("span", { key: 'a44463227785e00dbea056caf0c7f385c834d922', slot: "description" }, ((_e = (_d = state === null || state === void 0 ? void 0 : state.text) === null || _d === void 0 ? void 0 : _d.success) === null || _e === void 0 ? void 0 : _e.description) || wp.i18n.__('Your purchase was successful. A receipt is on its way to your inbox.', 'surecart')), !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name) && !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions) && (h("sc-alert", { key: '55a3d0104c8b4337fde61a72cca6c389461210cb', type: "info", open: true, style: { 'text-align': 'left' } }, h("span", { key: 'e3246f0d7e29e169cc8499253a0bf877f6cf2880', slot: "title" }, manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name), h("div", { key: 'e9f627a6faf27ada7246f85cc12920405c074f10', innerHTML: manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions }))), h("sc-button", { key: 'bb6d5b94b6c96a91a6d2db06b181843e173834f7', href: (_g = (_f = window === null || window === void 0 ? void 0 : window.scData) === null || _f === void 0 ? void 0 : _f.pages) === null || _g === void 0 ? void 0 : _g.dashboard, size: "large", type: "primary", autofocus: true }, ((_j = (_h = state === null || state === void 0 ? void 0 : state.text) === null || _h === void 0 ? void 0 : _h.success) === null || _j === void 0 ? void 0 : _j.button) || wp.i18n.__('Continue', 'surecart'), h("sc-icon", { key: 'f9fe742c68227ba107d62029af64f3b4a5b7f860', name: "arrow-right", slot: "suffix" }))))));
    }
};
ScUpsell.style = ScUpsellStyle0;

export { ScUpsell as sc_upsell };

//# sourceMappingURL=sc-upsell.entry.js.map