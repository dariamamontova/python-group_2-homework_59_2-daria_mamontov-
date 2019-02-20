import React, {Component} from 'react';

class Joke extends Component {

    render() {
        return (
            <div className="card w-50 m-2">
                <p>{this.props.setup}</p>
                <p>{this.props.punchline}</p>
            </div>
        );
    }
}

export default Joke;