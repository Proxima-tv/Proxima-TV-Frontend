import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulteComponent } from './resulte.component';

describe('ResulteComponent', () => {
  let component: ResulteComponent;
  let fixture: ComponentFixture<ResulteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResulteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResulteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
