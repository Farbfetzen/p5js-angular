import { Routes } from "@angular/router";

import { MainComponent } from "src/app/main/main.component";
import { BlueComponent } from "src/app/sketches/blue/blue.component";
import { GreenComponent } from "src/app/sketches/green/green.component";
import { PinkComponent } from "src/app/sketches/pink/pink.component";

export const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "blue", component: BlueComponent },
    { path: "pink", component: PinkComponent },
    { path: "green", component: GreenComponent },
];
