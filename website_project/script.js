const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9427b77c3cmshd6eb22646b7a6b3p15da46jsn00e3ee8f118b',
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
};
//The function storesearch searches the web
function storesearch(){
//Fetches links in JSON format
fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q='+ "dog" + document.getElementById("searchinput").value + '&pageNumber=1&pageSize=10&autoCorrect=true', options)
	.then(response => response.text())
  .then(result => {
  const parseData = JSON.parse(result);
  document.getElementById("Website").href = parseData.value[0].url;
  document.getElementById("Website").text = parseData.value[0].title;
  document.getElementById("Website2").href = parseData.value[1].url;
  document.getElementById("Website2").text = parseData.value[1].title;
  document.getElementById("Website3").href = parseData.value[2].url;
  document.getElementById("Website3").text = parseData.value[2].title;
  document.getElementById("Website4").href = parseData.value[3].url;
  document.getElementById("Website4").text = parseData.value[3].title;
})
  .catch(err => console.error(err))
document.getElementById("Website").style.opacity = 1;
document.getElementById("Website2").style.opacity = 1;
document.getElementById("Website3").style.opacity = 1;
document.getElementById("Website4").style.opacity = 1;
document.getElementById("flexbox").style.height = "20vh";
};


function searching(key){
  if(key.keyCode === 13){
    storesearch();
  };
};




