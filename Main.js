player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player1_name").innerHTML = player1_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn- " + player2_name;


function send() {
    get_word = document.getElementById("word").value;
    word = get_word.tolowerCase();
    console.log(charAt2);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    lenght_minus_1 = word.length - 1;
    charAt3 = word.charAt(lenght_minus_1);
    console.log(charAt3);
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);
    question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

qustion_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer =get_answer.tolowerCase();
    console.log("answer in lower case - " +answer);
    if(answer_turn == "player1")
        {
           if(answer_turn == "player1")
               {
                   player1_score = player1_score +1;
                   document.getElementById("player1_score").innerHTML = player1_score;
               }
            else
                {
                   player2_score = player1_score +1;
                   document.getElementById("player2_score").innerHTML =  +player2_score; 
                }
        }
    if(question_turn == "player1")
        {
            question_turn = "player2"
            document.getElementById("player_question").innerHTML =  "Question Turn - " + player2_name;
        }
    else
        {
          question_turn = "player2"
            document.getElementById("player_question").innerHTML =  "Question Turn - " + player2_score;
        }
    if(answer_turn == "player1")
        {
         uestion_turn = "player2"
            document.getElementById("player_question").innerHTML =  "Question Turn - " + player2_score; 
        }

        {

            function addUser(){
                player1_name = document.getElementById("player1_name_input").value;
                player2_name = document.getElementById("player2_name_input").value;
                
                 localStorage.setItem("player1_name", player1_name);
                 localStorage.setItem("player1_name", player2_name);
                
                 window.location = "game_page.html";
            }
            // Your web app's Firebase configuration
              // For Firebase JS SDK v7.20.0 and later, measurementId is optional
              var firebaseConfig = {
                apiKey: "AIzaSyDOr9yoWOp95xJxS443LEBpTaw9jxny_kA",
                authDomain: "kwitter-b0c89.firebaseapp.com",
                projectId: "kwitter-b0c89",
                storageBucket: "kwitter-b0c89.appspot.com",
                messagingSenderId: "105399887175",
                appId: "1:105399887175:web:13adaafeb4b483dab01862",
                measurementId: "G-28F9VVDVZY"
              };
              // Initialize Firebase
              firebase.initializeApp(firebaseConfig);
              firebase.analytics();
            
            //ADD YOUR FIREBASE LINKS HERE
            
            function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
                   Room_names = childKey;
                  //Start code
            console.log("Room Name - " + Room_name);
            row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+ Room_name +"</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
                  });});}
            getData();
            
            function addRoom()
            {
                room_name = document.getElementById("room_name").value;
                
                firbase.database9.ref("/").child(room_name).update({
                    purpose : "adding room name"
                });
                
                localStorage.setItem("room_name", room_name);
                
                window.location = "kwitter_page.html";
            }
            
            function redirctToRoomName(name)
            {
                console.log(name);
                localStorage.setItem("room_name", name);
                window.location = "kwitter_page.html";
            }
            
            function logout(){
                localStorge.removeItem("user_name");
                localStorge.removeItem("room_name");
                 window.location = "Kwitter.html";
            }