	$(document).ready(function(){
		$("#filter li").hide();
		
		$("#categoryFilter").keyup(function(event){
			var input = $(this);
			var val =  $("input:text").val();
			
			//if (event.keyCode == 13) {
		//	location.href = $("#filter a:visible:first").attr('href');
			//}
			
			if (val ==''){
				$("#filter li").hide();
				$("#filter span").removeClass('highlighted');
				return true;
			}
			var regexp = '\\b(.*)';
			for ( var i in val){
				regexp += '('+val[i]+')(.*)';
			}
			
			regexp += '\\b'; // affecte l'expression régulière
			$('#filter li').show();
			$('#filter').find('a>span').each(function(){
				var span = $(this); //var string ='';
				var resultats = span.text().match(new RegExp(regexp,'i'));
				if (resultats){
					var string ="";
				for ( var i in resultats){
					if(i>0){
						if(i%2 == 0){
							string += '<span class="highlighted">' +resultats[i]+ '</span>';
					}else{
						string += resultats[i];
					     }
						   }
					                      }
					span.empty().append(string);
					          } else{
								  span.parent().parent().hide();
				                 	}
			})
	                                                 });
		
		
		});