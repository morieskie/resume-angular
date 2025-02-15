import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareComponent } from './share.component';

describe('ShareComponent', () => {
  let component: ShareComponent;
  let fixture: ComponentFixture<ShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle hide/show social share buttons', () => {
    expect(component.isVisible()).toEqual(false)
    expect(component.visibility()).toEqual('none')
    component.toggle();
    expect(component.isVisible()).toEqual(true)
    expect(component.visibility()).toEqual('flex')
  })
});
