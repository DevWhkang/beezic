import React, { useEffect } from 'react';
import styled, { css } from '@emotion/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faGoogle, faFacebookF, faTwitter, faApple,
} from '@fortawesome/free-brands-svg-icons';
import { OAuthStore } from '../../viewModel';

type OAuthIconsProps = {
  style?: Record<string, string>,
  size?: number,
};

const Container = styled.View<OAuthIconsProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-self: center;
  width: 200px;
`;

const OAuthIcon = styled.TouchableOpacity`

`;

const googleIconStyle = css`
  color: #CA4E37;
`;

const facebookIconStyle = css`
  color: #5263B2;
`;

const twitterIconStyle = css`
  color: #888;
`;

const appleIconStyle = css`
  color: #888;
`;

const OAuthIcons = ({ style, size }: OAuthIconsProps): JSX.Element => {
  useEffect(() => {
    OAuthStore.init();
  }, []);

  const onGoogleHandler = async () => {
    await OAuthStore.google();
  };

  const onFacebookHandler = async () => {
    await OAuthStore.facebook();
  };

  return (
    <Container style={style}>
      <OAuthIcon onPress={onGoogleHandler}>
        <FontAwesomeIcon
          icon={faGoogle}
          size={size}
          style={googleIconStyle}
        />
      </OAuthIcon>
      <OAuthIcon onPress={onFacebookHandler}>
        <FontAwesomeIcon
          icon={faFacebookF}
          size={size}
          style={facebookIconStyle}
        />
      </OAuthIcon>
      <OAuthIcon onPress={() => {}}>
        <FontAwesomeIcon
          icon={faTwitter}
          size={size}
          style={twitterIconStyle}
        />
      </OAuthIcon>
      <OAuthIcon onPress={() => {}}>
        <FontAwesomeIcon
          icon={faApple}
          size={size}
          style={appleIconStyle}
        />
      </OAuthIcon>
    </Container>
  );
};

OAuthIcons.defaultProps = {
  style: {},
  size: 25,
};

export default OAuthIcons;
