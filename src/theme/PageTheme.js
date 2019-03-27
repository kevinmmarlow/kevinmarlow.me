import { createMuiTheme } from '@material-ui/core/styles';

export const PRIMARY_COLOR = '#00796b';
export const SECONDARY_COLOR = '#ff9e80';
export const BORDER_COLOR = '#b26e59';
export const OPAC_BORDER_COLOR = 'rgba(195, 209, 218, 0.3)';
export const BACKGROUND_COLORS = {
  default: '#fafafa', // mui default
  paper: '#fff', // mui default
  block: '#f4f8f9'
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR
    },
    secondary: {
      main: SECONDARY_COLOR
    },
    divider: OPAC_BORDER_COLOR,
    border: BORDER_COLOR, // custom,
    background: { ...BACKGROUND_COLORS }
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Noto Sans TC',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif'
    ].join(',')
  },
  props: {
    MuiButtonBase: {
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  }
});

export default theme;
