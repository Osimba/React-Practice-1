class FontChooser extends React.Component {


    constructor(props) {
	     super(props);
       this.state = {
         options : false,
         bold : false,
         fontSize : this.props.size
       };
    }

    toggleOptions() {
      this.setState( {options: !this.state.options});
    }
    toggleBold() {
      if(document.getElementById('boldCheckbox').props.checked)
        this.setState( { bold: true } );
      else {
          this.setState( { bold: false } );
        }
    }

    incrementSize() {
      if(this.state.fontSize < this.props.max) {
        this.setState( { fontSize: this.state.fontSize + 1 } );
      }
    }

    decrementSize() {
      if(this.state.fontSize > this.props.min) {
        this.setState( { fontSize: this.state.fontSize - 1 } );
      }
    }


    render() {

      var optionInfo = this.state.options;
      var weight = this.state.checked ? 'bold' : 'normal';
      var textSize = this.state.fontSize;
    	return(
    	       <div>
    	       <input type="checkbox" id="boldCheckbox" hidden={optionInfo}/>
    	       <button id="decreaseButton" hidden={optionInfo} onClick={this.decrementSize.bind(this) }>-</button>
    	       <span id="fontSizeSpan" hidden={optionInfo}>{this.state.fontSize}</span>
    	       <button id="increaseButton" hidden={optionInfo} onClick={this.incrementSize.bind(this) }>+</button>
             <br/>
    	       <span id="textSpan" onClick={this.toggleOptions.bind(this) } style={{ fontWeight : weight, fontSize : textSize }}>{this.props.text}</span>
    	       </div>
    	);
    }
}
