'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');

const scFeatureDemoBannerCss = ".sc-banner{background-color:var(--sc-color-brand-primary);color:white;display:flex;align-items:center;justify-content:center}.sc-banner>p{font-size:14px;line-height:1;margin:var(--sc-spacing-small)}.sc-banner>p a{color:inherit;font-weight:600;margin-left:10px;display:inline-flex;align-items:center;gap:8px;text-decoration:none;border-bottom:1px solid;padding-bottom:2px}";
const ScFeatureDemoBannerStyle0 = scFeatureDemoBannerCss;

const ScFeatureDemoBanner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.url = 'https://app.surecart.com/plans';
        this.buttonText = wp.i18n.__('Upgrade Your Plan', 'surecart');
    }
    render() {
        return (index.h("div", { key: '94b33fe70ef4c5d077eac2e4cebf0212df06a641', class: { 'sc-banner': true } }, index.h("p", { key: 'd272c9626af70f10b74533c4cd3bc800b3018131' }, index.h("slot", { key: '9521ed8c4218c8c7e99670e6235d6b8f70910061' }, wp.i18n.__('This is a feature demo. In order to use it, you must upgrade your plan.', 'surecart')), index.h("a", { key: '3bfd5b63b2a6b498e9e8d7155644e5aed8f2680f', href: this.url, target: "_blank" }, index.h("slot", { key: '1aacf24e6a8e836f923a8ab631cc0396e8cac8c4', name: "link" }, this.buttonText, " ", index.h("sc-icon", { key: '5296c3e2d5f90df25b2c4c4a00fce59e8c180293', name: "arrow-right" }))))));
    }
};
ScFeatureDemoBanner.style = ScFeatureDemoBannerStyle0;

exports.sc_feature_demo_banner = ScFeatureDemoBanner;

//# sourceMappingURL=sc-feature-demo-banner.cjs.entry.js.map