export default function images(){
    const workSection = document.querySelector('.works');

    const   imgPopup = document.createElement('div'),
    img = document.createElement('div');
    img.style.width = '50%';
    img.style.height = '70%';
    imgPopup.classList.add('popup');
    imgPopup.style.justifyContent = "center";
    imgPopup.style.alignItems = "center";
    workSection.appendChild(imgPopup);
    imgPopup.appendChild(img);
    imgPopup.style.display = 'none';
    img.style.backgroundPosition = "center";
    img.style.backgroundSize = "contain";
    img.style.backgroundRepeat = "no-repeat";


    workSection.addEventListener('click',(e)=>{
        if(e.target && e.target.classList.contains('preview')){
            e.preventDefault();
            let hr = e.target.parentNode.getAttribute('href');
            console.log(hr);
            img.style.backgroundImage = `url(${hr})`;
            imgPopup.style.display = 'flex';
        }

        if(e.target && e.target.matches('div.popup')){
            imgPopup.style.display = 'none';
        }
    });


}