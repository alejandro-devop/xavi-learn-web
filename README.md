# Xavi learn

My learning database manager

## Project architecture

- **assets** Images and other resources
- **components** Reusable pieces
- **config** Configuration files
- **constants** Constant values
- **contexts** Context components
- **routing** Routing configuration
- **screens** Navigation components
- **services** General services
- **services.hooks** Services in hook format
- **utils** Utility functions and objects

---

## Routing or navigation

The routing can be configured by editing the file `src/config/routing.config.ts`, there are two type of routes, **_authenticated_** and **_unauthenticated_**, the key of the route configuration will be the path and the value will be the component to be render for that route as follows:

```ts
const routes: RoutesConfigType = {
  unauthenticated: {
    // routes...
    "/my-path": MyCoolComponent,
  },
  authenticated: {
    // routes...
  },
};
```

Also you can use an object as value to specify additional configurations to the rendered screen

```ts
const routes: RoutesConfigType = {
  unauthenticated: {
    // routes...
    "/my-path": {
      title: "Some cool title",
      screen: MyCoolComponent,
    },
  },
};
```

| Config  | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `title` | `string` | Title to pass to the screen |

> **Note: ** You can pass any component you want as a screen but to follow a pattern create them inside the folder `screens`
