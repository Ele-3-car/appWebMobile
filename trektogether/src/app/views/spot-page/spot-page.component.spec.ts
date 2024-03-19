import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotPageComponent } from './spot-page.component';

describe('SpotPageComponent', () => {
  let component: SpotPageComponent;
  let fixture: ComponentFixture<SpotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
