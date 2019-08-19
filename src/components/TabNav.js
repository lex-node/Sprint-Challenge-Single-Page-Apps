import React from "react";
import {Tab} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

// TODO: Add missing tabs below
const TabNav = (props) => {
    return (
        <div className="navbar">
            <Tab.Pane><NavLink exact to="/">Home Page</NavLink></Tab.Pane>
            <Tab.Pane><NavLink to="/characters">Characters</NavLink></Tab.Pane>
            <Tab.Pane><NavLink to="/locations">Locations</NavLink></Tab.Pane>
            <Tab.Pane><NavLink to="/episodes">Episodes</NavLink></Tab.Pane>
        </div>
    )
};

export default TabNav;

/*Add a Router to this application using [React Router](https://reacttraining.com/react-router/web/guides/quick-start).

> **Tip:** Review the [examples on the React Router site.](https://reacttraining.com/react-router/web/guides/quick-start)

- [X] Start by wrapping your `root` component in the `BrowserRouter` component.
- [X] Declare your routes with `<Route>` components (for each component created above.)
  - [ X Include `/character`, `/location` and `/episode` routes.
- [X] In your `App` component, add a navigation menu, [tab bar](https://react.semantic-ui.com/modules/tab/#types-basic), or similar. (Hint: Make sure to use React Routers `NavLink` to link to your different pages.)
- [X] If you have any `<a>` tags, replace them with `<Link>` or `<NavLink>` components.

> 💡**Reminder:** `git commit -am 'MVP Completed'`*/