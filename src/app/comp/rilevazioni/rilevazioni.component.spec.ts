import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RilevazioniComponent } from './rilevazioni.component';

describe('RilevazioniComponent', () => {
  let component: RilevazioniComponent;
  let fixture: ComponentFixture<RilevazioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RilevazioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RilevazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
