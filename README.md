# react-schwanz-ui

Typed React UI components styled with Tailwind CSS utilities.

To use, you must at minimum import this module's `utilities.css` stylesheet.

If you are using this module in a project that already includes Tailwind CSS, import the stylesheet like so:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "/path/to/node_modules/react-schwanz-ui/dist/utilities.css";
```

In all other contexts, you may include this module's stylesheet as you normally would any other stylesheet. For example:

```
// App.tsx

import '/path/to/node_modules/react-schwanz-ui/dist/utilities.css'

<App />
```

If your project does not include Tailwind CSS, it is recommended that you also use the default base stylesheet:

```
import '/path/to/node_modules/react-schwanz-ui/dist/base.css'

```

Lastly, import any of the components as you normally would.

```
import { Button } from 'react-schwanz-ui
```
