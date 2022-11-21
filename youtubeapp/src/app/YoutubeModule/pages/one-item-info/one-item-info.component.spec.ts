import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneItemInfoComponent } from './one-item-info.component';

describe('OneItemInfoComponent', () => {
  let component: OneItemInfoComponent;
  let fixture: ComponentFixture<OneItemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneItemInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
