function showDialog(title, synopsis, element) {
  const dialog = document.createElement('div');
  dialog.classList.add('dialog-overlay');

  const dialogContent = document.createElement('div');
  dialogContent.classList.add('dialog-content');

  const titleLabel = document.createElement('h2');
  titleLabel.textContent = title;

  const synopsisLabel = document.createElement('p');
  synopsisLabel.textContent = synopsis;

  const seenButton = document.createElement('button');
  seenButton.textContent = 'Vistos';
  seenButton.addEventListener('click', () => {
    // Lógica para agregar la película a "Vistos"
    alert('Contenido agregado a "Vistos"');
    dialog.remove();
  });

  const pendingButton = document.createElement('button');
  pendingButton.textContent = 'Pendientes';
  pendingButton.addEventListener('click', () => {
    // Lógica para agregar la película a "Pendientes"
    alert('Contenido agregado a "Pendientes"');
    dialog.remove();
  });

  dialogContent.appendChild(titleLabel);
  dialogContent.appendChild(synopsisLabel);
  dialogContent.appendChild(seenButton);
  dialogContent.appendChild(pendingButton);

  dialog.appendChild(dialogContent);
  document.body.appendChild(dialog);

  // Cerrar el cuadro de diálogo al hacer clic fuera de él
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.remove();
    }
  });
}


function addToWatched(title, synopsis) {
  const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];
  const movie = { title, synopsis };
  watchedMovies.push(movie);
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
}

// Función para agregar una película a la sección "Pendientes"
function addToPending(title, synopsis) {
  const pendingMovies = JSON.parse(localStorage.getItem('pendingMovies')) || [];
  const movie = { title, synopsis };
  pendingMovies.push(movie);
  localStorage.setItem('pendingMovies', JSON.stringify(pendingMovies));
}


document.addEventListener('DOMContentLoaded', () => {
  displayWatchedMovies();
  displayPendingMovies();
});

function displayWatchedMovies() {
  const vistosContainer = document.getElementById('vistos');
  const vistosMovies = JSON.parse(localStorage.getItem('vistos')) || [];

  if (vistosMovies.length === 0) {
    vistosContainer.innerHTML = '<p>No hay películas vistas.</p>';
  } else {
    vistosContainer.innerHTML = '';

    vistosMovies.forEach((movie) => {
      const movieElement = createMovieElement(movie.title, movie.synopsis);
      vistosContainer.appendChild(movieElement);
    });
  }
}

function displayPendingMovies() {
  const pendientesContainer = document.getElementById('pendientes');
  const pendientesMovies = JSON.parse(localStorage.getItem('pendientes')) || [];

  if (pendientesMovies.length === 0) {
    pendientesContainer.innerHTML = '<p>No hay películas pendientes.</p>';
  } else {
    pendientesContainer.innerHTML = '';

    pendientesMovies.forEach((movie) => {
      const movieElement = createMovieElement(movie.title, movie.synopsis);
      pendientesContainer.appendChild(movieElement);
    });
  }
}

function createMovieElement(title, synopsis) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');

  const titleLabel = document.createElement('h3');
  titleLabel.textContent = title;

  const synopsisLabel = document.createElement('p');
  synopsisLabel.textContent = synopsis;

  movieElement.appendChild(titleLabel);
  movieElement.appendChild(synopsisLabel);

  return movieElement;
}

