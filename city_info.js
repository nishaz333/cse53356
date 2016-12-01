$(document).ready(function(){
	tileindex=1;
	
	
	
	$("#btn_mpf").click(function(){
		//AJAX CALL
		/* $.get("data/"+i, function(data, status){
	       city = data;
	       $(".tiles").show();
	       createTile();
	    }); */
		var i=1;
		$(".tiles").show();
		$(".tiles").empty();
        myVar = setInterval(function(){ 
            task(i);
            if(i<100){
                i++;
            }else{
                clearInterval(myVar);
            }
            
        }, 500);
                
            		  
			
	});
		
});


function task(j){
    
	var city;
    if(j<=20)
		{
			createTile(city);
				setTimeout(function(){
					
					
				$.get("data/"+j, function(data, status){
				city = data;
				$(".tile").eq((j-1)%20).removeClass("spin");
				modifyTile(city,(j-1)%20)				
				});
					},2000);
		}
	else {
		$(".tile").eq((j-1)%20).addClass("spin");
		setTimeout(function(){
					
				
				$.get("data/"+j, function(data, status){
				city = data;
				$(".tile").eq((j-1)%20).removeClass("spin");
				modifyTile(city,(j-1)%20)
								
				});
					},2000);
		
	}
		
           
}


function createTile(){
	//   $(".tiles").empty();
		//setTimeout(function(){
		$(".tiles").append('<div class="tile spin" id="tile"><div class="city_name"></div><div class="Location"></div><div class="Population"></div><div class="State"></div></div>');
		//},500);
}

function modifyTile(city_list,index){
	//   $(".tiles").empty();
		//setTimeout(function(){
		$(".tile").eq(index).empty();
		$(".tile").eq(index).append('<div class="city_name">City Name: '+city_list.city+'</div><div class="Location">Location: '+city_list.loc+'</div><div class="Population">Population: '+city_list.pop+'</div><div class="State">State: '+city_list.state+'</div>');
		//},500);
}

function createTileNext(city_list){

		setTimeout(function(){ 
		//	$(".tiles").empty();
		//$(".tiles").spin("Loading....");
		$(".tile").eq(index).append('<div class="tile" id="tile"><div class="city_name">City Name: '+city_list.city+'</div><div class="Location">Location: '+city_list.loc+'</div><div class="Population">Population: '+city_list.pop+'</div><div class="State">State: '+city_list.state+'</div></div>');
		//tileLoading();
    }, 1000);
	
		/* $(".tiles").append('<div class="tile" id="tile'+(index+1)+'"><div class="city_name">'+city_list.city+'</div><div class="Location">Location: '+city_list.loc+' $</div><div class="Population">Population: '+city_list.pop+' $</div><div class="State">State: '+city_list.state+' $</div></div>'); */

}
function tileLoading(){

		setTimeout(function(){ 
		$(".tiles").append('<div class="tile" id="tile"><div class="city_name">Loading...</div></div>');
    }, 10000);
	
		

}