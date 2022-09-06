var carObject = {
    vehicle : "Car",
    imgUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    farePerKilo: 5,
    capacity: 4,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam tempora cupiditate eligendi aspernatur totam amet, maiores dolores odio exercitationem harum."
};
var bikeObject = {
    vehicle : "Bike",
    imgUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    farePerKilo: 2,
    capacity: 2,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam tempora cupiditate eligendi aspernatur totam amet, maiores dolores odio exercitationem harum."
};
var busObject = {
    vehicle : "Bus",
    imgUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    farePerKilo: 10,
    capacity: 40,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam tempora cupiditate eligendi aspernatur totam amet, maiores dolores odio exercitationem harum."
};

const objectArray=[carObject,bikeObject,busObject];

function displayCards(card){
    const mainSection = document.getElementById('main-section');
    const stringified = JSON.stringify(card);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card my-3 mx-auto" style="max-width: 980px">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${card.imgUrl}" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Transport Mood: ${card.vehicle}</h5>
              <p class="card-text">
                ${card.description}
              </p>
              <p class="card-text">
                <small class="text-muted">Fareperkilo: ${card.farePerKilo}</small>
                <small class="text-muted">Capacity: ${card.capacity}</small>
              </p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='handleBooking(${stringified})' data-bs-target="#exampleModal">
              BOOK NOW
              </button>

            </div>
          </div>
        </div>
      </div>
    `
    mainSection.appendChild(div);
}

function handleBooking(obj){
  const modalBody = document.getElementById('modal-body');
  const stringified = JSON.stringify(obj);

  modalBody.innerHTML = `
  <div class="card mx-auto" style="width: 28rem;">
  <img src="${obj.imgUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Mood: ${obj.vehicle}</h5>
    <p class="card-text">${obj.description}</p>
    <p class="card-text">
      <small class="text-muted">Fareperkilo: ${obj.farePerKilo}</small>
      <small class="text-muted">Capacity: ${obj.capacity}</small>
    </p>
    <p>Fare: 
      <small class="text-muted" id="fare"></small>
    </p>
    <p>Tax: 
      <small class="text-muted" id="tax"></small>
    </p>
    <p>Total: 
      <small class="text-muted" id="total"></small>
    </p>
    <div class="d-flex" role="search">
      <input
        class="form-control me-2"
        id="distance-field"
        type="number"
        placeholder="Distance"
        aria-label="Search"
      />
      <input
        class="form-control me-2"
        id="quantity-field"
        type="number"
        placeholder="Quantity"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit" onclick='calculateCost(${stringified})'>
        Calculate
      </button>
    </div>
  </div>
</div>
  `
}

function calculateCost(obj){
   const distance = document.getElementById("distance-field").value;

   const quantity = document.getElementById("quantity-field").value;

   const fareDiv = document.getElementById("fare");

   fareDiv.innerText = distance * obj.farePerKilo * quantity;
   
}

function displayAllCards(objArr){
  for(const element of objArr){
    displayCards(element);
  }
}

displayAllCards(objectArray);


document.getElementById('search-btn').addEventListener('click',function(){
  const searchValue= document.getElementById('search-field').value;

  for(let i =0; i < objectArray.length; i++){
    const element = objectArray[i];
    if(searchValue.toLowerCase() == element.vehicle.toLowerCase()){
      document.getElementById('main-section').innerHTML = "";
      displayCards(element);
      console.log(element);
    }
    
  }
})