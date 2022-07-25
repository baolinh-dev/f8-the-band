var sliderContainer =  document.querySelector('#slider')
var listImages = [ 
    { 
        heading: 'New York', 
        descrip: 'The atmosphere in New York is lorem ipsum.',
        pathSong: './assets/images/ny.jpg',
    }, 
    {   
        heading: 'Los Angeles', 
        descrip: "We had the best time playing at Venice Beach!",
        pathSong:  './assets/images/la.jpg', 
    },
    { 
        heading: 'Chicago', 
        descrip: "Thank you, Chicago - A night we won't forget.",
        pathSong: './assets/images/chicago.jpg'
    }   
    
] 
var i = 0
setInterval(function() {  
sliderContainer.innerHTML = 
`
        <img src=${listImages[i].pathSong} class="slider--image"> 
        <div class="slider--content">
            <h3 class="slider--content__heading">${listImages[i].heading}</h3> 
            <p class="slider--content__description">${listImages[i].descrip}</p>
        </div>
`
    i++;  
    if(i == 3){ 
        i = 0
    }
}, 4000); 

// Click Menu Btn   
var menuMobi = document.querySelector('.menu-mobi') 
var headerMobi = document.querySelector('.header-mobi')   
var isClosed = headerMobi.clientHeight ===  headerMobiHeight;   
var headerMobiHeight = 46;
function openMenu(headerMobi){ 
    headerMobi.style.height = 'auto'
}
function closeMenu(headerMobi){ 
    headerMobi.style.height = headerMobiHeight + 'px'
}
menuMobi.onclick = function() {  
    var isClosed = headerMobi.clientHeight ===  headerMobiHeight;    
    if(isClosed){   
        openMenu(headerMobi)
    } else { 
       closeMenu(headerMobi)
    }  
} 
// Click anchor thì đóng Menu 
var anchorMobis = document.querySelectorAll('.nav-mobi > li')   
for(var anchorMobi of anchorMobis) { 
    anchorMobi.onclick = function(){ 
        headerMobi.style.height = headerMobiHeight + 'px'
    }
}   
// Click ngoài cũng đóng menu  
document.onclick = function() { 
    var isClosed = headerMobi.clientHeight ===  headerMobiHeight;  
    if(!isClosed) { 
        closeMenu(headerMobi)
    }
} 
headerMobi.onclick = function(e) { 
    e.stopPropagation()
}
// Xử lí modal  
var modalContainer = document.querySelector('.modal__container')   
var modalTicket = document.querySelector('.modal__ticket')
var displayBlock = document.querySelector('.flex') 
var buyTicketBtns = document.querySelectorAll('.buy-ticket-btn')   
var closeModal = document.querySelector('.btn-close-modal') 
for(var buyTicketBtn of buyTicketBtns) { 
    buyTicketBtn.onclick = function() { 
        modalContainer.classList.add('flex')
    }
} 
closeModal.onclick = function() {  
    modalContainer.classList.remove('flex')
}  
modalContainer.onclick = function() {  
    modalContainer.classList.remove('flex') 
}     
modalTicket.onclick = function(event) { 
    event.stopPropagation();
}





