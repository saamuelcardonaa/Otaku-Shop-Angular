import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoGojoComponent } from './funko-gojo.component';

describe('FunkoGojoComponent', () => {
  let component: FunkoGojoComponent;
  let fixture: ComponentFixture<FunkoGojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunkoGojoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunkoGojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
