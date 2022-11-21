import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectRoutingPageComponent } from './incorrect-routing-page.component';

describe('IncorrectRoutingPageComponent', () => {
  let component: IncorrectRoutingPageComponent;
  let fixture: ComponentFixture<IncorrectRoutingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncorrectRoutingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncorrectRoutingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
