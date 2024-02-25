import p5 from "p5";

import { AfterViewInit, Component, OnDestroy } from "@angular/core";

@Component({
    selector: "app-blue",
    standalone: true,
    imports: [],
    templateUrl: "./blue.component.html",
    styleUrl: "./blue.component.css",
})
export class BlueComponent implements AfterViewInit, OnDestroy {
    sketch!: p5;
    backgroundColor = "#3264c8";

    ngAfterViewInit(): void {
        this.sketch = new p5(this.createSketch);
    }

    ngOnDestroy(): void {
        this.sketch.remove();
    }

    createSketch = (p: p5) => {
        let counter = 0;

        p.setup = () => {
            p.createCanvas(300, 300).parent("canvas-container");
        };

        p.draw = () => {
            p.background(this.backgroundColor);
            counter++;
            if (counter % 30 == 0) {
                console.log("blue: " + counter);
            }
        };
    };
}
