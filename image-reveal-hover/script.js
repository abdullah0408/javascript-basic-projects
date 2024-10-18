let elem = document.querySelectorAll(".elem")

elem.forEach((item) => {
    item.addEventListener("mousemove", (dets) => {
        item.childNodes[3].style.left = dets.x + "px"
        item.childNodes[3].style.top = (dets.y-100) + "px"
    })
    item.addEventListener("mouseenter", () => {
        item.childNodes[3].style.opacity = "1"
    })
    item.addEventListener("mouseleave", () => {
        item.childNodes[3].style.opacity = "0"
    })
})