import * as React from 'react';
import WebView from 'react-native-webview';
import Geocoder from 'react-native-geocoding';
import { DetailInfoStore } from '../../../viewModel';
import htmlFunction from './MapsHtml';

const Maps = (props): JSX.Element => {
  const Latitude = 0;
  const longitude = 0;

  Geocoder.init('AIzaSyBjoxJeM36SDKuiG5cR_cBAhWeBLNUwles');

  Geocoder.from(DetailInfoStore.targetTransaction.address.location.roadAddress)
    .then((json) => {
      const { location } = json.results[0].geometry;
      console.log(location);
      // Latitude = location.lat;
      // longitude = location.lon;
    })
    .catch((error) => console.warn(error));

  // const html = htmlFunction(props.address, Latitude, longitude);
  const html = htmlFunction('제주시 월산남길 7', 37.537187, 127.005476);

  const {
    jsOptions, onSelected, onError, ...otherProps
  } = props;
  const injectedJavaScript = React.useMemo(() => `initOnReady(${JSON.stringify(jsOptions)});void(0);`, [jsOptions]);

  const onMessage = React.useCallback(({ nativeEvent }) => {
    try {
      nativeEvent.data && onSelected && onSelected(JSON.parse(nativeEvent.data));
    } catch (e) {
      onError(e);
    }
  }, [onSelected]);

  return (
    <WebView
      {...otherProps}
      source={{ html, baseUrl: 'https://github.com' }}
      onMessage={onMessage}
      injectedJavaScript={injectedJavaScript}
      mixedContentMode="compatibility"
      useWebKit
      onShouldStartLoadWithRequest={() => true}
    />
  );
};

export default Maps;
