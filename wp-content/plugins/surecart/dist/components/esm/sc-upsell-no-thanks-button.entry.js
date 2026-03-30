import { r as registerInstance, h, H as Host } from './index-745b6bec.js';
import { d as decline } from './mutations-b0435825.js';
import './fetch-bc141774.js';
import './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';
import './store-4bc13420.js';
import './utils-cd1431df.js';
import './index-06061d4e.js';
import './watchers-fbf07f32.js';
import './google-dd89f242.js';
import './currency-a0c9bff4.js';
import './google-a86aa761.js';
import './util-50af2a83.js';
import './index-c5a96d53.js';
import './mutations-ed6d0770.js';

const scUpsellNoThanksButtonCss = "sc-upsell-no-thanks-button{display:block}sc-upsell-no-thanks-button p{margin-block-start:0;margin-block-end:1em}sc-upsell-no-thanks-button .wp-block-button__link{position:relative;text-decoration:none}";
const ScUpsellNoThanksButtonStyle0 = scUpsellNoThanksButtonCss;

const ScUpsellNoThanksButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'd8c1fa3bd5608e16c41a59713e0dc143c49bf330', onClick: () => decline() }, h("slot", { key: '8fc4e949590e5b1dbfce3f685e290a0a8b2ac9dc' })));
    }
};
ScUpsellNoThanksButton.style = ScUpsellNoThanksButtonStyle0;

export { ScUpsellNoThanksButton as sc_upsell_no_thanks_button };

//# sourceMappingURL=sc-upsell-no-thanks-button.entry.js.map