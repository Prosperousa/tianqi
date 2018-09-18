 window.onload=function(){
 	let weather;
 	// 请求数据
 	$.ajax({
 		url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
 		dataType:"jsonp",
 		success:function(res){
 			weather=res.data.weather
 			console.log(weather);
 			render(weather);

 		}
 	})

 	// 渲染数据
 	function render(obj){
 		$(".city").html(obj.city_name+"市");
 		$(".wuran").html(obj.quality_level);
 		$(".du").html(obj.current_temperature);
 		$(".banner-si").html(obj.current_condition);
		$(".condition").html(obj.tomorrow_condition);
		$(".top").html(obj.dat_high_temperature);
		$(".low").html(obj.dat_low_temperature);
		$(".top1").html(obj.tomorrow_high_temperature);
		$(".low1").html(obj.tomorrow_low_temperature);
		$(".now").css("background-image",`url("img/${obj.dat_weather_icon_id}.png")`);
		$(".next").css("background-image",`url("img/${obj.tomorrow_weather_icon_id}.png")`);

 		// 小时  dom  数组
 		obj.hourly_forecast.forEach(function(item,index){
 			let str="";
 			str=`<li>
				<div class="time">${item.hour}:00</div>
				<div class="tu" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
				<div class="wendu">${item.temperature}°</div>
			</li>`
			
 			$(".nr2 ul").append(str);
		})
		let arr1=obj.forecast_list.slice(0,6);
		console.log(arr1);
		arr1.forEach(function(value){
			let str="";
			str=`<li>
				<div class="day">${value.date.substring(5,7)}/${value.date.substring(8,10)}</div>
				<div class="zhuangkuang1">${value.condition}</div>
				<div class="tu1" style="background:url(img/${value.weather_icon_id}.png) no-repeat"></div>
				<div class="wendu1">${value.high_temperature}°</div>
				<div class="wendu2">${value.high_temperature}°</div>
				<div class="tu2" style="background:url(img/${value.weather_icon_id}.png) no-repeat"></div>
				<div class="zhuangkuang2">${value.condition}</div>
				<div class="feng2">${value.wind_direction}</div>
				<div class="ji">${value.wind_level}级</div>
			</li>`
			
			$(".nr3 ul").append(str);
		})

 	}
}
