function to_hash(text) {
    text = "Gfd84" + text.toLowerCase() + "45G.f"
    var hash = 0, i, chr;
    if (text.length === 0) return hash;
    for (i = 0; i < text.length; i++) {
        chr = text.charCodeAt(i);
        hash = ((hash << 7) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

//Rules button
function Show(id)
{
  if (document.getElementById(id).style.display == 'none') {
       document.getElementById(id).style.display = 'block';
  }
  else {
       document.getElementById(id).style.display = 'none';
  }
};

//Submit Button
function Verify() {
  var userRef = 117068477;
  var passRef = -1175250646;
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;
    
  if (to_hash(user) == userRef && to_hash(pass) == passRef) {
    alert("Password is a key")
  } else {
    alert("Oops...")
  }
};

