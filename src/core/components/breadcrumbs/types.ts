import { IconType } from "core/components/icon/Icon";

export type BreadcrumbType = {
  label: string;
  path?: RoutePath;
  icon?: IconType;
  params?: { [k: string]: any };
};
