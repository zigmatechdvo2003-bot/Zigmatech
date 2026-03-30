import { r as registerInstance, h } from './index-745b6bec.js';

const scMenuDividerCss = ":host{display:block}.menu-divider{border-top:solid 1px var(--sc-panel-border-color);margin:var(--sc-spacing-x-small) 0}";
const ScMenuDividerStyle0 = scMenuDividerCss;

const ScMenuDivider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("div", { key: 'cd4cf8306ea1a136a3ad116936b79ca63f426f5b', part: "base", class: "menu-divider", role: "separator", "aria-hidden": "true" });
    }
};
ScMenuDivider.style = ScMenuDividerStyle0;

export { ScMenuDivider as sc_menu_divider };

//# sourceMappingURL=sc-menu-divider.entry.js.map