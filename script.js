const disclosureBtn = document.querySelectorAll(".disclosure-button");
const disclosureIcon = document.querySelectorAll(".disclosure-icon");


disclosureBtn.forEach(element => {
    element.addEventListener("click", function(){
        const isExpanded = element.getAttribute("aria-expanded");
        const disclosureIconUp = element.querySelector(".disclosure-icon");
        const darkAccentSpan = element.querySelector("span");

            if(isExpanded === "false"){
                element.setAttribute("aria-expanded", "true");
                disclosureIconUp.classList.add("disclosure-icon-up");
                darkAccentSpan.classList.add("dark-accent");
            }
            else{
                element.setAttribute("aria-expanded", "false");
                disclosureIconUp.classList.remove("disclosure-icon-up");
                darkAccentSpan.classList.remove("dark-accent");
            }
    })
})