var e = document.getElementsByClassName('page-link');
var word = e[e.length-1].getAttribute('href');
var a = word.split('/');
var nbwords = a.length;

//https://mangadex.org/list/55668/0/2/3/
for (let page=1; page<a[a.length-2];page++) {
	httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', 'https://mangadex.org/list/55668/0/2/'+page, true);
	httpRequest.send();

	var title = document.getElementsByClassName('ml-1 manga_title text-truncate');
	var status = document.getElementsByClassName('d-none d-xl-inline');
	console.log(status);
	//var classflag = document.getElementsByClassName('flag');
	var temp = {};
	var p = 0;
	
	for (let i=0;i<title.length;i++) {
		var serie = {
			id: i+1,
			title: title[i].textContent,
			//country: classflag[i].getAttribute('title'),
			status: status[i],
			link: "https://mangadex.org"+title[i].getAttribute('href')
		}
		temp[serie.id] = serie;
	}
	JSON.stringify(temp, null, '\t');
}
//JSON.stringify(temp, null, '\t');