/**
 * Project 2: Feedr
 * ====
 *
 * See the README.md for instructions
 */

(function() {

  var container = document.querySelector('#container')
  var header = document.querySelector('header')
  var state = {
       newsSources : 
        ['newsSource0rohan','newsSource1jess','newsSource2amy'],
  }


// call loading pacman
  function renderLoading(data, into) {
    // TODO: Add the template
      into.innerHTML = `        
        <div id="pop-up" class="loader">
          </div>
      `
  }


function renderSource(source) {
      return `
        <a href="#">
            ${source}
        </a>
  	   `
}


// render nav bar - 
function renderNav(state, into) {
    into.innerHTML = `
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
            ${state.newsSources.map((source) => {
                return `<li>${renderSource(source)}</li>`
            }).join('')}
          </ul>
          </li>
        </ul>
      </nav>
      <div class="clearfix"></div>
    </section>
    `
}



// // render nav bar - ORIGINAL
// function renderNav(state, into) {
//     into.innerHTML = `
//     <section class="wrapper">
//       <a href="#"><h1>Feedr</h1></a>
//       <nav>
//         <section id="search">
//           <input type="text" name="name" value="">
//           <div id="search-icon"><img src="images/search.png" alt="" /></div>
//         </section>
//         <ul>
//           <li><a href="#">News Source: <span>Source Name</span></a>
//           <ul>
//             <li><a href="#">${state.newsSources[0]}</a></li>
//             <li><a href="#">${state.newsSources[1]}</a></li>
//             <li><a href="#">${state.newsSources[2]}</a></li>
//           </ul>
//           </li>
//         </ul>
//       </nav>
//       <div class="clearfix"></div>
//     </section>
//     `
// }



// render Article List - inside container
function renderArticleList(state, into) {
  into.innerHTML = `
     <section id="main" class="wrapper">
     MOO
      <article class="article">
        <section class="featured-image">
          <img src="images/article_placeholder_1.jpg" alt="" />
        </section>
        <section class="article-content">
          <a href="#"><h3>Test article title</h3></a>
          <h6>Lifestyle</h6>
        </section>
        <section class="impressions">
          526
        </section>
        <div class="clearfix"></div>
      </article>
      <article class="article">
        <section class="featured-image">
          <img src="images/article_placeholder_2.jpg" alt="" />
        </section>
        <section class="article-content">
          <a href="#"><h3>Test article title</h3></a>
          <h6>Lifestyle</h6>
        </section>
        <section class="impressions">
          526
        </section>
        <div class="clearfix"></div>
      </article>
      <article class="article">
        <section class="featured-image">
          <img src="images/article_placeholder_2.jpg" alt="" />
        </section>
        <section class="article-content">
          <a href="#"><h3>Test article title</h3></a>
          <h6>Lifestyle</h6>
        </section>
        <section class="impressions">
          526
        </section>
        <div class="clearfix"></div>
      </article>
      <article class="article">
        <section class="featured-image">
          <img src="images/article_placeholder_1.jpg" alt="" />
        </section>
        <section class="article-content">
          <a href="#"><h3>Test article title</h3></a>
          <h6>Lifestyle</h6>
        </section>
        <section class="impressions">
          526
        </section>
        <div class="clearfix"></div>
      </article>
    </section>  
  `
}



  // renderLoading(state, container)
  renderNav(state, header)
  renderArticleList(state, container)

})()
