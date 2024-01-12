function addUser() {
    Player1_name = document.getElementById("player_one_input").value;
    Player2_name = document.getElementById("player_two_input").value;

    localstorage.setitem("player1_name", player1_name)
    localstorage.setitem("player2_name", player2_name)

    window.loaction = "game_page.html";
}