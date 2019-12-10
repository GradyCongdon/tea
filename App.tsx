import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Flavor from './Flavor';

export default class App extends Component<
  {},
  {
    clock: number;
    countdown: number;
    done: boolean;
  }
> {
  state = {
    clock: null,
    countdown: null,
    done: false,
  };

  setClock(time) {
    clearInterval(this.state.countdown);
    this.setState({
      clock: time,
      done: false,
      countdown: null,
    });
    this.go();
  }

  go() {
    const countdown = setInterval(() => {
      this.setState(prev => {
        let { clock, done, countdown } = prev;
        clock = clock - 1;
        if (clock <= 0) {
          clock = 0;
          done = true;
          clearInterval(prev.countdown);
          countdown = null;
        }

        return {
          clock,
          done,
          countdown,
        };
      });
    }, 1000);

    this.setState({ countdown });
  }

  render() {
    const done = this.state.done ? styles.done : null;

    return (
      <View style={[styles.container, done]}>
        <Flavor
          stylo={done}
          setClock={() => this.setClock(120)}
          name="Green"
          side="left"
        />
        <Flavor setClock={() => this.setClock(180)} name="Black" side="right" />
        <Flavor setClock={() => this.setClock(180)} name="Oolong" side="left" />
        <Flavor
          setClock={() => this.setClock(300)}
          name="Herbal"
          side="right"
        />
        <Flavor setClock={() => this.setClock(3)} name="quik" side="right" />
        <TouchableOpacity onPress={this.go}>
          <Text style={styles.timer}>{this.state.clock}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingLeft: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  timer: {
    fontSize: 96,
    lineHeight: 95,
    fontWeight: '600',
    fontFamily: 'System',
    marginLeft: 50,
    marginTop: 150,
  },
  done: {
    backgroundColor: '#C1EFB6',
  },
});
