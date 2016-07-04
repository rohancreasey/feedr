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





  // renderLoading(state, container)
  renderNav(state, header)

})()
