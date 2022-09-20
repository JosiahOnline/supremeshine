import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	// components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       html: {
  //         scrollBehavior: 'smooth',
  //         }
  //       }
  //     }
  //   },
	palette: {
		primary: {
			main: '#2196f3',
		},
		secondary: {
			main: '#0099b3',
		},
		error: {
			main: red.A400,
		},
	},
	typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default theme;
