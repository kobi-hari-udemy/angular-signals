import { computed, Directive, input } from "@angular/core";
import { FieldTree } from "@angular/forms/signals";

@Directive({
    selector: '[field]'
})
export class FieldStyingDirective<T> {
    readonly field = input.required<FieldTree<T>>();
    readonly fieldState = computed(() => this.field()());

    readonly invalid = computed(() => this.fieldState().invalid());
    readonly valid = computed(() => this.fieldState().valid());
    readonly touched = computed(() => this.fieldState().touched());
    readonly dirty = computed(() => this.fieldState().dirty());


    constructor() {
        console.log('Field Styling Directive constructed');
    }

}