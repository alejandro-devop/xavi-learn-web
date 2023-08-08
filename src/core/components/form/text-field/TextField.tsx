import React, { forwardRef } from "react";
import InputBase from "../input-base/InputBase";
import { InputBaseProps } from "../input-base/types";
import { IconType } from "core/components/icon/Icon";
import styles from "./text-field.module.scss";
import Icon from "core/components/icon";
import classNames from "classnames";
import IconButton from "core/components/buttons/icon-button";

interface TextFieldProps extends InputBaseProps {
  icon?: IconType;
  actionIcon?: IconType;
  onActionClick?: () => void;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
}

const TextField = forwardRef(
  (
    {
      icon,
      onActionClick,
      actionIcon,
      prepend,
      append,
      ...props
    }: TextFieldProps,
    ref: React.Ref<any>
  ) => {
    // if (icon) {
    return (
      <div className={classNames(styles.inputWithIcon)}>
        <div
          className={classNames({
            [styles.inputWithIconIcon]: Boolean(prepend) || Boolean(icon),
          })}
        >
          {prepend ? (
            prepend
          ) : icon ? (
            <Icon icon={icon} className={styles.icon} />
          ) : null}
        </div>
        <InputBase
          ref={ref}
          className={classNames({
            [styles.inputWithIconInput]: Boolean(prepend) || Boolean(icon),
          })}
          type="text"
          {...props}
        />
        <div className={styles.actionWrapper}>
          {append ? (
            append
          ) : onActionClick ? (
            <IconButton icon={actionIcon} onClick={onActionClick} />
          ) : null}
        </div>
      </div>
    );
    // }
    // return <InputBase type="text" {...props} />;
  }
);

export default React.memo(TextField);
