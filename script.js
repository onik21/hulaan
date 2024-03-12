var clickCount = 0;

function revealFeeling() {
  clickCount++;
  var responseDiv = document.getElementById('response');
  responseDiv.style.display = 'block';
  
  switch(clickCount) {
    case 1:
      responseDiv.innerHTML = "hulaan";
      break;
    case 2:
      responseDiv.innerHTML = "joke, aram mo";
      break;
    case 3:
      responseDiv.innerHTML = "syempre dae. sige click mo pa HAHA";
      break;
    case 4:
        responseDiv.innerHTML = "IT student naman ako e digdi nalang ako ma confess";
        break;
    case 5:
        responseDiv.innerHTML = "anyway";
        break;
    case 6:
        responseDiv.innerHTML = "I LIKE YOU";
        break;
    case 7:
      responseDiv.innerHTML = "idunno why po inot taka palang nahiling naging interesado tulos ako saimo";
      break;
    case 8:
      responseDiv.innerHTML = "kaya puon 2023 tig hahanap taka na dae ko aram saktong month baka november";
      break;
    default:
      responseDiv.innerHTML = "sana dae ka mag iwas.";
  }
}
