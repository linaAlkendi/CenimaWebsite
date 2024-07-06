
		document.addEventListener('keydown', function(event) {
			if (event.keyCode === 8 || event.key === 'Backspace') {
				history.back();
			}
		});
////////////////////////
		
function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

