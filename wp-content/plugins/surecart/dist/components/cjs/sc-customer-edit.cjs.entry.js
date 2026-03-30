'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const fetch = require('./fetch-d374a251.js');
const addQueryArgs = require('./add-query-args-49dcb630.js');
require('./remove-query-args-b57e8cd3.js');

const scCustomerEditCss = ":host{display:block;position:relative}.customer-edit{display:grid;gap:0.75em}";
const ScCustomerEditStyle0 = scCustomerEditCss;

const ScCustomerEdit = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.heading = undefined;
        this.customer = undefined;
        this.successUrl = undefined;
        this.loading = undefined;
        this.error = undefined;
    }
    async handleSubmit(e) {
        var _a, _b;
        this.loading = true;
        try {
            const { email, first_name, last_name, phone, billing_matches_shipping, shipping_name, shipping_city, 'tax_identifier.number_type': tax_identifier_number_type, 'tax_identifier.number': tax_identifier_number, shipping_country, shipping_line_1, shipping_line_2, shipping_postal_code, shipping_state, billing_name, billing_city, billing_country, billing_line_1, billing_line_2, billing_postal_code, billing_state, } = await e.target.getFormJson();
            this.customer.billing_address = {
                name: billing_name,
                city: billing_city,
                country: billing_country,
                line_1: billing_line_1,
                line_2: billing_line_2,
                postal_code: billing_postal_code,
                state: billing_state,
            };
            this.customer.shipping_address = {
                name: shipping_name,
                city: shipping_city,
                country: shipping_country,
                line_1: shipping_line_1,
                line_2: shipping_line_2,
                postal_code: shipping_postal_code,
                state: shipping_state,
            };
            await fetch.apiFetch({
                path: addQueryArgs.addQueryArgs(`surecart/v1/customers/${(_a = this.customer) === null || _a === void 0 ? void 0 : _a.id}`, { expand: ['tax_identifier'] }),
                method: 'PATCH',
                data: {
                    email,
                    first_name,
                    last_name,
                    phone,
                    billing_matches_shipping: billing_matches_shipping === true || billing_matches_shipping === 'on',
                    shipping_address: this.customer.shipping_address,
                    billing_address: this.customer.billing_address,
                    ...(tax_identifier_number && tax_identifier_number_type
                        ? {
                            tax_identifier: {
                                number: tax_identifier_number,
                                number_type: tax_identifier_number_type,
                            },
                        }
                        : {}),
                },
            });
            if (this.successUrl) {
                window.location.assign(this.successUrl);
            }
            else {
                this.loading = false;
            }
        }
        catch (e) {
            this.error = ((_b = e === null || e === void 0 ? void 0 : e.additional_errors) === null || _b === void 0 ? void 0 : _b.length) ? e.additional_errors.map(err => err.message).join(', ') : (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
            this.loading = false;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return (index.h("sc-dashboard-module", { key: 'f6f28add4917670d41905c34f2ce3ecca0359f2a', class: "customer-edit", error: this.error }, index.h("span", { key: '52a7be03cc3772e08253045a926dba4727eb8d9b', slot: "heading" }, this.heading || wp.i18n.__('Update Billing Details', 'surecart'), ' ', !((_a = this === null || this === void 0 ? void 0 : this.customer) === null || _a === void 0 ? void 0 : _a.live_mode) && (index.h("sc-tag", { key: 'a716da09e5acaffef6f50155ca8c1ccdccb9971c', type: "warning", size: "small" }, wp.i18n.__('Test', 'surecart')))), index.h("sc-card", { key: '4b27a010d9a76a8dd5ec4848d7dd792e23ac25a9' }, index.h("sc-form", { key: '173f5f3dccc357d18b236b9d8100ff28522e5614', onScFormSubmit: e => this.handleSubmit(e) }, index.h("sc-columns", { key: 'ff57688ebcdf69ca83ccef6704b51df973a38920', style: { '--sc-column-spacing': 'var(--sc-spacing-medium)' } }, index.h("sc-column", { key: 'da47915b3e89b3bfd12f3a71da070c7aaffa0571' }, index.h("sc-input", { key: '7b65bade03d0a6c8d4d092c09956d37015cec012', label: wp.i18n.__('First Name', 'surecart'), name: "first_name", value: (_b = this.customer) === null || _b === void 0 ? void 0 : _b.first_name })), index.h("sc-column", { key: 'a974aa096e1122636ce40f9acc917d8535d981a2' }, index.h("sc-input", { key: 'c4714c876c767f2183e9f456d1c33ce75ad9e132', label: wp.i18n.__('Last Name', 'surecart'), name: "last_name", value: (_c = this.customer) === null || _c === void 0 ? void 0 : _c.last_name }))), index.h("sc-column", { key: '68b7aa6719978747e9b912a78c0e5dbf479fc734' }, index.h("sc-phone-input", { key: '54683f88de8b5edba9ace499efbc25736cc7cf3e', label: wp.i18n.__('Phone', 'surecart'), name: "phone", value: (_d = this.customer) === null || _d === void 0 ? void 0 : _d.phone })), index.h("sc-flex", { key: 'a545f3091574e2e17a8f2f031e957e46ff2bc7c5', style: { '--sc-flex-column-gap': 'var(--sc-spacing-medium)' }, flexDirection: "column" }, index.h("div", { key: '38af463d3cce767ca2eae9f0e63463f65f40f0c4' }, index.h("sc-address", { key: '7a05e86bd9140cc0206cfb936622104cd5b7cbbc', label: wp.i18n.__('Shipping Address', 'surecart'), showName: true, address: {
                ...(_e = this.customer) === null || _e === void 0 ? void 0 : _e.shipping_address,
            }, showLine2: true, required: false, names: {
                name: 'shipping_name',
                country: 'shipping_country',
                line_1: 'shipping_line_1',
                line_2: 'shipping_line_2',
                city: 'shipping_city',
                postal_code: 'shipping_postal_code',
                state: 'shipping_state',
            } })), index.h("div", { key: '7cbc7a550fa9cbcd9bcdf0817c2a365e57c29af0' }, index.h("sc-checkbox", { key: 'cab147a7ffd45d81eb65ce02afeb49da89236c7d', name: "billing_matches_shipping", checked: (_f = this.customer) === null || _f === void 0 ? void 0 : _f.billing_matches_shipping, onScChange: e => {
                this.customer = {
                    ...this.customer,
                    billing_matches_shipping: e.target.checked,
                };
            }, value: "on" }, wp.i18n.__('Billing address is same as shipping', 'surecart'))), index.h("div", { key: '3328d77750122d5741cfb19e6a5d0567c0859dd0', style: { display: ((_g = this.customer) === null || _g === void 0 ? void 0 : _g.billing_matches_shipping) ? 'none' : 'block' } }, index.h("sc-address", { key: '6a6f3468053cf0f995268b924ef1cc55e05cdb2c', label: wp.i18n.__('Billing Address', 'surecart'), showName: true, address: {
                ...(_h = this.customer) === null || _h === void 0 ? void 0 : _h.billing_address,
            }, showLine2: true, names: {
                name: 'billing_name',
                country: 'billing_country',
                line_1: 'billing_line_1',
                line_2: 'billing_line_2',
                city: 'billing_city',
                postal_code: 'billing_postal_code',
                state: 'billing_state',
            }, required: true })), index.h("sc-tax-id-input", { key: '86e96249004f5ee6b4d2f39ac57c48cdf329a154', show: true, number: (_k = (_j = this.customer) === null || _j === void 0 ? void 0 : _j.tax_identifier) === null || _k === void 0 ? void 0 : _k.number, type: (_m = (_l = this.customer) === null || _l === void 0 ? void 0 : _l.tax_identifier) === null || _m === void 0 ? void 0 : _m.number_type })), index.h("div", { key: 'e4d18af488131e86142b9cf0e21581a9da6d48d3' }, index.h("sc-button", { key: 'ad82f758e874abbc12f5b05e8fa065916b230221', type: "primary", full: true, submit: true }, wp.i18n.__('Save', 'surecart'))))), this.loading && index.h("sc-block-ui", { key: '24cbcea4babe0de8909cb00b40efbeea3b04169d', spinner: true })));
    }
};
ScCustomerEdit.style = ScCustomerEditStyle0;

exports.sc_customer_edit = ScCustomerEdit;

//# sourceMappingURL=sc-customer-edit.cjs.entry.js.map