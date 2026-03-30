import { r as registerInstance, h, F as Fragment } from './index-745b6bec.js';
import { s as state, e as isOptionSoldOut, h as isOptionMissing, b as setProduct } from './watchers-fbf07f32.js';
import './index-06061d4e.js';
import './google-dd89f242.js';
import './currency-a0c9bff4.js';
import './google-a86aa761.js';
import './utils-cd1431df.js';
import './util-50af2a83.js';
import './index-c5a96d53.js';

const scProductPillsVariantOptionCss = ".sc-product-pills-variant-option__wrapper{display:flex;flex-wrap:wrap;gap:var(--sc-spacing-x-small)}";
const ScProductPillsVariantOptionStyle0 = scProductPillsVariantOptionCss;

const ScProductPillsVariantOption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = undefined;
        this.optionNumber = 1;
        this.productId = undefined;
    }
    render() {
        return (h("sc-form-control", { key: 'f1c78f2082f946c68b432c063907082cbe22d69f', label: this.label }, h("span", { key: 'fddfbc7e181a541a90384c5795be4244c21d21c7', slot: "label" }, this.label), h("div", { key: '572ea81173ead6249640aa77a833cfc81290f257', class: "sc-product-pills-variant-option__wrapper" }, (state[this.productId].variant_options[this.optionNumber - 1].values || []).map(value => {
            const isUnavailable = isOptionSoldOut(this.productId, this.optionNumber, value) || isOptionMissing(this.productId, this.optionNumber, value);
            return (h("sc-pill-option", { isUnavailable: isUnavailable, isSelected: state[this.productId].variantValues[`option_${this.optionNumber}`] === value, onClick: () => setProduct(this.productId, {
                    variantValues: {
                        ...state[this.productId].variantValues,
                        [`option_${this.optionNumber}`]: value,
                    },
                }) }, h("span", { "aria-hidden": "true" }, value), h("sc-visually-hidden", null, wp.i18n.sprintf(wp.i18n.__('Select %s: %s.', 'surecart'), this.label, value), isUnavailable && h(Fragment, null, " ", wp.i18n.__('(option unavailable)', 'surecart')), state[this.productId].variantValues[`option_${this.optionNumber}`] === value && h(Fragment, null, " ", wp.i18n.__('This option is currently selected.', 'surecart')))));
        }))));
    }
};
ScProductPillsVariantOption.style = ScProductPillsVariantOptionStyle0;

export { ScProductPillsVariantOption as sc_product_pills_variant_option };

//# sourceMappingURL=sc-product-pills-variant-option.entry.js.map