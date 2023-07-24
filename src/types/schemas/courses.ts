export type CourseSchema = {
  id: string;
  title: string;
  description?: string;
  url?: string;
  course_id?: string;
  lessons: number;
  completed_lessons: number;
  percentage: number;
  created_at: string;
  updated_at: string;
  follow_ups?: CourseFollowUpSchema[];
};

export type CourseFollowUpSchema = {
  id?: string;
  title?: string;
  content?: string;
  url?: string;
  created_at?: string;
  course_id?: string;
  updated_at?: string;
};
