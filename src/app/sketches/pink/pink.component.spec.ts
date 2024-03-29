import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PinkComponent } from "src/app/sketches/pink/pink.component";

describe("PinkComponent", () => {
    let component: PinkComponent;
    let fixture: ComponentFixture<PinkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PinkComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
