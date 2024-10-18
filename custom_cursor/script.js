// let main = document.querySelector("#main");
// let cursor = document.querySelector("#cursor");

// main.addEventListener("mousemove", (e) => {
//     cursor.style.left = e.x + "px";
//     cursor.style.top = e.y + "px";
// });
// Select the main container and the custom cursor elements from the DOM
// let main = document.querySelector("#main");
// let cursor = document.querySelector("#cursor");

// // Variable to track whether the cursor is currently being moved
// let isMoving = false;

// // Add a mousemove event listener to the main container
// main.addEventListener("mousemove", (e) => {
//     // Check if the cursor is not currently moving
//     if (!isMoving) {
//         // Set isMoving to true to indicate the cursor is in the process of moving
//         isMoving = true;

//         // Use requestAnimationFrame to optimize the cursor movement for smoother animation
//         window.requestAnimationFrame(() => {
//             // Get the dimensions and position of the main container
//             let rect = main.getBoundingClientRect();

//             // Update the position of the custom cursor to follow the mouse coordinates
//             // `e.clientX` and `e.clientY` provide the mouse position relative to the viewport
//             cursor.style.left = e.clientX + "px";
//             cursor.style.top = e.clientY + "px";

//             // Set isMoving to false to allow future movements of the cursor
//             isMoving = false;
//         });
//     }
// });
// 
// let main = document.querySelector("#main");
// let cursor = document.querySelector("#cursor");

// Add a mousemove event listener to the main container
main.addEventListener("mousemove", (e) => {
    // Use requestAnimationFrame to optimize the cursor movement for smoother animation
    window.requestAnimationFrame(() => {
        // Update the position of the custom cursor to follow the mouse coordinates
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        console.log(x);
    });
});
