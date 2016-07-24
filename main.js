/**
 * Project 2: Feedr
 * ====
 *
 * See the README.md for instructions
 */

(function() {

  var container = document.querySelector('#container')  // container div inside body
  var header = document.querySelector('header') // header 
  var state = {
       newsSources : [
            {
              name: 'Reddit',
              url: 'https://www.reddit.com/top.json'      
            },
            {
              name: 'Mashable',
              url: 'https://crossorigin.me/http://mashable.com/stories.json' 
            },
            {name: 'newsSource1rohan'},
            {name: 'newsSource2amy'},
            {test: 'testValue'}       
        ],    // array of article sources

        articles : []
  }


// renderLoading call for loading pacman
  function renderLoading(data, into) {
    // TODO: Add the template
      into.innerHTML = `        
        <div id="pop-up" class="loader">
          </div>
      `
  }


function renderNavItem(item) {    // returns 
      // ? needs () around html?
      return `                   
        <a href="${item.name}">
            ${item.name}
        </a>
  	   `
}

/* renderNav function to show nav bar
   array.map function creates new array 
   with results of calling renderSource() on every element in state.newsSources array
*/
function renderNav(state, header) {
    //setting HTML of our into parameter (header is the html you're rendering into)
    header.innerHTML = `
    <section class="wrapper">
      <a href="#"><h1>Feedr</h1></a>
      <nav>
        <section id="search">
          <input type="text" name="name" value="">
          <div id="search-icon"><img src="images/search.png" alt="" /></div>
        </section>
        <ul>
          <li><a href="#">News Source: <span>Source Name</span></a>
          <ul>
            ${state.newsSources.map((item) => {
                //return renderNavItem function, which returns some html (line 35)
                return `<li>${renderNavItem(item)}</li>`
            }).join('')}
          </ul>
          </li>
        </ul>
      </nav>
      <div class="clearfix"></div>
    </section>
    `
}


// renderArticleList() to show list of articles, inside #container
function renderArticleListContainer(state, into) {
  into.innerHTML = `
     <section id="main" class="wrapper">
     MOO
            ${state.articles.map((article) => {
                return renderArticle(article)
            }).join('')}

    </section>  
  `
}


function renderArticle(article) {
    return(`
        <article class="article">
        <section class="featured-image">
          <img src="${article.img}" alt="" target="_blank" />
        </section>
        <section class="article-content">
          <a href="#"><h3>${article.title}</h3></a>
          <h6>Lifestyle</h6>
        </section>
        <section class="impressions">
          ${article.impressions}
        </section>
        <div class="clearfix"></div>
      </article>
      `
    )
  }






// call functions
  renderLoading(state, container);
  renderNav(state, header);
  renderArticleListContainer(state, container);

// fetch keyword
// fetch('https://www.reddit.com/top.json')
// 	.then(function(response) {
// 		return response.json();
//   }).then(function(dataAsJson) {
//       console.log(dataAsJson);
//       //state.newsSources.push[0]
//     })

// create a function for fetch action as want to repeat it

// function fetchPosts(callback){
// 		fetch(callback.url)   // fetch .url object of callback parameter
//       .then(function(response) {
// 			  return response.json()
// 		}).then(function(dataAsJson) {
// 			  console.log(dataAsJson);
// 		})
// 	}

// fetchPosts(state.newsSources[]); // argument becomes the parameter callback in line 150
//                                   // so should reference newsSources array
//                                   // and callback is then = state.newsSources.array.url objects?


//1. function and 
// function fetchRedditData(){
// 	  fetch('https://www.reddit.com/top.json')
// 	    .then(function(response) {
// 	      return response.json();
// 	    }).then(function(dataAsJson) {
// 	      result.data.children.forEach((item) => {
// 	        console.log(item)
// 	  })
// 	})
// }

// fetchRedditData();

// var article = []
//     article.title = item.data.title,

// Cut and put into where console logging:

function fetchRedditData(){
	  fetch('https://www.reddit.com/top.json')
	    .then(function(response) {
	      return response.json();
	    }).then(function(dataAsJson) {
          console.log(dataAsJson);
          // loop through data
          dataAsJson.data.children.forEach((item) => {
	          var article = {}
            article.title = item.data.title,
            article.img = item.data.thumbnail
            article.url = item.data.url
            article.impressions = item.data.ups
            // article.category = item.data.
            // article.description = item.data.
        
            // push to array
            state.articles.push(article);
	  })
      renderArticleListContainer(state, container)
	})

}

fetchRedditData();

function clickArticle(event){
		event.preventDefault()  //stops opening link
		state.selectedArticle = getArticle(event.delegateTarget.id)
		renderArticleList(state, container)
	}




// Mashable fetch, ES6 function style
function fetchMashableData(){
 fetch('https://crossorigin.me/http://mashable.com/stories.json')
 .then((response) => {
   return response.json()
 }).then((dataAsJson) => {
    console.log(dataAsJson);  
   dataAsJson.new.forEach((item) => {
     var article = {}
         article.title =  item.display_title,
         article.img = item.image,
         article.url =  item.link,
         article.impressions =  item.shares.total,
         article.category =  item.channel,
         article.description =  item.content.plain
         state.articles.push(article);
       })
       renderContainer(state, container);
     })  
}

fetchMashableData();

// Fetch posts - combine by fetching state.newsSources.url ?




// }) closes function for scope and () calls function/page
})() 



// Listen for clicks on drop down
// Fetch data based on what is clicked in drop down
