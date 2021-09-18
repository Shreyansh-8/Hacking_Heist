const button = document.querySelector('button');

let modal;
let backdrop;

var x = document.createElement("INPUT");
x.setAttribute("type", "number");
x.id = 'input1';

const errorText = document.createElement('p');
errorText.id = 'error1';
errorText.textContent = "Please enter a valid age";
errorText.style.color = "Red";
errorText.style.fontWeight = 800;

linebreak = document.createElement("br");
linebreak1 = document.createElement("br");

button.addEventListener('click', showModalHandler);

function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement('div');
  modal.className = 'modal';

  const modalText = document.createElement('p');
  modalText.textContent = 'What is your age?';

  const modalConfirmAction = document.createElement('button');
  modalConfirmAction.textContent = 'Confirm';
  modalConfirmAction.className = 'btn';
  modalConfirmAction.addEventListener('click', redirect);

  modal.append(modalText);
  modal.append(x);
  modal.append(linebreak);
  modal.append(linebreak1);
  modal.append(modalConfirmAction);


  document.body.append(modal);

  backdrop = document.createElement('div');
  backdrop.className = 'backdrop';

  backdrop.addEventListener('click', closeModalHandler);

  document.body.append(backdrop);
}

function closeModalHandler() {
  modal.remove();
  modal = null;

  backdrop.remove();
  backdrop = null;
}

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}


function redirect(){
  var l = document.getElementById('input1').value;

  if (l > 0 && l <= 5){
    location.href = "https://www.bradford.gov.uk/media/1908/7-nutrition-guidelines-1-to-5-years.pdf";
  }
  else if (l > 5 && l <= 12){
    location.href = "https://www.wsh.nhs.uk/CMS-Documents/Patient-leaflets/PaediatricDepartment/6296-1-Healthy-eating-for-6-12-year-olds.pdf";
  }
  else if (l > 12 && l <= 18){
    location.href = "https://www.winchesterhospital.org/health-library/article?id=214376";
  }
  else if (l > 18 && l <= 60){
    location.href = "https://www.eatthis.com/best-foods-for-every-decade/";
  }
  else if (l > 60){
    location.href = "https://www.healthdirect.gov.au/healthy-eating-over-60";
  }
  else{
    modal.append(errorText);
    var er = document.getElementById("error1");
    setTimeout(function () {
    er.remove()}, 3000);
  }
  
}

