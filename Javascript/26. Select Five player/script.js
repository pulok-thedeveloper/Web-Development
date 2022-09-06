const buttons = document.getElementsByClassName('select-btn');
let playerAdded = 0;
for(const button of buttons){
    button.addEventListener('click',function(event){

        if(playerAdded <5){
            const playerName = event.target.parentNode.querySelector('.player-name').innerText;

            const playerImage = event.target.parentNode.parentNode.querySelector('.player-img').getAttribute('src');

            const listContainer = document.getElementById('list-container');

            const selectedPlayerContainer = document.createElement('li');
            selectedPlayerContainer.classList.add('flex','items-center','item');

            const selectedPlayerImage = document.createElement('img');
            selectedPlayerImage.setAttribute('src',playerImage);
            selectedPlayerImage.classList.add('w-2/6','rounded-md','pr-3');

            const selectedPlayerName = document.createElement('h3');
            selectedPlayerName.classList.add('pr-3');
            selectedPlayerName.innerText = playerName;

            const cancelIcon = document.createElement('i');
            cancelIcon.classList.add('fa-solid','fa-xmark','bg-red-600','rounded-full','py-0.5','px-1.5');


            const cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.appendChild(cancelIcon);

            selectedPlayerContainer.appendChild(selectedPlayerImage);
            selectedPlayerContainer.appendChild(selectedPlayerName);
            selectedPlayerContainer.appendChild(cancelBtn);

            listContainer.appendChild(selectedPlayerContainer);

            event.target.setAttribute("disabled", true);
            event.target.style.backgroundColor = 'gray';

            playerAdded = listContainer.querySelectorAll('.item').length;
            console.log(playerAdded);

            const allCancelbtns = document.getElementsByClassName('cancel-btn');
            for(const cancelBtn of allCancelbtns){
                cancelBtn.addEventListener('click',function(event){
                event.target.parentNode.parentNode.remove();
                playerAdded = listContainer.querySelectorAll('.item').length;

                })
            }
        }
        else{
            alert('You can select only five players')
        }

    })
    
}




















// const buttons = document.getElementsByClassName('select-btn');
// let playerAdded = 0;
// for (const button of buttons) {
//     button.addEventListener("click", function (event) {
//         playerAdded++;
//         if (playerAdded < 6) {
//             const playerName = event.target.parentNode.querySelector('.player-name').innerText;

//             const listContainer = document.getElementById("list-container");
//             const li = document.createElement("li");
//             li.classList.add("item");
//             li.innerText = playerAdded + ". " + playerName;
//             listContainer.appendChild(li);
//             event.target.setAttribute("disabled", true);
//             event.target.style.backgroundColor = 'gray';
//         }
//         else {
//             alert('You can select only five players');
//         }
//     });
// }


document.getElementById('calculate-player-expenses').addEventListener('click', function () {
    const perPlayerPrice = getInputFieldValueById('per-player-field');
    const playerExpenses = perPlayerPrice * playerAdded;
    document.getElementById('player-expenses').innerText = playerExpenses;
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerExpense = getInputFieldValueById('manager-field');
    const coachExpense = getInputFieldValueById('coach-field');
    const playerExpenses = getTextElementValueById('player-expenses');
    const totalExpense = playerExpenses + managerExpense + coachExpense;
    document.getElementById('total-expense').innerText = totalExpense;
})