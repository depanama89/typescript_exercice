enum jourSemaine {
  lundi,
  mardi,
  mercredi,
  jeudi,
  vendredi,
  samedi,
}

const jour: jourSemaine = jourSemaine.lundi;

// console.log(jourSemaine[jour]);

function afficherJour(jour: jourSemaine) {
  console.log(`aujourd'hui ,c'est : ${jourSemaine[jour]}`);
}
afficherJour(jourSemaine.samedi);
