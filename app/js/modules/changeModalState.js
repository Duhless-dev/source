import checkNumInputs from "./checkNumInputs";

function changeModalState(dbState){
    const windowForm = document.querySelectorAll('.balcon_icons_img>img'),
    windowWidth = document.querySelectorAll('#width'), 
    windowHeight = document.querySelectorAll('#height'), 
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function buildEventElem(event, elem, prop){
        elem.forEach((item,i)=>{
            item.addEventListener(event, ()=>{
                switch(item.nodeName){
                    case 'IMG':
                        dbState[prop] = item.getAttribute("src");
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? dbState[prop] = "Холодное" : dbState[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            dbState[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        dbState[prop] = item.value;
                        break;
                }
            });
        });
    }

    buildEventElem('click', windowForm, 'form');
    buildEventElem('input', windowWidth, 'width');
    buildEventElem('input', windowHeight, 'height');
    buildEventElem('change', windowType, 'type');
    buildEventElem('change', windowProfile, 'profile');
}

export default changeModalState;
