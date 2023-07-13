export type ActivityCategoryFormType = {
  name: string;
  color: string;
  description: string;
  icon?: string;
  is_rest?: boolean;
  is_work?: boolean;
  is_learning?: boolean;
  is_self_care?: boolean;
  is_exercise?: boolean;
  is_driving?: boolean;
  is_entertainment?: boolean;
  is_feeding?: boolean;
  is_idle?: boolean;
  is_loving?: boolean;
  is_planning?: boolean;
  is_playing?: boolean;
  order_index?: number;
};
