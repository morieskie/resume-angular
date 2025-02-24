import DirectionAwareHover from './direction-aware-hover';

describe('DirectionAwareHover', () => {
  let hoverManager: DirectionAwareHover;

  beforeEach(() => {
    hoverManager = new DirectionAwareHover({ inverse: false });
  });

  it('should create an instance', () => {
    expect(hoverManager).toBeTruthy();
  });

  describe('getStyle', () => {
    it('should return correct styles for direction 0 (from top)', () => {
      const result = hoverManager.getStyle(0);
      expect(result.from).toEqual({ left: '0px', top: '-100%' });
      expect(result.to).toEqual({ top: '0px' });
    });

    it('should return correct styles for direction 1 (from right)', () => {
      const result = hoverManager.getStyle(1);
      expect(result.from).toEqual({ left: '100%', top: '0px' });
      expect(result.to).toEqual({ left: '0px' });
    });

    it('should return correct styles for direction 2 (from bottom)', () => {
      const result = hoverManager.getStyle(2);
      expect(result.from).toEqual({ left: '0px', top: '100%' });
      expect(result.to).toEqual({ top: '0px' });
    });

    it('should return correct styles for direction 3 (from left)', () => {
      const result = hoverManager.getStyle(3);
      expect(result.from).toEqual({ left: '-100%', top: '0px' });
      expect(result.to).toEqual({ left: '0px' });
    });

    it('should throw an error for invalid direction', () => {
      expect(() => hoverManager.getStyle(4)).toThrowError(
        'Invalid direction. Direction must be between 0 and 3.'
      );
    });
  });

  describe('mouseOver', () => {
    it('should apply correct styles on mouseOver', () => {
      const mockDiv = {
        style: {
          transition: '',
          left: '',
          top: '',
        },
      };
      const mockEvent = {
        clientX: 10,
        clientY: 20,
        currentTarget: {
          querySelector: () => mockDiv,
        },
      };

      const directionSpy = spyOn(
        DirectionAwareHover,
        'getDirection'
      ).and.returnValue(0);
      hoverManager.mouseOver(mockEvent);

      // Check the mock div styles
      expect(mockDiv.style.transition).toBe('none');
      expect(mockDiv.style.left).toBe('0px');
      expect(mockDiv.style.top).toBe('-100%');

      // Check after the timeout
      setTimeout(() => {
        expect(mockDiv.style.left).toBe('0px');
        expect(mockDiv.style.top).toBe('0px');
        expect(mockDiv.style.transition).toBe('all 0.3s ease-in-out');
      }, 20);
    });
  });

  describe('mouseOut', () => {
    it('should apply correct styles on mouseOut', () => {
      const mockDiv = {
        style: {
          transition: '',
          left: '',
          top: '',
        },
      };
      const mockEvent = {
        clientX: 10,
        clientY: 20,
        currentTarget: {
          querySelector: () => mockDiv,
        },
      };

      const directionSpy = spyOn(
        DirectionAwareHover,
        'getDirection'
      ).and.returnValue(0);
      hoverManager.mouseOut(mockEvent);

      // Check the mock div styles
      expect(mockDiv.style.left).toBe('0px');
      expect(mockDiv.style.top).toBe('-100%');
      expect(mockDiv.style.transition).toBe('all 0.3s ease-in-out');
    });
  });

  describe('getDirection', () => {
    it('should calculate correct direction based on mouse coordinates', () => {
      const mockElement = {
        getBoundingClientRect: () => ({
          left: 0,
          top: 0,
          width: 100,
          height: 100,
        }),
      };

      // Direction 0: Top
      const directionTop = DirectionAwareHover.getDirection(
        mockElement as HTMLElement,
        { x: 50, y: -10 }
      );
      expect(directionTop).toBe(0);

      // Direction 1: Right
      const directionRight = DirectionAwareHover.getDirection(
        mockElement as HTMLElement,
        { x: 120, y: 50 }
      );
      expect(directionRight).toBe(1);

      // Direction 2: Bottom
      const directionBottom = DirectionAwareHover.getDirection(
        mockElement as HTMLElement,
        { x: 50, y: 110 }
      );
      expect(directionBottom).toBe(2);

      // Direction 3: Left
      const directionLeft = DirectionAwareHover.getDirection(
        mockElement as HTMLElement,
        { x: -10, y: 50 }
      );
      expect(directionLeft).toBe(3);
    });
  });
});
