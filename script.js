let contacts = [
	{
		name: "Noreen",
		image: "org7.jpg",
		lastMsg: "I will meet you reply me soon please",
		lastMsgTime: "Yesterday",
		lastMsgStatus: "seen",
		status: "don't talk what's app only",
		email: "noreennaz2000@gmail.com",
		phoneNo: "03337734702"
	},
	{
		name: "Shama",
		image: "org8.jpg",
		lastMsg: "Are you there?? reply me soon please",
		lastMsgTime: "Yesterday",
		lastMsgStatus: "sent",
		status: "So many books,so little time",
		email: "shamababul2000@gmail.com",
		phoneNo: "03337734701"
		
	},
	{
		name: "Inshal",
		image: "butterfly.jpg",
		lastMsg: "bring my pen reply me soon please",
		lastMsgTime: "Yesterday",
		lastMsgStatus: "not sent",
		status: "So many books,so little time",
		email: "inshal2000@gmail.com",
		phoneNo: "03337734703"
	},
	{
		name: "Fatima",
		image: "cinderella.jpg",
		lastMsg: "I will come on time reply me soon please",
		lastMsgTime: "Yesterday",
		lastMsgStatus: "sent",
		status: "Urgent calls only",
		email: "fatima2000@gmail.com",
		phoneNo: "03337734704"
	},
	{
		name: "Jiya",
		image: "org9.jpg",
		lastMsg: "Is there party?? reply me soon please",
		lastMsgTime: "Yesterday",
		lastMsgStatus: "seen",
		status: "So many books,so little time",
		email: "jiya2000@gmail.com",
		phoneNo: "03337734705"
	},
	{
		name: "Nida",
		image: "org5.jpg",
		lastMsg: "stop it its over dont call me back",
		lastMsgTime: "Yesterday",
		lastMsgStatus: "not sent",
		status: "So many books,so little time",
		email: "Nida2000@gmail.com",
		phoneNo: "03337734706"
	},
	{
		name: "Anum",
		image: "org3.jpg",
		lastMsg: "Next time dear i cant attend this time",
		lastMsgTime: "Yesterday",
		lastMsgStatus: "sent",
		status: "So many books,so little time",
		email: "syeda2000@gmail.com",
		phoneNo: "03337734707"
	},
	{
		name: "Saba",
		image: "org1.jpg",
		lastMsg: "Was you present?? reply me soon please",
		lastMsgTime: "Yesterday",
		lastMsgStatus: "seen",
		status: "So many books,so little time",
		email: "saba2000@gmail.com",
		phoneNo: "03337734708"
	},
	{
		name: "khan12",
		image: "night.jpg",
		lastMsg: "No,it was not reply me soon please",
		lastMsgTime: "Yesterday",
		lastMsgStatus: "not sent",
		status: "So many books,so little time",
		email: "khan122000@gmail.com",
		phoneNo: "03337734709"
	},
	{
		name: "Kiran",
		image: "org2.jpg",
		lastMsg: "join you latter reply me soon please",
		lastMsgTime: "Yesterday",
		lastMsgStatus: "sent",
		status: "So many books,so little time",
		email: "kiran2000@gmail.com",
		phoneNo: "033377347035"
	}

]

function initialize() {
	const contactsListEl = document.querySelector("#contacts-list");
	for (let i = 0; i < contacts.length; i++) {

		let icon;
		if (contacts[i].lastMsgStatus === "seen") {
			icon = "check-double";
		} else if (contacts[i].lastMsgStatus === "sent") {
			icon = "check";
		} else {
			icon = "clock";
		}

		contactsListEl.innerHTML += 

		`
		<section class="person-item">
		<div class="person-img" style="background-image: url('images/${contacts[i].image}')">
		</div>
		<div class="after-person-img" onclick="changeCeleb(${i})">
			<div class="content-center">
				<h4 class="name">${ contacts[i].name }</h4>
				<div class="msg-container">
					<i class="fas fa-${icon}"></i>
					<p class="msg">${ contacts[i].lastMsg }</p>
				</div>
				</div>
			<p class="time">${ contacts[i].lastMsgTime}</p>
		</div>
	</section>
		`
	}
}

function changeCeleb(celebIndex) {
	console.log(contacts[celebIndex].name);
	document.querySelector("#celeb-img").style["display"] = `block`;
	document.querySelector("#celeb-img").style["background-image"] = `url(images/${contacts[celebIndex].image})`;
	document.querySelector("#celeb-name").innerHTML = contacts[celebIndex].name;
	document.querySelector("#celeb-phoneNo").innerHTML = `<i id="celeb-phone" class="fas fa-phone"></i>`;
	document.querySelector("#celeb-phoneNo").innerHTML += contacts[celebIndex].phoneNo;
	document.querySelector("#celeb-email").innerHTML = `<i id="celeb-envelope" class="far fa-envelope"></i>`;
	document.querySelector("#celeb-email").innerHTML += contacts[celebIndex].email;
	document.querySelector("#celeb-status").innerHTML = contacts[celebIndex].status;
}
