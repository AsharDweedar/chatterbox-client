// YOUR CODE HERE:
var app ={
	init: function(){
		var allName = window.location.search;
	 	var name = allName.slice(allName.search('=')+1).split('%20').join(' ')
		var message = {
			username: name,
			text: $("#message").val(),
			roomname: $("#room").val()
		};
		this.send(message);
	},
	send : function(message){
		$.ajax({
		  url:'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
		  type: 'POST',
		  data : message,
		  contentType: 'application/json',
		  success: function (data) {
		    console.log('chatterbox: Message sent');
		  },
		  error: function (data) {
		    console.error('chatterbox: Failed to send message', data);
		  }
		});
	},
	fetch:function(){

	}
}