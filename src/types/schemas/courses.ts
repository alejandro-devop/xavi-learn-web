export type CourseSchema = {
  id: string;
  title: string;
  description?: string;
  url?: string;
  lessons: number;
  completed_lessons: number;
  percentage: number;
  created_at: string;
  updated_at: string;
};
