import { r as registerInstance, h, a as getElement } from './index-745b6bec.js';

const scBreadcrumbCss = ":host{display:inline-flex}.breadcrumb-item{display:inline-flex;align-items:center;font-family:var(--sc-font-sans);font-size:var(--sc-font-size-small);font-weight:var(--sc-font-weight-semibold);color:var(--sc-breadcrumb-color, var(--sc-color-gray-600));line-height:var(--sc-line-height-normal);white-space:nowrap}.breadcrumb-item__label{display:inline-block;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;text-decoration:none;color:inherit;background:none;border:none;border-radius:var(--sc-border-radius-medium);padding:0;margin:0;cursor:pointer;transition:color var(--sc-transition-fast) ease}:host(:not(:last-of-type)) .breadcrumb-item__label{color:var(--sc-breadcrumb-item-label-color, var(--sc-color-gray-900))}:host(:not(:last-of-type)) .breadcrumb-item__label:hover{color:var(--sc-breadcrumb-item-label-hover-color, var(--sc-color-primary-500))}:host(:not(:last-of-type)) .breadcrumb-item__label:active{color:var(--sc-breadcrumb-item-label-active-color, var(--sc-color-gray-900))}.breadcrumb-item__label:focus{box-shadow:var(--sc-focus-ring)}.breadcrumb-item__prefix,.breadcrumb-item__suffix{display:none;flex:0 0 auto;display:flex;align-items:center}.breadcrumb-item--has-prefix .breadcrumb-item__prefix{display:inline-flex;margin-right:var(--sc-spacing-x-small)}.breadcrumb-item--has-suffix .breadcrumb-item__suffix{display:inline-flex;margin-left:var(--sc-spacing-x-small)}:host(:last-of-type) .breadcrumb-item__separator{display:none}.breadcrumb-item__separator{display:inline-flex;align-items:center;margin:0 var(--sc-spacing-x-small);user-select:none}";
const ScBreadcrumbStyle0 = scBreadcrumbCss;

const ScBreadcrumb = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = undefined;
        this.target = undefined;
        this.rel = 'noreferrer noopener';
        this.hasPrefix = undefined;
        this.hasSuffix = undefined;
    }
    handleSlotChange() {
        this.hasPrefix = !!this.el.querySelector('[slot="prefix"]');
        this.hasSuffix = !!this.el.querySelector('[slot="suffix"]');
    }
    render() {
        const Tag = this.href ? 'a' : 'div';
        return (h("div", { key: 'b3792cb3b12f9386eb37ee52387b1450ff475b5e', part: "base", class: {
                'breadcrumb-item': true,
                'breadcrumb-item--has-prefix': this.hasPrefix,
                'breadcrumb-item--has-suffix': this.hasSuffix,
            } }, h("span", { key: 'da5d8e8d692d87b0e039fcfc9701008ee8e265ca', part: "prefix", class: "breadcrumb-item__prefix" }, h("slot", { key: '3c4580346d9b4563216c97e97b9c5ca023e5659e', name: "prefix" })), h(Tag, { key: '59973b5493b6b0000c98020dd5046967b1dd8e93', part: "label", class: "breadcrumb-item__label breadcrumb-item__label--link", href: this.href, target: this.target, rel: this.rel }, h("slot", { key: '11226f11b4ebeaad2031a646305e670fb562c408' })), h("span", { key: '4892190042395b2539931bb374fc0e3f094f00b3', part: "suffix", class: "breadcrumb-item__suffix" }, h("slot", { key: 'a0d2c8f0498d8488e73621b443d93c7066adeabf', name: "suffix", onSlotchange: () => this.handleSlotChange() })), h("span", { key: '7414fe21bf17eb171613e371985d86e7284f1023', part: "separator", class: "breadcrumb-item__separator", "aria-hidden": "true" }, h("slot", { key: 'b97d532ce1b5c89fc27feef4f33b974cfbc9dae5', name: "separator", onSlotchange: () => this.handleSlotChange() }, h("sc-icon", { key: '91bce635ab88af6c8704989bdb5464067f1d96c7', name: "chevron-right" })))));
    }
    get el() { return getElement(this); }
};
ScBreadcrumb.style = ScBreadcrumbStyle0;

export { ScBreadcrumb as sc_breadcrumb };

//# sourceMappingURL=sc-breadcrumb.entry.js.map