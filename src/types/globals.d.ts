declare global {
  type ScreenConfigType = {
    title?: string;
  };
  type ScreenType = React.FC<ScreenConfigType>;
}

export {};
