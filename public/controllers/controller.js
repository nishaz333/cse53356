var app=angular.module('myApp',['ngAnimate']);
var rank = 0;
var count = 0;
var list = [];
app.controller("AppCtrl1",function($scope,$http,$interval)
{
	var timer;
		
	$scope.update = function()
	{
			timer = $interval(function()
			{
				refreshMe();
				count +=1;	
			},500);
	};
	
	$scope.killtimer=function()
	{
        if(angular.isDefined(timer))
          {
            $interval.cancel(timer);
            timer=undefined;
          }
    };

	function refreshMe()
	{
		$http.get("/movieObject?rank="+rank).success(function(response)
		{		 	
			var url = response[0].fields.image_url;
			var res = url.split(":");
			var secureUrl = 'https:'+res[1];
			if(list.length > 20){
				list.shift();
			}
			list.push(response);
			$scope.list = list.reverse();
		 	$scope.mov=response;
		 	$scope.url=secureUrl;
		 	$scope.count = count;
		 	rank = response[0].fields.rank;
	 	});
	}
	
});