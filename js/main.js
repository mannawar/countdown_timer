const countdown = document.querySelector('.countdown');

//set launch date(ms)
const launchDate = new Date('Jan 1, 2021 13:00:00').getTime();

//update every millisecond
const intvl = setInterval(() => {
   const now = new Date().getTime();

   //get distance from now
   const distance = launchDate - now;
   
    //Time calculations
    const days = Math.floor(distance/(1000 * 60 * 60 * 24));

    const hours = Math.floor(distance % (1000 * 60 * 60 *24)/ (1000 * 60 * 60));

    const mins = Math.floor(distance % (1000 * 60 * 60 )/ (1000 * 60 ));    

    const seconds = Math.floor(distance % (1000 * 60)/ (1000)); 

    //Display Results
    countdown.innerHTML = `
    <div>${days}<span>Days</span></div> 
    <div>${hours}<span>Hours</span></div> 
    <div>${mins}<span>Minutes</span></div> 
    <div>${seconds}<span>Seconds</span></div> `;

    //If launch date passed
    if(distance < 0) {
        countdown.style.color='#17a2b8';
        countdown.innerHTML = 'Launched!';
    }

}, 1000)