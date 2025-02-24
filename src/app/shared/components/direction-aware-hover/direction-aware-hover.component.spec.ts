import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { signal } from '@angular/core';
import DirectionAwareHover from './direction-aware-hover';
import { DirectionAwareHoverComponent } from './direction-aware-hover.component';

describe('DirectionAwareHoverComponent', () => {
  let component: DirectionAwareHoverComponent;
  let fixture: ComponentFixture<DirectionAwareHoverComponent>;
  let mockHover: jasmine.SpyObj<DirectionAwareHover>;
  let dah: DirectionAwareHover;

  beforeEach(() => {
    mockHover = jasmine.createSpyObj('DirectionAwareHover', [
      'mouseOver',
      'mouseOut',
    ]);

    TestBed.configureTestingModule({
      imports: [DirectionAwareHoverComponent],
      providers: [
        provideRouter([]),
        // {
        //   provide: DirectionAwareHover,
        //   useFactory: () => mockHover,
        // },
      ],
    })
      .overrideProvider(DirectionAwareHover, { useFactory: () => mockHover })
      .compileComponents();

    fixture = TestBed.createComponent(DirectionAwareHoverComponent);
    component = fixture.componentInstance;
    component.path = signal('/test-path') as any;
    component.classes = signal('test') as any;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call mouseOver when onMouseEnter is triggered', () => {
    const mockEvent = { clientX: 100, clientY: 100, currentTarget: {} };

    component.onMouseEnter(mockEvent);

    expect(mockHover.mouseOver).toHaveBeenCalledWith(mockEvent);
  });

  it('should call mouseOut when onMouseLeave is triggered', () => {
    const mockEvent = { clientX: 100, clientY: 100, currentTarget: {} };
    component.onMouseLeave(mockEvent);

    expect(mockHover.mouseOut).toHaveBeenCalledWith(mockEvent);
  });

  it('should bind the correct path to routerLink', () => {
    const compiled = fixture.nativeElement;
    component.path = signal('/test-path') as any;

    const linkElement: HTMLAnchorElement = compiled.querySelector('a');
    fixture.detectChanges();

    expect(linkElement.getAttribute('href')).toBe('/test-path');
  });
});
