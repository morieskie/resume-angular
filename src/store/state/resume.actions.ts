import { createActionGroup, props } from '@ngrx/store';
import { EducationInterface } from '../../app/shared/interfaces/education.interface';
import { ExperienceInterface } from '../../app/shared/interfaces/experience.interface';
import { TestimonyInterface } from '../../app/shared/interfaces/testimony.interface';
import { TechnologyInterface } from '../../app/shared/interfaces/technology.interface';
import { ProjectInterface } from '../../app/shared/interfaces/project.interface';

export const resumeApiActions = createActionGroup({
  source: 'Resume API',
  events: {
    'education Retrieved ': props<{
      education: ReadonlyArray<EducationInterface>;
    }>(),
    'experience Retrieved ': props<{
      experience: ReadonlyArray<ExperienceInterface>;
    }>(),
    'testimony Retrieved': props<{
      testimony: ReadonlyArray<TestimonyInterface>;
    }>(),
    'technology Retrieved': props<{
      technology: ReadonlyArray<TechnologyInterface>;
    }>(),
    'project Retrieved': props<{
      project: ReadonlyArray<ProjectInterface>;
    }>(),
  },
});
export const {
  educationRetrieved,
  experienceRetrieved,
  testimonyRetrieved,
  technologyRetrieved,
  projectRetrieved,
} = resumeApiActions;
