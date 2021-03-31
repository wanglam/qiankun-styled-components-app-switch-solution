## Init

- yarn
- yarn start

## Retro steps

- Visit http://localhost:1234/app1

- Clock work fine.

  styled-components generate content update every second

- Click app2

  Clock work correct in app2

- Click app1, Clock down.

  styled-components generate new class name in DOM node. The style tag doesn't accept new class.

## Solution

```tsx
import { StyleSheetManager } from "styled-components";

function mount({ container }: { container: HTMLElement }) {
  React.render(
    <StyleSheetManager target={container}>
      <App />
    </StyleSheetManager>,
    container.querySelector("#root")
  );
}
```

Check same code in src/app3.tsx
