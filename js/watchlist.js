const mainContainer = document.querySelector('.main_container')
const watchListContainer = document.querySelector('.watchlist_container');
const wishArray = getWatchlist();

const renderWatchList = () => {
    watchlistHtml = '';
    wishArray.forEach((items) => {
        if(wishArray.length > 0){
        watchlistHtml  += `
        <div class="watchlist_container">
                <div class="film_card">
                        <div class="card_img">
                        <img src="${items.Poster}" alt="">
                        </div>
                        
                        <div class="card_body">
                        <div class="film_card_title">
                        <h4>${items.Title}</h4>
                        <span class="rating">
                        ${items.imdbRating}
                        </span>
                        </div>
                        <div class="film_card_detail">
                            <span class="runtime">
                            ${items.Runtime}
                            </span>
                            <span class="film_card_year">
                            ${items.Genre}
                            </span>
                            <span class='delete_btn'>
                            <i class="fas fa-minus btn"></i>
                            <a class="film_card_btn removeBtn" data-id="${items.imdbID}">
                            Remove
                            </a>
                            </span>
                        </div>
                            <p class="film_card_desc">${items.Plot}</p>
                        </div>
                        
                </div>
                <hr>
                </div>  
                `
                mainContainer.innerHTML = watchlistHtml;
        } 
                

// Remove Movie from Watchlist

const removeBtns = document.querySelectorAll('.delete_btn');
        removeBtns.forEach((btn) => {
                   
            btn.addEventListener('click', (e) => {
                const dataId = e.target.dataset.id;
                    
                const movieIndex = wishArray.findIndex(movie => {
                        return movie.imdbID === dataId;
                    })
                    // Index to be remove
                    if (movieIndex > -1) {
                        
                        wishArray.splice(movieIndex, 1)
                        saveMovie();
                        
                        if (!wishArray.length > 0){
                            mainContainer.innerHTML = `
                            <div class="watch_container">
                            <div>
                                <h2>Your watchlist is looking a little empty...</h2>
                                <span class="watch_span">
                                 <i class="fas fa-plus btn"></i>
                                 <a href="./index.html" class="film_card_btn">
                                 Lets add some movies!
                                 </a>
                                 </span>
                            </div>
                            </div>`;
                            
                        }else {
                            renderWatchList();
                        }
                        }
                            
    })
    
});



    })

}
renderWatchList();


    
// renderWatchList();
// watchlistHtml  += `
//         <div class="film_card">
//                 <div class="card_img">
//                  <img src="${items.Poster}" alt="">
//                 </div>
                
//                  <div class="card_body">
//                  <div class="film_card_title">
//                  <h4>${items.Title}</h4>
//                  <span class="rating">
//                  ${items.imdbRating}
//                  </span>
//                  </div>
//                  <div class="film_card_detail">
//                     <span class="runtime">
//                     ${items.Runtime}
//                     </span>
//                      <span class="film_card_year">
//                      ${items.Genre}
//                      </span>
//                      <span>
//                      <i class="fas fa-minus"></i>
//                      <a class="film_card_btn removeBtn" data-id="${items.imdbID}">
//                      Remove
//                      </a>
//                      </span>
//                  </div>
//                      <p class="film_card_desc">${items.Plot}</p>
//                  </div>
                
//         </div>
//         <hr>  
// `
// watchListContainer.innerHTML = watchlistHtml;




























// const removeMovie = (id) => {
//     const movieIndex = wishArray.findIndex((movie) => {
//         return movie.id === id
//     })

//     if (movieIndex > -1) {
//         console.log('hello');
//         wishArray.splice(movieIndex, 1)
//         localStorage.setItem('wishlist', JSON.stringify(wishArray));
//     }
// }    
        
// }
// console.log(getWatchlist);
// getWatchlist.forEach((watchListItem) => {
//     console.log(watchListItem[0].Title);
// });
// fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9a1fa702&t=woman&plot=full`)
// .then(res => res.json())
// .then(data => console.log(data))