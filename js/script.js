
document.addEventListener('DOMContentLoaded', function(){
	var body = document.getElementsByTagName('body')[0];
	var divs = document.getElementsByTagName('div');
	var plus = document.getElementsByTagName('span')[0];
	var bomb = document.getElementsByTagName('span')[1];
	var div_remove = 0;
	var explosion = document.getElementsByTagName('section')[0];
	var gy;
	var gx;
	var ii = 0;
	var d_height = "offsetHeight ";
	var d_width = "offsetWidth ";	
	var h = divs[ii].offsetHeight;
	var w = divs[ii].offsetWidth;
	var d = document;	
	divs[ii].remove();
	plus.addEventListener('click',function(){
		create_div();		
	});
	function create_div(){
		new_div = d.createElement('div');
		body.insertBefore(new_div, body.children[body.children.length-3]);
		new_div.dataset.dataName = 'blank';
		fun_div_innerHTML();
		new_div.addEventListener('mouseup',function(){
			if (div_remove!=0){
				div_remove = 0;
			explosion.style.top = event.clientY-60 + 'px';
			explosion.style.left = event.clientX -40+ 'px';
			explosion.style.display = 'inline-block';
			var myVar = setInterval(function(){ myTimer() }, 1000);
			function myTimer() {
		 		 	explosion.style.display = 'none';
		  			clearInterval(myVar);
			}
				this.remove();
			}
		})
	}
	function create_input(parent){
		var input = d.createElement('input');
		input.type = "text";
		parent.appendChild(input);
		input.addEventListener('keydown',function(event){
			 if(event.keyCode == 13){			 
            	parent.dataset.dataName = input.value;
            	fun_div_innerHTML();
       		 }
		});
	}
	function fun_div_innerHTML(){
		for (var i=0; i  < divs.length; i++){
			divs[i].innerHTML = d_height + h +'<br>';
			divs[i].innerHTML += d_width + w +'<br>';
			divs[i].innerHTML +=  "x: " +divs[i].offsetLeft+'<br>';
			divs[i].innerHTML +=  "y: " +divs[i].offsetTop+'<br>';
			if (divs[i].dataset.dataName === 'blank'){
				create_input(divs[i]);			
			}else{			
					divs[i].innerHTML += divs[i].dataset.dataName;
			}
		}
	}
	bomb.addEventListener('mousedown',function(){
		if (div_remove === 1){
			bomb.style.position = "relative";
	 		bomb.style.top = 0 + 'px';
			bomb.style.left = 0+'px';
			div_remove = 2;			
		}else{
			div_remove = 1;
		};
		var movewith = setInterval(function(){ moveTimer() }, 50);
			function moveTimer() {
					if (div_remove===1){
		 		 	bomb.style.position = "absolute";
		 		 	bomb.style.left = gx-10 + 'px';
		 		 	bomb.style.top = gy - 10 + 'px';
		 		 }					
		 		 	if (div_remove === 0){
		 		 		bomb.style.zIndex = '3';
		 		 		bomb.style.position = "relative";
		 		 		bomb.style.top = 0 + 'px';
						bomb.style.left = 0+'px';
		  				clearInterval(movewith);
		  			}
			}
	})
explosion.style.display = 'none';
body.addEventListener("mousemove", function(){
gx = event.clientX;
gy = event.clientY;
});
});