const htmlFunction = (Latitude, longitude) => `
  <!DOCTYPE html>
  <html lang="ko">
  <head>
	  <meta charset="utf-8">
	  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
	  <style> html, body { width: 100%; height: 100%; margin:0px; padding: 0px; background-color: #ececec; } </style>
  </head>
  <body>
    <div id="map" style="width:100%; min-height: 100%;"></div>
  
	  <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
	  <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=42d0c0a67103c462ace3539d5d298ffc&libraries=services">
    </script>
  
	  <script type="text/javascript">
		  var mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
              center: new daum.maps.LatLng(${Latitude}, ${longitude}), // 지도의 중심좌표
              level: 5 // 지도의 확대 레벨
          };

      //지도를 미리 생성
      var map = new daum.maps.Map(mapContainer, mapOption);
      //주소-좌표 변환 객체를 생성
      var geocoder = new daum.maps.services.Geocoder();
      //마커를 미리 생성
      var marker = new daum.maps.Marker({
          position: new daum.maps.LatLng(37.537187, 127.005476),
          map: map
		  });
		
      function callback() {
			  daum.postcode.load(function(){
				  new daum.Postcode({
					  ...window.options,
					  oncomplete: function(data) {
						  var addr = data.address;

						  geocoder.addressSearch(data.address, function(results, status) {
							  if (status === daum.maps.services.Status.OK) {
								  var result = results[0]; //첫번째 결과의 값을 활용

								  // 해당 주소에 대한 좌표를 받아서
								  var coords = new daum.maps.LatLng(result.y, result.x);
								
								  // 지도를 보여준다.
								  mapContainer.style.display = "block";
                  map.relayout();
                
								  // 지도 중심을 변경한다.
                  map.setCenter(coords);
                
								  // 마커를 결과값으로 받은 위치로 옮긴다.
								  marker.setPosition(coords)
							  }
						  });
					  },
				  }).embed(mapContainer);
			  });
      }
	  </script>
  </body>
  </html>
`;

export default htmlFunction;
