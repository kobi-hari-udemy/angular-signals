import { Directive, inject, TemplateRef } from "@angular/core";

@Directive({
    selector: '[appOption]',
    standalone: true,
})
export class OptionDirective {
    readonly template = inject(TemplateRef<string>);
}