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
    padding: '16px',
    maxWidth: 700,
    marginBottom: '8px',
    flexGrow: 1,
    elevation: 2,
    backgroundColor: (theme: Theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
  },
};
