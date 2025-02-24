import { createReducer, on } from '@ngrx/store';
import {
  educationRetrieved,
  experienceRetrieved,
  projectRetrieved,
  technologyRetrieved,
  testimonyRetrieved,
} from './resume.actions';

export const resumeReducer = createReducer(
  {},
  on(educationRetrieved, (_state, { education }) => ({ ..._state, education })),
  on(experienceRetrieved, (_state, { experience }) => ({
    ..._state,
    experience,
  })),
  on(testimonyRetrieved, (_state, { testimony }) => ({
    ..._state,
    testimony,
  })),
  on(technologyRetrieved, (_state, { technology }) => ({
    ..._state,
    technology,
  })),
  on(projectRetrieved, (_state, { project }) => ({
    ..._state,
    project,
  }))
);
