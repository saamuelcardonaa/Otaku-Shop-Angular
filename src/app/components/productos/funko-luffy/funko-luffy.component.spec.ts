import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoLuffyComponent } from './funko-luffy.component';

describe('FunkoLuffyComponent', () => {
  let component: FunkoLuffyComponent;
  let fixture: ComponentFixture<FunkoLuffyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunkoLuffyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunkoLuffyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
