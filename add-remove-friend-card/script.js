let isFriend = document.querySelector("h5");
let addFriend = document.querySelector("#add");
// let removeFriend = document.querySelector("#remove");
let check = 0;
addFriend.addEventListener("click", () => {
    if (check == 0) {
        isFriend.innerHTML = "Friend";
        isFriend.style.color = "rgb(151, 255, 158)";
        addFriend.innerHTML = "Remove";
        addFriend.style.color = "white";
        addFriend.style.backgroundColor = "gray";
        check = 1;
    } else {
        isFriend.innerHTML = "Stranger";
        isFriend.style.color = "#ff8080";
        addFriend.innerHTML = "Add Friend";
        addFriend.style.color = "gray";
        addFriend.style.backgroundColor = "white";
        check = 0;
    }
});

// // removeFriend.addEventListener("click", () => {
// //     isFriend.innerHTML = "Stranger";
// //     isFriend.style.color = "red";
// // });

