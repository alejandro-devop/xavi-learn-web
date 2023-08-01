import { ButtonProps } from "components/buttons/button/Button";
import { IconType } from "components/icon/Icon";

export type ActionType = {
  action: string;
  icon?: IconType;
  label?: string;
  buttonProps?: ButtonProps;
};
