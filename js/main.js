//  Search Button

searchResult = () => {
    const inputField = document.querySelector('#input');
    const searchText = inputField.value;
    inputField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
      .then(res => res.json())
      .then(data => display(data))
  }
  // Display Search Result --
  const display = (data) => {
    const mainDivRef = document.querySelector('#bookContainer');
    mainDivRef.textContent = '';
    if (data.numFound == 0) {
      const getResult = document.querySelector('#result');
      getResult.innerHTML = `<h3 class="text-danger">Invalid result</h3>`;
    } else {
      const rootData = data.docs;
      const dataSlice = rootData.slice(1, 22);
      dataSlice.forEach((items) => {
  
        const mainDiv = document.querySelector('#bookContainer');
        const mkDiv = document.createElement('div');
        const addClass = mkDiv.classList.add(`col-md-4`);
        const imgSrc = `src="../images/mac.png"`;
        const serverImg = `src="https://covers.openlibrary.org/b/id/${items.cover_i}-M.jpg"`
  
        mkDiv.innerHTML = `    
         <div class="card my-3">
             <img class="card-img-top img-fluid" ${items.cover_i===undefined?imgSrc:serverImg}>
             <div class="card-body">
               <h5 class="card-title text-primary">Book Name : ${items.title}</h5>
            <p class="card-title">Author Name : ${items.author_name===undefined?"It's undefined": items.author_name[0]}</p>
               <p class="card-title">First Publish Year : ${items.publish_year===undefined?" It's undefined":items.publish_year[0]}</p>
               
               <a class="btn btn-primary">Order Now!</a>
             </div>
           </div>
         `;
        
        mainDiv.appendChild(mkDiv);
  
        // Get total result ----
  
        getResult = document.querySelector('#result');
        getResult.innerHTML = `<h3 class="text-danger">Search Result : 20 of ${data.numFound}</h3>`;
      })
    }
  }
  
  
  // END ----------