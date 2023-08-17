import Icon, { icons } from "core/components/icon";
import InputBase from "../input-base/InputBase";
import { InputBaseProps } from "../input-base/types";
import styles from "./icon-field.module.scss";
import { useMemo, useState } from "react";
import Dialog from "core/components/dialogs/dialog";
import TextField from "../text-field/TextField";
import classNames from "classnames";

interface IconFieldProps extends InputBaseProps {}

const IconField: React.FC<IconFieldProps> = ({ onChange, ...props }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const toggleOpened = () => setOpened(!opened);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const itemsToRender = useMemo(() => {
    if (!query) return icons;
    return icons.filter((icon) => icon.includes(query));
  }, [query]);

  const handleChange = () => {
    onChange?.({
      target: {
        name: props.name || "",
        value: selected,
      },
    } as any);
    toggleOpened();
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.iconWrapper}>
          <Icon />
        </div>
        <InputBase
          {...props}
          readOnly
          className={styles.iconField}
          onClick={toggleOpened}
        />
      </div>
      {opened && (
        <Dialog
          size="xs"
          open
          title={props.placeholder}
          onAccept={handleChange}
          onClose={toggleOpened}
        >
          {/* <div className="w-full h-full flex justify-center"> */}
          <TextField
            onChange={handleQueryChange}
            icon="search"
            placeholder="Type to filter"
            value={query}
          />
          {!itemsToRender.length && (
            <p className="text-gray-400 my-5 text-center"> No icons found</p>
          )}
          <ul className={styles.iconList}>
            {itemsToRender.map((icon) => (
              <li
                key={icon}
                className={classNames(styles.iconItem, {
                  [styles.selected]: selected === icon,
                })}
                onClick={() => setSelected(icon)}
              >
                <span className={styles.innerIconWrapper}>
                  <Icon icon={icon} />
                </span>
                <span className={styles.text}>{icon}</span>
              </li>
            ))}
          </ul>
          {/* </div> */}
        </Dialog>
      )}
    </>
  );
};

export default IconField;
