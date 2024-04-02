"use strict";

let btn = document.querySelector(".btn-mob");
let ul = document.querySelector(".topbar .menu");
btn.addEventListener("click", function () {
    if (btn.className == "btn-mob active") {
        btn.classList.remove("active");
        ul.style.display = "none";
    }
    else {
        btn.classList.add("active");
        ul.style.display = "block";
    }
});

const knowMoreP = document.querySelector("#know_more");
const knowMoreBtn = document.querySelector("#know_more_btn");
knowMoreBtn.addEventListener("click", function () {
    let text = knowMoreBtn.textContent;
    if (text == "KNOW MORE") {
        knowMoreP.style.display = "block";
        knowMoreBtn.innerHTML = "HIDE";
    }
    else {
        knowMoreP.style.display = "none";
        knowMoreBtn.innerHTML = "KNOW MORE";


    }
});
const list = document.querySelectorAll(".wrap-4 .menu li");
const col = document.querySelectorAll("#four_col div");
const link = document.querySelector(".wrap-4 ul")
const showMoreBtn = document.querySelector("#show_more")
// console.log(col);
col[4].style.display = "none";
col[5].style.display = "none";
col[6].style.display = "none";
col[7].style.display = "none";
showMoreBtn.addEventListener("click", () => {
    let text = showMoreBtn.textContent;
    if (text == "SHOW MORE") {
        col[4].style.display = "block";
        col[5].style.display = "block";
        col[6].style.display = "block";
        col[7].style.display = "block";
        showMoreBtn.innerHTML = "HIDE";
    }
    else {
        col[4].style.display = "none";
        col[5].style.display = "none";
        col[6].style.display = "none";
        col[7].style.display = "none";
        showMoreBtn.innerHTML = "SHOW MORE";
    }
})
link.addEventListener("click", function (e) {
    if ("UL" != e.target.tagName) {
        let value = e.target.innerText;
        col.forEach(i => { i.style.display = "none"; });
        list.forEach(j => { j.classList.remove("active") });
        if (value == "spring summer") {
            e.target.classList.toggle("active");
            col[2].style = "display:block;justify-content:center";
            col[5].style.display = "block";
        }
        else if (value == "swearshirt") {
            e.target.classList.toggle("active");
            col[7].style.display = "block";
            col[0].style.display = "block";

        }
        else if (value == "sneakers") {
            e.target.classList.toggle("active");
            col[1].style.display = "block";
            col[4].style.display = "block";

        }
        else if (value == "gadgets") {
            e.target.classList.toggle("active");
            col[3].style.display = "block";
            col[2].style.display = "block";

        }
        else if (value == "outdoor") {
            e.target.classList.toggle("active");
            col[4].style.display = "block";
            col[1].style.display = "block";

        }
        else if (value == "ALL") {
            col[0].style.display = "block";
            col[1].style.display = "block";
            col[2].style.display = "block";
            col[3].style.display = "block";
            e.target.classList.toggle("active");
        }
    }
})

// const form = document.querySelector(".singn-up-form");
// const formInput = document.querySelector(".singn-up-form input");


// form.addEventListener("input", function () {
//     if (formInput.length >= "1") {
//         document.querySelector(".singn-up-form button[type='submit']").style = "background: green";
//     }
//     if (formInput.length >= "1") {
//         formInput.style = "outline-color:green"
//     }
//     if (formInput.length >= "1") {
//         formInput.style = "outline-color:green"
//     }
//     if (formInput.length >= "1") {
//         formInput.style = "outline-color:green"
//     }
//     else {
//         formInput.style = "outline-color:red";
//     }
// })

// const signInBtn = document.querySelector(".singn-up-button");
// const signInForm = document.querySelector(".singn-up-form");

// signInBtn.addEventListener("click", function () {
//     if (this.textContent = "SIGN UP FORM") {
//         signInForm.style.display = "block";
//         this.textContent="HIDE";
//     }
//     else if(this.textContent = "HIDE"){
//         console.log("h");
//         this.textContent = "SIGN UP FORM";
//         signInForm.style.display = "none";

//     }
// })