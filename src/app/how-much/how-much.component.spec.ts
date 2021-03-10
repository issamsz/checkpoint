import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowMuchComponent } from './how-much.component';

describe('HowMuchComponent', () => {
  let component: HowMuchComponent;
  let fixture: ComponentFixture<HowMuchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowMuchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowMuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
