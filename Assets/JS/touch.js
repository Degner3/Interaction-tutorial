


let result = document.getElementById('result');

const isDetectTouch = () => {

    try{
        
        document.createEvent('TouchEvent');
        result.innerHTML='Det er en <span>Touch</span> device';

    }
    catch(e){

        result.innerHTML = 'Det er en <span>Mouse</span> device';

    }

};

isDetectTouch();





































/*


Vejledning til hvordan du detekterer touch.


1. Først åben touch.html fil i ved højreklik på den og klik så på open with live server

2. Så højreklikker du for og åbner inspcter / undersøg.


3. Så klikker du på mobile/tablet ikonet / toggle device bar i toppen

4. Så klikker du på ikonet med her og vælger add device type


5. Så kan du klikke her og vælg mellem forskellige devise

6. Hver gang du har valgt en ny devise klikker du op i venste hjørne på ikonet for at opdater siden


*/