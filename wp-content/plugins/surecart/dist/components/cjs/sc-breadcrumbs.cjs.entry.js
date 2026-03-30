'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');

const scBreadcrumbsCss = ":host{display:block}.breadcrumb{display:flex;align-items:center;flex-wrap:wrap}";
const ScBreadcrumbsStyle0 = scBreadcrumbsCss;

const ScBreadcrumbs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = 'Breadcrumb';
    }
    // Generates a clone of the separator element to use for each breadcrumb item
    getSeparator() {
        const slotted = this.el.shadowRoot.querySelector('slot[name=separator]');
        const separator = slotted.assignedElements({ flatten: true })[0];
        // Clone it, remove ids, and slot it
        const clone = separator.cloneNode(true);
        [clone, ...clone.querySelectorAll('[id]')].forEach(el => el.removeAttribute('id'));
        clone.slot = 'separator';
        return clone;
    }
    handleSlotChange() {
        const slotted = this.el.shadowRoot.querySelector('.breadcrumb slot');
        const items = slotted.assignedElements().filter(node => {
            return node.nodeName === 'CE-BREADCRUMB';
        });
        items.forEach((item, index) => {
            // Append separators to each item if they don't already have one
            const separator = item.querySelector('[slot="separator"]');
            if (separator === null) {
                item.append(this.getSeparator());
            }
            // The last breadcrumb item is the "current page"
            if (index === items.length - 1) {
                item.setAttribute('aria-current', 'page');
            }
            else {
                item.removeAttribute('aria-current');
            }
        });
    }
    render() {
        return (index.h(index.Fragment, { key: '6d12ffd546c2a2fdda863b2a3831e98111cb9514' }, index.h("nav", { key: '41810cb4dbbd20e59858dcbffa661ed95d6ac255', part: "base", class: "breadcrumb", "aria-label": this.label }, index.h("slot", { key: 'c7d95a28bb5b449212a476198decc1e841426d29', onSlotchange: () => this.handleSlotChange() })), index.h("div", { key: 'eefe1e7e3b0df145d34bec7291c0afb68dc2af0f', part: "separator", hidden: true, "aria-hidden": "true" }, index.h("slot", { key: '67b05db1cd38814a2919e13f18616fbaa4642809', name: "separator" }, index.h("sc-icon", { key: '88a9ef9ae220f348fe2b14b11eaa3e490b14b30a', name: "chevron-right" })))));
    }
    get el() { return index.getElement(this); }
};
ScBreadcrumbs.style = ScBreadcrumbsStyle0;

exports.sc_breadcrumbs = ScBreadcrumbs;

//# sourceMappingURL=sc-breadcrumbs.cjs.entry.js.map