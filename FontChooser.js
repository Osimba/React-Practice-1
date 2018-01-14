class FontChooser extends React.Component {


  constructor(props) {
     super(props);
     this.state = {
       options : false,
       bold : (this.props.bold == 'true') ? true : false,
       size : Number(this.props.size),
       minSize : (Number(this.props.min) < 1) ? 1 : Number(this.props.min),
       maxSize : (Number(this.props.max) < Number(this.props.min)) ? Number(this.props.min) : Number(this.props.max)
     };
  }

  toggleOptions() {
    this.setState( {options: !this.state.options});
  }
  toggleBold() {
    this.setState( {bold: !this.state.bold});
  }

  resetValue() {
    this.setState( { size: Number(this.props.size)});
  }

  incrementSize() {
    if(this.state.size < this.state.maxSize) {
      this.setState( { size: this.state.size + 1 } );
    }
  }

  decrementSize() {
    if(this.state.size > this.state.minSize) {
      this.setState( { size: this.state.size - 1 } );
    }
  }

  colorChange() {
    if(this.state.size > this.state.minSize && this.state.size < this.state.maxSize) {
      return 'black';
    } else {
      return 'red';
    }
  }



    render() {
      var optionInfo = this.state.options;
      var weight = this.state.bold ? 'bold' : 'normal';
      if(this.state.size >= this.state.minSize && this.state.size <= this.state.maxSize) {
        var textSize = this.state.size;
      } else if(this.state.size < this.state.minSize) {
        var textSize = this.state.minSize;
      } else if(this.state.size > this.state.maxSize) {
        var textSize = this.state.maxSize;
      }
      var textColor = this.colorChange();
    	return(
        <div>
          <input type="checkbox" id="boldCheckbox" hidden={!optionInfo} checked={this.state.bold} onChange={this.toggleBold.bind(this)}/>
          <button id="decreaseButton" hidden={!optionInfo} onClick={this.decrementSize.bind(this) }>-</button>
          <span id="fontSizeSpan" onDoubleClick={this.resetValue.bind(this) } hidden={!optionInfo} style={{color : textColor }}>{textSize}</span>
          <button id="increaseButton" hidden={!optionInfo} onClick={this.incrementSize.bind(this) }>+</button>
          <span id="textSpan" onClick={this.toggleOptions.bind(this) } style={{ fontWeight : weight, fontSize : textSize }}>{this.props.text}</span>
        </div>
    	);
    }
}
