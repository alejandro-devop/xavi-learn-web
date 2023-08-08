import { ButtonProps } from "core/components/buttons/button/Button";
import { IconType } from "core/components/icon/Icon";

export type ActionType = {
  action: string;
  icon?: IconType;
  label?: string;
  buttonProps?: ButtonProps;
};
