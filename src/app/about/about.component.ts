import { Component, computed, DestroyRef, inject } from '@angular/core';
import { SectionComponent } from '../shared/components/section/section.component';
import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { ProfileService } from '../shared/service/profile.service';
import { take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProfileInterface } from '../shared/interfaces/profile.interface';
import { DateTime } from 'luxon';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-about',
  imports: [SectionComponent, NgOptimizedImage, DatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('fadeInLeft', [
      state(
        'off',
        style({
          transform: 'translateX(-100%)',
          visibility: 'hidden',
        })
      ),
      state(
        'on',
        style({
          transform: 'translateX(0)',
          visibility: 'visible',
        })
      ),
      transition('void => on', [
        style({
          transform: 'translateX(-100%)',
          visibility: 'hidden',
        }),
        animate(
          '350ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({
            transform: 'translateX(0)',
            visibility: 'visible',
          })
        ),
      ]),
    ]),
    trigger('fadeInRight', [
      state(
        'off',
        style({
          transform: 'translateX(400px)',
          visibility: 'hidden',
        })
      ),
      state(
        'on',
        style({
          transform: 'translateX(0)',
          visibility: 'visible',
        })
      ),
      transition('void => on', [
        query('[data-animation-effect="fadeInRight"]', [
          style({
            transform: 'translateX(100%)',
            visibility: 'hidden',
          }),
          stagger(200, [
            animate(
              '350ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({
                transform: 'translateX(0)',
                visibility: 'visible',
              })
            ),
          ]),
        ]),
      ]),
    ]),
    trigger('fadeInUp', [
      state(
        'off',
        style({
          transform: 'translateY(100%)',
        })
      ),
      state(
        'on',
        style({
          transform: 'translateY(0)',
        })
      ),
      transition('void => on', [
        style({
          transform: 'translateY(200%)',
        }),
        animate(
          '1500ms 200ms ease-in',
          style({
            transform: 'translateY(0)',
          })
        ),
      ]),
    ]),
  ],
})
export class AboutComponent {
  fadeInRight = 'off';
  fadeInLeft = 'off';
  fadeInUp = 'off';
  model: ProfileInterface | undefined;
  fullName = computed(() => {
    return `${this.model?.name.firstName} ${this.model?.name.lastName}`;
  });
  dob = computed(() => {
    if (this.model?.dob) {
      return DateTime.fromFormat(this.model.dob, environment.dateFormat, {
        zone: environment.timezone,
      }).toJSDate();
    }
    return '';
  });
  contactNumber = computed(() => {
    if (this.model?.mobileNumber) {
      const { mobileNumber } = this.model;
      return (
        mobileNumber.substring(0, 7).padEnd(10, 'X') +
        mobileNumber.substring(11).padStart(5, ' ')
      );
    }
    return '';
  });

  imageSource = computed(() => {
    if (this.model?.imageSrc) {
      const { baseApiUrl, baseHref }: any = environment;
      return baseHref.length
        ? `${baseHref}/${this.model.imageSrc}`
        : this.model.imageSrc;
    }
    return '';
  });

  destroyRef: DestroyRef = inject(DestroyRef);

  constructor(private service: ProfileService) {}

  ngOnInit(): void {
    this.fadeInLeft = 'on';
    this.fadeInRight = 'on';
    this.fadeInUp = 'on';
    this.service
      .getDetails()
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe((profile) => setTimeout(() => (this.model = profile)));
  }
}
