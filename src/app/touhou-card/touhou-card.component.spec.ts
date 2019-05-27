import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouhouCardComponent } from './touhou-card.component';

describe('TouhouCardComponent', () => {
  let component: TouhouCardComponent;
  let fixture: ComponentFixture<TouhouCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouhouCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouhouCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
