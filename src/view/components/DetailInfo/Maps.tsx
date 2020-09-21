import React, { useEffect, useCallback, useMemo } from 'react';
import WebView from 'react-native-webview';
import { useObserver } from 'mobx-react';
import { DetailInfoStore } from '../../../viewModel';
import htmlFunction from './MapsHtml';

const Maps = (props): JSX.Element => {
  useEffect(() => {
    DetailInfoStore.filterTargetTransaction(props.id);
    (async () => {
      if (props.type === '직거래') {
        await DetailInfoStore.setAddressLocation();
        DetailInfoStore.setMapLocationHTML(htmlFunction(
          DetailInfoStore.targetTransaction.address.location.roadAddress,
          DetailInfoStore.location.lat,
          DetailInfoStore.location.lng,
        ));
      }
      if (props.type === '픽업지') {
        await DetailInfoStore.setAddressPickup();
        DetailInfoStore.setMapPickupHTML(htmlFunction(
          DetailInfoStore.targetTransaction.address.pickup.roadAddress,
          DetailInfoStore.pickup.lat,
          DetailInfoStore.pickup.lng,
        ));
      }
    })();
  }, []);

  const {
    jsOptions, onSelected, onError, ...otherProps
  } = props;
  const injectedJavaScript = useMemo(() => `initOnReady(${JSON.stringify(jsOptions)});void(0);`, [jsOptions]);

  const onMessage = useCallback(({ nativeEvent }) => {
    try {
      nativeEvent.data && onSelected && onSelected(JSON.parse(nativeEvent.data));
    } catch (e) {
      onError(e);
    }
  }, [onSelected]);

  return useObserver(() => (
    <>
      {props.type === '직거래'
        ? (
          <WebView
            {...otherProps}
            source={{ html: DetailInfoStore.locationHtml, baseUrl: 'https://github.com' }}
            onMessage={onMessage}
            injectedJavaScript={injectedJavaScript}
            mixedContentMode="compatibility"
            useWebKit
            onShouldStartLoadWithRequest={() => true}
          />
        )
        : (
          <WebView
            {...otherProps}
            source={{ html: DetailInfoStore.pickupHtml, baseUrl: 'https://github.com' }}
            onMessage={onMessage}
            injectedJavaScript={injectedJavaScript}
            mixedContentMode="compatibility"
            useWebKit
            onShouldStartLoadWithRequest={() => true}
          />
        )}
    </>
  ));
};

export default Maps;
