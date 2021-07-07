(() => {
    let stopwatch = 0;
    let lastTime = 0;
    let interval = -1;
    let started = false;

    function display() {
        const minutes = Math.floor(stopwatch / (1000 * 60));
        const seconds = Math.floor(stopwatch / 1000) % 60;
        const hundredths = Math.floor(stopwatch / 10) % 100;

        const minutesText = minutes < 10 ? "0" + minutes: minutes;
        const secondsText = seconds < 10 ? "0" + seconds: seconds;
        const hundredthsText = hundredths < 10 ? "0" + hundredths: hundredths;

        document.querySelector(".stopwatch__minutes").innerText = minutesText;
        document.querySelector(".stopwatch__seconds").innerText = secondsText;
        document.querySelector(".stopwatch__hundredths").innerText = hundredthsText;
    }
    
    function update() {
        let now = Date.now();
        let elapsed = now - lastTime;
        lastTime = now;
        stopwatch += elapsed;

        display();
    }
    
    const startBtn = document.querySelector(".stopwatch__btn--start");
    const stopBtn = document.querySelector(".stopwatch__btn--stop");
    const resetBtn = document.querySelector(".stopwatch__btn--reset");
    
    startBtn.addEventListener("click", () => {
        console.log("-- Start");
        if (!started) {
            lastTime = Date.now();
            interval = setInterval(update, 10);
            started = true;
        }
    });

    stopBtn.addEventListener("click", () => {
        console.log("-- Stop");
        clearInterval(interval);
        started = false;
    });

    resetBtn.addEventListener("click", () => {
        console.log("-- Reset");
        if (!started) {
            stopwatch = 0;
            display();
        }
    });
    
})();
