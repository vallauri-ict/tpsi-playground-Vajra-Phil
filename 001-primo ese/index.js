"use strict"
let colori=new Array('Nero','Marrone','Rosso','Arancio','Giallo','Verde','Blu','Viola','Grigio','Bianco','Oro','Argento');
let cifra=new Array(12);
let fattore=new Array(12);
let tolleranza=new Array('','1','2','3','','0.5','0.25','0.1','0.05','','5','10');

window.onload=function(){
    for(let i=0;i<cifra.length;i++){
        if(i<10)
        {
            cifra[i] = i.toString();
            fattore[i] = i.toString();
        }
        else{
            cifra[i] = "";
            fattore[i] = (9-i).toString();
        }
    }

    let body=document.getElementsByTagName("body")[0];
    let h1=document.createElement("h1"); //creazione elemento su html
    h1.innerHTML="<u>Resistenze elettriche dinamico</u>";
    body.appendChild(h1);

    //inserimento lstCifra1
    let select=document.createElement("select");
    select.setAttribute("id", "lstCifra1");
    select.style.margin = "5px";
    body.appendChild(select);
    //inserimento lstCifra2
    select=document.createElement("select");
    select.setAttribute("id", "lstCifra2");
    select.style.margin = "5px";
    body.appendChild(select);
    //inserimento lstFattore
    select=document.createElement("select");
    select.setAttribute("id", "lstFattore");
    select.style.margin = "5px";
    body.appendChild(select);
    //inserimento lstTolleranza
    select=document.createElement("select");
    select.setAttribute("id", "lstTolleranza");
    select.style.margin = "5px";
    body.appendChild(select);

    let br=document.createElement("br");
    body.appendChild(br);
    //Creazione button
    let btn=document.createElement("button");
    btn.setAttribute("id", "btnCalcola");
    btn.setAttribute("onclick", "calcola()");
    btn.innerText = "Calcola resistenza";
    body.appendChild(btn);
    //Creazione div
    let div=document.createElement("div");
    div.setAttribute("id", "divRisultato");
    div.innerHTML="<b>Valore della resistenza: </b>";
    body.appendChild(div);
    body.appendChild(br);
    body.appendChild(br);

    let txt=document.createElement("input");
    txt.type="text";
    txt.setAttribute("id", "txtCifra");
    body.appendChild(txt);

    caricaLst(cifra, "lstCifra1");
    caricaLst(cifra, "lstCifra2");
    caricaLst(fattore, "lstFattore");
    caricaLst(tolleranza, "lstTolleranza");
}

function caricaLst(vet, lst){
    let combo=document.getElementById(lst);
    for(let i=0;i<vet.length;i++){
        if(vet[i]!="") {
            let opt = document.createElement("option");
            opt.setAttribute("value", vet[i]);
            opt.innerText = colori[i];
            combo.appendChild(opt);
        }
    }
}

function calcola(){
    //Riferimenti
    let cbo1=document.getElementById("lstCifra1");
    let valueSelezionato = cbo1.options[cbo1.selectedIndex].value;
    //Esempio di risultato: 2000 +- 0.25%
}