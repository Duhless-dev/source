function tabs(tabsSelector, tabsBtnSelector, tabsParrentSelector, tabActiveSelector, display = "block"){
    const tabs = document.querySelectorAll(tabsSelector),
    tabBtn = document.querySelectorAll(tabsBtnSelector),
    tabBtnContainer = document.querySelector(tabsParrentSelector);
    function hideTabs(){
        tabs.forEach ((item, i) => {
            item.style.display = "none";            
            tabBtn[i].classList.remove(tabActiveSelector.slice(1));
        });
    }
    function addTabs(i = 0){
        tabs[i].style.display = display;
        tabBtn[i].classList.add(tabActiveSelector.slice(1));
    }


    hideTabs();
    addTabs();

    tabBtnContainer.addEventListener('click', (e)=>{
        e.preventDefault();
        if (e.target && (e.target.classList.contains(tabsBtnSelector.replace(/\./,"")) || e.target.parentNode.classList.contains(tabsBtnSelector.replace(/\./,"")))){
        tabBtn.forEach((item, i) => {
            if (e.target == item || e.target.parentNode == item){
                hideTabs();
                addTabs(i);
            }
        });
        }
    });
}

export default tabs;