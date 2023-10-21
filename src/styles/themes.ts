export const DARK_THEME = {
    color: {
      primary: 'black',
      background: 'black',
      text: '#ffffff',
    },
  };
  
  export const LIGHT_THEME = {
    color: {
      primary: 'white',
      background: 'white',
      text: '#252525',
    },
  };
  export interface ITheme {
    color: Record<string,string>;
  }