import { Theme } from '@mui/material';

export default {
  paper: {
    p: 2,
    margin: '16px',
    maxWidth: 150,
    flexGrow: 1,
    backgroundColor: (theme: Theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
  },
};
