import { r as registerInstance, h } from './index-745b6bec.js';
import { a as apiFetch } from './fetch-bc141774.js';
import './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';

const scWordpressUserEditCss = ":host{display:block;position:relative}.customer-details{display:grid;gap:0.75em}";
const ScWordpressUserEditStyle0 = scWordpressUserEditCss;

const ScWordPressUserEdit = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = undefined;
        this.successUrl = undefined;
        this.user = undefined;
        this.loading = undefined;
        this.error = undefined;
    }
    renderEmpty() {
        return h("slot", { name: "empty" }, wp.i18n.__('User not found.', 'surecart'));
    }
    async handleSubmit(e) {
        this.loading = true;
        try {
            const { email, first_name, last_name, name } = await e.target.getFormJson();
            await apiFetch({
                path: `wp/v2/users/me`,
                method: 'PATCH',
                data: {
                    first_name,
                    last_name,
                    email,
                    name,
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
        var _a, _b, _c, _d;
        return (h("sc-dashboard-module", { key: 'd3991ade900d5c99a0bb2ecc6a950e0dd4ee9282', class: "account-details", error: this.error }, h("span", { key: '69d5f747a614066842989061c3ff71b4b56bd66b', slot: "heading" }, this.heading || wp.i18n.__('Account Details', 'surecart'), " "), h("sc-card", { key: 'c4050793f41a8d1ec77e098904946017d99df3b5' }, h("sc-form", { key: 'f4f31d0c65dea331b7f410157136e77c6273606d', onScFormSubmit: e => this.handleSubmit(e) }, h("sc-input", { key: 'acdf922f1b37989987d92792fd8ce9e2cfbdf6ab', label: wp.i18n.__('Account Email', 'surecart'), name: "email", value: (_a = this.user) === null || _a === void 0 ? void 0 : _a.email, required: true }), h("sc-columns", { key: '80301d7d30fd69520b76f1e4ea85f6f7a073e3ab', style: { '--sc-column-spacing': 'var(--sc-spacing-medium)' } }, h("sc-column", { key: '6382e6ac670f72fa2a0753cfb599ba2136962233' }, h("sc-input", { key: '4e194a470f8a05b1b4f331b4f4bdfebd58c4cd0a', label: wp.i18n.__('First Name', 'surecart'), name: "first_name", value: (_b = this.user) === null || _b === void 0 ? void 0 : _b.first_name })), h("sc-column", { key: '965ba5f1c8334a07345da22895cf1bbf5d0c49fe' }, h("sc-input", { key: '8c6f3cbdaa3aca5354af59aed523cd1dcf21b04f', label: wp.i18n.__('Last Name', 'surecart'), name: "last_name", value: (_c = this.user) === null || _c === void 0 ? void 0 : _c.last_name }))), h("sc-input", { key: '9bf51f77a4e564bb2c63d80e14c0137d79c49dba', label: wp.i18n.__('Display Name', 'surecart'), name: "name", value: (_d = this.user) === null || _d === void 0 ? void 0 : _d.display_name }), h("div", { key: '561569acd51110e7c34861ca94d7d2a364ae2722' }, h("sc-button", { key: '90eb919999749bfce5502ed127c5509bc31f96d2', type: "primary", full: true, submit: true }, wp.i18n.__('Save', 'surecart'))))), this.loading && h("sc-block-ui", { key: '1603d379be8ba340238fa4af47f7ce14d9eeafcd', spinner: true })));
    }
};
ScWordPressUserEdit.style = ScWordpressUserEditStyle0;

export { ScWordPressUserEdit as sc_wordpress_user_edit };

//# sourceMappingURL=sc-wordpress-user-edit.entry.js.map