function myFunction() {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("services-cards");
    cards = cardContainer.getElementsByClassName("service-card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector("card-index");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}