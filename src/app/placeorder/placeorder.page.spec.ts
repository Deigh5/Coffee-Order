import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceorderPage } from './placeorder.page';

describe('PlaceorderPage', () => {
  let component: PlaceorderPage;
  let fixture: ComponentFixture<PlaceorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceorderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
