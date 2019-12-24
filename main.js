// https://mysafeinfo.com/api/data?list=bestnovels7&format=json&case=default
// https://mysafeinfo.com/api/data?list=teamlistus&format=json&case=default
// https://mysafeinfo.com/api/data?list=continents&format=json&case=default
let allViews = document.querySelectorAll(".view")
let booksTable = document.querySelector("#books-table");
let sportTable = document.querySelector("#sport-table");
let continentsTable = document.querySelector(".continents-table")
let booksBtn = document.querySelector(".books-btn")
let sportsBtn = document.querySelector(".sports-btn")
let continentsBtn = document.querySelector(".continents-btn")

sportsBtn.addEventListener("click",getSports)
continentsBtn.addEventListener("click",getContinents)

function getSports(e){
	e.preventDefault()
	showViews("#sport-view")
	let xml2 = new XMLHttpRequest()
xml2.open("get","https://mysafeinfo.com/api/data?list=teamlistus&format=json&case=default")
xml2.onreadystatechange = function(){
	if (xml2.readyState == 4 && xml2.status == 200) {
		createSports(JSON.parse(xml2.responseText))
	}
}
xml2.send()
}
function getContinents(e){
	e.preventDefault()
	showViews("#continents-view")
	let xml3 = new XMLHttpRequest()
xml3.open("get","https://mysafeinfo.com/api/data?list=continents&format=json&case=default")
xml3.onreadystatechange = function(){
	if (xml3.readyState == 4 && xml3.status == 200) {
		createContinents(JSON.parse(xml3.responseText))
	}
}
xml3.send()
}

let xml = new XMLHttpRequest()
xml.open("get","https://mysafeinfo.com/api/data?list=bestnovels7&format=json&case=default")
xml.onreadystatechange = function(){
	if (xml.readyState == 4 && xml.status == 200) {
		createBooks(JSON.parse(xml.responseText))
	}
}
xml.send()

function showViews(table){
	console.log(table)
	console.log(allViews)
	for (var i = 0; i < allViews.length; i++) {
		allViews[i].style.display = "none";
	}
	document.querySelector(table).style.display = "block"
}


function createBooks(books){
	// console.log(books)
	let text = "";
	for (var i = 0; i < books.length; i++) {
		text += `
		<tr>
		<td>${books[i].Rank}</td>
		<td>${books[i].Title}</td>
		<td>${books[i].Author}</td>
		<td>${books[i].Published}</td>
		</tr>
		`
	}
	booksTable.innerHTML = text;
}
function createSports(sports){
	console.log(sports)
	let text = "";
	for (var i = 0; i < sports.length; i++) {
		text += `
		<tr>
		<td>${sports[i].Team}</td>
		<td>${sports[i].League}</td>
		<td>${sports[i].Conference}</td>
		<td>${sports[i].Stadium}</td>
		</tr>
		`
	}
	sportTable.innerHTML = text;
}
function createContinents(continents){
	console.log(continents)
	let text = "";
	for (var i = 0; i < continents.length; i++) {
		text += `
		<tr>
		<td>${continents[i].Name}</td>
		<td>${continents[i].Population}</td>
		<td>${continents[i].AreaKM}</td>
		<td>${continents[i].PctGlobalLand}</td>
		</tr>
		`
	}
	continentsTable.innerHTML = text;
}