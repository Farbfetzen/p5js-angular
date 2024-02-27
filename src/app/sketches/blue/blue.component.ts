import p5 from "p5";

import { Component } from "@angular/core";

import { SketchComponent } from "src/app/sketches/sketch/sketch.component";

@Component({
    selector: "app-blue",
    standalone: true,
    imports: [SketchComponent],
    template: `<app-sketch [sketchFun]="createSketch" centeredHorizontally="true" />`,
})
export class BlueComponent {
    backgroundColor = "#3264c8";

    createSketch = (p: p5) => {
        // let counter = 0;

        p.setup = () => {
            p.createCanvas(300, 300);
        };

        p.draw = () => {
            p.background(this.backgroundColor);
            // counter++;
            // if (counter % 30 == 0) {
            //     console.log("blue: " + counter);
            // }
        };
    };
}
