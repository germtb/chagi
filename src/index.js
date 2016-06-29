import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';

class ChagiList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      chagis: []
    };
    setInterval(() => this.update(), 100);
  }

  update() {
    this.setState({
      chagis: [{x: Math.random() * 1000, y: Math.random() * 1000}, ...this.state.chagis]
    });
  }

  render() {
    const chagis = this.state.chagis.map(c => (
      <p key={c.x * c.y} style={{
        left: c.x,
        top: c.y,
        position: 'absolute'
      }}> 내자기 </p>
    ));
    return (
      <div> {chagis} </div>
    );
  }
};


ReactDOM.render(
  (<div>
    <ChagiList/>
  </div>),
  document.getElementById('app')
);

