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
    isSorted: false,
    currentAlgo: 'Bubble Sort'
  };



  componentDidMount() {
    this.resetArray();
  }

  shouldComponentUpdate = (prevProps, prevState) => {
    if (JSON.stringify(prevState.cols) !== JSON.stringify(this.state.cols)) {
      return true;
    } else if (prevState.currentAlgo !== this.state.currentAlgo) {
      return true;
    }
    return false;
  }

  currentAlgoHandler = (algo) => {
    this.setState({ currentAlgo: algo });
  };

  runCurrentAlgo = () => {
    switch (this.state.currentAlgo) {
      case 'Bubble Sort':
        this.bubbleSort();
        break;
      case 'Selection Sort':
        this.selectionSort();
        break;
      case 'Insertion Sort':
        this.insertionSort();
        break;
      case 'Merge Sort':
        //this.mergeSort();
        break;
      case 'Quick Sort':
        //this.quickSort();
        break;
      default:
        break;
    }
  }

  bubbleSort = () => {
    if (this.state.isSorted) {
      alert('already sorted');
      return;
    }

    this.setAnimations(bubbleSortAlgo, this.playAnimations);

  };

  selectionSort = () => {
    this.setAnimations(selectionSortAlgo, this.playAnimations);
  }

  insertionSort = () => {
    this.setAnimations(insertionSortAlgo, this.playInsertionAnimations);
  };

  setAnimations = (sortingAlgo, callback) => {
    const animations = sortingAlgo([...this.state.cols]);
    this.setState({ animations: animations }, callback);
  };

  playAnimations = () => {
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
  }

  playInsertionAnimations = () => {
    const cols = Array.from(document.getElementsByClassName('Col'));
    const animations = this.state.animations;

    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        if (animations[i].finalSwap) {
          cols[animations[i].cols[0]].style.backgroundColor = 'blue';
          cols[animations[i].cols[0]].style.height = animations[i].val;
        } else {
          cols[animations[i].cols[0]].style.backgroundColor = 'red';
          cols[animations[i].cols[1]].style.backgroundColor = 'red';

          // j + 1 height = j height
          cols[animations[i].cols[1]].style.height = cols[animations[i].cols[0]].style.height;
        }

        setTimeout(() => {
          if (animations[i].finalSwap) {
            cols[animations[i].cols[0]].style.backgroundColor = 'darkseagreen';
          } else {
            cols[animations[i].cols[0]].style.backgroundColor = 'darkseagreen';
            cols[animations[i].cols[1]].style.backgroundColor = 'darkseagreen';
          }
          
        }, 10);
      }, i * 10);
    }

    this.setState({ isSorted: true });
  }

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
      <Layout currentAlgoHandler={this.currentAlgoHandler}>
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
        <button onClick={this.insertionSort}>
          Insertion sort
        </button>
        <button onClick={this.runCurrentAlgo}>
          Run {this.state.currentAlgo}
        </button>
      </Layout>
    );
  }

}


export default SortingVisualizer;