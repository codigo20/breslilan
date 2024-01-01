var xhReq = new XMLHttpRequest();
xhReq.onload = true;
xhReq.open(
  "GET",
  "https://discordapp.com/api/guilds/286258901983297537/widget.json",
  false
);
xhReq.send(null);
var discordjson = JSON.parse(xhReq.responseText);


if (discordjson != null) {
  function showMembersCount() {
    var membersCount = discordjson.members.length;

    var countElem = (document.getElementById("members-count").innerHTML =
    "<b><font color='#cad924'>" + membersCount + "</font></b>" + "<span class='member-label'> <font color='grey'>Gamers online</font><span>");
  }
  
  
   function totalUsuarios() {
 // usuarios online

   var channels = discordjson.channels.map(c => c.name);
     var canal = channels.find(x => x.includes("Total Usuarios"));
     var nombrecanal = canal.substring(19, 50);
	for (var j = 0; j < discordjson.members.length; j++) {
		var member = discordjson.members[j];
	}
         var countElem = (document.getElementById("members-total").innerHTML =
         "<b><font color='#cad924'>"+ nombrecanal + "</font></b>" + "<span class='member-label'> <font color='grey'>Usuarios</font><span>");  
  }
  

  
   function total() {
    // Channels
  var channels = "";
  for (var i = 0; i < discordjson.channels.length; i++) {
	channels += discordjson.channels[i].name;
	for (var j = 0; j < discordjson.members.length; j++) {
		var member = discordjson.members[j];
		if (typeof(member.channel_id) != "undefined" && member.channel_id == discordjson.channels[i].id) {

	  }
	}

  }
  document.getElementById("channelss").innerHTML = channels; 
  }


  function totaljugandolol() {
 // gente jugando
var Users_jugando = discordjson.members.filter(l => l.game);
var Nombre_del_juego = Users_jugando.map(l => l.game.name);
var Jugando_LOL = Nombre_del_juego.filter(l => l.includes("League of Legends")); 

var totaljugandololl = Jugando_LOL.length;

	for (var j = 0; j < discordjson.members.length; j++) {
		var member = discordjson.members[j];
	}
         var countElem = (document.getElementById("members-games-lol").innerHTML =
         totaljugandololl);  
         console.log("Jugando lol : ");
         console.log(Nombre_del_juego);
  }

  function totaljugandofornite() {
 // gente jugando
var Users_jugandoF = discordjson.members.filter(f => f.game);
var Fortnite = Users_jugandoF.map(f => f.game.name);
var Jugando_Fortnite = Fortnite.filter(f => f.includes("Fortnite")); 

var totaljugandoFortnite = Jugando_Fortnite.length;

	for (var j = 0; j < discordjson.members.length; j++) {
		var member = discordjson.members[j];
	}
         var countElem = (document.getElementById("members-games-fornite").innerHTML =
         totaljugandoFortnite);  
        // console.log("Jugando Fornite : ");
        // console.log(Jugando_Fortnite);
  }

  function totaljugandoPUBG() {
 // gente jugando
var Users_jugandop = discordjson.members.filter(p => p.game);
var PUBG = Users_jugandop.map(p => p.game.name);
var Jugando_PUBG = PUBG.filter(p => p.includes("PUBG LITE")); 

var totaljugandoPUBG = Jugando_PUBG.length;

	for (var j = 0; j < discordjson.members.length; j++) {
		var member = discordjson.members[j];
	}
         var countElem = (document.getElementById("members-games-PUBG").innerHTML =
         totaljugandoPUBG);  
      // console.log(Fortnite);
  }

  function totaljugandoOVER() {
 // gente jugando
var Users_jugandoO = discordjson.members.filter(o => o.game);
var OVER = Users_jugandoO.map(o => o.game.name);
var Jugando_OVER = OVER.filter(o => o.includes("Overwatch")); 

var totaljugandoOVER = Jugando_OVER.length;

	for (var j = 0; j < discordjson.members.length; j++) {
		var member = discordjson.members[j];
	}
         var countElem = (document.getElementById("members-games-OVER").innerHTML =
         totaljugandoOVER);  
      // console.log(Fortnite);
  }


  function totaljugandoHALOCE() {
 // gente jugando
var Users_jugandoHALOCE = discordjson.members.filter(h => h.game);
var HALOCE = Users_jugandoHALOCE.map(h => h.game.name);
var Jugando_HALOCE = HALOCE.filter(h => h.includes("Halo Custom Edition")); 

var totaljugandoHALOCE = Jugando_HALOCE.length;

	for (var j = 0; j < discordjson.members.length; j++) {
		var member = discordjson.members[j];
	}
         var countElem = (document.getElementById("members-games-HALOCE").innerHTML =
         totaljugandoHALOCE);  
      // console.log(Fortnite);
  }

  function totaljugandoHALO2() {
 // gente jugando
var Users_jugandoHALO2 = discordjson.members.filter(h2 => h2.game);
var HALO2 = Users_jugandoHALO2.map(h2 => h2.game.name);
var Jugando_HALO2 = HALO2.filter(h2 => h2.includes("Halo 2: Project Cartographer")); 

var totaljugandoHALO2 = Jugando_HALO2.length;

	for (var j = 0; j < discordjson.members.length; j++) {
		var member = discordjson.members[j];
	}
         var countElem = (document.getElementById("members-games-HALO2").innerHTML =
         totaljugandoHALO2);  
      // console.log(Fortnite);
  }

  function totaljugandoCSGO() {
 // gente jugando
var Users_jugandoCSGO = discordjson.members.filter(CS => CS.game);
var CSGO = Users_jugandoCSGO.map(CS => CS.game.name);
var Jugando_CSGO = CSGO.filter(CS => CS.includes("Counter-Strike: Global Offensive")); 

var totaljugandoCSGO = Jugando_CSGO.length;

	for (var j = 0; j < discordjson.members.length; j++) {
		var member = discordjson.members[j];
	}
         var countElem = (document.getElementById("members-games-CSGO").innerHTML =
         totaljugandoCSGO);  
      // console.log(Fortnite);
  }
  
  
 /*
  function showMembers() {
    discordjson.members.reverse().forEach(function(members) {
      var td = document.createElement("td");

      var label = document.createElement("label");
      label.innerHTML = members.username;

      var img = document.createElement("img");
      img.src = members.avatar_url;

      var table = document.getElementById("members-list");
      var row = table.insertRow(0);
      var td1 = row.insertCell(0);
      var td2 = row.insertCell(1);
      td1.className = "member-avatar";
      td2.className = "member-name";
      td1.appendChild(img);
      td2.appendChild(label);
    });
  } 
  */
}


setTimeout(function() {
    // showMembers();
   showMembersCount();
   total();
   totalUsuarios();
   totaljugandolol();
   totaljugandofornite();
   totaljugandoPUBG();
   totaljugandoOVER();
   totaljugandoHALOCE();
   totaljugandoHALO2();
   totaljugandoCSGO();
}, 500);


//setInterval
/* workaround to display regular table instead of liquid table plugin  */
/* the plugin sets the regular table to display:none, this fixes it */
/*setTimeout(function() {
document.getElementById("members-list").style.display = "block";
}, 2000);*/

// informativo popUp
function popUp() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
