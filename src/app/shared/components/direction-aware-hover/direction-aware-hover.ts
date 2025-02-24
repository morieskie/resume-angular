import { Injectable } from '@angular/core';

type Style = { left?: string; top?: string };
type DirectionStyles = { from: Style; to: Style };

class DirectionAwareHover {
  options: { inverse: boolean };

  constructor(options: { inverse: boolean }) {
    this.options = options;
  }

  getStyle(direction: number): DirectionStyles {
    let fromStyle: Style, toStyle: Style;

    const slideFromTop: Style = { left: '0px', top: '-100%' };
    const slideFromBottom: Style = { left: '0px', top: '100%' };
    const slideFromLeft: Style = { left: '-100%', top: '0px' };
    const slideFromRight: Style = { left: '100%', top: '0px' };
    const slideTop: Style = { top: '0px' };
    const slideLeft: Style = { left: '0px' };

    switch (direction) {
      case 0:
        // from top
        fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
        toStyle = slideTop;
        break;
      case 1:
        // from right
        fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
        toStyle = slideLeft;
        break;
      case 2:
        // from bottom
        fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
        toStyle = slideTop;
        break;
      case 3:
        // from left
        fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
        toStyle = slideLeft;
        break;
      default:
        throw new Error(
          'Invalid direction. Direction must be between 0 and 3.'
        );
    }

    return { from: fromStyle, to: toStyle };
  }

  mouseOver({ clientX: x, clientY: y, currentTarget }: any) {
    const div = currentTarget.querySelector('div') as HTMLElement;
    const direction = DirectionAwareHover.getDirection(currentTarget, { x, y });
    const manager = new DirectionAwareHover({ inverse: false });
    const styles = manager.getStyle(direction);

    div.style.transition = 'none';
    div.style.left = styles.from.left ?? div.style.left;
    div.style.top = styles.from.top ?? div.style.top;

    setTimeout(() => {
      div.style.left = styles.to.left ?? div.style.left;
      div.style.top = styles.to.top ?? div.style.top;
      div.style.transition = 'all 0.3s ease-in-out';
    }, 20);
  }

  mouseOut({ clientX: x, clientY: y, currentTarget }: any) {
    const div = currentTarget.querySelector('div') as HTMLElement;
    const direction = DirectionAwareHover.getDirection(currentTarget, { x, y });
    const manager = new DirectionAwareHover({ inverse: false });
    const styles = manager.getStyle(direction);

    div.style.left = styles.from.left ?? div.style.left;
    div.style.top = styles.from.top ?? div.style.top;
    div.style.transition = 'all 0.3s ease-in-out';
  }

  // Output: 0 (Top), 1 (Right), 2 (Bottom), 3 (Left)
  static getDirection(el: HTMLElement, coordinates: { x: number; y: number }) {
    // Get the bounding rectangle of the element
    const rect = el.getBoundingClientRect();

    // The width and height of the current element
    const w = rect.width;
    const h = rect.height;

    // Calculate the x and y to get an angle to the center of the element from the given coordinates
    const x = (coordinates.x - rect.left - w / 2) * (w > h ? h / w : 1);
    const y = (coordinates.y - rect.top - h / 2) * (h > w ? w / h : 1);

    // Calculate the direction from where the mouse came in/went out clockwise (TRBL=0123)
    const direction =
      Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;

    return direction;
  }
}

export default DirectionAwareHover;
