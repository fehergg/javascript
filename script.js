
// Kiírás a konzolra:
console.log("Hello world!");

//Egysoros Komment

/*

fdf
dfd
fdfdfdf
többsoros
 komment*/

 //Adattípusok

 //1. szöveg (string)
 console.log("ez egy szoveg tipus...");

 //2. szám (number)
 console.log(123);

 //3. logikai típus (bool)

 //két értéket vehet fel; true/false
 console.log(true);
 console.log(false);
 // logikai ÉS
 // (boolean, boolean) --> boolean
// negálás:
//  ...
// undefined
console.log(undefined);

//null
console.log(null);

    /*
    *Array (tömb)
    */

    // Array<_>
    // array of ?
    // array<string>
    
    console.log(['elso', 'masodik', 'harmadik']);
    // szűrés
    // sorba rendezés
    // új elem hozzáadása
    // aggregálás


 //4. undefined
 console.log(undefined);

 //5. null
 console.log(null)

 //összetett adattípusok

 //1. tömb(array) []
 console.log(["Gipsz","Jakab",18]);

 //2. Objektum (Object) {}
 console.log({"firstname": "Jakab"})

 document.getElementById("cim").style.backgroundColor = "orange";
 


 //kulcs-érték párok sorozata
 console.log(
    {
firstname: 'Kolompos'
lastname: 'Kolompár'
Age: '88'
    }.
 );

 //lookup, kulcs alapú kikérés
 console.log(
    {
firstname: 'Kolompos'
lastname: 'Kolompár'
Age: '88'
    }['lastname']
 );

 console.log(
    {
firstname: 'Kolompos'
lastname: 'Kolompár'
Age: '88'
Address: {
    Street: 'Cigány u.'
    City: 'Mászlony'

}
    }.Address.Street
 );