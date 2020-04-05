function changeTheme() {
  let btn = document.getElementById("switch");
  let toggle = document.getElementById("toggle");
  btn.classList.toggle("switchLight");
  toggle.classList.toggle("toggleLight");

  if (btn.classList.contains('switchLight')) {
    document.getElementById("style").href = "./stylesheet/light.css";
  }

  else {
    document.getElementById("style").href = "./stylesheet/dark.css";
  }

}

$('#grayscale').click(function() {
  $('link[href="dark.css"]').attr('href', 'light.css');
});
$('#original').click(function() {
  $('link[href="light.css"]').attr('href', 'dark.css');
});
