import { Theme } from '@mui/material';

export default {
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    width: 128,
    height: 128,
  },
  paper: {
    p: 2,
    margin: 'auto',
    maxWidth: 600,
    flexGrow: 1,
    backgroundColor: (theme: Theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
  },
};
