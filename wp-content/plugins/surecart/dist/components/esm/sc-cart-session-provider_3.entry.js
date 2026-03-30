import { r as registerInstance, c as createEvent, h, a as getElement } from './index-745b6bec.js';
import { u as updateFormState, s as state } from './mutations-6bbbe793.js';
import { d as updateCheckout } from './index-a7f5e198.js';
import { c as createErrorNotice, s as state$1 } from './mutations-ed6d0770.js';
import { c as clearCheckout } from './mutations-404760eb.js';
import { s as setDefaultAnimation, g as getAnimation, b as animateTo, a as stopAnimations } from './animation-registry-adf65203.js';
import { g as getAdditionalErrorMessages } from './getters-a7eec27c.js';
import './index-06061d4e.js';
import './utils-cd1431df.js';
import './remove-query-args-938c53ea.js';
import './add-query-args-0e2a8393.js';
import './index-c5a96d53.js';
import './google-a86aa761.js';
import './currency-a0c9bff4.js';
import './store-627acec4.js';
import './price-af9f0dbf.js';
import './fetch-bc141774.js';

const ScCartSessionProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scSetState = createEvent(this, "scSetState", 7);
    }
    handleUpdateSession(e) {
        const { data, options } = e.detail;
        if (options === null || options === void 0 ? void 0 : options.silent) {
            this.update(data);
        }
        else {
            this.loadUpdate(data);
        }
    }
    /** Handle the error response. */
    handleErrorResponse(e) {
        var _a, _b;
        if ((e === null || e === void 0 ? void 0 : e.code) === 'readonly' || ((_b = (_a = e === null || e === void 0 ? void 0 : e.additional_errors) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.code) === 'checkout.customer.account_mismatch') {
            clearCheckout();
        }
        // expired
        if ((e === null || e === void 0 ? void 0 : e.code) === 'rest_cookie_invalid_nonce') {
            updateFormState('EXPIRE');
            return;
        }
        // something went wrong
        if (e === null || e === void 0 ? void 0 : e.message) {
            createErrorNotice(e);
        }
        // handle curl timeout errors.
        if ((e === null || e === void 0 ? void 0 : e.code) === 'http_request_failed') {
            createErrorNotice(wp.i18n.__('Something went wrong. Please reload the page and try again.', 'surecart'));
        }
    }
    /** Fetch a session. */
    async fetch(args = {}) {
        this.loadUpdate({ status: 'draft', ...args });
    }
    /** Update a the order */
    async update(data = {}, query = {}) {
        var _a;
        try {
            state.checkout = (await updateCheckout({
                id: (_a = state.checkout) === null || _a === void 0 ? void 0 : _a.id,
                data: {
                    ...data,
                },
                query: {
                    ...query,
                },
            }));
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    }
    /** Updates a session with loading status changes. */
    async loadUpdate(data = {}) {
        try {
            updateFormState('FETCH');
            await this.update(data);
            updateFormState('RESOLVE');
        }
        catch (e) {
            updateFormState('REJECT');
            this.handleErrorResponse(e);
        }
    }
    render() {
        return (h("sc-line-items-provider", { key: '487aeb5da88dc93549ebe56f29b29196c45d73f4', order: state.checkout, onScUpdateLineItems: e => this.loadUpdate({ line_items: e.detail }) }, h("slot", { key: '4c30b8b64591822f4aa0938ee3876e840d234a08' })));
    }
    get el() { return getElement(this); }
};

const scDrawerCss = ":host {\n  display: contents;\n}\n.drawer {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  overflow: hidden;\n  font-family: var(--sc-font-sans);\n  font-weight: var(--sc-font-weight-normal);\n}\n.drawer--contained {\n  position: absolute;\n  z-index: initial;\n}\n.drawer--fixed {\n  position: fixed;\n  z-index: var(--sc-z-index-drawer);\n}\n.drawer__panel {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  z-index: 2;\n  max-width: 100%;\n  max-height: 100%;\n  background-color: var(--sc-panel-background-color);\n  box-shadow: var(--sc-shadow-x-large);\n  transition: var(--sc-transition-medium) transform;\n  overflow: auto;\n  pointer-events: all;\n}\n.drawer__panel:focus {\n  outline: none;\n}\n.drawer--top .drawer__panel {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  width: 100%;\n  height: var(--sc-drawer-size, 400px);\n}\n.drawer--end .drawer__panel {\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: auto;\n  width: 100%;\n  max-width: var(--sc-drawer-size, 400px);\n  height: 100%;\n}\n.drawer--bottom .drawer__panel {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: var(--sc-drawer-size, 400px);\n}\n.drawer--start .drawer__panel {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  width: var(--sc-drawer-size, 400px);\n  height: 100%;\n}\n.header__sticky {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: #fff;\n}\n.drawer__header {\n  display: flex;\n  align-items: center;\n  padding: var(--sc-drawer-header-spacing);\n  border-bottom: var(--sc-drawer-border);\n}\n\n.drawer__title {\n  flex: 1 1 auto;\n  font: inherit;\n  font-size: var(--sc-font-size-large);\n  line-height: var(--sc-line-height-dense);\n  margin: 0;\n}\n.drawer__close {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  font-size: var(--sc-font-size-x-large);\n  color: var(--sc-color-gray-500);\n  cursor: pointer;\n}\n.drawer__body {\n  flex: 1 1 auto;\n}\n\n.drawer--has-footer .drawer__footer {\n  border-top: var(--sc-drawer-border);\n  padding: var(--sc-drawer-footer-spacing);\n\n  &.is-sticky {\n    position: sticky;\n    bottom: 0;\n    background: #fff;\n  }\n}\n\n.drawer__overlay {\n  display: block;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: var(--sc-overlay-background-color);\n  pointer-events: all;\n}\n.drawer--contained .drawer__overlay {\n  position: absolute;\n}\n";
const ScDrawerStyle0 = scDrawerCss;

const ScDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scInitialFocus = createEvent(this, "scInitialFocus", 7);
        this.scRequestClose = createEvent(this, "scRequestClose", 7);
        this.scShow = createEvent(this, "scShow", 7);
        this.scHide = createEvent(this, "scHide", 7);
        this.scAfterShow = createEvent(this, "scAfterShow", 7);
        this.scAfterHide = createEvent(this, "scAfterHide", 7);
        this.open = false;
        this.label = '';
        this.placement = 'end';
        this.contained = false;
        this.noHeader = false;
        this.stickyHeader = false;
        this.stickyFooter = false;
    }
    componentDidLoad() {
        this.drawer.hidden = !this.open;
        if (this.open && !this.contained) {
            this.lockBodyScrolling();
        }
        this.handleOpenChange();
    }
    disconnectedCallback() {
        this.unLockBodyScrolling();
    }
    lockBodyScrolling() {
        document.body.classList.add('sc-scroll-lock');
    }
    unLockBodyScrolling() {
        document.body.classList.remove('sc-scroll-lock');
    }
    /** Shows the drawer. */
    async show() {
        if (this.open) {
            return undefined;
        }
        this.open = true;
    }
    /** Hides the drawer */
    async hide() {
        if (!this.open) {
            return undefined;
        }
        this.open = false;
    }
    async requestClose(source = 'method') {
        const slRequestClose = this.scRequestClose.emit(source);
        if (slRequestClose.defaultPrevented) {
            const animation = getAnimation(this.el, 'drawer.denyClose');
            animateTo(this.panel, animation.keyframes, animation.options);
            return;
        }
        this.hide();
    }
    handleKeyDown(event) {
        if (event.key === 'Escape') {
            event.stopPropagation();
            this.requestClose('keyboard');
        }
    }
    async handleOpenChange() {
        if (this.open) {
            this.scShow.emit();
            this.originalTrigger = document.activeElement;
            // Lock body scrolling only if the drawer isn't contained
            if (!this.contained) {
                this.lockBodyScrolling();
            }
            // When the drawer is shown, Safari will attempt to set focus on whatever element has autofocus. This causes the
            // drawer's animation to jitter, so we'll temporarily remove the attribute, call `focus({ preventScroll: true })`
            // ourselves, and add the attribute back afterwards.
            //
            // Related: https://github.com/shoelace-style/shoelace/issues/693
            //
            const autoFocusTarget = this.el.querySelector('[autofocus]');
            if (autoFocusTarget) {
                autoFocusTarget.removeAttribute('autofocus');
            }
            await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
            this.drawer.hidden = false;
            // Set initial focus
            requestAnimationFrame(() => {
                const slInitialFocus = this.scInitialFocus.emit();
                if (!slInitialFocus.defaultPrevented) {
                    // Set focus to the autofocus target and restore the attribute
                    if (autoFocusTarget) {
                        autoFocusTarget.focus({ preventScroll: true });
                    }
                    else {
                        this.panel.focus({ preventScroll: true });
                    }
                }
                // Restore the autofocus attribute
                if (autoFocusTarget) {
                    autoFocusTarget.setAttribute('autofocus', '');
                }
            });
            const panelAnimation = getAnimation(this.el, `drawer.show${this.placement.charAt(0).toUpperCase() + this.placement.slice(1)}`);
            const overlayAnimation = getAnimation(this.el, 'drawer.overlay.show');
            await Promise.all([animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options), animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)]);
            this.scAfterShow.emit();
        }
        else {
            // Hide
            this.scHide.emit();
            this.unLockBodyScrolling();
            await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
            const panelAnimation = getAnimation(this.el, `drawer.hide${this.placement.charAt(0).toUpperCase() + this.placement.slice(1)}`);
            const overlayAnimation = getAnimation(this.el, 'drawer.overlay.hide');
            await Promise.all([animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options), animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)]);
            this.drawer.hidden = true;
            // Restore focus to the original trigger
            const trigger = this.originalTrigger;
            if (typeof (trigger === null || trigger === void 0 ? void 0 : trigger.focus) === 'function') {
                setTimeout(() => trigger.focus());
            }
            this.scAfterHide.emit();
        }
    }
    render() {
        return (h("div", { key: 'fd9d19fbb4b040abf64a554be868ed303cff4198', part: "base", class: {
                'drawer': true,
                'drawer--open': this.open,
                'drawer--top': this.placement === 'top',
                'drawer--end': this.placement === 'end',
                'drawer--bottom': this.placement === 'bottom',
                'drawer--start': this.placement === 'start',
                'drawer--contained': this.contained,
                'drawer--fixed': !this.contained,
                'drawer--has-footer': this.el.querySelector('[slot="footer"]') !== null,
            }, ref: el => (this.drawer = el), onKeyDown: (e) => this.handleKeyDown(e) }, h("div", { key: 'e7a31405d8aa6ffc3b0cbd25a2dbe595b77cb7df', part: "overlay", class: "drawer__overlay", onClick: () => this.requestClose('overlay'), tabindex: "-1", ref: el => (this.overlay = el) }), h("div", { key: '0133489a2a011d0ea4be82ae9c110cdfc9fe364c', part: "panel", class: "drawer__panel", role: "dialog", "aria-modal": "true", "aria-hidden": this.open ? 'false' : 'true', "aria-label": this.noHeader ? this.label : undefined, "aria-labelledby": !this.noHeader ? 'title' : undefined, tabindex: "0", ref: el => (this.panel = el) }, !this.noHeader && (h("header", { key: 'b39c2621b4f54bf42b410547c293c79553eb9a12', part: "header", class: this.stickyHeader ? 'header__sticky' : '' }, h("slot", { key: '6a3b95a966d2fb6b2a06f24b753cd0189674929b', name: "header" }, h("div", { key: '2dcc3e248d4d1178b3ed8a8c7789ff971232b32f', class: "drawer__header" }, h("h2", { key: '791ef3ea52c7f68bc8467a9fb17137d4856995c7', part: "title", class: "drawer__title", id: "title" }, h("slot", { key: '607cb2a818610adacf3248768445e35ba6f435f8', name: "label" }, this.label.length > 0 ? this.label : ' ', " ")), h("sc-icon", { key: 'e32c1efd56d0dd9521a23120cc9071f454db2629', part: "close-button", exportparts: "base:close-button__base", class: "drawer__close", name: "x", label: 
            /** translators: Close this modal window. */
            wp.i18n.__('Close', 'surecart'), onClick: () => this.requestClose('close-button') }))))), h("footer", { key: '4840babea63501921234b79d0076486a55415f50', part: "header-suffix", class: "drawer__header-suffix" }, h("slot", { key: 'e6f17c8be5b274fd7fd866d0879304d105469eef', name: "header-suffix" })), h("div", { key: 'c1ae76af464f7c6519b9902268eb522a89395d0b', part: "body", class: "drawer__body" }, h("slot", { key: 'deb939000349220e317e0cd583294325ffdfb71a' })), h("footer", { key: 'c0eca95c41981b30d0dc2bbf4e620817953c77d5', part: "footer", class: this.stickyFooter ? 'drawer__footer is-sticky' : 'drawer__footer' }, h("slot", { key: '588c72abb3bcd20c63a4ecc105c3cdda6489eae3', name: "footer" })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
// Top
setDefaultAnimation('drawer.showTop', {
    keyframes: [
        { opacity: 0, transform: 'translateY(-100%)' },
        { opacity: 1, transform: 'translateY(0)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.hideTop', {
    keyframes: [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(-100%)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
// End
setDefaultAnimation('drawer.showEnd', {
    keyframes: [
        { opacity: 0, transform: 'translateX(100%)' },
        { opacity: 1, transform: 'translateX(0)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.hideEnd', {
    keyframes: [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(100%)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
// Bottom
setDefaultAnimation('drawer.showBottom', {
    keyframes: [
        { opacity: 0, transform: 'translateY(100%)' },
        { opacity: 1, transform: 'translateY(0)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.hideBottom', {
    keyframes: [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(100%)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
// Start
setDefaultAnimation('drawer.showStart', {
    keyframes: [
        { opacity: 0, transform: 'translateX(-100%)' },
        { opacity: 1, transform: 'translateX(0)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.hideStart', {
    keyframes: [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(-100%)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
// Deny close
setDefaultAnimation('drawer.denyClose', {
    keyframes: [{ transform: 'scale(1)' }, { transform: 'scale(1.01)' }, { transform: 'scale(1)' }],
    options: { duration: 250 },
});
// Overlay
setDefaultAnimation('drawer.overlay.show', {
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.overlay.hide', {
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    options: { duration: 250, easing: 'ease' },
});
ScDrawer.style = ScDrawerStyle0;

const ScFormErrorProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scUpdateError = createEvent(this, "scUpdateError", 7);
        this.error = undefined;
    }
    /** Trigger the error event when an error happens  */
    handleErrorUpdate(val) {
        this.scUpdateError.emit(val);
    }
    render() {
        return !!(state$1 === null || state$1 === void 0 ? void 0 : state$1.message) ? (h("sc-alert", { exportparts: "base, icon, text, title, message, close", type: "danger", scrollOnOpen: true, open: !!(state$1 === null || state$1 === void 0 ? void 0 : state$1.message), closable: !!(state$1 === null || state$1 === void 0 ? void 0 : state$1.dismissible) }, (state$1 === null || state$1 === void 0 ? void 0 : state$1.message) && h("span", { slot: "title", innerHTML: state$1.message }), (getAdditionalErrorMessages() || []).map((message, index) => (h("div", { innerHTML: message, key: index }))))) : null;
    }
    static get watchers() { return {
        "error": ["handleErrorUpdate"]
    }; }
};

export { ScCartSessionProvider as sc_cart_session_provider, ScDrawer as sc_drawer, ScFormErrorProvider as sc_error };

//# sourceMappingURL=sc-cart-session-provider_3.entry.js.map