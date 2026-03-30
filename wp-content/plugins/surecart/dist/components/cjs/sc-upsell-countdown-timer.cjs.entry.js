'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const getters = require('./getters-a0ce2d19.js');
require('./store-ce062aec.js');
require('./utils-2e91d46c.js');
require('./index-bcdafe6e.js');

const scUpsellCountdownTimerCss = ":host{display:flex;justify-content:var(--sc-upsell-countdown-timer-justify-content, center);align-items:var(--sc-upsell-countdown-timer-align-items, center);text-align:var(--sc-upsell-countdown-timer-text-align, center);flex-wrap:wrap;gap:var(--sc-upsell-countdown-timer-gap, 0.5em);line-height:1;padding:var(--sc-upsell-countdown-timer-padding, var(--sc-spacing-medium));border-radius:var(--sc-upsell-countdown-timer-border-radius, var(--sc-border-radius-pill));background-color:var(--sc-upsell-countdown-timer-background-color, rgb(226, 249, 235));color:var(--sc-upsell-countdown-timer-color, rgb(71, 91, 80))}";
const ScUpsellCountdownTimerStyle0 = scUpsellCountdownTimerCss;

const ScUpsellCountdownTimer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.timeRemaining = Infinity;
        this.formattedTime = undefined;
        this.showIcon = true;
    }
    componentDidLoad() {
        this.updateCountdown();
    }
    updateCountdown() {
        this.formattedTime = getters.getFormattedRemainingTime();
        setInterval(() => {
            this.formattedTime = getters.getFormattedRemainingTime();
        }, 1000);
    }
    render() {
        return (index.h(index.Host, { key: '3495b25a833e88d6df38835205553916686f12d4', role: "timer", class: {
                'sc-upsell-countdown-timer': true,
            } }, this.showIcon && index.h("sc-icon", { key: '9246ab5676b92a97aab09ae7d11836e9a9f6e9de', name: "clock" }), index.h("span", { key: '11f0acad5ae4a6314b0c287ab1b823c96136d1b6' }, index.h("slot", { key: '56e61e0eba3b2d3ba734cca54bb30c4a687d04b8', name: "offer-expire-text" }), " ", index.h("strong", { key: 'c9bb94d600a46f85e7e4a1f90a78cc9f6db1cf19' }, this.formattedTime))));
    }
};
ScUpsellCountdownTimer.style = ScUpsellCountdownTimerStyle0;

exports.sc_upsell_countdown_timer = ScUpsellCountdownTimer;

//# sourceMappingURL=sc-upsell-countdown-timer.cjs.entry.js.map