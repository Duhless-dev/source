function modal(dbState){
        function buildModal(triggerSelector, modalSelector, closeSelector, closeChecked = true, inputChecked = false){
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll("[data-modal]");
        

        function calcScroll(){
            let div = document.createElement('div');

            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = "hidden";

            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
            return scrollWidth;
        }

        trigger.forEach((item)=>{
            item.addEventListener("click",(e)=>{
                e.preventDefault();
                if (!inputChecked){
                    windows.forEach(item =>{
                        item.style.display = "none";
                    });
                    if (e.target){
                        modal.style.display ="block";
                        document.body.style.overflow = "hidden";
                        document.body.style.marginRight = `${calcScroll()}px`;
                    }
                }else{
                    let inputTrigger = true;
                    if(dbState.height == '' || dbState.width == ''){
                        inputTrigger =false;
                    }
                    if(inputTrigger){
                        windows.forEach(item =>{
                            item.style.display = "none";
                        });
                        if (e.target){
                            modal.style.display ="block";
                            document.body.style.marginRight = `${calcScroll()}px`;
                            document.body.style.overflow = "hidden";
                        }
                    }else{
                        alert('Заполните данные');
                    }
                }
            });
        });        
        modal.addEventListener("click",(e)=>{
            
            if (e.target && ((e.target === modal && closeChecked) || e.target.closest(closeSelector))){
                windows.forEach(item =>{
                    item.style.display = "none";
                });
                modal.style.display ="none";
                document.body.style.marginRight = `0px`;
                document.body.style.overflow = ""; 
            }
        });

        
    }
    buildModal('.popup_engineer_btn','.popup_engineer','.popup_engineer .popup_close');
    buildModal('.phone_link','.popup','.popup .popup_close');
    buildModal('.popup_calc_btn','.popup_calc','.popup_calc_close', false);
    buildModal('.popup_calc_button','.popup_calc_profile','.popup_calc_profile_close', false, true);
    buildModal('.popup_calc_profile_button','.popup_calc_end','.popup_calc_end_close', false);

    // setTimeout(()=>{
    //     document.querySelector('.popup').style.display ="block";
    //     document.body.style.overflow = "hidden";}, 60000);
    
}

export default modal;