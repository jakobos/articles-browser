import { Theme } from '@mui/material';

export default {
  stack: {
    margin: '16px',
  },
  paper: {
    p: 2,
    padding: '16px',
    maxWidth: 700,
    marginBottom: '8px',
    flexGrow: 1,
    elevation: 2,
    backgroundColor: (theme: Theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
  },
};
