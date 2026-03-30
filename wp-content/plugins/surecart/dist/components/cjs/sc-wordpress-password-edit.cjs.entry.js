'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const fetch = require('./fetch-d374a251.js');
require('./add-query-args-49dcb630.js');
require('./remove-query-args-b57e8cd3.js');

const scWordpressPasswordEditCss = ":host{display:block;position:relative}";
const ScWordpressPasswordEditStyle0 = scWordpressPasswordEditCss;

const ScWordPressPasswordEdit = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.heading = undefined;
        this.successUrl = undefined;
        this.user = undefined;
        this.loading = undefined;
        this.error = undefined;
        this.enableValidation = true;
    }
    renderEmpty() {
        return index.h("slot", { name: "empty" }, wp.i18n.__('User not found.', 'surecart'));
    }
    validatePassword(password) {
        const regex = new RegExp('^(?=.*?[#?!@$%^&*-]).{6,}$');
        if (regex.test(password))
            return true;
        return false;
    }
    async handleSubmit(e) {
        this.loading = true;
        this.error = '';
        try {
            const { password } = await e.target.getFormJson();
            await fetch.apiFetch({
                path: `wp/v2/users/me`,
                method: 'PATCH',
                data: {
                    password,
                    meta: {
                        default_password_nag: false,
                    },
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
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
            this.loading = false;
        }
    }
    render() {
        return (index.h("sc-dashboard-module", { key: '9cd61c8c4ffec13d96ebf9c8dd101af50938f655', class: "customer-details", error: this.error }, index.h("span", { key: '925cc949d186b12a1749cdf067dd7d75a1227c3b', slot: "heading" }, this.heading || wp.i18n.__('Update Password', 'surecart'), " "), index.h("slot", { key: '148b1d6b511814c6d6a07b25bbb9ab46d21d3a3e', name: "end", slot: "end" }), index.h("sc-card", { key: 'e6f585526341af6240fa448eed021518b7395292' }, index.h("sc-form", { key: '8a2a768536541af011f097e540692fd773718e32', onScFormSubmit: e => this.handleSubmit(e) }, index.h("sc-password", { key: '4a661359cc21111a17c0b1099cfd9b57894d6a41', enableValidation: this.enableValidation, label: wp.i18n.__('New Password', 'surecart'), name: "password", confirmation: true, required: true }), index.h("div", { key: '369a7b07ab525b624c78be518ae940814e87f945' }, index.h("sc-button", { key: '3fb0f0c4dbdb86dcbf20cf8d4683977582c06e42', type: "primary", full: true, submit: true }, wp.i18n.__('Update Password', 'surecart'))))), this.loading && index.h("sc-block-ui", { key: 'a1180161e90b8179aeae8b54c15320e7877a0a4a', spinner: true })));
    }
};
ScWordPressPasswordEdit.style = ScWordpressPasswordEditStyle0;

exports.sc_wordpress_password_edit = ScWordPressPasswordEdit;

//# sourceMappingURL=sc-wordpress-password-edit.cjs.entry.js.map