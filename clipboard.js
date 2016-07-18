
fetch('https://www.reddit.com/top.json')
	.then(function(response) {
		return response.json();
		console.log(response);
	});