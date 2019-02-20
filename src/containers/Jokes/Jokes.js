import React, {Component, Fragment} from 'react';
import Joke from '../../components/Joke/Joke'

class Jokes extends Component {
    state = {
        jokes: [],
    };

  componentDidMount() {
    const P_URL = 'https://official-joke-api.appspot.com/random_ten';
    fetch(P_URL).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong with network request');
    }).then(jokes => {
      const updatedPosts = jokes.map(joke => {
        return {
          ...joke
        }
      });

      this.setState({jokes: updatedPosts});
    }).catch(error => {
      console.log(error);
    });
  }



    render() {
        return (
            <Fragment>
                <section className="Jokes m-4">
                    {this.state.jokes.map(joke => (
                        <Joke
                            key={joke.id}
                            setup={joke.setup}
                            punchline={joke.punchline}
                        />
                    ))}
                </section>

            </Fragment>
        )
    }
}

export default Jokes