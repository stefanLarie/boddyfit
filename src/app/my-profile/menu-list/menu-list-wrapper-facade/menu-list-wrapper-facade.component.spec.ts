import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListWrapperFacadeComponent } from './menu-list-wrapper-facade.component';

describe('MenuListWrapperFacadeComponent', () => {
  let component: MenuListWrapperFacadeComponent;
  let fixture: ComponentFixture<MenuListWrapperFacadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListWrapperFacadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListWrapperFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
