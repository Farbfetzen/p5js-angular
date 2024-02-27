import p5 from "p5";

import { Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, booleanAttribute } from "@angular/core";

@Component({
    selector: "app-sketch",
    standalone: true,
    imports: [],
    template: ``,
    styles: `
        :host {
            display: block;
            width: fit-content;
        }
        :host.center-horiz {
            margin: 0 auto;
        }
    `,
})
export class SketchComponent implements OnInit, OnDestroy {
    /** A function that creates a sketch. */
    @Input({ required: true }) sketchFun!: (p: p5) => void;
    @Input({ transform: booleanAttribute }) centeredHorizontally = false;
    @HostBinding("class.center-horiz") get classCenterHoriz() {
        return this.centeredHorizontally;
    }
    sketch!: p5;

    constructor(private hostElement: ElementRef) {}

    ngOnInit(): void {
        this.sketch = new p5(this.sketchFun, this.hostElement.nativeElement);
    }

    ngOnDestroy(): void {
        this.sketch.remove();
    }

    refresh(): void {
        this.sketch.remove();
        this.sketch = new p5(this.sketchFun, this.hostElement.nativeElement);
    }
}
