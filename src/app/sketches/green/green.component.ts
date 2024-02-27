import p5 from "p5";

import { Component, ViewChild } from "@angular/core";

import { SketchComponent } from "src/app/sketches/sketch/sketch.component";

@Component({
    selector: "app-sketch-impl",
    standalone: true,
    imports: [SketchComponent],
    template: `
        <app-sketch [sketchFun]="createSketch" />
        <button type="button" (click)="sketch.refresh()">refresh</button>
    `,
    styles: ``,
})
export class GreenComponent {
    @ViewChild(SketchComponent) sketch!: SketchComponent;

    createSketch = (p: p5) => {
        // let counter = 0;

        p.setup = () => {
            p.createCanvas(300, 300);
        };

        p.draw = () => {
            p.background(50, 150, 50);
            // counter++;
            // if (counter % 30 == 0) {
            //     console.log("green: " + counter);
            // }
        };
    };
}
