interface ScreenRendererProps {
  path: string;
  Element?: ScreenType;
  config?: ScreenConfigType;
}

/**
 * Component to manipulate the rendering fo the screen based on the config given
 * @param param0
 * @returns
 */
const ScreenRenderer: React.FC<ScreenRendererProps> = ({ Element, config }) => {
  return <>{Element && <Element title={config?.title} />}</>;
};

export default ScreenRenderer;
