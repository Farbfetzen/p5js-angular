import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

import { ToolbarComponent } from "src/app/toolbar/toolbar.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, RouterLink, ToolbarComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {
    title = "p5js-angular";
}
