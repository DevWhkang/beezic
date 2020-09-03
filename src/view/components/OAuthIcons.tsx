import React from 'react';
import styled from '@emotion/native';
import PropTypes from 'prop-types';
import googleIcon from '../../assets/Icons/google-oauth-icon.png';
import facebookIcon from '../../assets/Icons/facebook-oauth-icon.png';
import twitterIcon from '../../assets/Icons/twitter-oauth-icon.png';
import instagramIcon from '../../assets/Icons/instagram-oauth-icon.png';

const Container = styled.View`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.Image`
  width: 25px;
  height: 25px;
  margin: 0 10px;
`;

function OAuthIcons({ style }) {
  return (
    <Container style={style}>
      <Icon source={googleIcon} />
      <Icon source={facebookIcon} />
      <Icon source={twitterIcon} />
      <Icon source={instagramIcon} />
    </Container>
  );
}

OAuthIcons.defaultProps = {
  style: {},
};

OAuthIcons.propTypes = {
  style: PropTypes.shape({}),
};

export default OAuthIcons;
