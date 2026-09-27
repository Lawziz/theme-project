import React from 'react'
import './App.css'
import { Toggle } from './components/Toggle'
import { useStoredState } from './useStoredState'


export const App = () => {
  const preference = window.matchMedia("prefers-color-scheme: dark").matches;
  const [isDark, setIsDark] = useStoredState('isDark', preference)

  return (
    <div className="App" data-theme={isDark ? 'dark' : 'light'}>
      <Toggle
        isChecked={isDark}
        handlecheck={() => setIsDark((current) => !current)}
      />

        <h1 className="title">Hello, React!</h1>

      <div className="box">
        <h3>
        This is a simple React application that demonstrates
        the use of a custom hook for managing state with localStorage.
        The `useStoredState` hook allows you to persist state across page reloads
        by saving it to localStorage. The `Toggle` component provides
        a simple checkbox input that can be used to toggle a value in the state.
        </h3>
      </div>
    </div>
  );
};



