import { TestBed } from '@angular/core/testing';
import DirectionAwareHover from './direction-aware-hover';
import { provideDirectionAwareHover } from './direction-aware-hover.provider';

describe('DirectionAwareHoverProvider', () => {
  let directionAwareHover: DirectionAwareHover;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideDirectionAwareHover()],
    }).compileComponents();

    directionAwareHover = TestBed.inject(DirectionAwareHover);
  });

  it('should provide DirectionAwareHover instance', () => {
    expect(directionAwareHover).toBeTruthy();
    expect(directionAwareHover).toBeInstanceOf(DirectionAwareHover);
  });
});
