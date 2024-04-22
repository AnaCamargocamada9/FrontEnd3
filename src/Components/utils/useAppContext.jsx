import React, { createContext, useContext, useReducer } from 'react';

// Creamos el contexto
const AppContext = createContext();

// Definimos el estado inicial
const initialState = {
  theme: 'light'
  // Otros estados globales...
};

// Definimos el reducer para manejar las acciones
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    // Otros casos de acciones...
    default:
      return state;
  }
};

// Creamos el componente Provider que envolverá nuestra aplicación
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAppContext = () => useContext(AppContext);
