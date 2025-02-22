import { EducationInterface } from '../../app/shared/interfaces/education.interface';
import { ExperienceInterface } from '../../app/shared/interfaces/experience.interface';
import { TechnologyInterface } from '../../app/shared/interfaces/technology.interface';
import { TestimonyInterface } from '../../app/shared/interfaces/testimony.interface';

export interface ResumeState {
  education: EducationInterface[];
  experience: ExperienceInterface[];
  testimony: TestimonyInterface[];
  technology: TechnologyInterface[];
}
