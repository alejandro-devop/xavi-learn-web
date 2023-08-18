import { IconType } from "core/components/icon/types";
import { MeasureSchemaType } from "./general";

export type HabitCategorySchemaType = {
  id: string;
  order_index: number;
  name: string;
  description: string;
  icon: IconType;
  created_at: string;
  updated_at: string;
};

export type HabitSchemaType = {
  id: string;
  order_index: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  should_avoid: boolean;
  should_keep: 1;
  is_counter: boolean;
  is_timer: boolean;
  is_incremental: boolean;
  is_decremental: boolean;
  days: number;
  streak: number;
  max_streak: number;
  daily_goal: number;
  timer_goal: number;
  times_goal: number;
  created_at: string;
  updated_at: string;
  category: HabitCategorySchemaType;
  activity: null;
  measure?: MeasureSchemaType;
  follow_ups_month?: HabitFollowUpSchemaType[];
};

export type HabitFollowUpSchemaType = {
  id: string;
  order_index: number;
  date: string;
  daily_goal: number;
  is_accomplished: boolean;
  story?: string;
  is_failed: boolean;
  daily_counter: number;
  created_at: string;
  updated_at: string;
  habit?: HabitSchemaType;
};
