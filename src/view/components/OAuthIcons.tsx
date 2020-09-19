import React, { useEffect } from 'react';
import styled from '@emotion/native';
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
        />
      </OAuthIcon>
      <OAuthIcon onPress={onFacebookHandler}>
        <FontAwesomeIcon
          icon={faFacebookF}
          size={size}
        />
      </OAuthIcon>
      <OAuthIcon onPress={() => {}}>
        <FontAwesomeIcon
          icon={faTwitter}
          size={size}
        />
      </OAuthIcon>
      <OAuthIcon onPress={() => {}}>
        <FontAwesomeIcon
          icon={faApple}
          size={size}
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
