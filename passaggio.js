const articoli = document.querySelector('#articoli');

// create element & render cafe
function renderArticoli(doc){
    let li = document.createElement('li');
    let articoli = document.createElement('span');
    let titolo = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    articoli.textContent = doc.data().articoli;
    titolo.textContent = doc.data().titolo;

    li.appendChild(articoli);
    li.appendChild(titolo);

    articoli.appendChild(li);
}

// getting data
db.collection('Articoli').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});