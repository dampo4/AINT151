function CreatePlayer()
{
  var name = document.getElementById('playername').value;
  document.getElementById('name').innerHTML = name;

  var colour = document.getElementById('playercolour').value;
  document.getElementById('colour').style.background = colour;

  var health = document.getElementById('playerhealth').value;
  document.getElementById('health').innerHTML = health;

//  var weapon = document.getElementById('playerweapon').value;
//  if (weapon == 1 ) {
//      weapon = "Crossbow of much hurting";
//      document.getElementById('weapon').innerHTML = weapon;
//    }
//  else if (weapon == 2 ) {
//      weapon = "Broadsword of so slicing";
//      document.getElementById('weapon').innerHTML = weapon;
//    }
//  else {
//      weapon = "Wand of amaze magics";
//      document.getElementById('weapon').innerHTML = weapon;
//    }

  var weapon = document.getElementById('playerweapon').value;
  switch(weapon){

  case "1":
    weapon = "Crossbow of much hurting";
    document.getElementById('weapon').innerHTML = weapon;
    break;

  case "2":
    weapon = "Broadsword of so slicing";
    document.getElementById('weapon').innerHTML = weapon;
    break;

  case "3":
    weapon = "Wand of amaze magics";
    document.getElementById('weapon').innerHTML = weapon;
    break;
  }
}
