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
       newsSources : ['newsSource0','newsSource1','newsSource2'],
  }


// call loading pacman
  function renderLoading(data, into) {
    // TODO: Add the template
      into.innerHTML = `        
        <div id="pop-up" class="loader">
          </div>
      `
  }

// render nav bar
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
            <li><a href="#">Source 1</a></li>
            <li><a href="#">Source 2</a></li>
            <li><a href="#">Source 3</a></li>
          </ul>
          </li>
        </ul>
      </nav>
      <div class="clearfix"></div>
    </section>
    `
}

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
