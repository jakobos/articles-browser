import React from 'react';
import { Filter } from './components/Filters';
import ThemeProvider from './providers/ThemeProvider';
import ArticlesWidget from './widgets/ArticlesWidget/ArticlesWidget';

const App: React.FC = () => {
  const filters: Filter[] = [
    {
      name: 'Sports',
      enabled: false,
    },
    {
      name: 'Fashion',
      enabled: false,
    },
  ];

  const articlesWidgetProps = {
    filters,
  };
  return (
    <ThemeProvider>
      <ArticlesWidget {...articlesWidgetProps} />
    </ThemeProvider>
  );
};

export default App;
