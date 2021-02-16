var image = document.getElementById("image");
var itemImg = document.getElementById("inventory-Items");

var items = ["motor", "boog", "duikerset"]; 

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

function level1Baai () {
    image.src = "Images/Bay.jpg"

    document.getElementById("description").innerHTML = "Je komt aan in de baai en je zoektocht naar de schat begint. <br><br> Keuze 1 = Ga het bos in<br> Keuze 2 = Schiet met een pijl op de vastgeknoopte boot. En de gebruik een roeispaan om de Oceaan op te varen.(Pijl en boog)<br> Keuze 3 = Je hebt je bedacht en komt tot het besef dat deze missie te moeilijk is en geeft op.";
    document.getElementById("title").innerHTML = "Level 1 Baai";

    button1.onclick = Level2Bos;
    
    button2.onclick = function() {
        if (items.includes("boog")) {
            Level4Oceaan()
        } else {
            alert("Je hebt iets nodig om de boot los te maken. Een pijl punt zou scherp genoeg moeten zijn.");
        }
    } 
    
    button3.onclick = function() {
        GameOverScene();
        alert("Je hebt opgegeven en keert terug naar huis. Volgende keer beter.");
    }

}

function Level2Bos () { 
    image.src = "Images/Bos.jfif"
    image.style.zIndex = "1";
    image.style.position = "relative";

    document.getElementById("description").innerHTML = "Je loopt het bos in <br> <br>Keuze 1 = Door de bomen zie een opening die uitkomt bij een klif. Ga naar de klif?<br> Keuze 2 = In de verte zie een open plek. Ga naar de open plek?<br> Keuze 3 = Loop dieper het bos in?";
    document.getElementById("title").innerHTML = "Level 2 Bos";

    alert("Misschien kun je hier een boog vinden");

    itemImg.src = "Images/boog.png"

    itemImg.style.width = "60px";
    itemImg.style.height = "60px";
    itemImg.style.position = "absolute";
    itemImg.style.bottom = "1cm";
    itemImg.style.left = "13cm";
    itemImg.style.zIndex = "2";

    button1.onclick = function() {
        Level3Klif();
    }
    button2.onclick = function() {
        Level9Auto();
    }
    button3.onclick = function() {
        GameOverScene();
        alert("Je ziet door de bomen het bos niet meer en verdwaalt!");
    }

    itemImg.onclick = function () {
        alert("je hebt een boog opgepakt.");
        items.push("boog");
        itemImg.remove();
    }
}

function Level3Klif () {
    image.src = "Images/Klif.jpg"
   
    document.getElementById("description").innerHTML = "Je komt aan bij een klif die uitkijkt over de oceaan <br><br> Keuze 1 = Spring van de klif het water in om je zoektocht voort te zetten?<br> Keuze 2 =  Ga naar een vuurtoren die je in de verte op de klif ziet staan?<br> Keuze 3 = Neem een trap rechts van je en keer terug naar de baai?";
    document.getElementById("title").innerHTML = "Level 3 Klif";


    button1.onclick = function() {
        alert("Volgende keer misschien even kijken voor dat je springt. Dat was namelijk geen water waar je op landde.");
        GameOverScene();
    }
    button2.onclick = function() {
        Level6Vuurtoren();
    }

    button3.onclick = function() {
        level1Baai();
    }
    
}

function Level4Oceaan () {
    image.src = "Images/Oceaan.jpg"

    document.getElementById("description").innerHTML = "Je bent nu op de oceaan <br><br> Keuze 1 =  Ga terug naar de baai?<br> Keuze 2 = Gebruik een motor om verder de Oceaan op te varen(Motor)?<br> Keuze 3 = Gooi je vishengel uit?"
    document.getElementById("title").innerHTML = "Level 4 Oceaan";

    button1.onclick = function() {
        level1Baai();
    }
    button2.onclick = function() {
        if (items.includes("motor")) {
            alert("Je gebruikt de motor die je gevonden om verder de oceaan op te varen.");
            level5Wrak()
        } else {
            alert("Met een simpele roeispaan kom je nooit verder de oceaan op.");
        }
    }
    button3.onclick = function() {
        vishengel();
    }
}

function level5Wrak () {
    image.src = "Images/Wrak.jpg"

    document.getElementById("description").innerHTML = "Je bent ver op de oceaan. En ziet het wrak waar de verhalen beschrijven de schat zal liggen. <br><br> Keuze 1 = Ga terug naar de baai<br> Keuze 2 = Duik het water in en zwem naar het wrak?(Duikers spullen nodig) <br> Keuze 3 = Ga terug richting de kust?";
    document.getElementById("title").innerHTML = "Level 5 Wrak";
    
    button1.onclick = function() {
        level1Baai();
    }
    button2.onclick = function() { 
        if (items.includes("duikerset")) {
            alert("sleutel");

            itemImg.src = "Images/sleutel.png"

            itemImg.style.width = "80px";
            itemImg.style.height = "80px";
            itemImg.style.position = "absolute";
            itemImg.style.bottom = "5cm";
            itemImg.style.left = "9cm";

        } else {
            GameOverScene();
        }
    }
    button3.onclick = function() {
        Level4Oceaan();
    }

    itemImg.onclick = function () {
        items.push("sleutel");
        console.log(items);
        itemImg.remove();
    }

}

function Level6Vuurtoren () {
    image.src = "Images/Vuurtoren.jpg"

    document.getElementById("description").innerHTML = "Je staat voor een vuurtoren en een schuurtje. <br><br> Keuze 1 = Loop langs de klif<br> Keuze 2 = Ga de vuurtoren in<br> Keuze 3 = Ga het schuurtje naast de vuurtoren in";
    document.getElementById("title").innerHTML = "Level 6 Vuurtoren";

    button1.onclick = function() {
        Level3Klif();
    }
    button2.onclick = function() {
        if (items.includes("sleutel")) {
            alert("De sleutel die je in het wrak gevonden hebt past op de deur.");
            Level8VuurtorenVijand()
        } else {
            alert("Je hebt een sleutel nodig!");
        }
        //item 3 nodig
    }
    button3.onclick = function() {
        Level7Schuurtje();

    }

}

function Level7Schuurtje () {
    image.src = "Images/Schuur.jpg"

    document.getElementById("description").innerHTML = "Je bent in het schuurtje. Er liggen een hoop spullen. <br><br> Keuze 1 = Ga naar buiten?<br> Keuze 2 = Aai het lieve harige beessie in de kooi op de werkbank?<br> Keuze 3 = Doorzoek het schuurtje?";
    document.getElementById("title").innerHTML = "Level 7 Schuurtje";

    
    button1.onclick = function() {
        Level6Vuurtoren();
    }
    button2.onclick = function() {
        alert("Het lieve harige beessie bijt je vinger eraf!");
        GameOverScene();
    }
    button3.onclick = function() {
        items.push("motor");
        alert("Je hebt een motor gevonden.");
    }
}

function Level8VuurtorenVijand () {
    image.src = "Images/vuurtorenBinnen.jpg"

    document.getElementById("description").innerHTML = "Je bent nu in de vuurtoren op de bovenste verdieping. Je staat nu oog in oog met een rivaal die ook naar de schat opzoek is. <br><br> Keuze 1 = Duw<br> Keuze 2 = Schiet(Pijl en Boog)<br> Keuze 3 = Sla";
    document.getElementById("title").innerHTML = "Level 8 Vuurtoren Binnen";

    
    button1.onclick = function() {
        Duw();
    }
    button2.onclick = function() {
        Schiet();
    }
    button3.onclick = function() {
        Sla();
    }

        function Duw () {
            alert("Je loopt op je rivaal af maar je ziet net te laat dat hij een lief harig beessie uit zijn jas haalt en hem op je af gooit!")
            GameOverScene();
        }

        function Schiet () {
            if (items.includes("boog")) {

            
            alert("de pijl mist en je rivaal stormt op je af.");
            alert("Kies keuze 1 = Ontwijk. of keuze 2 = Sla");

            button1.onclick = function() {
                alert("Je ontwijkt en je rivaal komt met zijn hoofd tegen de duurpost aan. 'Die slaapt wel even denk je.'");
                alert("Achter je rivaal staat de schat!");
                Gewonnen();
            }

            button2.onclick = function() {
                GameOverScene();
                alert("Je rivaal raakt je met een lepel op je hoofd!");
            }

            } else {
                alert("Game over");
                GameOverScene();
            }
        }

        function Sla () {
            alert("Je pakt de grootste lepel die je ziet en slaat je rivaal op zijn hoofd.");
            alert("Achter je rivaal staat de schat!");
            Gewonnen();
        }
}

function Level9Auto () {
    image.src = "Images/Auto.jpeg"

    document.getElementById("description").innerHTML = "Je komt aan bij een open plek, tussen wat bomen staat een oude auto met een kist achterin. <br> Keuze 1 = Open kofferbak<br> Keuze 2 = Ga terug<br> Keuze 3 = Loop verder langs de auto door het bos";
    document.getElementById("title").innerHTML = "Level 9 Auto"

    
    button1.onclick = function() {
        alert("Je doet de kofferbak open en vind een volledig set duikersuitrusting!");
        items.push("duikerset");
        console.log(items);
    }
    button2.onclick = function() {
        Level2Bos();

    }
    button3.onclick = function() {
        Level6Vuurtoren();
    }
}

function vishengel () {
    image.src = "Images/Vissen.jpg"

    document.getElementById("description").innerHTML = "Je hebt je hengel uitgegooid. <br> Keuze 1 = Stop met hengelen<br> Keuze 2 = Vang een vis<br> Keuze 3 = Wacht rustig af";
    document.getElementById("title").innerHTML = "Vissen";

    
    button1.onclick = function() {
        Level4Oceaan();
    }
    button2.onclick = function() {
        alert("Je hebt een sappige vis gevangen");
    }
    button3.onclick = function() {
        alert("Ik heb hier echt geen geduld voor!");
        alert("'Je hengel beweegt!'");
        alert("Je hebt een duur amulet aan de haak geslagen. Gefeliciteerd!");
    }
}

function GameOverScene () {
    image.src = "Images/GameOver.jpg"

    var button = document.getElementById("game-buttons");
    button.remove();

    document.getElementById("description").innerHTML = "Laad de pagina opnieuw om te herstarten"
    document.getElementById("title").innerHTML = "Game Over";
}

function Gewonnen () {
    image.src = "Images/Schat.jfif"

    var keuzes = document.getElementById("game-buttons");
    keuzes.remove();

    document.getElementById("description").innerHTML = "Je hebt de schat gevonden!";
    document.getElementById("title").innerHTML = "Gewonnen";
}

level1Baai()

