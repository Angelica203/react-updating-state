import React from 'react'
class ClickityClick extends React.Component {
    constructor(){
        super();
        this.state = {
            hasBeenClicked: false
        };
    }
    // handleClick = () => {
    //     const newCount = this.state.count + 1
    //     this.setState({
    //         count: newCount
    //     })
    // };


handleClick = () => {
    this.setState({
      hasBeenClicked: true
    })
  }
    render(){
        return (
            <div>
                <p> I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick;
// export default ButtonCounter 