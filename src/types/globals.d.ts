declare global {
  type ScreenConfigType = {
    title?: string;
  };
  type ScreenType = React.FC<ScreenConfigType>;
  type SessionType = {
    counter?: number;
  };
  // Api
  type EndpointConfigType = {
    [key: string]:
      | string
      | {
          url: string;
          type?: HTTPMethodType;
        };
  };
}

export {};
