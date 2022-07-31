import { Theme } from '@mui/material';

export default {
  paper: {
    p: 2,
    flexGrow: 1,
    elevation: 3,
    backgroundColor: (theme: Theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
  },
};
