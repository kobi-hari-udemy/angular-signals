import { computed, contentChild, Directive, ElementRef, inject } from "@angular/core";

@Directive({
    selector: 'input[appManaged]', 
    standalone: true
})
export class ManagedInputDirective {
    private readonly elementRef = inject(ElementRef<HTMLInputElement>);
    readonly inputElement = this.elementRef.nativeElement;
}