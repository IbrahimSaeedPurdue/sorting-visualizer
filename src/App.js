import React from 'react';
import SortingVisualizer from './containers/sortingVisualizer/SortingVisualizer';
import Auxi from './hoc/Auxi';
import './App.css';

function App() {
  return (
    <Auxi>
      <SortingVisualizer />
      <div className="mobileView">
        <div>
          Mobile View Coming Soon :D
        </div>
      </div>
    </Auxi>

  );
}

export default App;
