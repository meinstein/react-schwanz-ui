# react-schwanz-ui

Reusable React UI components based on default utility styling from Tailwind CSS.

To use, you must import this module's stylesheet.

If using in conjunction with a Tailwind CSS setup, import after `@tailwind utilities`:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "/path/to/node_modules/react-schwanz-ui/dist/index.css";
```

If using in any other setup, import the stylesheet at the root of your app.

```
// App.tsx

import '/path/to/node_modules/react-schwanz-ui/dist/index.css'

<App />
```

Then, import any of the components as you normally would.

```
import { Button } from 'react-schwanz-ui
```
