/**
 * Display or not the vertical menu
*/
const btnMenu = document.getElementById('btnMenu');
const dropdown_content = document.getElementById('dropdown-content');
const closeBtn = document.getElementById('closeBtn');

btnMenu.onclick = () => {
    dropdown_content.style.display = "block";
}

closeBtn.onclick = () => {
    dropdown_content.style.display = "none";
}

/**
 * Display the submenu or not for features
 */
const arrow_down = document.getElementById('arrow-down');
const arrow_up = document.getElementById('arrow-up');
const featureMenu = document.getElementById('featureMenu');
const companyMenu = document.getElementById('companyMenu');

arrow_down.onclick = () => {
    featureMenu.style.display = "block";
    arrow_down.style.display = "none";
    arrow_up.style.display = "block";
}

arrow_up.onclick = () => {
    featureMenu.style.display = "none";
    arrow_down.style.display = "block";
    arrow_up.style.display = "none";
}

/**
 * Display the submenu or not for company
 */
const arrow_downC = document.getElementById('arrow-downC');
const arrow_upC = document.getElementById('arrow-upC');

arrow_downC.onclick = () => {
    companyMenu.style.display = "block";
    arrow_downC.style.display = "none";
    arrow_upC.style.display = "block";
}

arrow_upC.onclick = () => {
    companyMenu.style.display = "none";
    arrow_downC.style.display = "block";
    arrow_upC.style.display = "none";
}


