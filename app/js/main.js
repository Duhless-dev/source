'use strict';
import "./slider";
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
document.addEventListener("DOMContentLoaded",()=>{
    modal();
    tabs(".decoration_content>div>div",".no_click",".decoration_slider",".after_click");
    tabs(".glazing_content",".glazing_block",".glazing_slider",".active");
    forms();
});