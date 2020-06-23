import React, { Component } from 'react';
import bubbleSortAlgo from '../../algorithms/BubbleSort';
import selectionSortAlgo from '../../algorithms/SelectionSort';
import insertionSortAlgo from '../../algorithms/InsertionSort';
import getMergeSortAnimations from '../../algorithms/MergeSort';
import '../../components/ColsList/Col/Col.css';
import Layout from '../../Layout/Layout';
import ColsList from '../../components/ColsList/ColsList';

class SortingVisualizer extends Component {
  state = {
    cols: [],
    colNum: 0,
    animations: [],
    isSorted: false,
    currentAlgo: 'Merge Sort'
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

  colNumHandler = (newColNum) => {
    this.setState((prevState) => {
      let colDiff = newColNum - prevState.colNum;
      let cols = [...prevState.cols];
      if (colDiff < 0) {
        for (let i = 0; i < -colDiff; i++) {
          cols.pop();
        }
        return { cols: cols, colNum: newColNum };
      }

      if (prevState.isSorted) {
        for (let i = 0; i < colDiff; i++) {
          cols.push(500);
        }
      } else {
        for (let i = 0; i < colDiff; i++) {
          cols.push(Math.floor(Math.random() * 501));
        }
      }

      return { cols: cols, colNum: newColNum };
    });

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
        this.mergeSort();
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
    if (this.state.isSorted) {
      alert('already sorted');
      return;
    }
    this.setAnimations(selectionSortAlgo, this.playAnimations);
  }

  insertionSort = () => {
    if (this.state.isSorted) {
      alert('already sorted');
      return;
    }
    this.setAnimations(insertionSortAlgo, this.playInsertionAnimations);
  };

  mergeSort = () => {
    this.setAnimations(getMergeSortAnimations, this.playAnimationsMerge);
  }

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
    let isNewCol = false;

    for (let i = 0; i < animations.length; i++) {
      // eslint-disable-next-line
      setTimeout(() => {
        if (animations[i].finalSwap) {
          cols[animations[i].cols[0]].style.backgroundColor = 'red';
          isNewCol = true;
        } else {
          if (isNewCol) {
            cols[animations[i].cols[0]].style.backgroundColor = 'brown';
            isNewCol = false;
          } else {
            cols[animations[i].cols[0]].style.backgroundColor = 'blue';
          }


          let tempHeight = cols[animations[i].cols[1]].style.height;
          cols[animations[i].cols[1]].style.height = cols[animations[i].cols[0]].style.height;
          cols[animations[i].cols[0]].style.height = tempHeight;
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

  playAnimationsMerge = () => {
    const animations = this.state.animations;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('Col');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'darkseagreen';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 10);
      }
    }


    // const cols = Array.from(document.getElementsByClassName('Col'));
    // const animations = this.state.animations;

    // for (let i = 0; i < animations.length; i++) {
    //   setTimeout(() => {

    //     // let tempHeight = cols[animations[i].cols[1]].style.height;
    //     // cols[animations[i].cols[1]].style.height = cols[animations[i].cols[0]].style.height;
    //     // cols[animations[i].cols[0]].style.height = tempHeight;
    //     if (animations[i].swap) {
    //       cols[animations[i].cols[0]].style.height = `${cols[animations[i].cols[1]]}px`;
    //       console.log(animations[i].cols[1]);

    //     } else {
    //       cols[animations[i].cols[0]].style.backgroundColor = 'red';
    //       cols[animations[i].cols[1]].style.backgroundColor = 'red';
    //     }

    //     if (!animations[i].swap) {
    //       setTimeout(() => {
    //         cols[animations[i].cols[0]].style.backgroundColor = 'darkseagreen';
    //         cols[animations[i].cols[1]].style.backgroundColor = 'darkseagreen';
    //       }, 10);
    //     }
    //   }, i * 10);
    // }

    // this.setState({ isSorted: true });
  }

  resetArray = () => {
    let cols = [];
    for (let i = 0; i < this.state.colNum; i++) {
      cols.push(Math.floor(Math.random() * 501));
    }

    this.setState({
      cols: cols,
      isSorted: false
    });
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
      <Layout currentAlgoHandler={this.currentAlgoHandler}
        colNumHandler={this.colNumHandler}>
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