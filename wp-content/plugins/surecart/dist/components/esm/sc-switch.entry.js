import { r as registerInstance, c as createEvent, h, a as getElement } from './index-745b6bec.js';
import { F as FormSubmitController } from './form-data-76641f16.js';

const scSwitchCss = ":host{--height:var(--sc-toggle-size);--thumb-size:calc(var(--sc-toggle-size) - 2px);--width:calc(var(--height) * 2);display:block}.switch{display:inline-flex;align-items:flex-start;gap:0.7em;font-family:var(--sc-input-font-family);font-size:var(--sc-input-font-size-medium);font-weight:var(--sc-input-font-weight);color:var(--sc-input-color);vertical-align:middle;cursor:pointer}.switch--reversed{flex-direction:row-reverse}.switch--editing{cursor:initial}.switch__control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--width);height:var(--height);background-color:var(--sc-switch-control-background-color, var(--sc-color-gray-300));border:solid var(--sc-input-border-width) var(--sc-switch-border-color, var(--sc-color-gray-300));border-radius:var(--height);transition:var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) background-color}.switch__control .switch__thumb{width:var(--thumb-size);height:var(--thumb-size);background-color:var(--sc-switch-thumb-background-color, var(--sc-color-white));border-radius:50%;border:solid var(--sc-input-border-width) var(--sc-input-border-color);transform:translateX(calc(var(--width) / -2 + var(--thumb-size) / 2 - (var(--thumb-size) - var(--height)) / 2));transition:var(--sc-input-transition, var(--sc-transition-medium)) transform ease, var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.switch__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.switch__control:has(:focus-visible){outline:2px solid var(--sc-focus-ring-color-primary);outline-offset:2px}.switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover{background-color:var(--sc-switch-control-hover-background-color, var(--sc-color-gray-200));border-color:var(--sc-switch-control-hover-border-color, var(--sc-color-gray-200))}.switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb{background-color:var(--sc-switch-background-thumb-hover-color, var(--sc-color-white));border-color:var(--sc-switch-thumb-border-color, var(--sc-input-border-color))}.switch.switch--focused:not(.switch--checked):not(.switch--disabled) .switch__control{background-color:var(--sc-switch-control-hover-background-color, var(--sc-color-gray-200));border-color:var(--sc-switch-control-hover-border-color, var(--sc-color-gray-200))}.switch.switch--focused:not(.switch--checked):not(.switch--disabled) .switch__control .switch__thumb{background-color:var(--sc-color-white);border-color:var(--sc-color-gray-300);box-shadow:0 0 0 1px var(--sc-color-gray-300)}.switch--checked .switch__control{background-color:var(--sc-switch-checked-control-background-color, var(--sc-color-primary-500));border-color:var(--sc-switch-checked-control-border-color, var(--sc-color-primary-500))}.switch--checked .switch__control .switch__thumb{background-color:var(--sc-color-white);border-color:var(--sc-color-primary-500);transform:translateX(calc(var(--width) / 2 - var(--thumb-size) / 2 + (var(--thumb-size) - var(--height)) / 2))}.switch.switch--checked:not(.switch--disabled) .switch__control:hover{opacity:0.8}.switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb{background-color:var(--sc-color-white);border-color:var(--sc-color-primary-500)}.switch.switch--checked:not(.switch--disabled).switch--focused .switch__control .switch__thumb{background-color:var(--sc-color-white);border-color:var(--sc-color-primary-500);box-shadow:0 0 0 1px var(--sc-focus-ring-color-primary)}.switch--disabled{opacity:0.5;cursor:not-allowed}.switch__label{user-select:none;line-height:var(--height)}.switch--is-required .switch__title:after{content:\" *\";color:var(--sc-color-danger-500)}.switch__title{color:var(--sc-swith-label-color, var(--sc-input-label-color));font-weight:var(--sc-input-label-font-weight);font-size:var(--sc-input-label-font-size-medium)}.switch__description{display:none;color:var(--sc-switch-description-color, var(--sc-color-gray-500));line-height:var(--sc-line-height-dense);margin:0.5em 0 0;font-size:var(--sc-font-size-small)}.switch--has-description .switch__description{display:block}slot[name=description]::slotted(*){margin:0.75em 0;line-height:var(--sc-line-height-dense);vertical-align:center}";
const ScSwitchStyle0 = scSwitchCss;

let id = 0;
const ScSwitch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scBlur = createEvent(this, "scBlur", 7);
        this.scChange = createEvent(this, "scChange", 7);
        this.scFocus = createEvent(this, "scFocus", 7);
        this.switchId = `switch-${++id}`;
        this.labelId = `switch-label-${id}`;
        this.hasDescription = undefined;
        this.hasFocus = false;
        this.name = undefined;
        this.value = undefined;
        this.disabled = false;
        this.required = false;
        this.checked = false;
        this.invalid = false;
        this.reversed = undefined;
        this.edit = false;
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    async reportValidity() {
        this.invalid = !this.input.checkValidity();
        return this.input.reportValidity();
    }
    handleClick() {
        this.checked = !this.checked;
        this.scChange.emit();
    }
    handleBlur() {
        this.hasFocus = false;
        this.scBlur.emit();
    }
    handleFocus() {
        this.hasFocus = true;
        this.scFocus.emit();
    }
    handleKeyDown(event) {
        if (this.edit)
            return true;
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            this.checked = false;
            this.scChange.emit();
        }
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            this.checked = true;
            this.scChange.emit();
        }
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.handleClick();
        }
    }
    handleMouseDown(event) {
        if (this.edit)
            return true;
        // Prevent clicks on the label from briefly blurring the input
        event.preventDefault();
        this.input.focus();
    }
    handleCheckedChange() {
        if (this.input) {
            this.input.checked = this.checked;
            this.invalid = !this.input.checkValidity();
        }
    }
    componentWillLoad() {
        this.hasDescription = !!this.el.querySelector('[slot="description"]');
    }
    componentDidLoad() {
        this.formController = new FormSubmitController(this.el, {
            value: (control) => (control.checked ? control.value : undefined),
        }).addFormData();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.formController) === null || _a === void 0 ? void 0 : _a.removeFormData();
    }
    render() {
        const Tag = this.edit ? 'div' : 'label';
        return (h(Tag, { key: '968c9dfadaf23d0eaee8c3a5b9b4eb5d38a2b471', part: "base", htmlFor: this.switchId, class: {
                'switch': true,
                'switch--is-required': this.required,
                'switch--checked': this.checked,
                'switch--disabled': this.disabled,
                'switch--focused': this.hasFocus,
                'switch--reversed': this.reversed,
                'switch--editing': this.edit,
                'switch--has-description': this.hasDescription,
            }, onMouseDown: e => this.handleMouseDown(e) }, h("span", { key: 'a5f3eb771bb7314b4a31af2c50bea21cc1e9dd21', part: "control", class: "switch__control" }, h("span", { key: '91f2e5c3ce7796af16b5642d3fc8386ad5d1a507', part: "thumb", class: "switch__thumb" }), h("input", { key: '9a67a8815f9e53487db49442ed61df12f82d8f7c', ref: el => (this.input = el), id: this.switchId, type: "checkbox", role: "switch", name: this.name, value: this.value || 'on', checked: this.checked, disabled: this.disabled, required: this.required, "aria-checked": this.checked ? 'true' : 'false', "aria-labelledby": this.labelId, onClick: () => this.handleClick(), onBlur: () => this.handleBlur(), onFocus: () => this.handleFocus(), onKeyDown: e => this.handleKeyDown(e) })), h("span", { key: '63aa6e57d584af46cfdd1a87ade9093844a34772', class: "switch__label", part: "label" }, h("span", { key: 'df4bc9a430cab0f05a6bf57f1c46b86133fc623d', part: "title", id: this.labelId, class: "switch__title" }, h("slot", { key: 'a34f6cf272effb8f6cdc2f250526c4f1eb210879' })), h("span", { key: '3af531f67bef2437efbd74bfe04308b5773e5204', class: "switch__description", part: "description" }, h("slot", { key: '3c05139e7a5b830d8ad3a6cbb19908096f3830b3', name: "description" })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
};
ScSwitch.style = ScSwitchStyle0;

export { ScSwitch as sc_switch };

//# sourceMappingURL=sc-switch.entry.js.map