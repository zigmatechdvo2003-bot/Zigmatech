import { r as registerInstance, c as createEvent, h, a as getElement } from './index-745b6bec.js';
import { a as autoUpdate, c as computePosition, o as offset, f as flip, s as shift, b as size } from './floating-ui.dom.esm-8dce4ea1.js';
import { s as speak } from './index-c5a96d53.js';

const scPopoverCss = ":host{display:inline-block;--panel-height:75vh}slot[name=title]{font-weight:600;font-size:14px}.popover{position:relative}.popover.popover--open .popover__positioner{visibility:visible;opacity:1;transform:scale(1)}.popover__header{display:flex;justify-content:space-between;padding-bottom:1em}.popover__header-close-button{display:flex;align-items:center;justify-content:center;padding:0;margin:0;border:none;background:transparent;cursor:pointer;border-radius:var(--sc-border-radius-small)}.popover__header-close-button:focus{outline:2px solid var(--sc-focus-ring-color, var(--sc-color-primary-500));outline-offset:2px}.popover__header-close-button:hover{opacity:0.7}.popover__header-close-icon{vertical-align:middle;width:1.5em;height:1.5em}.popover__footer{border-top:1px solid var(--sc-input-border-color);padding-top:0.5em;margin-top:1em}.popover__trigger{display:block;cursor:pointer;border-width:0;outline:none;background-color:unset}.popover--disabled,.popover--disabled .popover__trigger{cursor:not-allowed}.popover__positioner{position:absolute;right:0;width:100%;z-index:var(--sc-z-index-popover);opacity:0;visibility:hidden;transform:scale(0.9);min-width:var(--panel-width, \"fit-content\")}.popover__panel{transform-origin:top left;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);max-height:var(--panel-height);font-family:var(--sc-font-sans);font-size:var(--sc-font-size-medium);font-weight:var(--sc-font-weight-normal);color:var(--sc-input-label-color);background-color:var(--sc-panel-background-color);border:solid 1px var(--sc-panel-border-color);border-radius:var(--sc-border-radius-x-large);box-shadow:var(--sc-shadow-large);overflow:auto;overscroll-behavior:none;transition:var(--sc-transition-fast) opacity, var(--sc-transition-fast) transform;z-index:5;padding:var(--sc-spacing-medium)}";
const ScPopoverStyle0 = scPopoverCss;

const ScPopover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scShow = createEvent(this, "scShow", 7);
        this.scHide = createEvent(this, "scHide", 7);
        this.boundHandleOutsideClick = (evt) => this.handleOutsideClick(evt);
        this.boundHandleKeyDown = (evt) => this.handleKeyDown(evt);
        this.boundHandleFocusOut = (evt) => this.handleFocusOut(evt);
        this.disabled = undefined;
        this.open = false;
        this.placement = 'bottom-start';
        this.distance = 0;
        this.skidding = 0;
        this.hoist = false;
        this.isVisible = undefined;
    }
    handleOpenChange() {
        this.open ? this.show() : this.hide();
    }
    handleOutsideClick(evt) {
        const path = evt.composedPath();
        if (!path.some(item => {
            return item === this.el;
        })) {
            this.open = false;
        }
    }
    handleKeyDown(event) {
        if (event.key === 'Escape') {
            event.stopPropagation();
            this.hide();
        }
    }
    handleTriggerKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (this.disabled)
                return;
            if (this.open) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    }
    /**
     * Handles focus leaving the popover.
     * Closes the popover if focus moves outside of it.
     */
    handleFocusOut(event) {
        const relatedTarget = event.relatedTarget;
        // If focus is moving to something outside the popover, close it
        if (relatedTarget && !this.el.contains(relatedTarget)) {
            this.open = false;
        }
    }
    startPositioner() {
        this.stopPositioner();
        this.updatePositioner();
        this.positionerCleanup = autoUpdate(this.trigger, this.positioner, this.updatePositioner.bind(this));
    }
    updatePositioner() {
        if (!this.open || !this.trigger || !this.positioner) {
            return;
        }
        computePosition(this.trigger, this.positioner, {
            placement: this.placement,
            middleware: [
                offset({ mainAxis: this.distance, crossAxis: this.skidding }),
                flip(),
                shift(),
                size({
                    apply: ({ availableWidth: width, availableHeight: height }) => {
                        // Ensure the panel stays within the viewport when we have lots of menu items
                        Object.assign(this.panel.style, {
                            maxWidth: `${width}px`,
                            maxHeight: `${height}px`,
                        });
                    },
                    padding: 8,
                }),
            ],
            strategy: this.hoist ? 'fixed' : 'absolute',
        }).then(({ x, y, placement }) => {
            this.positioner.setAttribute('data-placement', placement);
            Object.assign(this.positioner.style, {
                position: this.hoist ? 'fixed' : 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                right: 'auto',
            });
        });
    }
    stopPositioner() {
        var _a;
        if (this.positionerCleanup) {
            this.positionerCleanup();
            this.positionerCleanup = undefined;
            (_a = this.positioner) === null || _a === void 0 ? void 0 : _a.removeAttribute('data-placement');
        }
    }
    show() {
        speak(wp.i18n.__('Popover opened. Press Escape to close.', 'surecart'), 'assertive');
        this.scShow.emit();
        // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
        if (this.isVisible) {
            return;
        }
        this.isVisible = true;
        this.open = true;
        this.startPositioner();
        document.addEventListener('keydown', this.boundHandleKeyDown);
        this.el.addEventListener('focusout', this.boundHandleFocusOut);
        this.panel.focus();
    }
    hide() {
        var _a;
        speak(wp.i18n.__('Popover closed.', 'surecart'), 'assertive');
        this.scHide.emit();
        // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
        if (!this.isVisible) {
            return;
        }
        this.stopPositioner();
        document.removeEventListener('keydown', this.boundHandleKeyDown);
        this.el.removeEventListener('focusout', this.boundHandleFocusOut);
        this.isVisible = false;
        this.open = false;
        const slotted = this.el.shadowRoot.querySelector('slot[name="trigger"]');
        const trigger = slotted.assignedElements({ flatten: true })[0];
        (_a = trigger === null || trigger === void 0 ? void 0 : trigger.focus) === null || _a === void 0 ? void 0 : _a.call(trigger);
    }
    componentWillLoad() {
        document.addEventListener('mousedown', this.boundHandleOutsideClick);
    }
    disconnectedCallback() {
        document.removeEventListener('mousedown', this.boundHandleOutsideClick);
        document.removeEventListener('keydown', this.boundHandleKeyDown);
        this.el.removeEventListener('focusout', this.boundHandleFocusOut);
    }
    handleHide() {
        this.open = false;
        this.trigger.focus();
    }
    render() {
        return (h("div", { key: '4476ca548c15fe56a44eae155f62ef71aeddace7', part: "base", class: {
                'popover': true,
                'popover--open': this.open,
                'popover--disabled': this.disabled,
            } }, h("span", { key: '6a9808307b807e7447d6c3462ab996327107fef1', part: "trigger", class: "popover__trigger", ref: el => (this.trigger = el), onClick: () => {
                if (this.disabled)
                    return;
                if (this.open) {
                    this.hide();
                }
                else {
                    setTimeout(() => {
                        this.show();
                    }, 0);
                }
            }, onKeyDown: e => this.handleTriggerKeyDown(e), tabindex: "0", role: "button", "aria-expanded": this.open ? 'true' : 'false', "aria-haspopup": "dialog", "aria-label": wp.i18n.__('Press Enter to open popover', 'surecart') }, h("slot", { key: 'db33d95a8adcea45e00440c5b57e25ad1f3cc4bd', name: "trigger" })), h("div", { key: 'a0784e3aad7390b51f77ae8d681cfeaab28cefff', class: "popover__positioner", ref: el => (this.positioner = el) }, h("div", { key: '558c5a05a654f5f606087dfe7349a2b707d4bc57', part: "panel", class: "popover__panel", role: "dialog", "aria-modal": "false", tabindex: "-1", ref: el => (this.panel = el) }, h("div", { key: '1156def1e343a3e85b914ea3e8f60e14b8b14bcb', class: "popover__header" }, h("slot", { key: '3734de42a6f231ee4217867bdf3a7c477a1e2f90', name: "title" }), h("button", { key: 'de0de0b7e33fdbe2d34fe9120f7acecdb5c66762', type: "button", class: "popover__header-close-button", onClick: () => this.handleHide(), onKeyDown: e => e.key === 'Enter' && this.handleHide(), "aria-label": wp.i18n.__('Close', 'surecart') }, h("sc-icon", { key: 'd2143106c34526da7989fc52aca6c38a3f82d7fe', class: "popover__header-close-icon", name: "x" }))), h("slot", { key: '756a9284b3a5598e3545ecfaa4d356e6bbb158d5', name: "content" }), h("div", { key: 'd870a248537c405adbf15cb30bb71810b615bc15', class: "popover__footer" }, h("slot", { key: '8a8ad84cb03161e43e1869243dcf9761fd7e31ae', name: "footer" }))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
ScPopover.style = ScPopoverStyle0;

export { ScPopover as sc_popover };

//# sourceMappingURL=sc-popover.entry.js.map