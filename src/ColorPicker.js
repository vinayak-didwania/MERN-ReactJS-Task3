import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false, // To track whether the color list is open or closed
      selectedColor: null, // To store the selected color
    };
  }

  // Toggle the color list
  toggleColorList = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  // Handle color selection
  handleColorSelect = (color) => {
    this.setState({ selectedColor: color, isOpen: false });
    this.props.onSelectColor(color); // Call the callback function from props
  }
  

  render() {
    const { colors } = this.props;
    const { isOpen, selectedColor } = this.state;

    return (
      <div>
        <button onClick={this.toggleColorList}>Pick a color</button>
        {isOpen && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color"
                style={{ backgroundColor: color }}
                onClick={() => this.handleColorSelect(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && (
          <p>You picked: {selectedColor}</p>
        )}
      </div>
    );
  }
}

export default ColorPicker;
