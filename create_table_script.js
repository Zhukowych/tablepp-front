window.onload = function() {
  adjustContentMargin();
};

function toggleMenu() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
  adjustContentMargin();
}

function closeSidebar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('active');
  adjustContentMargin();
}

function adjustContentMargin() {
  var sidebar = document.querySelector('.sidebar');
  var content = document.querySelector('.content');
  if (sidebar.classList.contains('active')) {
    content.style.marginLeft = '250px';
  } else {
    content.style.marginLeft = '0';
  }
}

const columnTitleInput = document.getElementById('columnTitleInput');
const columnTypeSelect = document.getElementById('columnTypeSelect');
const addColumnBtn = document.getElementById('addColumnBtn');
const columnList = document.getElementById('columnList');

addColumnBtn.addEventListener('click', function() {
  const columnTitle = columnTitleInput.value;
  const columnType = columnTypeSelect.value;

  const newColumn = document.createElement('li');
  newColumn.textContent = columnTitle;

  const editButton = document.createElement('button');
  editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
  editButton.classList.add('edit-btn');
  
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteButton.classList.add('delete-btn');
  
  const typeButton = document.createElement('button');
  typeButton.textContent = columnType.charAt(0).toUpperCase() + columnType.slice(1); // Перша буква велика
  typeButton.classList.add('column-type-btn');

  newColumn.appendChild(typeButton);
  newColumn.appendChild(editButton);
  newColumn.appendChild(deleteButton);

  columnList.appendChild(newColumn);

  columnTitleInput.value = '';
});

const cleanAllBtn = document.getElementById('cleanAllBtn');

cleanAllBtn.addEventListener('click', function() {
  const columnList = document.getElementById('columnList');

  while (columnList.firstChild) {
    columnList.removeChild(columnList.firstChild);
  }
});
