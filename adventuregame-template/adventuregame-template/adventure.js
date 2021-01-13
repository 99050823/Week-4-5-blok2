var image = document.getElementById("image");

function level1Baai () {
    image.src = "Images/Bay.jpg"

    document.getElementById("1").innerHTML = "Keuze 1 = Ga het bos in";
    document.getElementById("2").innerHTML = "Keuze 2 = Schiet met een pijl op de vastgeknoopte boot. En de gebruik een roeispaan om de Oceaan op te varen.(Pijl en boog)"
    document.getElementById("3").innerHTML = "Keuze 3 = Je hebt je bedacht en komt tot het besef dat deze missie te moeilijk is en geeft op."

    document.getElementById("description").innerHTML = "Je komt aan in de baai en je zoektocht naar de schat begint";
    document.getElementById("title").innerHTML = "Level 1 Baai";

    button1.onclick = function() {
        Level2Bos();
    }
    button2.onclick = function() {
        Level4Oceaan(); //item (1)
    }
    button3.onclick = function() {
        GameOverScene();
        alert("Je hebt opgegeven en keert terug naar huis. Volgende keer beter.")
    }

}

function Level2Bos () { 
    image.src = "Images/Bos.jfif" 

    document.getElementById("1").innerHTML = "Keuze 1 = Door de bomen zie een opening die uitkomt bij een klif. Ga naar de klif?";
    document.getElementById("2").innerHTML = "Keuze 2 = In de verte zie een open plek. Ga naar de open plek?";
    document.getElementById("3").innerHTML = "Keuze 3 = Loop dieper het bos in?";

    document.getElementById("description").innerHTML = "Je loopt het bos in";
    document.getElementById("title").innerHTML = "Level 2 Bos";

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
}

function Level3Klif () {
    image.src = "Images/Klif.jpg"

    document.getElementById("1").innerHTML = "Keuze 1 = Spring van de klif het water in om je zoektocht voort te zetten?"
    document.getElementById("2").innerHTML = "Keuze 2 = Ga naar een vuurtoren die je in de verte op de klif ziet staan?"
    document.getElementById("3").innerHTML = "Keuze 3 = Neem een trap rechts van je en keer terug naar de baai?"
    
    document.getElementById("description").innerHTML = "Je komt aan bij een klif die uitkijkt over de oceaan"
    document.getElementById("title").innerHTML = "Level 3 Klif";


    button1.onclick = function() {
        GameOverScene();
        alert("Volgende keer misschien even kijken voor dat je springt. Dat was namelijk geen water waar je op landde.");
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

    document.getElementById("1").innerHTML = "Keuze 1 = Ga terug naar de baai?"
    document.getElementById("2").innerHTML = "Keuze 2 = Gebruik een motor om verder de Oceaan op te varen?"
    document.getElementById("3").innerHTML = "Keuze 3 = Gooi je vishengel uit?"

    document.getElementById("description").innerHTML = "Je bent nu op de oceaan"
    document.getElementById("title").innerHTML = "Level 4 Oceaan";

    button1.onclick = function() {
        level1Baai();
    }
    button2.onclick = function() {
        level5Wrak();
    }
    button3.onclick = function() {
        vishengel();
    }
}

function level5Wrak () {
    image.src = "Images/Wrak.jpg"

    document.getElementById("1").innerHTML = "Keuze 1 = Ga terug naar de baai?"
    document.getElementById("2").innerHTML = "Keuze 2 = Duik het water in en zwem naar het wrak?(Duikers spullen nodig)"
    document.getElementById("3").innerHTML = "Keuze 2 = Ga terug richting de klif?"

    document.getElementById("description").innerHTML = "Je bent ver op de oceaan. En ziet het wrak waar de verhalen beschrijven de schat zal liggen."
    document.getElementById("title").innerHTML = "Level 5 Wrak";
    
    button1.onclick = function() {
        level1Baai();
    }
    button2.onclick = function() {
        GameOverScene();
        alert("Je bent geen vis dus lang onderwater blijven word hem niet!")
        //item 4 nodig
    }
    button3.onclick = function() {
        Level4Oceaan();
    }

}

function Level6Vuurtoren () {
    image.src = "Images/Vuurtoren.jpg"

    document.getElementById("1").innerHTML = "Keuze 1 = Loop langs de klif"
    document.getElementById("2").innerHTML = "Keuze 2 = Ga de vuurtoren in"
    document.getElementById("3").innerHTML = "Keuze 3 = Ga het schuurtje naast de vuurtoren in"

    document.getElementById("description").innerHTML = "Je staat voor een vuurtoren en een schuurtje."
    document.getElementById("title").innerHTML = "Level 6 Vuurtoren";

    button1.onclick = function() {
        Level3Klif();
    }
    button2.onclick = function() {
        Level8VuurtorenVijand();
    }
    button3.onclick = function() {
        Level7Schuurtje();
    }

}

function Level7Schuurtje () {
    image.src = "Images/Schuur.jpg"

    document.getElementById("1").innerHTML = "Keuze 1 = Ga naar buiten?"
    document.getElementById("2").innerHTML = "Keuze 2 = Aai het lieve harige beestje in de kooi op de werkbank?"
    document.getElementById("3").innerHTML = "Keuze 3 = Doorzoek het schuurtje?"

    document.getElementById("description").innerHTML = "Je bent in het schuurtje. Er liggen een hoop spullen"
    document.getElementById("title").innerHTML = "Level 7 Schuurtje";

    
    button1.onclick = function() {
        Level6Vuurtoren();
    }
    button2.onclick = function() {
        GameOverScene();
        alert("Het lieve harige beestje bijt je vinger eraf!");
    }
    button3.onclick = function() {
        //item (2)
    }
}

function Level8VuurtorenVijand () {
    image.src = "Images/vuurtorenBinnen.jpg"

    document.getElementById("1").innerHTML = "Keuze 1 = Duw"
    document.getElementById("2").innerHTML = "Keuze 2 = Schiet(Pijl en boog)"
    document.getElementById("3").innerHTML = "Keuze 3 = Sla"

    document.getElementById("description").innerHTML = "Je Bent nu in de vuurtoren op de bovenste verdieping. Je staat nu oog in oog met een rivaal die ook naar de schat opzoek is."
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
            alert("Je geeft je rivaal een duw. Hij valt uit het raam de oceaan in. Beneden in het water hoor je hem nog iets schreeuwen over wraak.")
            Level6Vuurtoren();
        }

        function Schiet () {
            //item (1) nodig
            alert("de pijl mist en je rivaal stormt op je af.");
            alert("Kies keuze 1 = Ontwijk. of keuze 2 = Sla");

            button1.onclick = function() {
                alert("Je ontwijkt en je rivaal komt met zijn hoofd tegen de duurpost aan. 'Die slaapt wel even denk je.'");
                Gewonnen();
                alert("Achter je rivaal staat de schat!");
            }

            button2.onclick = function() {
                GameOverScene();
                alert("Je rivaal raakt je met een lepel op je hoofd!");
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

    document.getElementById("1").innerHTML = "Keuze 1 = Open kofferbak"
    document.getElementById("2").innerHTML = "Keuze 2 = Ga terug"
    document.getElementById("3").innerHTML = "Keuze 3 = Loop verder langs de auto door het bos"

    document.getElementById("description").innerHTML = "Je komt aan bij een open plek, tussen wat bomen staat een oude auto met een kist achterin."
    document.getElementById("title").innerHTML = "Level 9 Auto";

    
    button1.onclick = function() {
        //item 4
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

    document.getElementById("1").innerHTML = "Keuze 1 = Stop met hengelen"
    document.getElementById("2").innerHTML = "Keuze 2 = Vang een vis"
    document.getElementById("3").innerHTML = "Keuze 3 = Wacht rustig af"

    document.getElementById("description").innerHTML = "Je hebt je hengel uitgegooid"
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

    var keuzes = document.getElementById("keuzes");
    keuzes.remove();
    
    var button = document.getElementById("game-buttons");
    button.remove();

    document.getElementById("description").innerHTML = "Laad de pagina opnieuw om te herstarten"
    document.getElementById("title").innerHTML = "Game Over";
}

function Gewonnen () {
    image.src = "Images/Schat.jfif"

    var keuzes = document.getElementById("keuzes");
    keuzes.remove();

    document.getElementById("description").innerHTML = "Je hebt de schat gevonden!";
    document.getElementById("title").innerHTML = "Gewonnen";
}

level1Baai()

