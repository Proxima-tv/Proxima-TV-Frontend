import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryandcommentsComponent } from './historyandcomments.component';

describe('HistoryandcommentsComponent', () => {
  let component: HistoryandcommentsComponent;
  let fixture: ComponentFixture<HistoryandcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryandcommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryandcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
