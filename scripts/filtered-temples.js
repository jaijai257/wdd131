const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Brigham City Utah Temple",
	  location: "Brigham City, Utah, United States",
	  dedicated: "2012, September, 23",
	  area: 36000,
	  imageUrl:
	  "https://www.churchofjesuschrist.org/imgs/0db130c38685c08bda79ef70b80ab4dbbf075cc9/full/3840%2C/0/default"
	},
	{
		templeName: "Accra Ghana",
		location: "Accra, Ghana",
		dedicated: "2004, January, 11",
		area: 17500,
		imageUrl:
		"https://churchofjesuschrist.org/imgs/fac2f821c9895e1acd1325cbdb3fa447c4bb4e19/full/3840%2C/0/default"
	},
	{
		templeName: "Boston Massachusetts Temple",
		location: "Belmont, Massachusetts, United States",
		dedicated: "2000, October, 1",
		area: 69600,
		imageUrl:
		"https://www.churchofjesuschrist.org/imgs/49ce57ffd3ae51ba9b29e6dc5d6b156c79e08dd2/full/1920%2C/0/default"
	},
	{
		templeName: "Calgary Alberta Temple",
		location: "Calgary, Alberta, Canada",
		dedicated: "2012, October, 28",
		area: 33000,
		imageUrl:
		"https://www.churchofjesuschrist.org/imgs/fe90ecb3fc8a72241e1906b4bed1296650b0a0e7/full/1280%2C/0/default"
	},
	{
		templeName: "Denver Colorado Temple",
		location: "Centennial, Colorado, United States",
		dedicated: "1986, October,24-28",
		area: 29117,
		imageUrl:
		"https://www.churchofjesuschrist.org/imgs/0b6461093b5abb78869c2fc094f0dcd6b492fce2/full/1280%2C/0/default"
	},
  ];

  displayTemples(temples);

  function displayTemples(filteredTemples) {
	  document.querySelector(".grid-temple").innerHTML = "";
	  filteredTemples.forEach(temple => {
		  let card = document.createElement("section");
		  let name = document.createElement("h3");
		  let location = document.createElement("p");
		  let dedicated = document.createElement("p");
		  let area = document.createElement("p");
		  let img = document.createElement("img");
  
		  name.textContent = temple.templeName;
		  location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		  dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		  area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
		  img.setAttribute("src", temple.imageUrl);
		  img.setAttribute("alt", `${temple.templeName} Temple`);
		  img.setAttribute("loading", "lazy");
  
		  card.appendChild(name);
		  card.appendChild(location);
		  card.appendChild(dedicated);
		  card.appendChild(area);
		  card.appendChild(img);
  
		  document.querySelector(".grid-temple").appendChild(card);
	  });
  }
  
  document.querySelector("#home").addEventListener("click", () => displayTemples(temples));
  document.querySelector("#old").addEventListener("click", () => displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900)));
  document.querySelector("#new").addEventListener("click", () => displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000)));
  document.querySelector("#large").addEventListener("click", () => displayTemples(temples.filter(t => t.area > 90000)));
  document.querySelector("#small").addEventListener("click", () => displayTemples(temples.filter(t => t.area < 10000)));