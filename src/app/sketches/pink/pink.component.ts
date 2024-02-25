import p5 from "p5";

import { Component } from "@angular/core";

import { SketchComponent } from "src/app/sketches/sketch/sketch.component";

@Component({
    selector: "app-pink",
    standalone: true,
    imports: [SketchComponent],
    template: `
        <p>pink works!</p>
        <app-sketch [sketchClosure]="createSketch" />
    `,
})
export class PinkComponent {
    createSketch = (p: p5) => {
        let counter = 0;

        p.setup = () => {
            p.createCanvas(300, 300);
        };

        p.draw = () => {
            p.background(255, 192, 203);
            counter++;
            if (counter % 30 == 0) {
                console.log("pink: " + counter);
            }
        };
    };
}
