import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity }}>
        { this.props.opacity >= 0.2 ? < ColorBox opacity={this.props.opacity - 0.1} /> : null }
      </div>
    )
  }

}



// render() {
//   return (
//     <div id="app">
//         <BlogPost />
//         <div id="seperator"></div>
//         <div className="wrapper">
//           <ColorBox opacity={1} />
//         </div>
//     </div>
//   )
// }
// }

// export default App;
