import React from 'react';
import './Footer.css';

class Share extends React.Component {
    constructor(props){
        super(props);
        this.state = {count: 0}
    }

    counter() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div className="share">
                <i className="fas fa-retweet" onClick={this.counter.bind(this)}></i><p>{this.state.count}</p>
            </div>
        );
    }
}

export default Share