var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];


function OnLoad()
{
	for(var i = 0; i < weaponsArray.length; i++)
	{
		var weaponsTag = "<option value='" + i + "'>" + weaponsArray[i] + "</option>";
		document.forms[0]["weapons"].innerHTML += weaponsTag;
		console.log(weaponsTag);
	}
}


function SelectWeapon()
{
	currentWeapon.innerHTML = weaponsArray[document.forms[0]["weapons"].value];
}
