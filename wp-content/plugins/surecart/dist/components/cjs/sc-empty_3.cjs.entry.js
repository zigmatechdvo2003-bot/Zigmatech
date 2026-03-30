'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const pageAlign = require('./page-align-5a2ab493.js');

const scEmptyCss = ":host{display:block}.empty{display:flex;flex-direction:column;align-items:center;padding:var(--sc-spacing-large);text-align:center;gap:var(--sc-spacing-small);color:var(--sc-empty-color, var(--sc-color-gray-500))}.empty sc-icon{font-size:var(--sc-font-size-xx-large);color:var(--sc-empty-icon-color, var(--sc-color-gray-700))}";
const ScEmptyStyle0 = scEmptyCss;

const ScEmpty = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.icon = undefined;
    }
    render() {
        return (index.h("div", { key: '4ca98434c5baf6a956e84cf13f13ccbafcb85760', part: "base", class: "empty" }, !!this.icon && index.h("sc-icon", { key: '1bb7c3f04decc08f71a457165a18123f66c51d7b', exportparts: "base:icon", name: this.icon }), index.h("slot", { key: '52a8e5a96aa7445e4d81fcdc360c6b7ba9669a1a' })));
    }
};
ScEmpty.style = ScEmptyStyle0;

const scStackedListCss = ":host{display:block;font-family:var(--sc-font-sans)}:slotted(*){margin:0}";
const ScStackedListStyle0 = scStackedListCss;

const ScStackedList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return index.h("slot", { key: '22f6358a9c2d7aaf06c323e6d70291a4e579d9c1' });
    }
};
ScStackedList.style = ScStackedListStyle0;

const scStackedListRowCss = ":host{display:block;--column-width-min:125px;position:relative}:host(:not(:last-child)){border-bottom:1px solid var(--sc-stacked-list-border-color, var(--sc-color-gray-200))}:host(:focus-within){z-index:2}.list-row{background:var(--sc-list-row-background-color, var(--sc-color-white));color:var(--sc-list-row-color, var(--sc-color-gray-800));text-decoration:none;display:grid;justify-content:var(--sc-stacked-list-row-justify-content, space-between);align-items:var(--sc-stacked-list-row-align-items, start);grid-template-columns:repeat(auto-fit, minmax(100%, 1fr));gap:var(--sc-spacing-xx-small);padding:var(--sc-spacing-medium) var(--sc-spacing-large);transition:background-color var(--sc-transition-fast) ease;border-radius:var(--sc-stacked-list-row-border-radius, var(--sc-input-border-radius-medium));min-width:0px;min-height:0px}.list-row[href]:hover{background:var(--sc-stacked-list-row-hover-color, var(--sc-color-gray-50))}.list-row__prefix,.list-row__suffix{position:absolute;top:50%;transform:translateY(-50%);z-index:1}.list-row__prefix{left:var(--sc-spacing-large)}.list-row__suffix{right:var(--sc-spacing-large)}.list-row--has-prefix{padding-left:3.5em}.list-row--has-suffix{padding-right:3.5em;gap:var(--sc-spacing-xxxx-large)}.list-row.breakpoint-lg{grid-template-columns:repeat(calc(var(--columns) - 1), 1fr) 1fr;gap:var(--sc-spacing-large)}.list-row.breakpoint-lg ::slotted(:last-child:not(:first-child)){display:flex;justify-content:flex-end}.list-row--is-rtl.list-row__prefix,.list-row--is-rtl.list-row__suffix{left:20px;width:20px;transform:rotate(180deg)}.list-row--is-rtl.list-row__suffix{right:auto}.list-row--is-rtl.list-row--has-suffix{gap:var(--sc-spacing-large)}";
const ScStackedListRowStyle0 = scStackedListRowCss;

const ScStackedListRow = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.href = undefined;
        this.target = '_self';
        this.mobileSize = 600;
        this.width = undefined;
        this.hasPrefix = false;
        this.hasSuffix = false;
    }
    componentDidLoad() {
        // Only run if ResizeObserver is supported.
        if ('ResizeObserver' in window) {
            var ro = new window.ResizeObserver(entries => {
                entries.forEach(entry => {
                    this.width = entry.contentRect.width;
                });
            });
            ro.observe(this.el);
        }
    }
    handleSlotChange() {
        this.hasPrefix = !!Array.from(this.el.children).some(child => child.slot === 'prefix');
        this.hasSuffix = !!Array.from(this.el.children).some(child => child.slot === 'suffix');
    }
    render() {
        const Tag = this.href ? 'a' : 'div';
        return (index.h(Tag, { key: '36b3942fe6fe111e4e5676ceb438de6b870b70d6', href: this.href, target: this.target, part: "base", class: {
                'list-row': true,
                'list-row--has-prefix': this.hasPrefix,
                'list-row--has-suffix': this.hasSuffix,
                'breakpoint-lg': this.width >= this.mobileSize,
                'list-row--is-rtl': pageAlign.isRtl()
            } }, index.h("span", { key: '02c1e7661da40dff022f1b0fbd08d5c95ab8e9aa', class: "list-row__prefix" }, index.h("slot", { key: '33dacca64320faec5cc53f4cc3daa14473accf55', name: "prefix", onSlotchange: () => this.handleSlotChange() })), index.h("slot", { key: '7b6f270d842a5ffd1b5c14aaf1701d06479ee81d', onSlotchange: () => this.handleSlotChange() }), index.h("span", { key: '6aef5e7e15ababfaada19cbdfa05f24bd1e7fbd7', class: "list-row__suffix" }, index.h("slot", { key: '617dd44d4e340f1dc1b6254fb621c4dc91e65e6a', name: "suffix", onSlotchange: () => this.handleSlotChange() }))));
    }
    get el() { return index.getElement(this); }
};
ScStackedListRow.style = ScStackedListRowStyle0;

exports.sc_empty = ScEmpty;
exports.sc_stacked_list = ScStackedList;
exports.sc_stacked_list_row = ScStackedListRow;

//# sourceMappingURL=sc-empty_3.cjs.entry.js.map