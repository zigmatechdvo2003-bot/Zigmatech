'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const address = require('./address-258a7497.js');
const formData = require('./form-data-0da9940f.js');
const pageAlign = require('./page-align-5a2ab493.js');
const index$1 = require('./index-adacfa36.js');
const index$2 = require('./index-fb76df07.js');
const tax = require('./tax-a4582e73.js');
require('./add-query-args-49dcb630.js');

const scAddressCss = ":host{display:block}.sc-address{display:block;position:relative}.sc-address [hidden]{display:none}.sc-address--loading{min-height:230px}.sc-address sc-skeleton{display:block;margin-bottom:1em}.sc-address__control{display:block}.sc-address__control>*{margin-bottom:var(--sc-address-column-spacing, -1px)}.sc-address__columns{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-between}.sc-address__columns>*{flex:1;width:50%;margin-right:var(--sc-address-column-spacing, -1px)}.sc-address__columns>*:last-child{margin-right:0}";
const ScAddressStyle0 = scAddressCss;

const DEFAULT_COUNTRY_FIELDS = [
    {
        name: 'country',
        priority: 30,
        label: wp.i18n.__('Country', 'surecart'),
    },
    {
        name: 'name',
        priority: 40,
        label: wp.i18n.__('Name or Company Name', 'surecart'),
    },
    {
        name: 'line_1',
        priority: 50,
        label: wp.i18n.__('Address', 'surecart'),
    },
    {
        name: 'line_2',
        priority: 60,
        label: wp.i18n.__('Line 2', 'surecart'),
    },
    {
        name: 'city',
        priority: 70,
        label: wp.i18n.__('City', 'surecart'),
    },
    {
        name: 'state',
        priority: 80,
        label: wp.i18n.__('State / County', 'surecart'),
    },
    {
        name: 'postal_code',
        priority: 90,
        label: wp.i18n.__('Postal Code', 'surecart'),
    },
];
const ScAddress = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scChangeAddress = index.createEvent(this, "scChangeAddress", 7);
        this.scInputAddress = index.createEvent(this, "scInputAddress", 7);
        this.address = {
            country: null,
            city: null,
            line_1: null,
            line_2: null,
            postal_code: null,
            state: null,
        };
        this.names = {
            name: 'shipping_name',
            country: 'shipping_country',
            city: 'shipping_city',
            line_1: 'shipping_line_1',
            line_2: 'shipping_line_2',
            postal_code: 'shipping_postal_code',
            state: 'shipping_state',
        };
        this.loading = false;
        this.disabled = undefined;
        this.label = undefined;
        this.showName = undefined;
        this.showLine2 = undefined;
        this.required = false;
        this.requireName = false;
        this.showCity = true;
        this.showPostal = true;
        this.countryDetails = null;
        this.countryChoices = undefined;
    }
    /** When the state changes, we want to update city and postal fields. */
    async handleAddressChange() {
        var _a, _b;
        if (!((_a = this.address) === null || _a === void 0 ? void 0 : _a.country))
            return;
        if (!this.countryDetails || ((_b = this.countryDetails) === null || _b === void 0 ? void 0 : _b.code) !== this.address.country) {
            this.countryDetails = await address.getCountryDetails(this.address.country);
        }
        this.scChangeAddress.emit(this.address);
        this.scInputAddress.emit(this.address);
    }
    handleNameChange() {
        if (this.requireName) {
            this.showName = true;
        }
    }
    decodeHtmlEntities(html) {
        var _a;
        return ((_a = new DOMParser().parseFromString(html, 'text/html')) === null || _a === void 0 ? void 0 : _a.body.textContent) || html;
    }
    updateAddress(address) {
        this.address = { ...this.address, ...address };
    }
    handleAddressInput(address) {
        this.scInputAddress.emit({ ...this.address, ...address });
    }
    clearAddress() {
        var _a;
        this.address = {
            name: (_a = this.address) === null || _a === void 0 ? void 0 : _a.name,
            country: null,
            city: null,
            line_1: null,
            line_2: null,
            postal_code: null,
            state: null,
        };
    }
    componentWillLoad() {
        this.initCountryChoices();
        this.handleAddressChange();
        this.handleNameChange();
    }
    async initCountryChoices() {
        var _a, _b;
        this.countryChoices = await address.countryChoices();
        const country = ((_b = (_a = this.countryChoices) === null || _a === void 0 ? void 0 : _a.find(country => { var _a; return country.value === ((_a = this.address) === null || _a === void 0 ? void 0 : _a.country); })) === null || _b === void 0 ? void 0 : _b.value) || null;
        this.updateAddress({ country });
    }
    async reportValidity() {
        return formData.reportChildrenValidity(this.el);
    }
    sortedFields() {
        var _a, _b, _c, _d;
        if (!this.countryDetails || !((_a = this === null || this === void 0 ? void 0 : this.address) === null || _a === void 0 ? void 0 : _a.country)) {
            return DEFAULT_COUNTRY_FIELDS;
        }
        return (((_d = (_c = (_b = this === null || this === void 0 ? void 0 : this.countryDetails) === null || _b === void 0 ? void 0 : _b.address_formats) === null || _c === void 0 ? void 0 : _c.edit) === null || _d === void 0 ? void 0 : _d.match(/{{([^}]+)}}/g).map(match => match.slice(2, -2)).map(field => {
            var _a, _b, _c;
            return ({
                name: field,
                label: ((_b = (_a = this === null || this === void 0 ? void 0 : this.countryDetails) === null || _a === void 0 ? void 0 : _a.address_labels) === null || _b === void 0 ? void 0 : _b[field]) || ((_c = DEFAULT_COUNTRY_FIELDS === null || DEFAULT_COUNTRY_FIELDS === void 0 ? void 0 : DEFAULT_COUNTRY_FIELDS.find(defaultField => (defaultField === null || defaultField === void 0 ? void 0 : defaultField.name) === field)) === null || _c === void 0 ? void 0 : _c.label),
            });
        })) || []);
    }
    regions() {
        var _a, _b, _c, _d, _e;
        let regions = ((_b = (_a = this === null || this === void 0 ? void 0 : this.countryDetails) === null || _a === void 0 ? void 0 : _a.states) === null || _b === void 0 ? void 0 : _b.map(state => ({
            value: state === null || state === void 0 ? void 0 : state.code,
            label: state === null || state === void 0 ? void 0 : state.name,
        }))) || [];
        if ((_d = (_c = window === null || window === void 0 ? void 0 : window.wp) === null || _c === void 0 ? void 0 : _c.hooks) === null || _d === void 0 ? void 0 : _d.applyFilters) {
            regions = window.wp.hooks.applyFilters('surecart_address_regions', regions, (_e = this === null || this === void 0 ? void 0 : this.address) === null || _e === void 0 ? void 0 : _e.country);
        }
        return regions;
    }
    getRoundedProps(index, length) {
        const isFirst = index === 0;
        const isLast = index === length - 1;
        return {
            squaredTop: isLast,
            squaredBottom: isFirst,
            squared: !isLast && !isFirst,
        };
    }
    render() {
        var _a, _b;
        const visibleFields = (_b = ((_a = this.sortedFields()) !== null && _a !== void 0 ? _a : [])) === null || _b === void 0 ? void 0 : _b.filter(field => {
            var _a, _b, _c, _d;
            switch (field.name) {
                case 'name':
                    return this.showName;
                case 'line_2':
                    return this.showLine2 || !!((_b = (_a = this === null || this === void 0 ? void 0 : this.address) === null || _a === void 0 ? void 0 : _a.line_2) === null || _b === void 0 ? void 0 : _b.length);
                case 'city':
                    return this.showCity;
                case 'state':
                    return !!((_c = this === null || this === void 0 ? void 0 : this.regions()) === null || _c === void 0 ? void 0 : _c.length) && !!((_d = this === null || this === void 0 ? void 0 : this.address) === null || _d === void 0 ? void 0 : _d.country);
                case 'postal_code':
                    return this.showPostal;
                default:
                    return true;
            }
        });
        return (index.h("div", { class: "sc-address", part: "base" }, index.h("sc-form-control", { label: this.label, exportparts: "label, help-text, form-control", class: "sc-address__control", required: this.required }, visibleFields.map((field, index$1) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
            const roundedProps = this.getRoundedProps(index$1, visibleFields.length);
            switch (field.name) {
                case 'country':
                    return (index.h("sc-select", { exportparts: "base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty", part: "name__input", value: (_a = this.address) === null || _a === void 0 ? void 0 : _a.country, onScChange: (e) => {
                            var _a;
                            if (e.target.value === ((_a = this.address) === null || _a === void 0 ? void 0 : _a.country))
                                return;
                            this.clearAddress();
                            this.updateAddress({ country: e.target.value });
                        }, choices: this.countryChoices, autocomplete: 'country-name', placeholder: field.label, name: (_b = this.names) === null || _b === void 0 ? void 0 : _b.country, search: true, unselect: false, disabled: this.disabled, required: this.required, "aria-label": field.label, ...roundedProps }));
                case 'name':
                    return (index.h("sc-input", { exportparts: "base:input__base, input, form-control, label, help-text", value: (_c = this === null || this === void 0 ? void 0 : this.address) === null || _c === void 0 ? void 0 : _c.name, onScChange: (e) => this.updateAddress({ name: e.target.value || null }), onScInput: (e) => this.handleAddressInput({ name: e.target.value || null }), autocomplete: "street-address", placeholder: field.label, name: (_d = this.names) === null || _d === void 0 ? void 0 : _d.name, disabled: this.disabled, required: this.requireName, "aria-label": field.label, ...roundedProps }));
                case 'line_1':
                    return (index.h("sc-input", { exportparts: "base:input__base, input, form-control, label, help-text", value: (_e = this === null || this === void 0 ? void 0 : this.address) === null || _e === void 0 ? void 0 : _e.line_1, onScChange: (e) => this.updateAddress({ line_1: e.target.value || null }), onScInput: (e) => this.handleAddressInput({ line_1: e.target.value || null }), autocomplete: "street-address", placeholder: field.label, name: (_f = this.names) === null || _f === void 0 ? void 0 : _f.line_1, disabled: this.disabled, required: this.required, "aria-label": field.label, ...roundedProps }));
                case 'line_2':
                    return (index.h("sc-input", { exportparts: "base:input__base, input, form-control, label, help-text", value: (_g = this === null || this === void 0 ? void 0 : this.address) === null || _g === void 0 ? void 0 : _g.line_2, onScChange: (e) => this.updateAddress({ line_2: e.target.value || null }), onScInput: (e) => this.handleAddressInput({ line_2: e.target.value || null }), autocomplete: "street-address", placeholder: field.label, name: (_h = this.names) === null || _h === void 0 ? void 0 : _h.line_2, disabled: this.disabled, "aria-label": field.label, ...roundedProps }));
                case 'city':
                    return (index.h("sc-input", { exportparts: "base:input__base, input, form-control, label, help-text", placeholder: field.label, name: (_j = this.names) === null || _j === void 0 ? void 0 : _j.city, value: (_k = this === null || this === void 0 ? void 0 : this.address) === null || _k === void 0 ? void 0 : _k.city, onScChange: (e) => this.updateAddress({ city: e.target.value || null }), onScInput: (e) => this.handleAddressInput({ city: e.target.value || null }), required: this.required, disabled: this.disabled, "aria-label": field.label, ...roundedProps }));
                case 'state':
                    return (index.h("sc-select", { exportparts: "base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty", placeholder: field.label, name: (_l = this.names) === null || _l === void 0 ? void 0 : _l.state, autocomplete: 'address-level1', value: (_m = this === null || this === void 0 ? void 0 : this.address) === null || _m === void 0 ? void 0 : _m.state, onScChange: (e) => { var _a; return this.updateAddress({ state: e.target.value || ((_a = e.detail) === null || _a === void 0 ? void 0 : _a.value) || null }); }, choices: this.regions(), required: this.required, disabled: this.disabled, search: true, "aria-label": field.label, ...roundedProps }));
                case 'postal_code':
                    return (index.h("sc-input", { exportparts: "base:input__base, input, form-control, label, help-text", placeholder: field.label, name: (_o = this.names) === null || _o === void 0 ? void 0 : _o.postal_code, onScChange: (e) => this.updateAddress({ postal_code: e.target.value || null }), onScInput: (e) => this.handleAddressInput({ postal_code: e.target.value || null }), autocomplete: 'postal-code', required: this.required, value: (_p = this === null || this === void 0 ? void 0 : this.address) === null || _p === void 0 ? void 0 : _p.postal_code, disabled: this.disabled, maxlength: ((_q = this.address) === null || _q === void 0 ? void 0 : _q.country) === 'US' ? 5 : undefined, pattern: ((_r = this.countryDetails) === null || _r === void 0 ? void 0 : _r.postal_code_regex) || undefined, customValidity: ((_s = this.countryDetails) === null || _s === void 0 ? void 0 : _s.postal_code_regex) ? wp.i18n.__('Please enter a valid postal code', 'surecart') : undefined, "aria-label": field.label, ...roundedProps }));
                default:
                    return null;
            }
        })), this.loading && index.h("sc-block-ui", { exportparts: "base:block-ui, content:block-ui__content" })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "address": ["handleAddressChange"],
        "requireName": ["handleNameChange"]
    }; }
};
ScAddress.style = ScAddressStyle0;

const scCheckboxCss = ":host{display:block}.checkbox{display:flex;font-family:var(--sc-input-font-family);font-size:var(--sc-input-font-size-medium);font-weight:var(--sc-input-font-weight);color:var(--sc-input-color);vertical-align:middle;cursor:pointer}.checkbox__control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--sc-checkbox-size);height:var(--sc-checkbox-size);border:solid var(--sc-input-border-width) var(--sc-input-border-color);border-radius:2px;background-color:var(--sc-input-background-color);color:var(--sc-color-white);transition:var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) opacity, var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.checkbox__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.checkbox__control .checkbox__icon{display:inline-flex;width:var(--sc-checkbox-size);height:var(--sc-checkbox-size)}.checkbox__control .checkbox__icon svg{width:100%;height:100%}.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--sc-input-border-color-hover);background-color:var(--sc-input-background-color-hover)}.checkbox.checkbox--focused:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control{border-color:var(--sc-input-border-color-focus);background-color:var(--sc-input-background-color-focus);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.checkbox--checked .checkbox__control,.checkbox--indeterminate .checkbox__control{border-color:var(--sc-color-primary-500);background-color:var(--sc-color-primary-500)}.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover{opacity:0.8}.checkbox.checkbox--checked:not(.checkbox--disabled).checkbox--focused .checkbox__control,.checkbox.checkbox--indeterminate:not(.checkbox--disabled).checkbox--focused .checkbox__control{border-color:var(--sc-color-white);background-color:var(--sc-color-primary-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.checkbox--disabled{opacity:0.5;cursor:not-allowed}.checkbox__label{line-height:var(--sc-checkbox-size);margin-top:var(--sc-input-border-width);margin-left:0.5em;flex:1}.checkbox--is-required .checkbox__label:after{content:\" *\";color:var(--sc-color-danger-500)}::slotted(*){display:inline-block}.checkbox--is-rtl .checkbox__label{margin-left:0;margin-right:0.5em}";
const ScCheckboxStyle0 = scCheckboxCss;

let id$1 = 0;
const ScCheckbox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scBlur = index.createEvent(this, "scBlur", 7);
        this.scChange = index.createEvent(this, "scChange", 7);
        this.scFocus = index.createEvent(this, "scFocus", 7);
        this.inputId = `checkbox-${++id$1}`;
        this.labelId = `checkbox-label-${id$1}`;
        this.hasFocus = false;
        this.name = undefined;
        this.value = undefined;
        this.disabled = false;
        this.edit = false;
        this.required = false;
        this.checked = false;
        this.indeterminate = false;
        this.invalid = false;
    }
    firstUpdated() {
        this.input.indeterminate = this.indeterminate;
    }
    /** Simulates a click on the checkbox. */
    async triggerClick() {
        return this.input.click();
    }
    /** Sets focus on the checkbox. */
    async triggerFocus(options) {
        return this.input.focus(options);
    }
    /** Removes focus from the checkbox. */
    async triggerBlur() {
        return this.input.blur();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    async reportValidity() {
        this.invalid = !this.input.checkValidity();
        return this.input.reportValidity();
    }
    /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
    setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
    }
    handleClick() {
        this.checked = !this.checked;
        this.indeterminate = false;
    }
    handleBlur() {
        this.hasFocus = false;
        this.scBlur.emit();
    }
    handleFocus() {
        this.hasFocus = true;
        this.scFocus.emit();
    }
    handleLabelMouseDown() {
        // Prevent clicks on the label from briefly blurring the input
        // event.preventDefault();
        this.input.focus();
    }
    handleStateChange() {
        this.input.checked = this.checked;
        this.input.indeterminate = this.indeterminate;
        this.scChange.emit();
    }
    componentDidLoad() {
        this.formController = new formData.FormSubmitController(this.el, {
            value: (control) => (control.checked ? control.value : undefined),
        }).addFormData();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.formController) === null || _a === void 0 ? void 0 : _a.removeFormData();
    }
    render() {
        const Tag = this.edit ? 'div' : 'label';
        return (index.h(Tag, { key: '4eb715b5f0319a3dadfee764d1da0bfb8fabbcc5', part: "base", class: {
                'checkbox': true,
                'checkbox--is-required': this.required,
                'checkbox--checked': this.checked,
                'checkbox--disabled': this.disabled,
                'checkbox--focused': this.hasFocus,
                'checkbox--indeterminate': this.indeterminate,
                'checkbox--is-rtl': pageAlign.isRtl()
            }, htmlFor: this.inputId, onMouseDown: () => this.handleLabelMouseDown() }, index.h("span", { key: '526e5f492e3e76508767027d8a24c761cc2a3fb9', part: "control", class: "checkbox__control" }, this.checked ? (index.h("span", { part: "checked-icon", class: "checkbox__icon" }, index.h("svg", { viewBox: "0 0 16 16" }, index.h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round" }, index.h("g", { stroke: "currentColor", "stroke-width": "2" }, index.h("g", { transform: "translate(3.428571, 3.428571)" }, index.h("path", { d: "M0,5.71428571 L3.42857143,9.14285714" }), index.h("path", { d: "M9.14285714,0 L3.42857143,9.14285714" }))))))) : (''), !this.checked && this.indeterminate ? (index.h("span", { part: "indeterminate-icon", class: "checkbox__icon" }, index.h("svg", { viewBox: "0 0 16 16" }, index.h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round" }, index.h("g", { stroke: "currentColor", "stroke-width": "2" }, index.h("g", { transform: "translate(2.285714, 6.857143)" }, index.h("path", { d: "M10.2857143,1.14285714 L1.14285714,1.14285714" }))))))) : (''), index.h("input", { key: '6b77f0b4a28e43c35419f16b593820461bb6d027', id: this.inputId, ref: el => (this.input = el), type: "checkbox", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, required: this.required, role: "checkbox", "aria-checked": this.checked ? 'true' : 'false', "aria-labelledby": this.labelId, onClick: () => this.handleClick(), onBlur: () => this.handleBlur(), onFocus: () => this.handleFocus() })), index.h("span", { key: 'f6c703ec8424d6e6a4528e16e33b03725f7ce33f', part: "label", id: this.labelId, class: "checkbox__label" }, index.h("slot", { key: 'a8fd2a76889fdd3fff577cffef0c1f2e93a835df' }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "checked": ["handleStateChange"],
        "indeterminate": ["handleStateChange"]
    }; }
};
ScCheckbox.style = ScCheckboxStyle0;

const scPhoneInputCss = ":host{--focus-ring:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary);display:block;position:relative}:host([invalid]) .input,:host([invalid]) .input:hover:not(.input--disabled),:host([invalid]) .input--focused:not(.input--disabled){border-color:var(--sc-input-border-color-invalid);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-input-border-color-invalid)}.input__control[type=number]{-moz-appearance:textfield}.input__control::-webkit-outer-spin-button,.input__control::-webkit-inner-spin-button{-webkit-appearance:none}.input{flex:1 1 auto;display:inline-flex;align-items:center;justify-content:start;position:relative;width:100%;box-sizing:border-box;font-family:var(--sc-input-font-family);font-weight:var(--sc-input-font-weight);letter-spacing:var(--sc-input-letter-spacing);background-color:var(--sc-input-background-color);border:solid 1px var(--sc-input-border-color, var(--sc-input-border));vertical-align:middle;box-shadow:var(--sc-input-box-shadow);transition:var(--sc-transition-fast) color, var(--sc-transition-fast) border, var(--sc-transition-fast) box-shadow;cursor:text}.input:hover:not(.input--disabled){background-color:var(--sc-input-background-color-hover);border-color:var(--sc-input-border-color-hover);z-index:7}.input:hover:not(.input--disabled) .input__control{color:var(--sc-input-color-hover)}.input.input--focused:not(.input--disabled){background-color:var(--sc-input-background-color-focus);border-color:var(--sc-input-border-color-focus);box-shadow:var(--focus-ring);z-index:8}.input.input--focused:not(.input--disabled) .input__control{color:var(--sc-input-color-focus)}.input.input--disabled{background-color:var(--sc-input-background-color-disabled);border-color:var(--sc-input-border-color-disabled);opacity:0.5;cursor:not-allowed}.input.input--disabled .input__control{color:var(--sc-input-color-disabled)}.input.input--disabled .input__control::placeholder{color:var(--sc-input-placeholder-color-disabled)}.input__control{flex:1 1 auto;font-family:inherit;font-size:inherit;font-weight:inherit;min-width:0;height:100%;color:var(--sc-input-color);border:none;background:none;box-shadow:none;padding:0;margin:0;cursor:inherit;-webkit-appearance:none}.input__control::-webkit-search-decoration,.input__control::-webkit-search-cancel-button,.input__control::-webkit-search-results-button,.input__control::-webkit-search-results-decoration{-webkit-appearance:none}.input__control:-webkit-autofill,.input__control:-webkit-autofill:hover,.input__control:-webkit-autofill:focus,.input__control:-webkit-autofill:active{box-shadow:0 0 0 var(--sc-input-height-large) var(--sc-input-background-color-hover) inset !important;-webkit-text-fill-color:var(--sc-input-color)}.input__control::placeholder{color:var(--sc-input-placeholder-color);user-select:none}.input__control:focus{outline:none}.input__prefix,.input__suffix{display:inline-flex;flex:0 0 auto;align-items:center;color:var(--sc-input-color);cursor:default}.input__prefix ::slotted(sc-icon),.input__suffix ::slotted(sc-icon){color:var(--sc-input-icon-color)}.input--small{border-radius:var(--sc-input-border-radius-small);font-size:var(--sc-input-font-size-small);height:var(--sc-input-height-small)}.input--small .input__control{height:calc(var(--sc-input-height-small) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-small)}.input--small .input__clear,.input--small .input__password-toggle{margin-right:var(--sc-input-spacing-small)}.input--small .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-small)}.input--small .input__suffix ::slotted(*){margin-right:var(--sc-input-spacing-small)}.input--small .input__suffix ::slotted(sc-dropdown){margin:0}.input--medium{border-radius:var(--sc-input-border-radius-medium);font-size:var(--sc-input-font-size-medium);height:var(--sc-input-height-medium)}.input--medium .input__control{height:calc(var(--sc-input-height-medium) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-medium)}.input--medium .input__clear,.input--medium .input__password-toggle{margin-right:var(--sc-input-spacing-medium)}.input--medium .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-medium) !important}.input--medium .input__suffix ::slotted(:not(sc-button[size=medium])){margin-right:var(--sc-input-spacing-medium) !important}.input--medium .input__suffix ::slotted(sc-tag){margin-right:var(--sc-input-spacing-small) !important}.input--medium .input__suffix ::slotted(sc-dropdown){margin:3px}.input--large{border-radius:var(--sc-input-border-radius-large);font-size:var(--sc-input-font-size-large);height:var(--sc-input-height-large)}.input--large .input__control{height:calc(var(--sc-input-height-large) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-large)}.input--large .input__clear,.input--large .input__password-toggle{margin-right:var(--sc-input-spacing-large)}.input--large .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-large)}.input--large .input__suffix ::slotted(*){margin-right:var(--sc-input-spacing-large)}.input--large .input__suffix ::slotted(sc-dropdown){margin:3px}.input--pill.input--small{border-radius:var(--sc-input-height-small)}.input--pill.input--medium{border-radius:var(--sc-input-height-medium)}.input--pill.input--large{border-radius:var(--sc-input-height-large)}.input__clear,.input__password-toggle{display:inline-flex;align-items:center;font-size:inherit;color:var(--sc-input-icon-color);border:none;background:none;padding:0;transition:var(--sc-transition-fast) color;cursor:pointer}.input__clear:hover,.input__password-toggle:hover{color:var(--sc-input-icon-color-hover)}.input__clear:focus,.input__password-toggle:focus{outline:none}.input--empty .input__clear{visibility:hidden}.input--squared{border-radius:0}.input--squared-top{border-top-left-radius:0;border-top-right-radius:0}.input--squared-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0}.input--squared-left{border-top-left-radius:0;border-bottom-left-radius:0}.input--squared-right{border-top-right-radius:0;border-bottom-right-radius:0}";
const ScPhoneInputStyle0 = scPhoneInputCss;

let id = 0;
const ScPhoneInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scChange = index.createEvent(this, "scChange", 7);
        this.scClear = index.createEvent(this, "scClear", 7);
        this.scInput = index.createEvent(this, "scInput", 7);
        this.scFocus = index.createEvent(this, "scFocus", 7);
        this.scBlur = index.createEvent(this, "scBlur", 7);
        this.inputId = `phone-input-${++id}`;
        this.helpId = `phone-input-help-text-${id}`;
        this.labelId = `phone-input-label-${id}`;
        this.squared = undefined;
        this.squaredBottom = undefined;
        this.squaredTop = undefined;
        this.squaredLeft = undefined;
        this.squaredRight = undefined;
        this.hidden = false;
        this.size = 'medium';
        this.name = undefined;
        this.value = '';
        this.pill = false;
        this.label = undefined;
        this.showLabel = true;
        this.help = '';
        this.clearable = false;
        this.togglePassword = false;
        this.placeholder = undefined;
        this.disabled = false;
        this.readonly = false;
        this.minlength = undefined;
        this.maxlength = undefined;
        this.min = undefined;
        this.max = undefined;
        this.step = undefined;
        this.pattern = '[-s#0-9_+/().]*';
        this.required = false;
        this.invalid = false;
        this.autocorrect = undefined;
        this.autocomplete = undefined;
        this.autofocus = undefined;
        this.spellcheck = undefined;
        this.hasFocus = undefined;
    }
    async reportValidity() {
        return this.input.reportValidity();
    }
    /** Sets focus on the input. */
    async triggerFocus(options) {
        return this.input.focus(options);
    }
    /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
    async setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
    }
    /** Removes focus from the input. */
    async triggerBlur() {
        return this.input.blur();
    }
    /** Selects all the text in the input. */
    select() {
        return this.input.select();
    }
    handleBlur() {
        this.hasFocus = false;
        this.scBlur.emit();
    }
    handleFocus() {
        this.hasFocus = true;
        this.scFocus.emit();
    }
    handleChange() {
        this.value = this.input.value;
        this.scChange.emit();
    }
    handleInput() {
        this.value = this.input.value.replace(/\s/g, '');
        this.input.value = this.value;
        this.scInput.emit();
    }
    handleClearClick(event) {
        this.value = '';
        this.scClear.emit();
        this.scInput.emit();
        this.scChange.emit();
        this.input.focus();
        event.stopPropagation();
    }
    handleFocusChange() {
        setTimeout(() => {
            this.hasFocus && this.input ? this.input.focus() : this.input.blur();
        }, 0);
    }
    handleValueChange() {
        if (this.input) {
            this.invalid = !this.input.checkValidity();
        }
    }
    componentDidLoad() {
        this.formController = new formData.FormSubmitController(this.el).addFormData();
        this.handleFocusChange();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.formController) === null || _a === void 0 ? void 0 : _a.removeFormData();
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: 'c400aa89456e653998a965b03f2e763e09cb1dec', hidden: this.hidden }, index.h("sc-form-control", { key: 'b4690849c56022025c183f21becffac8d2ffeb68', exportparts: "label, help-text, form-control", size: this.size, required: this.required, label: this.label, showLabel: this.showLabel, help: this.help, inputId: this.inputId, helpId: this.helpId, labelId: this.labelId, name: this.name, "aria-label": this.label }, index.h("slot", { key: '12c42616bdfd7d6720ef6e1928b3d17e730900a5', name: "label-end", slot: "label-end" }), index.h("div", { key: '0fffaf6bc7273b4ed76c1ed57deff7d7518f26a9', part: "base", class: {
                'input': true,
                // Sizes
                'input--small': this.size === 'small',
                'input--medium': this.size === 'medium',
                'input--large': this.size === 'large',
                // States
                'input--focused': this.hasFocus,
                'input--invalid': this.invalid,
                'input--disabled': this.disabled,
                'input--squared': this.squared,
                'input--squared-bottom': this.squaredBottom,
                'input--squared-top': this.squaredTop,
                'input--squared-left': this.squaredLeft,
                'input--squared-right': this.squaredRight,
            } }, index.h("span", { key: '0f5474834cda4d523fd4666ac3feaecc2c9becfe', part: "prefix", class: "input__prefix" }, index.h("slot", { key: '31a4bfd47440734eabae72231ec05f1b30d8d8e0', name: "prefix" })), index.h("slot", { key: '54ab62d1340629a1f9d2b6d659230afa5974a6f1' }, index.h("input", { key: 'cc7ffb08ba1b05f3c5660ecb684f4042c8bb1b13', part: "input", id: this.inputId, class: "input__control", ref: el => (this.input = el), type: "tel", name: this.name, disabled: this.disabled, readonly: this.readonly, required: this.required, placeholder: this.placeholder, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step,
            // TODO: Test These below
            autocomplete: 'tel', autocorrect: this.autocorrect, autofocus: this.autofocus, spellcheck: this.spellcheck, pattern: index$1.applyFilters('surecart/sc-phone-input/pattern', this.pattern), inputmode: 'numeric', "aria-label": this.label, "aria-labelledby": this.label, "aria-invalid": this.invalid ? true : false, value: this.value, onChange: () => this.handleChange(), onInput: () => this.handleInput(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur() })), index.h("span", { key: 'ca0a6164dd0b1587dcf64817c958dc9c0c22a7c0', part: "suffix", class: "input__suffix" }, index.h("slot", { key: '45face690832301b52cc3292920e461c33df46e7', name: "suffix" })), this.clearable && ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) > 0 && (index.h("button", { key: 'd2c64a0c4778df16d1e37936059e5d48348b54f9', part: "clear-button", class: "input__clear", type: "button", onClick: e => this.handleClearClick(e), tabindex: "-1" }, index.h("slot", { key: '3ee1f703818f71adc990fa99e8f6111c6182a38b', name: "clear-icon" }, index.h("svg", { key: '406b368a9a595ad2f95426885a54a329defc9549', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-x" }, index.h("line", { key: '81f3db4ad15ffc9b19630415f46530aa8a8a0ebc', x1: "18", y1: "6", x2: "6", y2: "18" }), index.h("line", { key: '52ed62399a365e89ef6b4d521c39a1ec2c73331c', x1: "6", y1: "6", x2: "18", y2: "18" })))))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "hasFocus": ["handleFocusChange"],
        "value": ["handleValueChange"]
    }; }
};
ScPhoneInput.style = ScPhoneInputStyle0;

const scTaxIdInputCss = ":host{display:block;z-index:3;position:relative}";
const ScTaxIdInputStyle0 = scTaxIdInputCss;

const ScTaxIdInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scChange = index.createEvent(this, "scChange", 7);
        this.scInput = index.createEvent(this, "scInput", 7);
        this.scInputType = index.createEvent(this, "scInputType", 7);
        this.scSetState = index.createEvent(this, "scSetState", 7);
        this.country = undefined;
        this.show = false;
        this.type = 'other';
        this.number = null;
        this.status = 'unknown';
        this.loading = undefined;
        this.help = undefined;
        this.otherLabel = wp.i18n.__('Tax ID', 'surecart');
        this.caGstLabel = wp.i18n.__('GST Number', 'surecart');
        this.auAbnLabel = wp.i18n.__('ABN Number', 'surecart');
        this.gbVatLabel = wp.i18n.__('UK VAT', 'surecart');
        this.euVatLabel = wp.i18n.__('EU VAT', 'surecart');
        this.taxIdTypes = [];
        this.required = false;
    }
    async reportValidity() {
        return this.input.reportValidity();
    }
    onLabelChange() {
        tax.zones.ca_gst.label = this.caGstLabel || tax.zones.ca_gst.label;
        tax.zones.au_abn.label = this.auAbnLabel || tax.zones.au_abn.label;
        tax.zones.gb_vat.label = this.gbVatLabel || tax.zones.gb_vat.label;
        tax.zones.eu_vat.label = this.euVatLabel || tax.zones.eu_vat.label;
        tax.zones.other.label = this.otherLabel || tax.zones.other.label;
    }
    componentWillLoad() {
        this.onLabelChange();
    }
    renderStatus() {
        if (this.status === 'valid') {
            return index.h("sc-icon", { name: "check", slot: "prefix", style: { color: 'var(--sc-color-success-500)' } });
        }
        if (this.status === 'invalid') {
            return index.h("sc-icon", { name: "x", slot: "prefix", style: { color: 'var(--sc-color-danger-500)' } });
        }
    }
    filteredZones() {
        if (!!this.taxIdTypes.length) {
            return Object.keys(tax.zones)
                .filter(name => this.taxIdTypes.includes(name))
                .reduce((obj, key) => {
                obj[key] = tax.zones[key];
                return obj;
            }, {});
        }
        return tax.zones;
    }
    onTaxIdTypesChange() {
        // If there is no other type, set the first one as default type.
        if (!!this.taxIdTypes.length) {
            this.type = !this.taxIdTypes.includes('other') ? this.taxIdTypes[0] : 'other';
        }
    }
    getZoneLabel() {
        var _a, _b;
        const filteredZones = this.filteredZones() || {};
        // Get the label of the current type or the other type.
        // If there is no other type, get the first one.
        return ((_a = filteredZones === null || filteredZones === void 0 ? void 0 : filteredZones[(this === null || this === void 0 ? void 0 : this.type) || 'other']) === null || _a === void 0 ? void 0 : _a.label) || ((_b = filteredZones === null || filteredZones === void 0 ? void 0 : filteredZones[Object.keys(filteredZones)[0]]) === null || _b === void 0 ? void 0 : _b.label);
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (index.h(index.Fragment, { key: 'ca4df6ac90339ac9b0aa13521975b0513516de10' }, index.h("sc-input", { key: '49bbfb17732b6bee47a823fdd7f5eb81fc484cbd', name: "tax_identifier.number_type", required: this.required, value: this.type, style: { display: 'none' } }), index.h("sc-input", { key: 'c5974437d4ce93b76a36330694b0cdcd3751a7c8', ref: el => (this.input = el), label: this.getZoneLabel(), "aria-label": wp.i18n.__('Tax ID', 'surecart'), placeholder: wp.i18n.__('Enter Tax ID', 'surecart'), name: "tax_identifier.number", value: this.number, onScInput: (e) => {
                e.stopImmediatePropagation();
                this.scInput.emit({
                    number: e.target.value,
                    number_type: this.type || 'other',
                });
            }, onScChange: (e) => {
                e.stopImmediatePropagation();
                this.scChange.emit({
                    number: e.target.value,
                    number_type: this.type || 'other',
                });
            }, help: this.help, required: this.required }, this.loading && this.type === 'eu_vat' ? index.h("sc-spinner", { slot: "prefix", style: { '--spinner-size': '10px' } }) : this.renderStatus(), ((_a = Object.keys(this.filteredZones() || {})) === null || _a === void 0 ? void 0 : _a.length) === 1 ? (index.h("span", { slot: "suffix" }, (_c = (_b = Object.values(this.filteredZones() || {})) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c['label_small'])) : (index.h("sc-dropdown", { slot: "suffix", position: "bottom-right", role: "select", "aria-multiselectable": "false", "aria-label": wp.i18n.__('Select number type', 'surecart') }, index.h("sc-button", { type: "text", slot: "trigger", caret: true, loading: false, style: { color: 'var(--sc-input-label-color)' }, tabindex: "0" }, (_e = (_d = this.filteredZones()) === null || _d === void 0 ? void 0 : _d[(this === null || this === void 0 ? void 0 : this.type) || 'other']) === null || _e === void 0 ? void 0 : _e.label_small), index.h("sc-menu", null, Object.keys(this.filteredZones() || {}).map(name => (index.h("sc-menu-item", { role: "option", onClick: () => {
                this.scInput.emit({
                    number: this.number,
                    number_type: name,
                });
                this.scChange.emit({
                    number: this.number,
                    number_type: name,
                });
                this.type = name;
            }, onKeyDown: e => {
                var _a;
                if (e.key === 'Enter') {
                    this.scInput.emit({
                        number: this.number,
                        number_type: name,
                    });
                    this.scChange.emit({
                        number: this.number,
                        number_type: name,
                    });
                    this.type = name;
                    (_a = this.input) === null || _a === void 0 ? void 0 : _a.triggerFocus();
                    index$2.speak(wp.i18n.sprintf(wp.i18n.__('%s selected', 'surecart'), tax.zones[name].label_small, 'assertive'));
                }
            }, checked: this.type === name, "aria-selected": this.type === name ? 'true' : 'false', "aria-label": tax.zones[name].label_small }, tax.zones[name].label_small)))))))));
    }
    static get watchers() { return {
        "otherLabel": ["onLabelChange"],
        "caGstLabel": ["onLabelChange"],
        "auAbnLabel": ["onLabelChange"],
        "gbVatLabel": ["onLabelChange"],
        "euVatLabel": ["onLabelChange"],
        "taxIdTypes": ["onTaxIdTypesChange"]
    }; }
};
ScTaxIdInput.style = ScTaxIdInputStyle0;

exports.sc_address = ScAddress;
exports.sc_checkbox = ScCheckbox;
exports.sc_phone_input = ScPhoneInput;
exports.sc_tax_id_input = ScTaxIdInput;

//# sourceMappingURL=sc-address_4.cjs.entry.js.map