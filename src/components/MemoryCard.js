import React from 'react';
import './MemoryCard.css';


export default class MemoryCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {isFlipped: false}
  }

  clickHandler = () => {
    this.setState(
      {isFlipped : !this.state.isFlipped}
      )
  }
  

  render() {
    const innerClass =  this.state.isFlipped ? 'MemoryCard__inner flipped' : 'MemoryCard__inner'


    return (
      
      
      <div className='MemoryCard' onClick={this.clickHandler}>
        <div className={innerClass}>
      
            <div className='MemoryCard__back'>
              <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" alt="" />
            </div>
            <div className='MemoryCard__front'>
              ∆
            </div>

        </div>
      </div>

    )
  }
}




