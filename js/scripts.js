const wishArray = getWatchlist();
const searchInput = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
const movieContainer = document.querySelector('.movie_container')
const mainContainer = document.querySelector('.main_container');

const saveWatchlist = () => {
    localStorage.setItem('wishlist', JSON.stringify(wishArray))
}
searchBtn.addEventListener('click', () => {
    let titlesArray = [];
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9a1fa702&s=${searchInput.value}`)
    .then(res => res.json())
    .then(data => {
        const searchResult = data.Search;
        if (searchResult === undefined) {
            mainContainer.innerHTML = `
            <div class="result_container">
                <h1>
                    Unable to find what you're looking for. Please try another search.
                </h1>
            </div>`
        }
        searchResult.forEach(result => {
            const movieTitle = result.Title;
            fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9a1fa702&t=${movieTitle}`)
            .then(res => res.json())
            .then(titleResult => {
                // console.log(movieTitle)
                let movieCard = '';
                titlesArray.push(titleResult)
                titlesArray.forEach(movie => {
                     movieCard += `
                     <div class="movie_container">
                    <div class="film_card">
                            <div class="card_img">
                             <img src="${movie.Poster}" alt="">
                            </div>
                            
                             <div class="card_body">
                             <div class="film_card_title">
                             <h4>${movie.Title}</h4>
                             <span class="rating">
                             ${movie.imdbRating}
                             </span>
                             </div>
                             <div class="film_card_detail">
                                <span class="runtime">
                                ${movie.Runtime}
                                </span>
                                 <span class="film_card_genre">
                                 ${movie.Genre}
                                 </span>
                                 <span class="remove_container">
                                 <i class="fas fa-plus btn"></i>
                                 <a class="film_card_btn" data-id="${movie.imdbID}">
                                 Wishlist
                                 </a>
                                 </span>
                             </div>
                                 <p class="film_card_desc">${movie.Plot}</p>
                             </div>
                            
                    </div>
                    <hr> 
                    </div> 
                            `
                        })
                
                mainContainer.innerHTML = movieCard;
                const filmCardBtns = document.querySelectorAll('.film_card_btn');

                filmCardBtns.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const dataId = e.target.dataset.id;
                        titlesArray.filter((movie)=>{
                            if(movie.imdbID === dataId){
                               return wishArray.unshift(movie)
                            } 
                        })
                        saveWatchlist(); 
                    })  
                })
            })  
        })  
    })  
})
