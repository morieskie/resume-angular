import { ExperienceInterface } from "./experience.interface";

export interface ProfileInterface {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  dob: string;
  address: string;
  mobileNumber: string;
  imageSrc: string;
  bio: string;
  socialLinks: {
    firm: string;
    icon: {
      className: string;
    };
    url: string;
  }[];
  expertience: ExperienceInterface[]
}
