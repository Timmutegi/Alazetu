document.addEventListener("DOMContentLoaded", event => {
    const firebaseConfig = {
        apiKey: "AIzaSyAoa2Sj1AOkx7MBWUL0ve-km_Q9M-R4nnc",
        authDomain: "alazetu.firebaseapp.com",
        databaseURL: "https://alazetu.firebaseio.com",
        projectId: "alazetu",
        storageBucket: "alazetu.appspot.com",
        messagingSenderId: "66526236396",
        appId: "1:66526236396:web:8fc0c970762f17e3cc1fc9",
        measurementId: "G-XV75FE5Y0D"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    const db = firebase.firestore();
    // console.log(db);

    const collection = db.collection('articles');

    let row = document.getElementById('row');
    // let details = document.getElementById('details');

    // CREATES HOME PAGE AND ARTICLES PAGE CARDS
    let createCard = (id, title, content, path) => {
        const ID = id
            // console.log(ID);

        let col = document.createElement('div');
        col.className = 'col md-4 mb-4';

        let card = document.createElement('div');
        card.className = 'card';
        card.setAttribute("style", "width: 18rem;");

        let image = document.createElement('img');
        image.setAttribute("src", path);
        image.setAttribute("title", "Alazetu article");
        image.setAttribute("alt", "Alazetu article");
        image.className = 'card-img-top';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let cardTitle = document.createElement('h5');
        cardTitle.innerText = title;
        cardTitle.className = 'card-title';

        let line = document.createElement('hr');

        let cardText = document.createElement('p');
        cardText.innerHTML = content;
        cardText.className = 'card-text';

        let button = document.createElement('a');
        button.className = "btn btn-success sm";
        button.innerText = 'Read More';
        button.setAttribute("type", "button");
        button.addEventListener("click", readMore);
        button.setAttribute("href", "/article.html");
        button.setAttribute("style", "background-color: #ffff00");
        button.setAttribute("style", "font-size: 13px");

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(line);
        cardBody.appendChild(cardText);
        cardBody.appendChild(button);
        card.appendChild(image);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);

        function readMore() {
            localStorage.setItem('ID', ID);
        }
    }

    collection.get().then(res => {
        res.forEach(doc => {
            // console.log(doc.id, " => ", doc.data());
            createCard(doc.id, doc.data().title, doc.data().content, doc.data().path);

        })

    });
})

function clickMenu() {
    const navs = document.querySelectorAll('.Navbar-Items');

    navs.forEach(nav => nav.classList.toggle('Navbar-ToggleShow'));
}