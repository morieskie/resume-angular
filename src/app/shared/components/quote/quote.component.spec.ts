import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';
import { signal } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteComponent],
      providers: [provideAnimations()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    component.float = signal('left') as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
