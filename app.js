const ad = document.querySelectort('.song');
const playing = document.querySelector('.fa-play');
const pauses = document.querySelector('.fa-pause');
const forw = document.querySelector('.fa-forward-step');
const ttl = document.querySelector('.title');
const art_img = document.querySelector('#artist');
const art_name = document.querySelector('#name');
const art_playing = document.querySelector('#playing');

const artist_name = ['alan', 'drake','arjit']
const artist_title = ['fadeed',' sanam']

playing.addEventListener('click', effect)

function effect() {
    if (ad.duration == ad.currentTime) {
        x += 1;
        console.log(x);
    }
    if (
    ( !playing.classList.contains('none'))
    ) {
        ad.play();
       // setInterval(prog, 1000);
      //  setInterval(line, 1000);
        //Progress.addEventListener('click', (e) => {
          //  var widthbar2 = (e.offsetx / e.target.clientwidth) * ad.duration 
            //ad.currentTime = widthbar2;
       // })
        
    } else {
        ad.pauses();
    }

    ttl.classList.toggle('run');
    playing.classList.toggle('none');
    pauses.classList.toggle('none');
    art_img.classList.toggle('round');
}