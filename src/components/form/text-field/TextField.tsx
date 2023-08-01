import React from "react";
import InputBase from "../input-base/InputBase";
import { InputBaseProps } from "../input-base/types";
import { IconType } from "components/icon/Icon";
import styles from "./text-field.module.scss";
import Icon from "components/icon";

interface TextFieldProps extends InputBaseProps {
  icon?: IconType;
}

const TextField: React.FC<TextFieldProps> = ({ icon, ...props }) => {
  if (icon) {
    return (
      <div className={styles.inputWithIcon}>
        <div className={styles.inputWithIconIcon}>
          <Icon icon={icon} />
        </div>
        <InputBase
          className={styles.inputWithIconInput}
          type="text"
          {...props}
        />
      </div>
    );
  }
  return <InputBase type="text" {...props} />;
};

export default React.memo(TextField);
