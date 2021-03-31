
// ***** S'assure que la page a fini d'être chargée avant l'exécution du script *****
$(document).ready(function(){

    // *** Déclenchement du défilement de l'image de fond du HEADER... ***
    // ... selon une boucle définie par 'setInterval'
window.onload=setInterval(function(){funHeaderBackGroundChanging();},2500);
    // //... par l'appel récursif de 'setTimeout' dans la fonction
    // (!! BEURK !!)
    // //window.onload=funHeaderBackGroundChanging();

    // *** Gestion du clic sur le bouton de menu ***
    $('.fa-bars').click(function(){
        alert('Désolé, cette fonctionnalité\nest en cours de développement...');
    });
    // *** Gestion du clic sur le bouton "DOWN" (adresse) ***
    $('#DivAddressButtonDown').click(function(){
        alert('Désolé, cette fonctionnalité\nest en cours de développement...');
    });
    // *** Gestion du clic sur le bouton "Valider ma recherche" ***
    $('#DivCheckinButton').click(function(){
        alert('Désolé, cette fonctionnalité\nest en cours de développement...');
    });

    // *** Gestion du clic pour le défilement des images de voiture ***
    // -- 1 évènement unique posé sur le BODY pour observer tous 
    // -- les éléments "DivImgNaviRow" qu'il contient, ou contiendra !!
    $('body').on('click','.DivImgNaviRow',function(){
        // - Méthode Javascript :
        // funRotateImage(this);
        // - Méthode JQuery :
        funRotateImage($(this));
    });
    // *** Gestion du clic sur le bouton "Réserver et payer" ***
    // -- 1 évènement unique posé sur le BODY pour observer tous 
    // -- les éléments "ABook-Pay" qu'il contient, ou contiendra !!
    $('body').on('click','.ABook-Pay',function(){
    // $('.ABook-Pay').click(function(){
        alert('Désolé, cette fonctionnalité\nest en cours de développement...');
    });

    // *** Gestion du scroll ***
    // -- ... Récupère la hauteur par l'appel d'une fonction,car a besoin d'être dynamique,
    // -- => grandi avec l'ajout de nouveaux éléments...
    function getHeight(){return document.documentElement.scrollHeight;};
    function getInnerHeight(){return window.innerHeight?window.innerHeight:document.documentElement.clientHeight;};
    function getScrollTop(){return Math.max(document.body.scrollTop,document.documentElement.scrollTop);};
    // -- Fonction d'analyse de la progression du scroll et de création des nouveaux éléments
    function waitForBottom() {
        if(Math.round(getScrollTop()+getInnerHeight())===Math.round(getHeight())){
            // création de 4 nouvelles fiches automobiles
            $('.MainColumn').append(
                `<div class="DivCardVehicleRow col-md-12 col-lg-10">
                    <div class="DivImgVehicleRow col-sm-12 col-md-7 col-lg-7 col-xl-6">
                        <div class="DivImgNaviRow">
                            <img class="ImgPrevious" src="./src/flechenoiregauche.png" alt="Image flèche gauche">
                        </div>
                        <img class="ImgVehicle" src="./src/vehicule10.png" alt="Photo véhicule">
                        <div class="DivImgNaviRow">
                            <img class="ImgNext" src="./src/flechenoiredroite.png" alt="Image flèche droite">
                        </div>
                    </div>
                    <div class="DivCardVehicleColumn col-sm-12 col-md-5 col-lg-5 col-xl-6">
                        <h5>Peugeot 208</h5>
                        <p>Diesel, 5 portes, GPS, Autoradio, forfait 1000kms (0,5€/km supplémentaire)</p>
                        <p>999€ agence de Paris</p>
                        <a class="ABook-Pay" href="#">Réserver et payer</a>
                    </div>
                </div>
                <div class="DivCardVehicleRow col-md-12 col-lg-10">
                    <div class="DivImgVehicleRow col-sm-12 col-md-7 col-lg-7 col-xl-6">
                        <div class="DivImgNaviRow">
                            <img class="ImgPrevious" src="./src/flechenoiregauche.png" alt="Image flèche gauche">
                        </div>
                        <img class="ImgVehicle" src="./src/vehicule20.png" alt="Photo véhicule">
                        <div class="DivImgNaviRow">
                            <img class="ImgNext" src="./src/flechenoiredroite.png" alt="Image flèche droite">
                        </div>
                    </div>
                    <div class="DivCardVehicleColumn col-sm-12 col-md-5 col-lg-5 col-xl-6">
                        <h5>Ford Focus</h5>
                        <p>Diesel, 5 portes, GPS, Autoradio, forfait 1000kms (0,5€/km supplémentaire)</p>
                        <p>899€ agence de Versailles</p>
                        <a class="ABook-Pay" href="#">Réserver et payer</a>
                    </div>
                </div>
                <div class="DivCardVehicleRow col-md-12 col-lg-10">
                    <div class="DivImgVehicleRow col-sm-12 col-md-7 col-lg-7 col-xl-6">
                        <div class="DivImgNaviRow">
                            <img class="ImgPrevious" src="./src/flechenoiregauche.png" alt="Image flèche gauche">
                        </div>
                        <img class="ImgVehicle" src="./src/vehicule30.png" alt="Photo véhicule">
                        <div class="DivImgNaviRow">
                            <img class="ImgNext" src="./src/flechenoiredroite.png" alt="Image flèche droite">
                        </div>
                    </div>
                    <div class="DivCardVehicleColumn col-sm-12 col-md-5 col-lg-5 col-xl-6">
                        <h5>Audi A1</h5>
                        <p>Essence, 3 portes, GPS, Autoradio, forfait 1000kms (0,65€/km supplémentaire)</p>
                        <p>1049€ agence de Paris</p>
                        <a class="ABook-Pay" href="#">Réserver et payer</a>
                    </div>
                </div>
                <div class="DivCardVehicleRow col-md-12 col-lg-10">
                    <div class="DivImgVehicleRow col-sm-12 col-md-7 col-lg-7 col-xl-6">
                        <div class="DivImgNaviRow">
                            <img class="ImgPrevious" src="./src/flechenoiregauche.png" alt="Image flèche gauche">
                        </div>
                        <img class="ImgVehicle" src="./src/vehicule40.png" alt="Photo véhicule">
                        <div class="DivImgNaviRow">
                            <img class="ImgNext" src="./src/flechenoiredroite.png" alt="Image flèche droite">
                        </div>
                    </div>
                    <div class="DivCardVehicleColumn col-sm-12 col-md-5 col-lg-5 col-xl-6">
                        <h5>Opel Mokka</h5>
                        <p>Essence, 5 portes, GPS, Autoradio, forfait 1000kms (0,35€/km supplémentaire)</p>
                        <p>749€ agence d'Evry</p>
                        <a class="ABook-Pay" href="#">Réserver et payer</a>
                    </div>
                </div>`
            );
        };
    };
    // *** Pose de l'espion du mouvement de scrolling ***
    window.addEventListener('scroll',waitForBottom);
    // window.onscroll = waitForBottom; AUTRE METHODE POUR LA POSE
});


// Fonction de gestion du défilement de l'image de fond du HEADER
function funHeaderBackGroundChanging(){
    var iCurrentImage=$('header').css('background-image').split('/').reverse()[0];
    if(iCurrentImage!=='none'){
        iCurrentImage=parseInt(iCurrentImage.substr(10,1));
        var iDelay=300;
        // - Version JQuery :
        $('header').fadeOut(iDelay);
        setTimeout(function(){
                if(iCurrentImage===4){
                    $('header').css({'background-image':`url(src/background0.jpg)`});
                }
                else{
                    $('header').css({'background-image':`url(src/background${iCurrentImage+1}.jpg)`});
                }
        },iDelay);
        $('header').fadeIn(iDelay);
        // - Version Javascript :
        // document.querySelector('header').style.backgroundImage="url('./src/vehicule1.png')";
    }
    // PAS ICI !!! RECURSIVITE INUTILE AVEC 'setInterval' ...
    // setInterval(function(){funHeaderBackGroundChanging();},2500);
    // ... OU ALORS AVEC 'setTimeout', QUI NE GENERE PAS DE BOUCLE !!!
    // setTimeout(function(){funHeaderBackGroundChanging();},2500);
};

// Fait tourner l'image de la voiture, et afficher le bon texte...
function funRotateImage(vImage){
    // - Méthode Javascript :
    // var sClassArrow=vImage.children[0].className.toUpperCase();
    // - Méthode JQuery :
    var sClassArrow=vImage.children('Img').attr('class').toUpperCase();
    //
    var sFileName=vImage.parent().children('.ImgVehicle').attr(`src`).substr(15,1);
    if(sFileName===`0`){
        sFileName=vImage.parent().children('.ImgVehicle').attr(`src`).slice(0,15)+'1.png'
    }
    else{
        sFileName=vImage.parent().children('.ImgVehicle').attr(`src`).slice(0,15)+'0.png'
    }
    // vImage.parent().children('.ImgVehicle').attr(`src`,sFileName);
    funChangeImageWithFade(vImage.parent().children('.ImgVehicle'),sFileName);
};

function funChangeImageWithFade(htmlImage,sFileImage){
    var iDelay=150;
    htmlImage.fadeOut(iDelay);
    // - Méthode Javascript :
    // setTimeout(function(){htmlImage.setAttribute(`src`,`./src/vehicule20.png`);},iDelay);
    // - Méthode JQuery :
    setTimeout(function(){htmlImage.attr(`src`,sFileImage);},iDelay);
    /**/
    htmlImage.fadeIn(iDelay);
};