'use strict';
import "./slider";
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import images from './modules/images';
document.addEventListener("DOMContentLoaded",()=>{
    
    let dbState={
        form: 'assets/img/modal_calc/balkon/ba_01.png',
        width:'',
        height:'',
        type:'tree',
        profile:'Холодное'
    };

    modal(dbState);
    tabs(".decoration_content>div>div",".no_click",".decoration_slider",".after_click");
    tabs(".glazing_content",".glazing_block",".glazing_slider",".active");
    tabs(".big_img>img",".balcon_icons_img",".balcon_icons",".do_image_more", "inline-block");
    forms(dbState);
    changeModalState(dbState);
    images();
});