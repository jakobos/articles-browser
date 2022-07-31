import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Filter } from './components/Filters';
import ThemeProvider from './providers/ThemeProvider';
import ArticlesWidgetContainer from './widgets/ArticlesWidget';
import { DataSources } from './types/types';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const filters: Filter[] = [
    {
      name: DataSources.Sports,
      enabled: false,
    },
    {
      name: DataSources.Fashion,
      enabled: false,
    },
  ];

  const articlesWidgetProps = {
    filters,
  };
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ArticlesWidgetContainer {...articlesWidgetProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
