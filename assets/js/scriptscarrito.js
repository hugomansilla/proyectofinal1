$(document).ready(function(){
	$('#add-container1').on('click','button', function(){
			var value1 = $('#add-container1 input').val();

			var html1 = '<div class="item"><div class="borrar">'+ value1+'</div></div>';

			$('#places-container').append(html1);
		})

	$('#add-container2').on('click','button', function(){
			var value2 = $('#add-container2 input').val();

			var html2 = '<div class="item"><div class="borrar">'+ value2+'</div></div>';

			$('#places-container').prepend(html2);
		})
	$('#places-container').on('click','.item',function(){
		$(this).remove('.item');
	})
});
