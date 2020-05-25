import React from 'react'

export default class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }
    AlertBtn = () => {        
        if (this.state.text === "") {
            this.setState(state => (state.text = 'Son - React'))
        } else {
            this.setState(state => (state.text = ''))
        }
    };
    render() {
        return  (
                <div>
                    <h1>{this.props.greeting}</h1>
                    <button onClick={this.AlertBtn}>React Alert</button>
                    <br/>
                    <Button onClick={this.props.event}/>
                    <p>{this.state.text}</p>
                </div>
                )
    }
}

const Button = ({ onClick }) => (
    <button onClick={onClick} type="button">
      React2Vue Alert
    </button>
  );

