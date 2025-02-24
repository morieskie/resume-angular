import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResumeState } from './resume.interface';

export const selectResumeState = createFeatureSelector<ResumeState>('resume');

export const selectEducation = createSelector(
  selectResumeState,
  (state: ResumeState) => {
    return state.education;
  }
);

export const selectExperience = createSelector(
  selectResumeState,
  (state: ResumeState) => {
    return state.experience;
  }
);

export const selectTestimony = createSelector(
  selectResumeState,
  (state: ResumeState) => {
    return state.testimony;
  }
);

export const selectTechnology = createSelector(
  selectResumeState,
  (state: ResumeState) => {
    return state.technology;
  }
);

export const selectProject = createSelector(
  selectResumeState,
  (state: ResumeState) => {
    return state.project.filter((p) => p.id !== 22);
  }
);
