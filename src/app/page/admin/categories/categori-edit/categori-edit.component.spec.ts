import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriEditComponent } from './categori-edit.component';

describe('CategoriEditComponent', () => {
  let component: CategoriEditComponent;
  let fixture: ComponentFixture<CategoriEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriEditComponent]
    });
    fixture = TestBed.createComponent(CategoriEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
