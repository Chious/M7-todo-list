# Todo List X MVC with React

_This is frist submit of M7_

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- A starter project for react tutorial
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Screenshot

![](./screenshot.png)

### Links

- Solution URL(branch: main): [https://github.com/Chious/M7-todo-list](https://github.com/Chious/M7-todo-list)
- Live Site URL:

## My process

### Built with

- Semantic HTML5 markup
- React
- [React Router](https://reactrouter.com/en/main)
- [clsx](https://www.npmjs.com/package/clsx) -- help to setup css quickly by className

### What I learned

1. Why and how to use Router?

- Since we browser to different page, it would send a request to backend and re-render the page. `Router` gives a more efficiency way to upload the page.

- How to use Router?

```js
import {BrowserRouter,Routes,Route,} from "react-router-dom";

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>

// Use <Link/> to control navigation of the page
<Link to="about">About</Link>
```

2. How to trigger funtion from children to mother component

For example:

```js
// This would trigger function onToggleDone that define on mother component with data todo.id
<span
  className="icon icon-checked"
  onClick={() => {
    onToggleDone?.(todo.id);
  }}
/>
```

### Continued development

### Useful resources

- [How to use React Router(Youtube Video)](https://www.youtube.com/watch?v=Bi0PCx8kZP4&list=PLODGJVEE6JCwCOTcJjs58iV5e6iVIBrpO&index=6)
- [useState](https://react.dev/reference/react/useState) -- help to define event and handler by React.
- [react-script build conflict(Private Discord Discussion)](https://discord.com/channels/925294714217967647/1159024050476167230/1159024050476167230)

## Author

- Github - [Chious](https://github.com/Chious)
