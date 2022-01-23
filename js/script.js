//fake datake dhorar jonno kora hoice...
const milestonesData = JSON.parse(data).data;
console.log(milestonesData);

// load course milestonesData

function loadMilestones() {
  const milestones = document.querySelector(".milestones");

  // data guloke map kore sajano hoice...
  milestones.innerHTML = `${milestonesData
    .map(function (milestone) {
      return `<div class="milestone border-b" id="${milestone._id}">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${
            milestone._id
          })" /></div>
          <div onclick="openMilestone(this, ${milestone._id})">
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
          ${milestone.modules
            .map(function (module) {
              return `<div class="module border-b">
              <p>${module.name}</p>
            </div>`;
            })
            .join("")}
        </div>
      </div>`;
    })
    .join("")}`; // join deya hoice data gulor moddekar comma(,) take tule deyar jonno..
}

// jei milestone a click korle hidded_item gulo open hobe tai sei div er moddhe onclick er moddhe funciton take pass kora hoice r sei item take "this" akare pass kora hoice r akhane seta milestoneElement hishebe received kora hoice..

function openMilestone(milestoneElement, id) {
  // hidden_item k show korar jonno select kora hoice..
  const currentPanel = milestoneElement.parentNode.nextElementSibling;
  // joto gula shown item ace seigulake select kora hoice
  const shownitem = document.querySelector(".show");
// active item guloke selec kora hoice..
  const active = document.querySelector(".active");

//ata kora hoice j milestone open korbo tar age konota open thkle close hoye jabe..
  if (!currentPanel.classList.contains("show") && shownitem) {
    shownitem.classList.remove("show");
  }

// jetake click kora hobe seta bold hobe bt baki gulo bold hobe na tai ata kore hoice..
  if(active && !milestoneElement.classList.contains("active")){
      active.classList.remove("active");
  }
// milestone div er moddhe active class add kore deya hoice r atar css , css file a deya ace..
  milestoneElement.classList.toggle("active");




  // hidden_item toggle akare show hobe..akhane show class add kore deya hoice r css kore deya hoice bole show korbe ba j class deya ace seta dhorew kora jay..
  currentPanel.classList.toggle("show");

  showMilestone(id)
}

// step-1: milestone div er moddhe jei onclick er moddhe function deya hoice setar moddhe id take pass kora hoice.
// step-2: sei function er modde perameter akare "id" take dhora hoice...
// step-3: sei id take showMilestone(id) aivabe dhore baki kaj gulo kora hoice..
function showMilestone(id){
// jekhane jekhane dynamically change kora hobe seigulake select kore neya hoice
   const milestoneImage = document.querySelector(".milestoneImage") ;
   const title= document.querySelector(".title");
   const details = document.querySelector(".details");

   milestoneImage.style.opacity ="0";

   // sei id dhore dhore jeta jeta chane kora dorkar seta kora hoice..
   milestoneImage.src = milestonesData[id].image;
   title.innerText =milestonesData[id].name;
   details.innerText =milestonesData[id].description;
  
}
//first a opacity 0 kore deya hoice..
//then shundor akta effect akare image show korar jonno aita kora hoice image er upor...
   const milestoneImage = document.querySelector(".milestoneImage") ;
   milestoneImage.onload = function() {
   milestoneImage.style.opacity ="1";

   }

   function markMileStone(checkbox, id) {
    const doneList = document.querySelector(".doneList");
    const milestonesList = document.querySelector(".milestones");
    const item = document.getElementById(id);
  
    if (checkbox.checked) {
      // mark as done
      milestonesList.removeChild(item);
      doneList.appendChild(item);
    } else {
      // back to main list
      milestonesList.appendChild(item);
      doneList.removeChild(item);
  
      // task - do the sorting
      // reload list
    }
  }


loadMilestones();
