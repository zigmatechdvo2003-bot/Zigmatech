'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const pageAlign = require('./page-align-5a2ab493.js');

const scTabCss = ":host{display:block}.tab{font-family:var(--sc-font-sans);color:var(--sc-color-gray-600);display:flex;align-items:center;justify-content:flex-start;line-height:1;padding:var(--sc-spacing-small) var(--sc-spacing-small);font-size:var(--sc-font-size-medium);font-weight:var(--sc-font-weight-semibold);border-radius:var(--sc-border-radius-small);cursor:pointer;transition:color 0.35s ease, background-color 0.35s ease;user-select:none;text-decoration:none}.tab.tab--active,.tab:hover{color:var(--sc-tab-active-color, var(--sc-color-gray-900));background-color:var(--sc-tab-active-background, var(--sc-color-gray-100))}.tab.tab--disabled{cursor:not-allowed;color:var(--sc-color-gray-400)}.tab__content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:var(--sc-line-height-dense)}.tab__prefix,.tab__suffix{flex:0 0 auto;display:flex;align-items:center}.tab__suffix{margin-left:auto}.tab__counter{background:var(--sc-color-gray-200);display:inline-block;padding:var(--sc-spacing-xx-small) var(--sc-spacing-small);border-radius:var(--sc-border-radius-pill);font-size:var(--sc-font-size-small);text-align:center;line-height:1;transition:color 0.35s ease, background-color 0.35s ease}.tab.tab--active .tab__counter,.tab:hover .tab__counter{background:var(--sc-color-white)}.tab--has-prefix{padding-left:var(--sc-spacing-small)}.tab--has-prefix .tab__content{padding-left:var(--sc-spacing-small)}.tab--has-suffix{padding-right:var(--sc-spacing-small)}.tab--has-suffix .tab__label{padding-right:var(--sc-spacing-small)}.tab--is-rtl.tab--has-prefix .tab__content{padding-left:0;padding-right:var(--sc-spacing-small)}";
const ScTabStyle0 = scTabCss;

let id = 0;
const ScTab = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scClose = index.createEvent(this, "scClose", 7);
        this.componentId = `tab-${++id}`;
        this.panel = '';
        this.href = undefined;
        this.active = false;
        this.disabled = false;
        this.count = undefined;
        this.hasPrefix = false;
        this.hasSuffix = false;
    }
    /** Sets focus to the tab. */
    async triggerFocus(options) {
        this.tab.focus(options);
    }
    /** Removes focus from the tab. */
    async triggerBlur() {
        this.tab.blur();
    }
    handleSlotChange() {
        this.hasPrefix = !!this.el.querySelector('[slot="prefix"]');
        this.hasSuffix = !!this.el.querySelector('[slot="suffix"]');
    }
    render() {
        // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
        this.el.id = this.el.id || this.componentId;
        const Tag = this.href ? 'a' : 'div';
        return (index.h(Tag, { key: '67dc6e9d4fc3b03405b95d73860d0607b1349dac', part: `base ${this.active ? `active` : ``}`, href: this.href, class: {
                'tab': true,
                'tab--active': this.active,
                'tab--disabled': this.disabled,
                'tab--has-prefix': this.hasPrefix,
                'tab--has-suffix': this.hasSuffix,
                'tab--is-rtl': pageAlign.isRtl(),
            }, ref: el => (this.tab = el), role: "tab", "aria-disabled": this.disabled ? 'true' : 'false', "aria-selected": this.active ? 'true' : 'false', tabindex: this.disabled ? '-1' : '0' }, index.h("span", { key: 'edbced0df2b42aad7538d658f61491492a960d70', part: "prefix", class: "tab__prefix" }, index.h("slot", { key: 'c3a83ae9dfcbe0cd3f44f921ac4b16f70bb1ad19', onSlotchange: () => this.handleSlotChange(), name: "prefix" })), index.h("div", { key: '8e1c4a2e772f466e05d57db467f9c6770744e54c', class: "tab__content", part: "content" }, index.h("slot", { key: '0f2e2522e62e76bbfbf0d38087f636c9c08345c4' })), index.h("span", { key: 'bedcb638ce2e070f4b1de5cf6286b71b972a974e', part: "suffix", class: "tab__suffix" }, index.h("slot", { key: '8fa99c53e36534b260c5d92924bfda6ba81374f5', onSlotchange: () => this.handleSlotChange(), name: "suffix" })), index.h("slot", { key: '28b079ac845a18c6798a9b39341025e2299be0bf', name: "suffix" }, !!this.count && (index.h("div", { key: 'c7738b146feca28aefcf203eec911890d94b2c0a', class: "tab__counter", part: "counter" }, this.count)))));
    }
    get el() { return index.getElement(this); }
};
ScTab.style = ScTabStyle0;

exports.sc_tab = ScTab;

//# sourceMappingURL=sc-tab.cjs.entry.js.map