'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const fetch = require('./fetch-d374a251.js');
const lazy = require('./lazy-2b509fa7.js');
const price = require('./price-5b1afcfe.js');
const addQueryArgs = require('./add-query-args-49dcb630.js');
require('./remove-query-args-b57e8cd3.js');
require('./currency-71fce0f0.js');

const scSubscriptionCss = ":host{display:block}.subscription{display:grid;gap:0.5em}.subscription a{text-decoration:none;font-weight:var(--sc-font-weight-semibold);display:inline-flex;align-items:center;gap:0.25em;color:var(--sc-color-primary-500)}.subscription a.cancel{color:var(--sc-color-danger-500)}@media screen and (max-width: 720px){.subscription__action-buttons{--sc-flex-column-gap:var(--sc-spacing-xxx-small)}.subscription__action-buttons::part(base){flex-direction:column}.subscription__action-buttons sc-button::part(base){width:auto;height:2em}}";
const ScSubscriptionStyle0 = scSubscriptionCss;

const ScSubscription = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.subscriptionId = undefined;
        this.showCancel = undefined;
        this.heading = undefined;
        this.query = undefined;
        this.protocol = undefined;
        this.subscription = undefined;
        this.updatePaymentMethodUrl = undefined;
        this.loading = undefined;
        this.cancelModal = undefined;
        this.resubscribeModal = undefined;
        this.busy = undefined;
        this.error = undefined;
    }
    componentWillLoad() {
        lazy.onFirstVisible(this.el, () => {
            if (!this.subscription) {
                this.getSubscription();
            }
        });
    }
    async cancelPendingUpdate() {
        var _a;
        const r = confirm(wp.i18n.__('Are you sure you want to cancel the pending update to your plan?', 'surecart'));
        if (!r)
            return;
        try {
            this.busy = true;
            this.subscription = (await fetch.apiFetch({
                path: addQueryArgs.addQueryArgs(`surecart/v1/subscriptions/${(_a = this.subscription) === null || _a === void 0 ? void 0 : _a.id}/`, {
                    expand: ['price', 'price.product', 'current_period', 'period.checkout', 'purchase', 'purchase.license', 'license.activations', 'discount', 'discount.coupon'],
                }),
                method: 'PATCH',
                data: {
                    purge_pending_update: true,
                },
            }));
        }
        catch (e) {
            if (e === null || e === void 0 ? void 0 : e.message) {
                this.error = e.message;
            }
            else {
                this.error = wp.i18n.__('Something went wrong', 'surecart');
            }
            console.error(this.error);
        }
        finally {
            this.busy = false;
        }
    }
    async renewSubscription() {
        var _a;
        try {
            this.error = '';
            this.busy = true;
            this.subscription = (await fetch.apiFetch({
                path: addQueryArgs.addQueryArgs(`surecart/v1/subscriptions/${(_a = this.subscription) === null || _a === void 0 ? void 0 : _a.id}/renew`, {
                    expand: ['price', 'price.product', 'current_period', 'period.checkout', 'purchase', 'purchase.license', 'license.activations', 'discount', 'discount.coupon'],
                }),
                method: 'PATCH',
            }));
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.busy = false;
        }
    }
    /** Get all subscriptions */
    async getSubscription() {
        var _a;
        try {
            this.loading = true;
            this.subscription = (await await fetch.apiFetch({
                path: addQueryArgs.addQueryArgs(`surecart/v1/subscriptions/${this.subscriptionId || ((_a = this.subscription) === null || _a === void 0 ? void 0 : _a.id)}`, {
                    expand: ['price', 'price.product', 'current_period'],
                    ...(this.query || {}),
                }),
            }));
        }
        catch (e) {
            if (e === null || e === void 0 ? void 0 : e.message) {
                this.error = e.message;
            }
            else {
                this.error = wp.i18n.__('Something went wrong', 'surecart');
            }
            console.error(this.error);
        }
        finally {
            this.loading = false;
        }
    }
    renderName(subscription) {
        var _a;
        if (typeof ((_a = subscription === null || subscription === void 0 ? void 0 : subscription.price) === null || _a === void 0 ? void 0 : _a.product) !== 'string') {
            return price.productNameWithPrice(subscription === null || subscription === void 0 ? void 0 : subscription.price);
        }
        return wp.i18n.__('Subscription', 'surecart');
    }
    renderRenewalText(subscription) {
        const tag = index.h("sc-subscription-status-badge", { subscription: subscription });
        if ((subscription === null || subscription === void 0 ? void 0 : subscription.cancel_at_period_end) && subscription.current_period_end_at) {
            return (index.h("span", null, tag, ' ', 
            /* translators: %s: current period end date */
            wp.i18n.sprintf(wp.i18n.__('Your plan will be canceled on %s', 'surecart'), subscription.current_period_end_at_date)));
        }
        if (subscription.status === 'trialing' && subscription.trial_end_at) {
            return (index.h("span", null, tag, ' ', 
            /* translators: %s: trial end date */
            wp.i18n.sprintf(wp.i18n.__('Your plan begins on %s', 'surecart'), subscription.trial_end_at_date)));
        }
        if (subscription.status === 'active' && subscription.current_period_end_at) {
            return (index.h("span", null, tag, ' ', 
            /* translators: %s: current period end date */
            wp.i18n.sprintf(wp.i18n.__('Your plan renews on %s', 'surecart'), subscription.current_period_end_at_date)));
        }
        return tag;
    }
    renderEmpty() {
        return index.h("slot", { name: "empty" }, wp.i18n.__('This subscription does not exist.', 'surecart'));
    }
    renderLoading() {
        return (index.h("sc-stacked-list-row", { style: { '--columns': '2' }, "mobile-size": 0 }, index.h("div", { style: { padding: '0.5em' } }, index.h("sc-skeleton", { style: { width: '30%', marginBottom: '0.75em' } }), index.h("sc-skeleton", { style: { width: '20%', marginBottom: '0.75em' } }), index.h("sc-skeleton", { style: { width: '40%' } }))));
    }
    renderContent() {
        if (this.loading) {
            return this.renderLoading();
        }
        if (!this.subscription) {
            return this.renderEmpty();
        }
        return (index.h(index.Fragment, null, index.h("sc-subscription-next-payment", { subscription: this.subscription, updatePaymentMethodUrl: this.updatePaymentMethodUrl }, index.h("sc-subscription-details", { subscription: this.subscription }))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const paymentMethodExists = (this === null || this === void 0 ? void 0 : this.subscription.payment_method) || (this === null || this === void 0 ? void 0 : this.subscription.manual_payment);
        return (index.h("sc-dashboard-module", { key: '41b533c4fe48a6299c339e827291c248b3cda3e9', heading: this.heading || wp.i18n.__('Current Plan', 'surecart'), class: "subscription", error: this.error }, !!this.subscription && ((_a = this === null || this === void 0 ? void 0 : this.subscription) === null || _a === void 0 ? void 0 : _a.can_modify) && (index.h("sc-flex", { key: '5540b28a8d2bc8831103f0c694e6e90323e534f9', slot: "end", class: "subscription__action-buttons" }, this.updatePaymentMethodUrl && paymentMethodExists && (index.h("sc-button", { key: '498086a691572e02bd6f9d76ceacc23a5a3befe0', type: "link", href: this.updatePaymentMethodUrl }, index.h("sc-icon", { key: '122fc7153cb0d66bbb7a0a444dd49df0f876ebcc', name: "credit-card", slot: "prefix" }), wp.i18n.__('Update Payment Method', 'surecart'))), !paymentMethodExists && (index.h("sc-button", { key: 'b9f98d824335b33c1858ef5560556f90d320b268', type: "link", href: addQueryArgs.addQueryArgs(window.location.href, {
                action: 'create',
                model: 'payment_method',
                id: this === null || this === void 0 ? void 0 : this.subscription.id,
                ...(((_b = this === null || this === void 0 ? void 0 : this.subscription) === null || _b === void 0 ? void 0 : _b.live_mode) === false ? { live_mode: false } : {}),
            }) }, index.h("sc-icon", { key: 'd9316cd6c5a70bad426a8313d68e6c3857c5db7a', name: "credit-card", slot: "prefix" }), wp.i18n.__('Add Payment Method', 'surecart'))), !!Object.keys((_c = this.subscription) === null || _c === void 0 ? void 0 : _c.pending_update).length && (index.h("sc-button", { key: '8153eb62aa38de9051e08df68c1ccc0ca1aaa8b2', type: "link", onClick: () => this.cancelPendingUpdate() }, index.h("sc-icon", { key: 'ee83f4c17853b238ebe9087a490c7200e69e073c', name: "x-octagon", slot: "prefix" }), wp.i18n.__('Cancel Scheduled Update', 'surecart'))), ((_d = this === null || this === void 0 ? void 0 : this.subscription) === null || _d === void 0 ? void 0 : _d.cancel_at_period_end) ? (index.h("sc-button", { type: "link", onClick: () => this.renewSubscription() }, index.h("sc-icon", { name: "repeat", slot: "prefix" }), wp.i18n.__('Restore Plan', 'surecart'))) : (((_e = this.subscription) === null || _e === void 0 ? void 0 : _e.status) !== 'canceled' &&
            ((_f = this.subscription) === null || _f === void 0 ? void 0 : _f.current_period_end_at) &&
            this.showCancel && (index.h("sc-button", { type: "link", onClick: () => (this.cancelModal = true) }, index.h("sc-icon", { name: "x", slot: "prefix" }), wp.i18n.__('Cancel Plan', 'surecart')))), ((_g = this.subscription) === null || _g === void 0 ? void 0 : _g.status) === 'canceled' && (index.h("sc-button", { key: '6497cbc56f4386c0d70f9a2dddf30a0bfe8c38fd', type: "link", ...(!!((_h = this.subscription) === null || _h === void 0 ? void 0 : _h.payment_method) || (this === null || this === void 0 ? void 0 : this.subscription.manual_payment)
                ? {
                    onClick: () => (this.resubscribeModal = true),
                }
                : {
                    href: this === null || this === void 0 ? void 0 : this.updatePaymentMethodUrl,
                }) }, index.h("sc-icon", { key: 'cb01f33008de985aa68a2b805d672fc6b28add8e', name: "repeat", slot: "prefix" }), wp.i18n.__('Resubscribe', 'surecart'))))), index.h("sc-card", { key: '6d5b5af082c5c4d3ef920d03f9e01df220bf760f', style: { '--overflow': 'hidden' }, noPadding: true }, this.renderContent()), this.busy && index.h("sc-block-ui", { key: 'dbbf45e0dc55da0096a0eb70c241a370b61cd233', spinner: true }), index.h("sc-cancel-dialog", { key: 'a9a37e6ebdd3600566b70f6e1d77ae7902a4f04b', subscription: this.subscription, protocol: this.protocol, open: this.cancelModal, onScRequestClose: () => (this.cancelModal = false), onScRefresh: () => this.getSubscription() }, index.h("slot", { key: '3c020dd10acfb4d2454d4e2d59031c922d51e478', name: "cancel-popup-content", slot: "cancel-popup-content" })), index.h("sc-subscription-reactivate", { key: '2c5dd253a7d565c13e91f91737cf4e1064a54550', subscription: this.subscription, open: this.resubscribeModal, onScRequestClose: () => (this.resubscribeModal = false), onScRefresh: () => this.getSubscription() })));
    }
    get el() { return index.getElement(this); }
};
ScSubscription.style = ScSubscriptionStyle0;

exports.sc_subscription = ScSubscription;

//# sourceMappingURL=sc-subscription.cjs.entry.js.map