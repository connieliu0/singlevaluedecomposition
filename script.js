// Create a new Date object
const currentDate = new Date();

// Get the year
const year = currentDate.getFullYear();

// Get the month (Note: getMonth() returns 0-11, so we add 1)
const month = currentDate.getMonth() + 1;

// Get the day of the month
const day = currentDate.getDate();

// const currDate = new Date(year+'-'+month+'-'+day);
const currDate = new Date('2024-12-02');


// number differences
// Create two Date objects
const decompDate = new Date('2024-07-02');

// Get the difference in milliseconds
const differenceInMilliseconds = currDate.getTime() - decompDate.getTime();

// Convert the difference to days
const millisecondsPerDay = 1000 * 60 * 60 * 24;
const differenceInDays = differenceInMilliseconds / millisecondsPerDay;


let ratio = Math.round((differenceInDays / 182)*100)/100;
let imgUpload;

document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.getElementById('displayImage');
        const dataURL = e.target.result;
        imgUpload = storedImage;
        localStorage.setItem('storedImage', dataURL);
      }
      reader.readAsDataURL(file);
    }
  });

  window.addEventListener('load', function() {
    const storedImage = localStorage.getItem('storedImage');
    if (storedImage) {
      imgUpload = storedImage;
    }
  });

//image block
const blocks = document.getElementsByClassName('block');
for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.filter = "blur(" + 1.5 * ratio + "rem)" + " " + "grayscale(" +ratio + ")";
    blocks[i].style.border =16*ratio+"px solid white";
    blocks[i].style.opacity =1-1*ratio;
    blocks[i].style.backgroundImage="url("+imgUpload+");"

}


