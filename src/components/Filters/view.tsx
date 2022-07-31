import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import commonStyles from '../../utils/commonStyles';
import { TestId } from './types';
import { DataSources } from '../../types/types';

export interface Filter {
  name: DataSources;
  enabled: boolean;
}
export interface FiltersProps {
  title: string;
  filters: Filter[];
  handleFiltersChange: (filterName: string, enabled: boolean) => void;
}

const Filters: React.FC<FiltersProps> = (props) => {
  const { title, filters, handleFiltersChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFiltersChange(event.target.name, event.target.checked);
  };

  const preparedFilters = filters.map((filter) => {
    const { name, enabled } = filter;
    return (
      <Grid item key={name}>
        <FormControlLabel
          key={`${name}-key`}
          test-id={`filter-${name.toLowerCase()}`}
          control={<Checkbox checked={enabled} onChange={handleChange} name={name} />}
          label={name}
        />
      </Grid>
    );
  });

  return (
    <Paper sx={commonStyles.paper}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={12}>
          <Typography test-id={TestId.Title} variant="subtitle1">
            {title}
          </Typography>
        </Grid>
        <Grid test-id={TestId.Filters} container direction={{ xs: 'row', sm: 'column' }}>
          {preparedFilters}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Filters;
