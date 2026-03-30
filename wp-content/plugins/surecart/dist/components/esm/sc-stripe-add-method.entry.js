import { r as registerInstance, h } from './index-745b6bec.js';
import { p as pure } from './pure-963214cb.js';
import { a as apiFetch } from './fetch-bc141774.js';
import { a as addQueryArgs } from './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';

const scStripeAddMethodCss = "sc-stripe-add-method{display:block}sc-stripe-add-method [hidden]{display:none}.loader{display:grid;height:128px;gap:2em}.loader__row{display:flex;align-items:flex-start;justify-content:space-between;gap:1em}.loader__details{display:grid;gap:0.5em}";
const ScStripeAddMethodStyle0 = scStripeAddMethodCss;

const ScStripeAddMethod = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.liveMode = true;
        this.customerId = undefined;
        this.successUrl = undefined;
        this.loading = undefined;
        this.loaded = undefined;
        this.error = undefined;
        this.paymentIntent = undefined;
    }
    componentWillLoad() {
        this.createPaymentIntent();
    }
    async handlePaymentIntentCreate() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        // we need this data.
        if (!((_c = (_b = (_a = this.paymentIntent) === null || _a === void 0 ? void 0 : _a.processor_data) === null || _b === void 0 ? void 0 : _b.stripe) === null || _c === void 0 ? void 0 : _c.publishable_key) || !((_f = (_e = (_d = this.paymentIntent) === null || _d === void 0 ? void 0 : _d.processor_data) === null || _e === void 0 ? void 0 : _e.stripe) === null || _f === void 0 ? void 0 : _f.account_id))
            return;
        // check if stripe has been initialized
        if (!this.stripe) {
            try {
                this.stripe = await pure.loadStripe((_j = (_h = (_g = this.paymentIntent) === null || _g === void 0 ? void 0 : _g.processor_data) === null || _h === void 0 ? void 0 : _h.stripe) === null || _j === void 0 ? void 0 : _j.publishable_key, { stripeAccount: (_m = (_l = (_k = this.paymentIntent) === null || _k === void 0 ? void 0 : _k.processor_data) === null || _l === void 0 ? void 0 : _l.stripe) === null || _m === void 0 ? void 0 : _m.account_id });
            }
            catch (e) {
                this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Stripe could not be loaded', 'surecart');
                // don't continue.
                return;
            }
        }
        // load the element.
        // we need a stripe instance and client secret.
        if (!((_q = (_p = (_o = this.paymentIntent) === null || _o === void 0 ? void 0 : _o.processor_data) === null || _p === void 0 ? void 0 : _p.stripe) === null || _q === void 0 ? void 0 : _q.client_secret) || !this.container) {
            console.warn('do not have client secret or container');
            return;
        }
        // get the computed styles.
        const styles = getComputedStyle(document.body);
        // we have what we need, load elements.
        this.elements = this.stripe.elements({
            clientSecret: (_t = (_s = (_r = this.paymentIntent) === null || _r === void 0 ? void 0 : _r.processor_data) === null || _s === void 0 ? void 0 : _s.stripe) === null || _t === void 0 ? void 0 : _t.client_secret,
            appearance: {
                variables: {
                    colorPrimary: styles.getPropertyValue('--sc-color-primary-500'),
                    colorText: styles.getPropertyValue('--sc-input-label-color'),
                    borderRadius: styles.getPropertyValue('--sc-input-border-radius-medium'),
                    colorBackground: styles.getPropertyValue('--sc-input-background-color'),
                    fontSizeBase: styles.getPropertyValue('--sc-input-font-size-medium'),
                },
                rules: {
                    '.Input': {
                        border: styles.getPropertyValue('--sc-input-border'),
                    },
                    '.Input::placeholder': {
                        color: styles.getPropertyValue('--sc-input-placeholder-color'),
                    },
                },
            },
        });
        // create the payment element.
        this.elements
            .create('payment', {
            wallets: {
                applePay: 'never',
                googlePay: 'never',
            },
        })
            .mount('.sc-payment-element-container');
        this.element = this.elements.getElement('payment');
        this.element.on('ready', () => (this.loaded = true));
    }
    async createPaymentIntent() {
        try {
            this.loading = true;
            this.error = '';
            this.paymentIntent = await apiFetch({
                method: 'POST',
                path: 'surecart/v1/payment_intents',
                data: {
                    processor_type: 'stripe',
                    live_mode: this.liveMode,
                    customer_id: this.customerId,
                    refresh_status: true,
                },
            });
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.loading = false;
        }
    }
    /**
     * Handle form submission.
     */
    async handleSubmit(e) {
        var _a;
        e.preventDefault();
        this.loading = true;
        try {
            const confirmed = await this.stripe.confirmSetup({
                elements: this.elements,
                confirmParams: {
                    return_url: addQueryArgs(this.successUrl, {
                        payment_intent: (_a = this.paymentIntent) === null || _a === void 0 ? void 0 : _a.id,
                    }),
                },
                redirect: 'always',
            });
            if (confirmed === null || confirmed === void 0 ? void 0 : confirmed.error) {
                this.error = confirmed.error.message;
                throw confirmed.error;
            }
        }
        catch (e) {
            console.error(e);
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
            this.loading = false;
        }
    }
    render() {
        return (h("sc-form", { key: 'f5800a8da05abd1a384eea04203d3d7beee2a144', onScFormSubmit: e => this.handleSubmit(e) }, this.error && (h("sc-alert", { key: '5b1cb89f8953b4b35fb0bab68b324db8d50bd7ae', open: !!this.error, type: "danger" }, h("span", { key: '16b55c986d6f40c4275712ed1bd5826bb46c2c5a', slot: "title" }, wp.i18n.__('Error', 'surecart')), this.error)), h("div", { key: '4517257f5df11b7aaf1a6e916d619ec2ceea00b6', class: "loader", hidden: this.loaded }, h("div", { key: 'd60b10b7133d4cafa0d07afdb045bde82bd8c563', class: "loader__row" }, h("div", { key: '20db90affbdd060eb156c98042697e393979916c', style: { width: '50%' } }, h("sc-skeleton", { key: '8658c2c52fab7c9303e71a293f7eaeadf586639c', style: { width: '50%', marginBottom: '0.5em' } }), h("sc-skeleton", { key: 'f743f84da6ca91eca0eb6919db44144f99641459' })), h("div", { key: 'a98a666900b9a8264ae1aafd8f37348ed7a46690', style: { flex: '1' } }, h("sc-skeleton", { key: '90e09fdec67f16dfc93804631adcc6e274fcebb6', style: { width: '50%', marginBottom: '0.5em' } }), h("sc-skeleton", { key: 'fb991aafda071bfd6aee0b3a924f43761c1e37b9' })), h("div", { key: '2526b2b7340131a9af6cb0e2a2576bead97ae025', style: { flex: '1' } }, h("sc-skeleton", { key: 'f1b577ca801da4e59b5723946af723b534f6f00f', style: { width: '50%', marginBottom: '0.5em' } }), h("sc-skeleton", { key: '2912a235af00eb572d52b99759fda185864f2c03' }))), h("div", { key: 'ced03e4c89633c4e0118b1fa862ba1f06a7fcfec', class: "loader__details" }, h("sc-skeleton", { key: 'b3fc700e3acb62b380f8c1711606d61854772ec8', style: { height: '1rem' } }), h("sc-skeleton", { key: '5415f16a744c54e35ed29b471865d0bbc212fa4d', style: { height: '1rem', width: '30%' } }))), h("div", { key: '64d978438e861afc2634dea777c9cb33918fb5dd', hidden: !this.loaded, class: "sc-payment-element-container", ref: el => (this.container = el) }), h("sc-button", { key: '09d452ed1c0164b388098514671d145be6befeca', type: "primary", submit: true, full: true, loading: this.loading }, wp.i18n.__('Save Payment Method', 'surecart'))));
    }
    static get watchers() { return {
        "paymentIntent": ["handlePaymentIntentCreate"]
    }; }
};
ScStripeAddMethod.style = ScStripeAddMethodStyle0;

export { ScStripeAddMethod as sc_stripe_add_method };

//# sourceMappingURL=sc-stripe-add-method.entry.js.map