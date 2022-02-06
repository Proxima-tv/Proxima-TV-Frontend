import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchStatsComponent } from './watch-stats.component';

describe('WatchStatsComponent', () => {
  let component: WatchStatsComponent;
  let fixture: ComponentFixture<WatchStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
