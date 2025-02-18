var jourSemaine;
(function (jourSemaine) {
    jourSemaine[jourSemaine["lundi"] = 0] = "lundi";
    jourSemaine[jourSemaine["mardi"] = 1] = "mardi";
    jourSemaine[jourSemaine["mercredi"] = 2] = "mercredi";
    jourSemaine[jourSemaine["jeudi"] = 3] = "jeudi";
    jourSemaine[jourSemaine["vendredi"] = 4] = "vendredi";
    jourSemaine[jourSemaine["samedi"] = 5] = "samedi";
})(jourSemaine || (jourSemaine = {}));
const jour = jourSemaine.lundi;
// console.log(jourSemaine[jour]);
function afficherJour(jour) {
    console.log(`aujourd'hui ,c'est : ${jourSemaine[jour]}`);
}
afficherJour(jourSemaine.samedi);
