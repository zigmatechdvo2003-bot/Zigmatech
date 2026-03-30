import { r as registerInstance, h } from './index-745b6bec.js';
import { a as apiFetch } from './fetch-bc141774.js';
import { U as Universe } from './universe-5a73abb7.js';
import { g as getQueryArg } from './remove-query-args-938c53ea.js';
import { a as addQueryArgs } from './add-query-args-0e2a8393.js';

const scOrderConfirmationCss = ":host{display:block;max-width:800px;margin:auto}::slotted(*:not(:last-child)),sc-form form>*:not(:last-child){margin-bottom:var(--sc-form-row-spacing-large)}.order-confirmation__content{color:var(--sc-order-confirmation-color, var(--sc-color-gray-500))}.order-confirmation__content.hidden{display:none}::part(line-items){display:grid;gap:0.5em}";
const ScOrderConfirmationStyle0 = scOrderConfirmationCss;

const ScOrderConfirmation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.order = undefined;
        this.loading = false;
        this.error = undefined;
    }
    componentWillLoad() {
        // @ts-ignore
        Universe.create(this, this.state());
        // get teh session
        this.getSession();
    }
    /** Get session id from url. */
    getSessionId() {
        var _a;
        if ((_a = this.order) === null || _a === void 0 ? void 0 : _a.id)
            return this.order.id;
        return getQueryArg(window.location.href, 'sc_order');
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
            this.order = (await await apiFetch({
                path: addQueryArgs(`surecart/v1/checkouts/${this.getSessionId()}`, {
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
            return (h("sc-alert", { type: "warning", open: true }, wp.i18n.__('Paypal is taking a closer look at this payment. It’s required for some payments and normally takes up to 3 business days.', 'surecart')));
        }
    }
    renderManualInstructions() {
        var _a;
        const paymentMethod = (_a = this.order) === null || _a === void 0 ? void 0 : _a.manual_payment_method;
        if (!(paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.instructions))
            return;
        return (h("sc-alert", { type: "info", open: true }, h("span", { slot: "title" }, paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.name), h("div", { innerHTML: paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.instructions })));
    }
    render() {
        var _a, _b;
        return (h(Universe.Provider, { key: '1d7b9de387c84b9490b84362607c2c1c921642e4', state: this.state() }, h("div", { key: 'b36d9210520c562f88266c8589e6bb801d8c7cf4', class: { 'order-confirmation': true } }, h("div", { key: '3fc37ba8fa7a90da751e775ab2aa717659d7a3c4', class: {
                'order-confirmation__content': true,
                'hidden': !((_a = this.order) === null || _a === void 0 ? void 0 : _a.id) && !this.loading,
            } }, h("sc-order-confirm-components-validator", { key: '421cdfc8571238db8ed3e4f6586818fd7edaa77c', checkout: this.order }, h("slot", { key: 'aa1ce42db5b05f70771de5d2687d792bc9aa56af' }))), !((_b = this.order) === null || _b === void 0 ? void 0 : _b.id) && !this.loading && (h("sc-heading", { key: 'c368279e2cba021c385a5cbbf3be11c81d389101' }, wp.i18n.__('Order not found.', 'surecart'), h("span", { key: '43b29624fbce205aeb352a480023ebf5a4231ab3', slot: "description" }, wp.i18n.__('This order could not be found. Please try again.', 'surecart')))))));
    }
};
ScOrderConfirmation.style = ScOrderConfirmationStyle0;

export { ScOrderConfirmation as sc_order_confirmation };

//# sourceMappingURL=sc-order-confirmation.entry.js.map