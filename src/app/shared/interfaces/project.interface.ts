export interface ProjectInterface {
  id?: number | string;
  project: string;
  description?: string;
  imgUrl: string;
  altTitle?: string;
  categories: string[];
  technologies: string[];
  url: string;
  date?: string;
  images: string[];
}
