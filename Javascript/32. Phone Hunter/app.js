const loadPhones = async(searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data)
}

const displayPhones = phones =>{
    // console.log(phones);
    const phonesContainer =document.getElementById('phone-container');
    phonesContainer.innerHTML=``;

    const showAll = document.getElementById('show-all');
    if(phones.length > 10){
        phones = phones.slice(0,10);
        showAll.classList.remove('d-none');
    }

    else{
        showAll.classList.add('d-none');
    }
    

    const noPhone =document.getElementById('no-found-message');
    if(phones.length ==0){
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none');
    }

    phones.forEach(phone =>{
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="p-4 card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                </p>
                <button 
                onclick = "loadPhoneDetails('${phone.slug}')" 
                href="#" 
                class ="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#phoneDetailModal">
                Show Details
                </button>
                
            </div>
        </div>
        `
        phonesContainer.appendChild(phoneDiv);
        
    });
    toggleSpinner(false);
}

document.getElementById('search-btn').addEventListener('click', function(){
    toggleSpinner(true);
    const searchField =document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
})

document.getElementById('search-field').addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        toggleSpinner(true);
        const searchField =document.getElementById('search-field');
        const searchText = searchField.value;
        loadPhones(searchText);
    }
});

const toggleSpinner = isLoading => {
    const loaderSection =document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

const loadPhoneDetails = async id =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone =>{
    const modalTitle =document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText =phone.name;
    modalTitle.inn
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
        <p>${phone.releaseDate ? phone.releaseDate : 'No release Date Found'}</p>
    `
}

loadPhones('a');