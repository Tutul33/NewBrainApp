import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodataInfoComponent } from './biodata-info.component';

describe('BiodataInfoComponent', () => {
  let component: BiodataInfoComponent;
  let fixture: ComponentFixture<BiodataInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiodataInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiodataInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
