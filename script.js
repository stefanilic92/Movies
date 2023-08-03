let allTotal = 0;

function addToCart(element) {
    
    let mainEl = element.closest('.single-item');
    
    let price = mainEl.querySelector('.price').innerText;
    
    price = price.substring(1);
    
    let name = mainEl.querySelector('h3').innerText;
    
    let cartItems = document.querySelector('.cart-items');
    
    let total = parseInt(price);
    
    allTotal += total;
    
    cartItems.innerHTML += `<div class="cart-single-item">
                                <h3>${name}</h3>
                                <p>${total}$</p>
                                <button onclick="removeFromCart(this)" class="remove-item">Remove</button>
                                </div>`;
    
    document.querySelector('.total').innerText = `Total: ${allTotal}$`; // U klasi total ispisujemo alltotal

        element.innerText = 'X';                    //Menja text kliknutog dugmeta u X
        element.setAttribute('disabled', 'true');
       
}

function removeFromCart(element) {
    
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let movies = document.querySelectorAll('.single-item');
    
    
    allTotal -= parseInt(price);
    document.querySelector('.total').innerText = `Total: ${allTotal}$`;
    
    mainEl.remove();
    
        
    movies.forEach(function (movie){
        
        let movieName = movie.querySelector('.si-content h3').innerText;
        
        if(movieName === name){
            movie.querySelector('.action button').removeAttribute('disabled');
            movie.querySelector('.action button').innerText = 'Watch online';
        }
    });
                 
}

 /* Vezba na osnovu projekta Shoping Cart u kojoj imam dodatne komentare
  * koji objasnjavaju skoro svaku liniju koda, ako nesto zaboravis
  * mozes ih potraziti u projektu Shoping Cart !*/
 