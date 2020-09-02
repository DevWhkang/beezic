import React from 'react';
import styled from '@emotion/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faGoogle, faFacebookF, faTwitter, faInstagram,
} from '@fortawesome/free-brands-svg-icons';

type OAuthIconsProps = {
  style?: object,
  size?: number,
}

const Container = styled.View<OAuthIconsProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-self: center;
  width: 200px;
`;

const OAuthIcons = ({ style, size }: OAuthIconsProps) => (
  <Container style={style}>
    <FontAwesomeIcon icon={faGoogle} size={size} />
    <FontAwesomeIcon icon={faFacebookF} size={size} />
    <FontAwesomeIcon icon={faTwitter} size={size} />
    <FontAwesomeIcon icon={faInstagram} size={size} />
  </Container>
);

OAuthIcons.defaultProps = {
  style: {},
  size: 25,
};

export default OAuthIcons;
