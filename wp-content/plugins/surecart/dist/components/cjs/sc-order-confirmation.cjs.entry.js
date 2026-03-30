'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const fetch = require('./fetch-d374a251.js');
const universe = require('./universe-0cf1168a.js');
const removeQueryArgs = require('./remove-query-args-b57e8cd3.js');
const addQueryArgs = require('./add-query-args-49dcb630.js');

const scOrderConfirmationCss = ":host{display:block;max-width:800px;margin:auto}::slotted(*:not(:last-child)),sc-form form>*:not(:last-child){margin-bottom:var(--sc-form-row-spacing-large)}.order-confirmation__content{color:var(--sc-order-confirmation-color, var(--sc-color-gray-500))}.order-confirmation__content.hidden{display:none}::part(line-items){display:grid;gap:0.5em}";
const ScOrderConfirmationStyle0 = scOrderConfirmationCss;

const ScOrderConfirmation = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.order = undefined;
        this.loading = false;
        this.error = undefined;
    }
    componentWillLoad() {
        // @ts-ignore
        universe.Universe.create(this, this.state());
        // get teh session
        this.getSession();
    }
    /** Get session id from url. */
    getSessionId() {
        var _a;
        if ((_a = this.order) === null || _a === void 0 ? void 0 : _a.id)
            return this.order.id;
        return removeQueryArgs.getQueryArg(window.location.href, 'sc_order');
    }
    /** Update a session */
    async getSession() {
        var _a;
        if (!this.getSessionId())
            return;
        if ((_a = this.order) === null || _a === void 0 ? void 0 : _a.id)
            return;
        try {
            this.loading = true;
            this.order = (await await fetch.apiFetch({
                path: addQueryArgs.addQueryArgs(`surecart/v1/checkouts/${this.getSessionId()}`, {
                    expand: [
                        'checkout_fees',
                        'shipping_fees',
                        'line_items',
                        'line_item.price',
                        'line_item.fees',
                        'price.product',
                        'customer',
                        'customer.shipping_address',
                        'payment_intent',
                        'discount',
                        'manual_payment_method',
                        'discount.promotion',
                        'billing_address',
                        'shipping_address',
                    ],
                    refresh_status: true,
                    currency_conversion: false,
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
        }
        finally {
            this.loading = false;
        }
    }
    state() {
        var _a, _b;
        const manualPaymentMethod = (_a = this.order) === null || _a === void 0 ? void 0 : _a.manual_payment_method;
        return {
            processor: 'stripe',
            loading: this.loading,
            orderId: this.getSessionId(),
            order: this.order,
            customer: (_b = this.order) === null || _b === void 0 ? void 0 : _b.customer,
            manualPaymentTitle: manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name,
            manualPaymentInstructions: manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions,
        };
    }
    renderOnHold() {
        var _a, _b, _c;
        if (((_a = this.order) === null || _a === void 0 ? void 0 : _a.status) !== 'processing')
            return null;
        if (((_c = (_b = this === null || this === void 0 ? void 0 : this.order) === null || _b === void 0 ? void 0 : _b.payment_intent) === null || _c === void 0 ? void 0 : _c.processor_type) === 'paypal') {
            return (index.h("sc-alert", { type: "warning", open: true }, wp.i18n.__('Paypal is taking a closer look at this payment. It’s required for some payments and normally takes up to 3 business days.', 'surecart')));
        }
    }
    renderManualInstructions() {
        var _a;
        const paymentMethod = (_a = this.order) === null || _a === void 0 ? void 0 : _a.manual_payment_method;
        if (!(paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.instructions))
            return;
        return (index.h("sc-alert", { type: "info", open: true }, index.h("span", { slot: "title" }, paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.name), index.h("div", { innerHTML: paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.instructions })));
    }
    render() {
        var _a, _b;
        return (index.h(universe.Universe.Provider, { key: '1d7b9de387c84b9490b84362607c2c1c921642e4', state: this.state() }, index.h("div", { key: 'b36d9210520c562f88266c8589e6bb801d8c7cf4', class: { 'order-confirmation': true } }, index.h("div", { key: '3fc37ba8fa7a90da751e775ab2aa717659d7a3c4', class: {
                'order-confirmation__content': true,
                'hidden': !((_a = this.order) === null || _a === void 0 ? void 0 : _a.id) && !this.loading,
            } }, index.h("sc-order-confirm-components-validator", { key: '421cdfc8571238db8ed3e4f6586818fd7edaa77c', checkout: this.order }, index.h("slot", { key: 'aa1ce42db5b05f70771de5d2687d792bc9aa56af' }))), !((_b = this.order) === null || _b === void 0 ? void 0 : _b.id) && !this.loading && (index.h("sc-heading", { key: 'c368279e2cba021c385a5cbbf3be11c81d389101' }, wp.i18n.__('Order not found.', 'surecart'), index.h("span", { key: '43b29624fbce205aeb352a480023ebf5a4231ab3', slot: "description" }, wp.i18n.__('This order could not be found. Please try again.', 'surecart')))))));
    }
};
ScOrderConfirmation.style = ScOrderConfirmationStyle0;

exports.sc_order_confirmation = ScOrderConfirmation;

//# sourceMappingURL=sc-order-confirmation.cjs.entry.js.map