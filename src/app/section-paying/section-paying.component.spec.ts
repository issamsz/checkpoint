import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPayingComponent } from './section-paying.component';

describe('SectionPayingComponent', () => {
  let component: SectionPayingComponent;
  let fixture: ComponentFixture<SectionPayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPayingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
