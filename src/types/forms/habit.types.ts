export type HabitFormType = {
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  category?: string;
  measure?: string;
  activity?: string;
  should_keep?: boolean;
  should_avoid?: boolean;
  is_counter?: boolean;
  is_timer?: boolean;
  is_incremental?: boolean;
  is_decremental?: boolean;
  days?: number;
  streak?: number;
  max_streak?: number;
  daily_goal?: number;
  timer_goal?: number;
  times_goal?: number;
};

export type HabitCategoryFormType = {
  name: string;
  description: string;
  icon: string;
};
