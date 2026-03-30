import { r as registerInstance, h } from './index-745b6bec.js';
import { i as isRtl } from './page-align-0cdacf32.js';

const scTextCss = ":host{display:block;--font-size:var(--font-size, var(--sc-font-size-medium));--font-weight:var(--font-size, var(--sc-font-weight-normal));--line-height:var(--font-size, var(--sc-line-height-medium));--text-align:left;--color:var(--color, inherit)}.text{margin:0;font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);text-align:var(--text-align);color:var(--sc-stacked-list-row-text-color, var(--color))}.text.is-truncated{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text--is-rtl .text{text-align:right}";
const ScTextStyle0 = scTextCss;

const ScText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tag = 'p';
        this.truncate = false;
    }
    render() {
        const CustomTag = this.tag;
        return (h(CustomTag, { key: 'c64f25a3c615d16de3594013a84642d4588552ad', class: {
                'text': true,
                'is-truncated': this.truncate,
                'text--is-rtl': isRtl()
            } }, h("slot", { key: 'add8a835c6242a76174d4d31e9ecedd60e02c965' })));
    }
};
ScText.style = ScTextStyle0;

export { ScText as sc_text };

//# sourceMappingURL=sc-text.entry.js.map