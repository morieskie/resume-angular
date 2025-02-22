import { ExperienceInterface } from "./experience.interface";

export interface EducationInterface extends ExperienceInterface {
  description: string;
  subjects: string[];
}
