document.addEventListener('DOMContentLoaded', () => {

  let count = 0;
  const addButton = document.getElementById('add-value')
  const body = document.getElementById('data-id');
  const p = document.createElement('p');
  function counter() {
    p.innerText = `${count}`;
    console.log(count);
    body.appendChild(p);
  }
  addButton.addEventListener('click', () => {
    count++;
    counter();

  })

})