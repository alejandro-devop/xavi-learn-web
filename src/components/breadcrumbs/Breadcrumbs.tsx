import styles from "./breadcrumbs.module.scss";
import Icon from "components/icon";
import classNames from "classnames";
import { useMemo } from "react";
import { useRouting } from "hooks";
import { BreadcrumbType } from "./types";

interface BreadcrumbsProps {
  crumbs?: BreadcrumbType[];
}

const RenderCrumb: React.FC<
  BreadcrumbType & {
    isLast?: boolean;
    onClickOption: (path?: RoutePath, c?: any) => void;
  }
> = ({ label, path, onClickOption, isLast, params }) => {
  return (
    <>
      <li
        tabIndex={0}
        onClick={() => (!isLast ? onClickOption(path, params) : null)}
        className={classNames(styles.item, {
          [styles.withLink]: !isLast,
        })}
      >
        <span>{label}</span>
      </li>
      {!isLast && (
        <li className={styles.separator}>
          <Icon icon="chevron-right" className={styles.itemChevron} />
        </li>
      )}
    </>
  );
};

const Breadcumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  const totalItems = useMemo(() => crumbs?.length, [crumbs]);
  const { redirectTo } = useRouting();
  if (!crumbs) {
    return null;
  }
  const handleClick = (path?: RoutePath, params?: { [k: string]: any }) => {
    if (path) {
      redirectTo(path, { params });
    }
  };

  return (
    <div className={styles.breadcrumbs}>
      <ul>
        {crumbs.map((item, index) => (
          <RenderCrumb
            onClickOption={handleClick}
            label={item.label}
            key={`crumbs-${index}`}
            path={item.path}
            params={item.params}
            isLast={index + 1 === totalItems}
          />
        ))}
        {/* 
        <li className={classNames(styles.item, styles.withLink)}>
          <a href="/">Home</a>
        </li>
        <li className={styles.separator}>
          <Icon icon="chevron-right" className={styles.itemChevron} />
        </li>
        <li className={classNames(styles.item, styles.withLink)}>
          <a href="/">Learning</a>
        </li>
        <li className={styles.separator}>
          <Icon icon="chevron-right" className={styles.itemChevron} />
        </li>
        <li className={styles.item}>
          <span>Courses</span>
        </li> */}
      </ul>
    </div>
  );
};

export default Breadcumbs;
