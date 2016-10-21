$(document).ready(function(){
		cntEvent = localStorage.length;
		events_echo();
	$('input[name=addevent_button]').click(function(e){
			cntEvent = localStorage.length;
			m_event = $('input[name=addevent]').val();
			if(Math.round(m_event)===0){
				$('input[name=addevent]').css({"background-color": "#8e1913", "border": "3px dotted yellow", 'color': 'white'});
				e.preventDefault();
			}else{
			$('input[name=addevent]').css({"background-color": "white", "border": "1px solid black", 'color': 'black'});
			now = new Date();
			h= now.getHours(); m= now.getMinutes();
			m_event+=' - |'+h+'-'+m+ '|';
			localStorage.setItem(cntEvent+1, m_event);
			$('input[name=addevent]').val('');
			events_echo();
			}
		});		
		
	function events_echo(){
			cntEvent= localStorage.length;
			if(cntEvent==0){
				$('.monitor').html('nothing in the storage').append('<br>Items total: '+cntEvent);
			}else{
			$('.monitor').html('');
			for(i=0; i<=cntEvent; i++){
				if(localStorage.key(i)==null){ continue; }
				$('.monitor').append('<span class=delItem'+i+' va='+i+'>'+localStorage.getItem(localStorage.key(i))+'</span>');
			}}
			$('span[class^=delItem]').click(function(e){
			e.stopPropagation();
			localStorage.removeItem(localStorage.key(e.currentTarget.getAttribute("va")));
			$('.monitor').html(events_echo());
			})
		}

});