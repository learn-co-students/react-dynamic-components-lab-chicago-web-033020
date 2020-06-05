import React from 'react'
// import ReactDOM from 'react-dom'
// import BlogPost from '/Users/owenabbott/Development/code/react-dynamic-components-lab-chicago-web-033020/src/BlogPost.js'


export default class Comment extends React.Component {
    render(){
        return(
        <div className="comment">
            { this.props.commentText }
        </div>

        )
    }
};



