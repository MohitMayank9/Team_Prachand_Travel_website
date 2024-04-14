const cards = [
    {
        title: "Agra",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        imagePath: "/assets/image/agra/tajPotrait1.jpg",
        altText: "Agra"
    },
    {
        title: "Ladakh",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        imagePath: "/assets/image/ladakh/ladakPotrait3.jpg",
        altText: "Ladakh"
    },
    {
        title: "Sikkim",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content.",
        imagePath: "/assets/image/sikkim/sikkimPotrait2.jpg",
        altText: "Sikkim"
    },
    {
        title: "Kerela",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        imagePath: "/assets/image/kerela/keralaPotrait1.jpg",
        altText: "Kerela"
    },
    {
        title: "Goa",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        imagePath: "/assets/image/goa/goaPotrait1.jpg",
        altText: "Goa"
    },
    {
        title: "Manali",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content.",
        imagePath: "/assets/image/manali/manaliPotrait1.jpg",
        altText: "Manali"
    },
    {
        title: "Germany",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        imagePath: "/assets/image/germany/germanyPotrait1.jpg",
        altText: "Germany"
    },
    {
        title: "New York",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        imagePath: "/assets/image/newyork/newyorkPotrait1.jpg",
        altText: "New York"
    },
    {
        title: "Paris",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content.",
        imagePath: "/assets/image/paris/ifilPotrait1.jpg",
        altText: "Paris"
    }
];

function renderCards(cards) {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Clear existing content
    cards.forEach(card => {
        container.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${card.imagePath}" class="card-img-top" alt="${card.altText}">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.description}</p>
                    </div>
                </div>
            </div>`;
    });
}

// Initial render of cards

function search(){
    let input = document.getElementById('search').value;
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Clear existing content
    console.log(input);
    cards.forEach(card => {
        if(card.title == input){
            container.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${card.imagePath}" class="card-img-top" alt="${card.altText}">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.description}</p>
                    </div>
                </div>
            </div>`;
        }
        
    });

}
