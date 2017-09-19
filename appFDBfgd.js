$(document).ready(function(){
	var btn1 = $('<button/>');
	btn1.text("Restart")
	btn1.addClass('button1')
	$('.container-fluid').append(button1)
	var seconds = 0;
	var chance = 0;
	var timer = 0;
	let allsafe = $('.safe').length
	$('#total').text(allsafe);
	$('.safe').mouseenter(function(){
		$(this).addClass('claimed');
		$(this).css('background-color','yellow');
		var claimedSafe = $('.safe.claimed').length
		$('#totalCount').text(claimedSafe);

		$('.glyphicon-play').mouseenter(function(){
			startAnimation();
		})
		$('.glyphicon-star').mouseenter(function(){
			endAnimation();
		})
	});

	$('.notsafe').mouseover(function(){
		chance++;
		if(chance==1){
			$('#l3').css('color','#000');
		}
		if(chance==2){
			$('#l2').css('color','#000');
		}
		if(chance==3){
			$('#l1').css("color","#000");
			var popup = $('<div/>');
			var restart = $('<button/>');
			popup.css({
				'position' : 'fixed',
				'background-color' : 'rgba(0,0,0,0.16)',
				'height' : '100%',
				'top' : '0',
				'left' : '0',
				'right' : '0',
				'font-size' : '90px',
				'color' : '#fff',
				'padding-top' : '25%',
				'text-align' : 'center',
				'font-size' : '80px',
				'text-transform' : 'uppercase',
				'font-family' : 'verdana'

			})
			restart.css({
				'color' : '#555',
				'font-size' : '30px'
			})
			restart.text("Restart")
			restart.addClass('btn')
			popup.append("Game Over!!!!")
			popup.append("<br>")
			popup.append(restart)
			$('body').append(popup);
			$('.btn').click(function(){
				location.reload();
			});
		}
		alert("oops you crossed over. try again!!");
		$('.safe').css('background-color','#fff');
		celarInterval(timer);
		seconds = 0;
	});

	$('#start').mouseenter(function(){
		timer = setInterval(function(){ seconds++; $('#duration').text(seconds);}, 1000);

	});

	$('.safe').hover(function(){
		$('#duration').text(seconds);

	});

	function startAnimation(){
		$('.glyphicon-play').animate({
			'fontSize' : '30px'
		}, 500).animate({
			'fontSize' : '10px'
		},500, startAnimation);
	};

	function endAnimation(){
		$('.glyphicon-star').animate({
			'fontSize' : '30px'
		}, 500).animate({
			'fontSize' : '10px'
		}, 500, endAnimation);
	};

	$('.glyphicon-star').click(function(){
		var popup = $('<div/>');
		popup.css({
			'position' : 'fixed',
			'background-color' : 'rgba(0,0,0,0.16)',
			'color' : '#fff',
			'height' : '100%',
			'top' : '0',
			'left' : '0',
			'right' : '0',
			'padding' : '30%',
			'text-align' : 'center',
			'font-size' : '50px'
		})
		popup.text('Completed!!!!')
		$('body').append(popup);
		$('body').attr('id','a');
		$('#a').fireworks();
	});
});

$('.button1').on('click',function(){
		alert('button clicked');
		location.reload();
	});

$(document).ready(function() {

  
  $('.button').on('click', function(evt) {
    var buttonPressed = $(this).html();
    console.log(buttonPressed);
    
    if (buttonPressed === "+/-") {
      currentEntry *= -1;
    } else if (buttonPressed === '.') {
      currentEntry += '.';
    } else if (isNumber(buttonPressed)) {
      if (currentEntry === '0') currentEntry = buttonPressed;
      else currentEntry = currentEntry + buttonPressed;
    } else if (isOperator(buttonPressed)) {
      prevEntry = parseFloat(currentEntry);
      operation = buttonPressed;
      currentEntry = '';
    } 
    } else if (buttonPressed === '=') {
      currentEntry = operate(prevEntry, currentEntry, operation);
      operation = null;
    }
    
    updateScreen(currentEntry);
  });
});

updateScreen = function(displayValue) {
  var displayValue = displayValue.toString();
  $('.screen').html(displayValue.substring(0, 10));
};

isNumber = function(value) {
  return !isNaN(value);
}

isOperator = function(value) {
  return value === '/' || value === '*' || value === '+' || value === '-';
};

operate = function(a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, operation);
  if (operation === '+') return a + b;
  if (operation === '-') return a - b;
  if (operation === '*') return a * b;
  if (operation === '/') return a / b;
}