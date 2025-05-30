const coleccion = [
  { id: 1, nombre: 'Team Vitality', valor: 'Top 1' },
  { id: 2, nombre: 'NAVI', valor: 'Top 2' },
  { id: 3, nombre: 'FaZe Clan', valor: 'Top 3' },
  { id: 4, nombre: 'G2 Esports', valor: 'Top 4' }
];

window.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedor');

  if (coleccion && coleccion.length > 0) {
    coleccion.forEach(el => {
      const div = document.createElement('div');
      div.classList.add('item');
      div.innerHTML = `
        <img src="${el.imagen}" alt="${el.nombre}">
        <div class="item-info">
          <strong>ID:</strong> ${el.id}<br>
          <strong>Nombre:</strong> ${el.nombre}<br>
          <strong>Valor:</strong> ${el.valor}
        </div>
      `;
      contenedor.appendChild(div);
    });
  } else {
    contenedor.innerHTML = "<p style='color:red;'>Error: colección no cargada</p>";
  }
});
