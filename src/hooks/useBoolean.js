import { useState, useRef, useMemo } from 'react';

// Custom Hook to toggle, show or hide UI Component
export function useBoolean(initialState) {
  const [state, setState] = useState(initialState);

  const handlers = useMemo(() => ({
    toggle: () => setState((state) => !state),
    on: () => setState(true),
    off: () => setState(false),
  }));

  return [state, handlers];
}

// export function useBoolean(initialState = false) {
//   // Inititalize state
//   const [state, setState] = useState(initialState);

//   // Define and memorize toggler function in case we pass down the component,
//   // This function change the boolean value to it's opposite value
//   const toggle = useCallback(() => setState((state) => !state), []);

//   // useMemo returns a memoized value
//   const handlers = useMemo(() => ({
//     toggle,
//     on: () => setState(true),
//     off: () => setState(false),
//   }));

//   // return state and toggler function
//   return [state, handlers];
// }
