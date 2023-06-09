import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriAddComponent } from './categori-add.component';

describe('CategoriAddComponent', () => {
  let component: CategoriAddComponent;
  let fixture: ComponentFixture<CategoriAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriAddComponent]
    });
    fixture = TestBed.createComponent(CategoriAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
