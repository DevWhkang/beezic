import { KAKAO_MAPS_KEY } from '@dotenv';

const htmlFunction = (Address, Latitude, longitude) => `
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
		  var mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
              center: new kakao.maps.LatLng(${Latitude}, ${longitude}), // 지도의 중심좌표
              level: 5 // 지도의 확대 레벨
          };

      //지도를 미리 생성
			var map = new kakao.maps.Map(mapContainer, mapOption);


      //마커를 생성
      var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(${Latitude}, ${longitude}),
          map: map
			});

			// 마커가 지도 위에 표시되도록 설정합니다
			marker.setMap(map);

			var iwContent = '\
			<div id="address"; style="padding: 5px; width: 230px;">\
			직거래 장소: ${Address}\
				<br>\
				<a href="https://map.kakao.com/link/to/${Address}, ${Latitude},${longitude}" style="color:#D2691E" target="_blank">길찾기</a>\
				&nbsp&nbsp&nbsp\
				<a href="https://map.kakao.com/link/map/${Address}, ${Latitude},${longitude}" style="color:#D2691E" target="_blank">큰지도보기</a>\
			</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    	iwPosition = new kakao.maps.LatLng(${Latitude}, ${longitude}); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
			var infowindow = new kakao.maps.InfoWindow({
    		position : iwPosition,
    		content : iwContent
			});
			infowindow.open(map, marker);
	  </script>
  </body>
  </html>
`;

export default htmlFunction;

// embed(mapContainer)
