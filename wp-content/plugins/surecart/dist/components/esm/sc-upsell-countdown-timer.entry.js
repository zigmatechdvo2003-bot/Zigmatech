import { r as registerInstance, h, H as Host } from './index-745b6bec.js';
import { b as getFormattedRemainingTime } from './getters-1899e179.js';
import './store-4bc13420.js';
import './utils-cd1431df.js';
import './index-06061d4e.js';

const scUpsellCountdownTimerCss = ":host{display:flex;justify-content:var(--sc-upsell-countdown-timer-justify-content, center);align-items:var(--sc-upsell-countdown-timer-align-items, center);text-align:var(--sc-upsell-countdown-timer-text-align, center);flex-wrap:wrap;gap:var(--sc-upsell-countdown-timer-gap, 0.5em);line-height:1;padding:var(--sc-upsell-countdown-timer-padding, var(--sc-spacing-medium));border-radius:var(--sc-upsell-countdown-timer-border-radius, var(--sc-border-radius-pill));background-color:var(--sc-upsell-countdown-timer-background-color, rgb(226, 249, 235));color:var(--sc-upsell-countdown-timer-color, rgb(71, 91, 80))}";
const ScUpsellCountdownTimerStyle0 = scUpsellCountdownTimerCss;

const ScUpsellCountdownTimer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.timeRemaining = Infinity;
        this.formattedTime = undefined;
        this.showIcon = true;
    }
    componentDidLoad() {
        this.updateCountdown();
    }
    updateCountdown() {
        this.formattedTime = getFormattedRemainingTime();
        setInterval(() => {
            this.formattedTime = getFormattedRemainingTime();
        }, 1000);
    }
    render() {
        return (h(Host, { key: '3495b25a833e88d6df38835205553916686f12d4', role: "timer", class: {
                'sc-upsell-countdown-timer': true,
            } }, this.showIcon && h("sc-icon", { key: '9246ab5676b92a97aab09ae7d11836e9a9f6e9de', name: "clock" }), h("span", { key: '11f0acad5ae4a6314b0c287ab1b823c96136d1b6' }, h("slot", { key: '56e61e0eba3b2d3ba734cca54bb30c4a687d04b8', name: "offer-expire-text" }), " ", h("strong", { key: 'c9bb94d600a46f85e7e4a1f90a78cc9f6db1cf19' }, this.formattedTime))));
    }
};
ScUpsellCountdownTimer.style = ScUpsellCountdownTimerStyle0;

export { ScUpsellCountdownTimer as sc_upsell_countdown_timer };

//# sourceMappingURL=sc-upsell-countdown-timer.entry.js.map