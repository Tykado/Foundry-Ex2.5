import { exaltedsecond } from "./config.js";

export default class ExaltedActiveEffectConfig extends foundry.applications.sheets.ActiveEffectConfig {

    /** @override */
    static PARTS = {
        header: { template: "systems/exaltedsecond/templates/active-effect/active-effects-header.html" },
        tabs: { template: "systems/exaltedsecond/templates/dialogues/tabs.html" },
        details: { template: "systems/exaltedsecond/templates/active-effect/details.html", scrollable: [""] },
        duration: { template: "systems/exaltedsecond/templates/active-effect/duration.html" },
        changes: { template: "systems/exaltedsecond/templates/active-effect/changes.html", scrollable: ["ol[data-changes]"] },
        footer: { template: "templates/generic/form-footer.hbs" }
    };

    _initializeApplicationOptions(options) {
        options.classes = [options.document?.parent?.getSheetBackground() ?? 'tree-background', "exaltedsecond"];
        return super._initializeApplicationOptions(options);
    }

    /** @inheritDoc */
    async _prepareContext(options) {
        const context = await super._prepareContext(options);
        context.useDropdown = game.settings.get("exaltedsecond", "useActiveEffectsDropdown");

        context.selects = CONFIG.exaltedsecond.selects;

        context.activeEffectChanges = exaltedsecond.activeEffectChanges;

        return context;
    }
}