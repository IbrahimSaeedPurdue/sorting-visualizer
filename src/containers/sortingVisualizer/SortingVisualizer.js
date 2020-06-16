import React, { Component } from 'react';
import bubbleSortAlgo from '../../algorithms/BubbleSort';
import selectionSortAlgo from '../../algorithms/SelectionSort';
import insertionSortAlgo from '../../algorithms/InsertionSort';
import '../../components/ColsList/Col/Col.css';
import Layout from '../../Layout/Layout';
import ColsList from '../../components/ColsList/ColsList';

class SortingVisualizer extends Component {
  state = {
    cols: [],
    colNum: 100,
    animations: [],
    isSorted: false
  };

  componentDidMount() {
    this.resetArray();
  }

  shouldComponentUpdate = (prevProps, prevState) => {
    if (JSON.stringify(prevState.cols) !== JSON.stringify(this.state.cols)) {
      return true;
    }
    return false;
  }


  bubbleSort = () => {
    if (this.state.isSorted) {
      alert('already sorted');
      return;
    }

    this.setAnimations(bubbleSortAlgo, () => {
      const cols = Array.from(document.getElementsByClassName('Col'));
      const animations = this.state.animations;

      for (let i = 0; i < animations.length; i++) {
        setTimeout(() => {
          if (animations[i].swap) {
            cols[animations[i].cols[0]].style.backgroundColor = 'blue';
            cols[animations[i].cols[1]].style.backgroundColor = 'blue';

            let tempHeight = cols[animations[i].cols[1]].style.height;
            cols[animations[i].cols[1]].style.height = cols[animations[i].cols[0]].style.height;
            cols[animations[i].cols[0]].style.height = tempHeight;
          } else {
            cols[animations[i].cols[0]].style.backgroundColor = 'red';
            cols[animations[i].cols[1]].style.backgroundColor = 'red';
          }

          setTimeout(() => {
            cols[animations[i].cols[0]].style.backgroundColor = 'darkseagreen';
            cols[animations[i].cols[1]].style.backgroundColor = 'darkseagreen';
          });
        }, i * 10);
      }

      this.setState({ isSorted: true });
    });

  };

  selectionSort = () => {
    this.setAnimations(selectionSortAlgo, () => {
      const cols = Array.from(document.getElementsByClassName('Col'));
      const animations = this.state.animations;

      for (let i = 0; i < animations.length; i++) {
        setTimeout(() => {
          if (animations[i].swap) {
            cols[animations[i].cols[0]].style.backgroundColor = 'blue';
            cols[animations[i].cols[1]].style.backgroundColor = 'blue';

            let tempHeight = cols[animations[i].cols[1]].style.height;
            cols[animations[i].cols[1]].style.height = cols[animations[i].cols[0]].style.height;
            cols[animations[i].cols[0]].style.height = tempHeight;
          } else {
            cols[animations[i].cols[0]].style.backgroundColor = 'red';
            cols[animations[i].cols[1]].style.backgroundColor = 'red';
          }

          setTimeout(() => {
            cols[animations[i].cols[0]].style.backgroundColor = 'darkseagreen';
            cols[animations[i].cols[1]].style.backgroundColor = 'darkseagreen';
          }, 10);
        }, i * 10);
      }

      this.setState({ isSorted: true });
    });

  }

  insertionSort = () => {
    insertionSortAlgo([5, 9, 6, 1, 2]);
  };

  setAnimations = (sortingAlgo, callback) => {
    const animations = sortingAlgo([...this.state.cols]);
    this.setState({ animations: animations }, callback);
  };

  resetArray = () => {
    let cols = [];
    for (let i = 0; i < this.state.colNum; i++) {
      cols.push(Math.floor(Math.random() * 501));
    }

    this.setState({ cols: cols });
  };

  resetWorstCase = () => {
    let cols = [...this.state.cols];
    cols.sort((a, b) => b - a);
    this.setState({ cols: cols, isSorted: false });

  }

  resetBestCase = () => {
    if (this.state.isSorted) {
      alert('this is the best case');
      return;
    }

    let cols = [...this.state.cols];
    cols.sort((a, b) => a - b);
    this.setState({ cols: cols, isSorted: true });
  }

  render() {
    return (
      <Layout>
        <ColsList cols={this.state.cols} />
        <button onClick={this.resetArray}>
          Reset Array
        </button>
        <button onClick={this.resetBestCase}>
          Best Case
        </button>
        <button onClick={this.resetWorstCase}>
          Worst Case
        </button>
        <button onClick={this.bubbleSort}>
          BubbleSort
        </button>
        <button onClick={this.selectionSort}>
          Selection sort
        </button>
        <button onClick={this.insertionSort}>
          Insertion sort
        </button>
      </Layout>
    );
  }


}

export default SortingVisualizer;