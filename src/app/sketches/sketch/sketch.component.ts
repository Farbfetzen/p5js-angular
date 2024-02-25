import p5 from "p5";

import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from "@angular/core";

@Component({
    selector: "app-sketch",
    standalone: true,
    imports: [],
    template: `<div #canvasContainer></div>`,
    styles: `
        div {
            outline: 1px solid red;
        }
    `,
})
export class SketchComponent implements AfterViewInit, OnDestroy {
    @Input({ required: true }) sketchClosure!: (p: p5) => void;
    @ViewChild("canvasContainer") canvasContainer!: ElementRef<HTMLDivElement>;
    sketch!: p5;

    ngAfterViewInit(): void {
        this.sketch = new p5(this.sketchClosure, this.canvasContainer.nativeElement);
    }

    ngOnDestroy(): void {
        this.sketch.remove();
    }

    refresh(): void {
        this.sketch.remove();
        this.sketch = new p5(this.sketchClosure, this.canvasContainer.nativeElement);
    }
}
