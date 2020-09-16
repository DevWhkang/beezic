import * as React from 'react';
import WebView from 'react-native-webview';
import htmlFunction from './MapsHtml';

const Maps = (props): JSX.Element => {
  const html = htmlFunction(props.Latitude, props.longitude);

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
