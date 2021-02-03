import React, { Component } from 'react';
import { Animated } from 'react-native';
import { RatioW } from '@utils';

class ImgLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        style={[
          {
            width: this.props.width ? this.props.width * RatioW : '100%',
            height: this.props.height * RatioW,
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
            ],
          },
          this.props.style,
        ]}
        source={this.props.image}>
        {this.props.children}
      </Animated.Image>
    );
  }
}

export default ImgLoader;
