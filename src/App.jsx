import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div class="gora1">
    <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div class="gora2">
      <h1>Moja pierwsza strona REACT</h1>
    </div>
   
<div class="content">
    <div class="lewa">
    <h1>Bartosz Omiotek</h1>
      <h3>Gr:6, Nr indeksu: 113969</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      </div>


    <div class="prawa">
    <h1>Bartosz Omiotek</h1>
      <h3>Gr:6, Nr indeksu: 113969</h3>
      <ul id="gallery" class="rvnGallery">
	<li>
		<img src="img/1.png" alt="pierwszy obrazek" />
		<p>Pierwszy obrazek.</p>
	</li>
	<li>
		<img src="img/2.png" alt="drugi obrazek" />
	</li>
	<li>
		<img src="img/3.png" alt="trzeci obrazek" />
		<p><strong>Pogrubiony podpis.</strong></p>
	</li>
	<li>
		<a href="http://rvn-gallery.krukowski.me"><img src="img/6.png" alt="czwarty obrazek" /></a>
		<p>Tutaj jest link do tej strony.</p>
	</li>
	<li>
		<img src="img/5.png" alt="piąty obrazek" />
	</li>
	<li>
		<img src="img/4.png" alt="szósty obrazek" />
		<p>Ostatni obrazek.</p>
	</li>
</ul>
<script>
$(window).load(function(){
	$('#gallery').rvnGallery({effect: ['randomBoxes', 'tiles', 'alphaRect'], verticalSlices: 6, horizontalSlices: 4});
});
</script>
      </div>
      </div>
      <div class= "footer">
      
      <h3>Bartosz Omiotek Gr:6, Nr indeksu: 113969</h3> 
      
      
      </div>
      
      <p className="read-the-docs">
       
      </p>

    </>
  )
}

export default App
