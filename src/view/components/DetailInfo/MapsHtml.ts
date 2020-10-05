import { KAKAO_MAPS_KEY } from '@dotenv';

const htmlFunction = (address) => `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <style>\
    html,\
    body { width: 100%; height: 100%; margin:0px; padding: 0px; background-color: #ececec; }\
    a { font-family: 'Do Hyeon', sans-serif; }
    #address {font-family: 'Do Hyeon', sans-serif; text-align: center; }
    #address:nth-of-type(n) {border:0; box-shadow:0px 1px 2px #888;}
  </style>
  <link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet">
</head>
<body>
  <div id="map" style="width:100%; min-height: 100%;"></div>

  <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
  <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAPS_KEY}&libraries=services">
  </script>

  <script type="text/javascript">
    var geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch('${address}', function(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var mapContainer = document.getElementById('map');
        var mapOption = {
          center: new kakao.maps.LatLng(result[0].y, result[0].x),
          level: 5
        };
        var map = new kakao.maps.Map(mapContainer, mapOption);
      
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        var marker = new kakao.maps.Marker({
          position: coords,
          map: map
        });

        marker.setMap(map);

        var iwContent = '\
          <div id="address"; style="padding: 5px; width: 230px;">\
            직거래 장소: ${address}\
            <br>\
            <a href="https://map.kakao.com/link/to/${address}, result[0].y, result[0].x" style="color:#D2691E" target="_blank">길찾기</a>\
            &nbsp&nbsp&nbsp\
            <a href="https://map.kakao.com/link/map/${address}, result[0].y, result[0].x" style="color:#D2691E" target="_blank">큰지도보기</a>\
          </div>'

        var iwPosition = new kakao.maps.LatLng(result[0].y, result[0].x);

        var infowindow = new kakao.maps.InfoWindow({
          position : iwPosition,
          content : iwContent
        });

        infowindow.open(map, marker);
      }
    });
  </script>
</body>
</html>
`;

export default htmlFunction;
