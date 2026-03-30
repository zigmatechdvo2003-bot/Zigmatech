import { r as registerInstance, h, a as getElement } from './index-745b6bec.js';
import { a as apiFetch } from './fetch-bc141774.js';
import { o as onFirstVisible } from './lazy-deb42890.js';
import { a as addQueryArgs } from './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';

const scPaymentMethodsListCss = ":host{display:block;position:relative}.payment-methods-list{display:grid;gap:0.5em}.payment-methods-list sc-heading a{text-decoration:none;font-weight:var(--sc-font-weight-semibold);display:inline-flex;align-items:center;gap:0.25em;color:var(--sc-color-primary-500)}.payment-id{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const ScPaymentMethodsListStyle0 = scPaymentMethodsListCss;

const ScPaymentMethodsList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.query = undefined;
        this.heading = undefined;
        this.isCustomer = undefined;
        this.canDetachDefaultPaymentMethod = false;
        this.paymentMethods = [];
        this.loading = undefined;
        this.busy = undefined;
        this.error = undefined;
        this.hasTitleSlot = undefined;
        this.editPaymentMethod = false;
        this.deletePaymentMethod = false;
        this.cascadeDefaultPaymentMethod = false;
    }
    /** Only fetch if visible */
    componentWillLoad() {
        onFirstVisible(this.el, () => this.getPaymentMethods());
        this.handleSlotChange();
    }
    handleSlotChange() {
        this.hasTitleSlot = !!this.el.querySelector('[slot="title"]');
    }
    /**
     * Delete the payment method.
     */
    async deleteMethod() {
        var _a;
        if (!this.deletePaymentMethod)
            return;
        try {
            this.busy = true;
            (await apiFetch({
                path: `surecart/v1/payment_methods/${(_a = this.deletePaymentMethod) === null || _a === void 0 ? void 0 : _a.id}/detach`,
                method: 'PATCH',
            }));
            // remove from view.
            this.paymentMethods = this.paymentMethods.filter(m => { var _a; return m.id !== ((_a = this.deletePaymentMethod) === null || _a === void 0 ? void 0 : _a.id); });
            this.deletePaymentMethod = false;
        }
        catch (e) {
            alert((e === null || e === void 0 ? void 0 : e.messsage) || wp.i18n.__('Something went wrong', 'surecart'));
        }
        finally {
            this.busy = false;
        }
    }
    /**
     * Set the default payment method.
     */
    async setDefault() {
        var _a, _b, _c;
        if (!this.editPaymentMethod)
            return;
        try {
            this.error = '';
            this.busy = true;
            (await apiFetch({
                path: `surecart/v1/customers/${(_b = (_a = this.editPaymentMethod) === null || _a === void 0 ? void 0 : _a.customer) === null || _b === void 0 ? void 0 : _b.id}`,
                method: 'PATCH',
                data: {
                    default_payment_method: (_c = this.editPaymentMethod) === null || _c === void 0 ? void 0 : _c.id,
                    cascade_default_payment_method: this.cascadeDefaultPaymentMethod,
                },
            }));
            this.editPaymentMethod = false;
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.busy = false;
        }
        try {
            this.busy = true;
            this.paymentMethods = (await apiFetch({
                path: addQueryArgs(`surecart/v1/payment_methods/`, {
                    expand: ['card', 'customer', 'billing_agreement', 'paypal_account', 'payment_instrument', 'bank_account'],
                    ...this.query,
                }),
            }));
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.busy = false;
        }
    }
    /** Get all paymentMethods */
    async getPaymentMethods() {
        if (!this.isCustomer) {
            return;
        }
        try {
            this.loading = true;
            this.paymentMethods = (await apiFetch({
                path: addQueryArgs(`surecart/v1/payment_methods/`, {
                    expand: ['card', 'customer', 'billing_agreement', 'paypal_account', 'payment_instrument', 'bank_account'],
                    ...this.query,
                    per_page: 100,
                }),
            }));
        }
        catch (e) {
            console.error(this.error);
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.loading = false;
        }
    }
    renderLoading() {
        return (h("sc-card", { noPadding: true }, h("sc-stacked-list", null, h("sc-stacked-list-row", { style: { '--columns': '4' }, "mobile-size": 500 }, [...Array(4)].map(() => (h("sc-skeleton", { style: { width: '100px', display: 'inline-block' } })))))));
    }
    renderEmpty() {
        return (h("div", null, h("sc-divider", { style: { '--spacing': '0' } }), h("slot", { name: "empty" }, h("sc-empty", { icon: "credit-card" }, wp.i18n.__("You don't have any saved payment methods.", 'surecart')))));
    }
    renderPaymentMethodActions(paymentMethod) {
        const { id, customer } = paymentMethod;
        // If this is a string, don't show the actions.
        if (typeof customer === 'string')
            return;
        // If this is the default payment method and it cannot be detached, don't show the actions.
        if (customer.default_payment_method === id && !this.canDetachDefaultPaymentMethod)
            return;
        return (h("sc-dropdown", { placement: "bottom-end", slot: "suffix" }, h("sc-icon", { role: "button", tabIndex: 0, name: "more-horizontal", slot: "trigger" }), h("sc-menu", null, customer.default_payment_method !== id && h("sc-menu-item", { onClick: () => (this.editPaymentMethod = paymentMethod) }, wp.i18n.__('Make Default', 'surecart')), h("sc-menu-item", { onClick: () => (this.deletePaymentMethod = paymentMethod) }, wp.i18n.__('Delete', 'surecart')))));
    }
    renderList() {
        return this.paymentMethods.map(paymentMethod => {
            const { id, card, customer, live_mode, billing_agreement, paypal_account } = paymentMethod;
            return (h("sc-stacked-list-row", { style: { '--columns': billing_agreement ? '2' : '3' } }, h("sc-payment-method", { paymentMethod: paymentMethod }), h("div", { class: "payment-id" }, !!(card === null || card === void 0 ? void 0 : card.exp_month) && (h("span", null, wp.i18n.__('Exp.', 'surecart'), card === null || card === void 0 ? void 0 :
                card.exp_month, "/", card === null || card === void 0 ? void 0 :
                card.exp_year)), !!paypal_account && (paypal_account === null || paypal_account === void 0 ? void 0 : paypal_account.email)), h("sc-flex", { "justify-content": "flex-start", "align-items": "center", style: { '--spacing': '0.5em', 'marginLeft': 'auto' } }, typeof customer !== 'string' && (customer === null || customer === void 0 ? void 0 : customer.default_payment_method) === id && h("sc-tag", { type: "info" }, wp.i18n.__('Default', 'surecart')), !live_mode && h("sc-tag", { type: "warning" }, wp.i18n.__('Test', 'surecart'))), this.renderPaymentMethodActions(paymentMethod)));
        });
    }
    renderContent() {
        var _a;
        if (!this.isCustomer) {
            return this.renderEmpty();
        }
        if (this.loading) {
            return this.renderLoading();
        }
        if (((_a = this.paymentMethods) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return this.renderEmpty();
        }
        return (h("sc-card", { "no-padding": true }, h("sc-stacked-list", null, this.renderList())));
    }
    handleEditPaymentMethodChange() {
        // reset when payment method edit changes
        this.cascadeDefaultPaymentMethod = false;
    }
    render() {
        return (h("sc-dashboard-module", { key: '00129316def0cf2b3da434d65e4bcd5e13e8ef4f', class: "payment-methods-list", error: this.error }, h("span", { key: 'aba4d557000707928d9c5a711a9900792a80be66', slot: "heading" }, h("slot", { key: '2b142bc93b75f16909353fb275d659c9ed94f5e1', name: "heading" }, this.heading || wp.i18n.__('Payment Methods', 'surecart'))), this.isCustomer && (h("sc-flex", { key: 'c9a33a6679975522b4d006a1a282ee4a0d3f99e0', slot: "end" }, h("sc-button", { key: 'f9729094d39e3fdf1f4955561cd0602fabe44c59', type: "link", href: addQueryArgs(window.location.href, {
                action: 'index',
                model: 'charge',
            }) }, h("sc-icon", { key: '82fd4fd7834a3c03039ea440852e92a0bb3f180e', name: "clock", slot: "prefix" }), wp.i18n.__('Payment History', 'surecart')), h("sc-button", { key: 'f012e21ae0f925a6f76504b02bdcf122e5f8c2f2', type: "link", href: addQueryArgs(window.location.href, {
                action: 'create',
                model: 'payment_method',
            }) }, h("sc-icon", { key: 'c050e647ed8341c43f3ce917961689d3146e290f', name: "plus", slot: "prefix" }), wp.i18n.__('Add', 'surecart')))), this.renderContent(), h("sc-dialog", { key: '38268cb16a8de3b8883edb8111be247bc6558f54', open: !!this.editPaymentMethod, label: wp.i18n.__('Update Default Payment Method', 'surecart'), onScRequestClose: () => (this.editPaymentMethod = false) }, h("sc-alert", { key: '2c168d7c2ffeab49c4583237369fec616feb2fc5', type: "danger", open: !!this.error }, this.error), h("sc-flex", { key: '47ef7c14abe131000a406db38bd77cfad230e99b', flexDirection: "column", style: { '--sc-flex-column-gap': 'var(--sc-spacing-small)' } }, h("sc-alert", { key: 'f5e36c2ef7112076cd5576eefc4117a0f4fe0306', type: "info", open: true }, wp.i18n.__('A default payment method will be used as a fallback in case other payment methods get removed from a subscription.', 'surecart')), h("sc-switch", { key: '7773330e9b66b07ba44e44e30c950501f7c26bdd', checked: this.cascadeDefaultPaymentMethod, onScChange: e => (this.cascadeDefaultPaymentMethod = e.target.checked) }, wp.i18n.__('Update All Subscriptions', 'surecart'), h("span", { key: '57dd021ef75234e6bab96ebc1848a31ba9d89432', slot: "description" }, wp.i18n.__('Update all existing subscriptions to use this payment method', 'surecart')))), h("div", { key: '884e1183423e177e174a93d807b5b8473472bdb2', slot: "footer" }, h("sc-button", { key: '1c60a922d7e3e829a634abba1a1bc8d8ffc275cf', type: "text", onClick: () => (this.editPaymentMethod = false) }, wp.i18n.__('Cancel', 'surecart')), h("sc-button", { key: '880bafee8aff69edf429e55e6d71f31d15cf74f7', type: "primary", onClick: () => this.setDefault() }, wp.i18n.__('Make Default', 'surecart'))), this.busy && h("sc-block-ui", { key: '4c19dcbc1f02c8e9c3099b2ae621b729362b29f8', spinner: true })), h("sc-dialog", { key: 'e96940d8ac719a68a914450fd9cd34f52285f95c', open: !!this.deletePaymentMethod, label: wp.i18n.__('Delete Payment Method', 'surecart'), onScRequestClose: () => (this.deletePaymentMethod = false) }, h("sc-alert", { key: 'efe88952d55c35f769c4c627f62e7745654a37ce', type: "danger", open: !!this.error }, this.error), h("sc-text", { key: '8e209ccd4e6a43083723f4cd3b3b14f0be1ce764' }, wp.i18n.__('Are you sure you want to remove this payment method?', 'surecart')), h("div", { key: 'b600fa7a7cd3383a924dc602a3bd4f5a84a367c0', slot: "footer" }, h("sc-button", { key: 'e2cfdb3d7f0db3c4c86beedcd234207566a2a941', type: "text", onClick: () => (this.deletePaymentMethod = false) }, wp.i18n.__('Cancel', 'surecart')), h("sc-button", { key: '31cc0d5077436250d1efe33a7b0c3b99d60f3b9b', type: "primary", onClick: () => this.deleteMethod() }, wp.i18n.__('Delete', 'surecart'))), this.busy && h("sc-block-ui", { key: '01124f57070cda5751fb4e2481d36bb19242ff3e', spinner: true })), this.busy && h("sc-block-ui", { key: '3c52e6a39a8fe953340eadffbddf7ce745fa6913', spinner: true })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "editPaymentMethod": ["handleEditPaymentMethodChange"]
    }; }
};
ScPaymentMethodsList.style = ScPaymentMethodsListStyle0;

export { ScPaymentMethodsList as sc_payment_methods_list };

//# sourceMappingURL=sc-payment-methods-list.entry.js.map