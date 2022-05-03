const getWatchlist = () => {
    
    const wishArray = localStorage.getItem('wishlist');

    if (wishArray !== null) {
        return JSON.parse(wishArray);
    }else{
       return [];
    };
}

const saveMovie = () => {
    localStorage.setItem('wishlist', JSON.stringify(wishArray));
}