"use strict";

const GROUPS = [
	{ name: "संदीप कुमार", role: "ट्रस्टी/ सदस्य", phone: "+91 99057 70752", phoneLink: "+919905770752" },
	{ name: "जीतेन्द्र सोनी", role: "ट्रस्टी/ सदस्य", phone: "+91 91101 13223", phoneLink: "+919110113223" },
	{ name: "आनंद कुमार", role: "ट्रस्टी/ सदस्य", phone: "+91 74886 89153", phoneLink: "+917488689153" },
	{ name: "संदीप महतो", role: "ट्रस्टी/ सदस्य", phone: "+91 82945 29960", phoneLink: "+918294529960" },
	{ name: "आदित्य कुमार", role: "ट्रस्टी/ सदस्य", phone: "+91 6204941502", phoneLink: "+916204941502" },
	{ name: "अमित कुमार", role: "ट्रस्टी/ सदस्य", phone: "+91 87576 09621", phoneLink: "+918757609621" },
	{ name: "राजा रंजीत राही", role: "ट्रस्टी/ सदस्य", phone: "+91 62998 80883", phoneLink: "+916299880883" },
	{ name: "मुकेश पटेल", role: "ट्रस्टी/ सदस्य", phone: "+91 72770 39328", phoneLink: "+917277039328" },
	{ name: "विनोद दास", role: "ट्रस्टी/ सदस्य", phone: "+91 89873 44253", phoneLink: "+918987344253" },
	{ name: "भोला पटेल", role: "ट्रस्टी/ सदस्य", phone: "+91 99068 57141", phoneLink: "+919906857141" }
];
const groupsList = document.querySelector("#groups-list");

groupsList.innerHTML = GROUPS.map((group) => `<li class="group-card"><img src="assets/icons/phone.svg" alt=""><div class="group-card-copy"><h2>${group.name}</h2><p>${group.role}</p><a href="tel:${group.phoneLink}">${group.phone}</a></div></li>`).join("") || `<li class="groups-empty" role="status"><img src="assets/icons/phone.svg" alt=""><h2>No groups listed</h2></li>`;