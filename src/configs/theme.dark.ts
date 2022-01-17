import { PaletteOptions } from '@mui/material/styles';
import common from './theme.common';

const palette: PaletteOptions = {
  ...common,
  mode: 'dark',
  background: {
    default: 'hsl(225deg 9.5238095238% 8.2352941176%)',
    paper: 'hsl(222.8571428571deg 13.7254901961% 20%)',
  },
};

export default {
  palette,
};
