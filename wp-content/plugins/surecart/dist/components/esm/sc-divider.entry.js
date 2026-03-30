import { r as registerInstance, h } from './index-745b6bec.js';

const scDividerCss = ":host{display:block;min-height:1px}.divider{position:relative;padding:var(--spacing) 0}.line__container{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center}.line{width:100%;border-top:1px solid var(--sc-divider-border-top-color, var(--sc-color-gray-200))}.text__container{position:relative;display:flex;justify-content:center;font-size:var(--sc-font-size-small)}.text{padding:0 var(--sc-spacing-small);background:var(--sc-divider-text-background-color, var(--sc-color-white));color:var(--sc-color-gray-500)}";
const ScDividerStyle0 = scDividerCss;

const ScDivider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'c1b9eabcecc389b69018b88a354e7af293a6a64b', class: "divider", part: "base" }, h("div", { key: '89f796940b6128b0e21fbff2de093e2ac9c9cda5', class: "line__container", "aria-hidden": "true", part: "line-container" }, h("div", { key: '3bb22d082752798616a68772457662e16eeaf537', class: "line", part: "line" })), h("div", { key: 'f08b01ddbf822dc9053bcf34bf0f7aefadad2598', class: "text__container", part: "text-container" }, h("span", { key: '4e327bbb7e0a36404b7acf8c4304f10e3fbb6390', class: "text", part: "text" }, h("slot", { key: '782ee3251603957df3b5eed8cbc84533b43d28db' })))));
    }
};
ScDivider.style = ScDividerStyle0;

export { ScDivider as sc_divider };

//# sourceMappingURL=sc-divider.entry.js.map