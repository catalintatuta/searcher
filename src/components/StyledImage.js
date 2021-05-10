/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import {Component} from 'react';

class StyledImage extends Component {
  render() {
    const {src, size, height, width } = this.props;
    return (
      <div
        css={css`
          background-image: url("${src}");
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          ${height ? `height: ${height};` : ''}
          ${width ? `width: ${width};` : ''}
          ${size ? `
            width: ${size};
            height: ${size};
          ` : ''}
        `}
      />
    );
  }
}

export default StyledImage;
