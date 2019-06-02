var inpTur = document.querySelector("#tur");
var ut = document.querySelector("#ut");
var btn = document.querySelector("#btn");
var hytteListe = document.querySelector("#hytteListe");
var nyliste = document.querySelector("#nyListe")
var fjern = document.querySelector("#fjern");

var tur = []; //arrey for turlisten

btn.onclick = function () {
    tur.push(inpTur.value);

    ut.innerHTML = "Turen din:<br>";

    for (var i=0;i<tur.length;i++){
        ut.innerHTML += (i+1) + ". " + tur[i] + "<br>";
    } // denne er for å legge turlisten i en nummerert liste

    // bruker if-setninger for å sjekke om hytte navnene er riktig, kunne brukt arrey også
    if (inpTur.value === "Gjendesheim") {
        hytteListe.innerHTML = "Hytter med sti fra Gjendesheim: <br>" +
            "<ol> <li>Glitterheim 22km</li> <li>Memurubu 14km</li> </ol>";
    }
    else if (inpTur.value === "gjendesheim") {
        hytteListe.innerHTML = "Hytter med sti fra Gjendesheim: <br>" +
            "<ol> <li>Glitterheim 22km</li> <li>Memurubu 14km</li> </ol>";
    }

    else if (inpTur.value === "Glitterheim") {
        hytteListe.innerHTML = "Hytter med sti fra Glitterheim: <br>" +
            "<ol> <li>Gjendesheim 22km</li> <li>Memurubu 18km</li> <li>Spiterstulen 17km</li> </ol>";
    }
    else if (inpTur.value === "glitterheim") {
        hytteListe.innerHTML = "Hytter med sti fra Glitterheim: <br>" +
            "<ol> <li>Gjendesheim 22km</li> <li>Memurubu 18km</li> <li>Spiterstulen 17km</li> </ol>";
    }

    else if (inpTur.value === "Memurubu") {
        hytteListe.innerHTML = "Hytter med sti fra Memurubu: <br>" +
            "<ol> <li>Gjendesheim 14km</li> <li>Glitterheim 18km</li> <li>Gjendebu 10km</li> </ol>";
    }
    else if (inpTur.value === "memurubu") {
        hytteListe.innerHTML = "Hytter med sti fra Memurubu: <br>" +
            "<ol> <li>Gjendesheim 14km</li> <li>Glitterheim 18km</li> <li>Gjendebu 10km</li> </ol>";
    }

    else if (inpTur.value === "Gjendebu") {
        hytteListe.innerHTML = "Hytter med sti fra Gjendebu: <br>" +
            "<ol> <li>Memurubu 10km</li> <li>Leirvassbu 19km</li> <li>Spiterstulen 24km</li> <li>Olavsbu 16km</li> </ol>";
    }
    else if (inpTur.value === "gjendebu") {
        hytteListe.innerHTML = "Hytter med sti fra Gjendebu: <br>" +
            "<ol> <li>Memurubu 10km</li> <li>Leirvassbu 19km</li> <li>Spiterstulen 24km</li> <li>Olavsbu 16km</li> </ol>";
    }

    else if (inpTur.value === "Leirvassbu") {
        hytteListe.innerHTML = "Hytter med sti fra Leirvassbu: <br>" +
            "<ol> <li>Gjendebu 19km</li> <li>Spiterstulen 15km</li> <li>Olavsbu 11km</li> </ol>";
    }
    else if (inpTur.value === "leirvassbu") {
        hytteListe.innerHTML = "Hytter med sti fra Leirvassbu: <br>" +
            "<ol> <li>Gjendebu 19km</li> <li>Spiterstulen 15km</li> <li>Olavsbu 11km</li> </ol>";
    }

    else if (inpTur.value === "Spiterstulen") {
        hytteListe.innerHTML = "Hytter med sti fra Spiterstulen: <br>" +
            "<ol> <li>Glitterheim 17km</li> <li>Gjendebu 24km</li> <li>Leirvassbu 15km</li> </ol>";
    }
    else if (inpTur.value === "spiterstulen") {
        hytteListe.innerHTML = "Hytter med sti fra Spiterstulen: <br>" +
            "<ol> <li>Glitterheim 17km</li> <li>Gjendebu 24km</li> <li>Leirvassbu 15km</li> </ol>";
    }

    else if (inpTur.value === "Olavsbu") {
        hytteListe.innerHTML = "Hytter med sti fra Olavsbu: <br>" +
            "<ol> <li>Gjendebu 16km</li> <li>Leirvassbu 11km</li> </ol>";
    }
    else if (inpTur.value === "olavsbu") {
        hytteListe.innerHTML = "Hytter med sti fra Olavsbu: <br>" +
            "<ol> <li>Gjendebu 16km</li> <li>Leirvassbu 11km</li> </ol>";
    }
    else {
        nyListe.innerHTML = "Du har skrevet feil, trykk på knappen Fjern siste i listen og prøv på nytt!";
    } //else er det if-setningen gjør når ingen andre matcher
}

fjern.onclick = function () {
    tur.pop(); //for å fjerne siste objekt i Arrey
    ut.innerHTML = tur; // for at listen skal oppdatere seg når jeg fjerner
    nyliste.innerHTML = ""; // for at feilmeldingen skal gå bort etter at feilen er fjernet
}

