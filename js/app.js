const _ = document,
absolute = _.querySelector('.absolute'),
images = _.querySelectorAll('.images .image img'),
box = _.querySelector('.preview-box'),
close = _.querySelector('.fa-close'),
previewImage = _.querySelector('.preview-box img'),
currentImg = _.querySelector('.current-img'),
totalImg = _.querySelector('.total-img'),
goRight = _.querySelector('.next'),
goLeft = _.querySelector('.prev'),
flag = 0;
images.forEach((image)=>{
    image.addEventListener('click', (event)=>{
        changedisplay(1, 1);
        showPreview(1, box);
        showPreview(0, box);
        changePhoto(image.src);
        setTotalImages();
        let flag = changePhoto(image.src);
        if (flag === 1) changedisplay(1, 0);
        if (flag === images.length) changedisplay(0, 1);
        goRight.addEventListener('click', (event)=>{
            changedisplay(1, 1);
            flag++;
            if (flag === images.length) changedisplay(0, 1);
            changePhoto(getSrc(flag));
        })
        goLeft.addEventListener('click', (event)=>{
            changedisplay(1, 1);
            flag--;
            if (flag ===1) changedisplay(1, 0);;
            changePhoto(getSrc(flag));
        })
    })
})
function setTotalImages(){
    totalImg.innerText = images.length;
    return images.length;
}
function changedisplay(right, left){
    goRight.style.display = 'none';
    goLeft.style.display = 'none';
    if (right) goRight.style.display = 'block';
    if (left) goLeft.style.display = 'block';
}
function changePhoto(src){
    previewImage.src = src;
    for (let i of images.entries()){
        if (i[1].src === src){
            currentImg.innerText = i[0]+1
            return i[0]+1   ;
            break;
        }
    }
}
function getSrc(number){
    for (let i of images.entries()){
        if (i[0]+1 === number){
            return i[1].src ;
            break;
        }
    }
}
function showPreview(number, box){
    if (number) {
        box.classList.add('show-preview');
        absolute.classList.add('absolute-change');
    }
    else {
        close.addEventListener('click', ()=>{
            box.classList.remove('show-preview');
            absolute.classList.remove('absolute-change');
        })
    }
}