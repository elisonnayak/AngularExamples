import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicImportComponent } from './dynamic-import.component';

describe('DynamicImportComponent', () => {
  let component: DynamicImportComponent;
  let fixture: ComponentFixture<DynamicImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicImportComponent]
    });
    fixture = TestBed.createComponent(DynamicImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
