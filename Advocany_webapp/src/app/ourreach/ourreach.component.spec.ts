import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurreachComponent } from './ourreach.component';

describe('OurreachComponent', () => {
  let component: OurreachComponent;
  let fixture: ComponentFixture<OurreachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurreachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
