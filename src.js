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
    // const details = document.getElementById('details');
    const ID = localStorage.getItem('ID');
    // console.log(ID);
    collection.doc(ID).get().then(doc => {
        createDetails(doc.data().title, doc.data().message, doc.data().path)
    });

    // CREATES A CARD WITH DETAILS OF AN ARTICLE
    const createDetails = (title, message, path) => {
        let details = document.getElementById('details');
        // console.log(details);

        let col = document.createElement('div');
        col.className = 'col-md-8';
        col.setAttribute("style", "margin-top: 50px;;");

        let card = document.createElement('div');
        card.className = 'card';

        let image = document.createElement('img');
        image.setAttribute("src", path);
        image.setAttribute("title", "Article Image");
        image.setAttribute("alt", "Article Image");
        image.className = 'card-img-top';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let cardTitle = document.createElement('h5');
        cardTitle.innerText = title;
        cardTitle.className = 'card-title';
        cardTitle.setAttribute("style", "font-weight: bold;");

        let line = document.createElement('hr');

        let cardText = document.createElement('p');
        cardText.innerHTML = message;
        cardText.className = 'card-text';

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(line);
        cardBody.appendChild(cardText);
        card.appendChild(image);
        card.appendChild(cardBody);
        col.appendChild(card);
        details.appendChild(col);
    }

})