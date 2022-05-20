

function TataPunch(){
    this.name ="Tata Punch" ;
    this.type = "Four Wheeler";
    this.wheels = "MRF";
    this.color = "RED";
}

console.log("Using Constructor")

let tataPunch = new TataPunch()
console.log(tataPunch)


TataPunch.prototype.changeProperties = function(d,c){
    this.name = d;
    this.color= c;

}

let TataNexon = new TataPunch()
TataNexon.changeProperties("Tata Nexon","Yellow")
TataNexon.name = "Tata Nexon"
console.log(TataNexon);




TataPunch.prototype.changePropertiesOfAltroz = function(d,c){
    this.name = d;
    this.color= c;

}

let TataAltroz = new TataPunch()
TataAltroz.changePropertiesOfAltroz("Tata Altroz","Blue")
// TataNexon.name = "Tata Nexon"
console.log(TataAltroz);


console.log("<<<<<<<<----------->>>>>>>>>")

console.log("Using Object.create()")




let tataSafari= {
    name :"Tata Safari" ,
    type : "Four Wheeler",
    wheels : "MRF",
    color : "Violet",
}

console.log(tataSafari);

var tataNexonEV = Object.create(tataSafari);
tataNexonEV.name = "Tata Nexon EV"
tataNexonEV.color= "WhiteBlue"
console.log(tataNexonEV)



var tataHarrier= Object.create(tataNexonEV);
tataHarrier.name = "Tata Harrier"
tataHarrier.color= "BlackBlue"
console.log(tataHarrier)




