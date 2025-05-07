import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoTanjiroComponent } from './funko-tanjiro.component';

describe('FunkoTanjiroComponent', () => {
  let component: FunkoTanjiroComponent;
  let fixture: ComponentFixture<FunkoTanjiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunkoTanjiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunkoTanjiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
