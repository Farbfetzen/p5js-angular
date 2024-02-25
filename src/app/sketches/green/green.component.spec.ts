import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GreenComponent } from "src/app/sketches/green/green.component";

describe("GreenComponent", () => {
    let component: GreenComponent;
    let fixture: ComponentFixture<GreenComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GreenComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(GreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
