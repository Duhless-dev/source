function modal(){
        function buildModal(triggerSelector, modalSelector, closeSelector){
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector);

        trigger.forEach((item)=>{
            item.addEventListener("click",(e)=>{
                e.preventDefault();
                if (e.target){
                    modal.style.display ="block";
                    document.body.style.overflow = "hidden";
                }
            });
        });        
        modal.addEventListener("click",(e)=>{
            if (e.target && (e.target === modal || e.target.classList.contains("popup_close") || e.target.parentNode.classList.contains("popup_close"))){
                modal.style.display ="none";
                document.body.style.overflow = ""; 
            }
        });

        
    }
    buildModal('.popup_engineer_btn','.popup_engineer','.popup_engineer .popup_close');
    buildModal('.phone_link','.popup','.popup .popup_close');

    // setTimeout(()=>{
    //     document.querySelector('.popup').style.display ="block";
    //     document.body.style.overflow = "hidden";}, 60000);
    
}

export default modal;