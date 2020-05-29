// DOM elements
const guideList = document.querySelector('.guides');

// setup guides
const setupGuides = (data) => {

  let html = '';
  data.forEach(doc => {
    const guide = doc.data();
    const li = `
      <li>
      <h3>Ubicación de inicio del viaje</h3>
        <div class="collapsible-header grey lighten-4"> ${guide.ubicacionInicial} </div>
        <h3>Ubicación de Final del viaje</h3>
        <div class="collapsible-body white"> ${guide.ubicacionFinal} </div>
        <h3>Ubicación de Final del viaje</h3>
        <div class="collapsible-body white"> ${guide.costo} </div>
        <h3>Ubicación de Final del viaje</h3>
        <div class="collapsible-body white"> ${guide.conductor} </div>

      </li>
    `;
    html += li;
  });
  guideList.innerHTML = html

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});