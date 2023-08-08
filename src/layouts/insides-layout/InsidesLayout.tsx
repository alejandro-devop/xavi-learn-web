import Breadcrumbs from "core/components/breadcrumbs";
import { BreadcrumbType } from "core/components/breadcrumbs/types";
import { PageTitle } from "components/page";
import React from "react";

interface InsidesLayoutProps {
  children: React.ReactNode;
  crumbs?: BreadcrumbType[];
  title?: string;
  subtitle?: string;
}

const InsidesLayout: React.FC<InsidesLayoutProps> = ({
  children,
  crumbs,
  title,
  subtitle,
}) => {
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <PageTitle title={title} subtitle={subtitle} />
      <div className="content-wrapper w-full">{children}</div>
    </>
  );
};

export default InsidesLayout;
