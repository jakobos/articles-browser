import React from 'react';
import ThemeProvider from './providers/ThemeProvider';
import ArticlesWidget from './widgets/ArticlesWidget/ArticlesWidget';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ArticlesWidget />
    </ThemeProvider>
  );
};

export default App;
