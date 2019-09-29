export function areaList(tds) {
  const s = new Set();
  for (const td of tds) {
    s.add(td.area);
  }
  const sArr = [...s];
  sArr.sort();
  return sArr;
}

export const TD_LIST = [
  {
    area: "Carlow-Kilkenny",
    name: "Bobby Aylward ",
    email: "bobby.aylward@oireachtas.ie"
  },
  {
    area: "Carlow-Kilkenny",
    name: "Kathleen Funchion",
    email: "kathleen.funchion@oireachtas.ie"
  },
  {
    area: "Carlow-Kilkenny",
    name: "John McGuinness",
    email: "john.mcguinness@oireachtas.ie"
  },
  {
    area: "Carlow-Kilkenny",
    name: "John Paul Phelan",
    email: "johnpaul.phelan@oireachtas.ie"
  },
  {
    area: "Carlow-Kilkenny",
    name: "Pat Deering",
    email: "pat.deering@oireachtas.ie"
  },
  {
    area: "Cavan-Monaghan",
    name: "Heather Humphreys",
    email: "heather.humphreys@oireachtas.ie"
  },
  {
    area: "Cavan-Monaghan",
    name: "Brendan Smith",
    email: "brendan.smith@oireachtas.ie"
  },
  {
    area: "Cavan-Monaghan",
    name: "Niamh Smyth",
    email: "niamh.smyth@oireachtas.ie"
  },
  {
    area: "Cavan-Monaghan",
    name: "Caoimhghín Ó Caoláin",
    email: "caoimhghin.ocaolain@oireachtas.ie"
  },
  { area: "Clare", name: "Pat Breen", email: "pat.breen@oireachtas.ie" },
  { area: "Clare", name: "Joe Carey", email: "joe.carey@oireachtas.ie" },
  { area: "Clare", name: "Timmy Dooley", email: "timmy.dooley@oireachtas.ie" },
  {
    area: "Clare",
    name: "Michael Harty",
    email: "michael.harty@oireachtas.ie"
  },
  {
    area: "Cork East",
    name: "Pat Buckley",
    email: "pat.buckley@oireachtas.ie"
  },
  {
    area: "Cork East",
    name: "Kevin O'Keeffe\t",
    email: "kevin.okeeffe@oireachtas.ie"
  },
  {
    area: "Cork East",
    name: "Seán Sherlock",
    email: "sean.sherlock@oireachtas.ie"
  },
  {
    area: "Cork East",
    name: "David Stanton",
    email: "david.stanton@oireachtas.ie"
  },
  {
    area: "Cork North-Central",
    name: "Mick Barry",
    email: "mick.barry@oireachtas.ie"
  },
  {
    area: "Cork North-Central",
    name: "Dara Murphy",
    email: "dara.murphy@oireachtas.ie"
  },
  {
    area: "Cork North-Central",
    name: "Jonathan O'Brien",
    email: "jonathan.obrien@oireachtas.ie"
  },
  {
    area: "Cork North-West",
    name: "Michael Creed",
    email: "michael.creed@oireachtas.ie"
  },
  {
    area: "Cork North-West",
    name: "Aindrias Moynihan",
    email: "aindrias.moynihan@oireachtas.ie"
  },
  {
    area: "Cork North-West",
    name: "Michael Moynihan",
    email: "michael.moynihan@oireachtas.ie"
  },
  {
    area: "Cork South-Central",
    name: "Simon Coveney",
    email: "simon.coveney@oireachtas.ie"
  },
  {
    area: "Cork South-Central",
    name: "Micheál Martin",
    email: "micheal.martin@oireachtas.ie"
  },
  {
    area: "Cork South-Central",
    name: "Michael McGrath",
    email: "michael.mcgrath@oireachtas.ie"
  },
  {
    area: "Cork South-Central",
    name: "Donnchadh Ó Laoghaire",
    email: "donnchadh.olaoghaire@oireachtas.ie"
  },
  {
    area: "Cork South-West",
    name: "Michael Collins",
    email: "michael.collins@oireachtas.ie"
  },
  {
    area: "Cork South-West",
    name: "Jim Daly",
    email: "jim.daly@oireachtas.ie"
  },
  {
    area: "Cork South-West",
    name: "Margaret Murphy O'Mahony",
    email: "margaret.murphyomahony@oireachtas.ie"
  },
  {
    area: "Donegal",
    name: "Pearse Doherty",
    email: "pearse.doherty@oireachtas.ie"
  },
  {
    area: "Donegal",
    name: "Pat the Cope Gallagher",
    email: "leascc@oireachtas.ie"
  },
  {
    area: "Donegal",
    name: "Charlie McConalogue",
    email: "charlie.mcconalogue@oireachtas.ie"
  },
  { area: "Donegal", name: "Joe McHugh", email: "joe.mchugh@oireachtas.ie" },
  {
    area: "Donegal",
    name: "Thomas Pringle",
    email: "thomas.pringle@oireachtas.ie"
  },
  {
    area: "Dublin Bay North",
    name: "Thomas P. Broughan",
    email: "thomas.broughan@oireachtas.ie"
  },
  {
    area: "Dublin Bay North",
    name: "Richard Bruton",
    email: "richard.bruton@oireachtas.ie"
  },
  {
    area: "Dublin Bay North",
    name: "Seán Haughey",
    email: "sean.haughey@oireachtas.ie"
  },
  {
    area: "Dublin Bay North",
    name: "Finian McGrath",
    email: "finian.mcgrath@oireachtas.ie"
  },
  {
    area: "Dublin Bay North",
    name: "Denise Mitchell",
    email: "denise.mitchell@oireachtas.ie"
  },
  {
    area: "Dublin Bay South",
    name: "Eoghan Murphy",
    email: "eoghan.murphy@oireachtas.ie"
  },
  {
    area: "Dublin Bay South",
    name: "Jim O'Callaghan",
    email: "jim.ocallaghan@oireachtas.ie"
  },
  {
    area: "Dublin Bay South",
    name: "Kate O'Connell",
    email: "kate.oconnell@oireachtas.ie"
  },
  {
    area: "Dublin Bay South",
    name: "Eamon Ryan",
    email: "eamon.ryan@oireachtas.ie"
  },
  {
    area: "Dublin Central",
    name: "Paschal Donohoe",
    email: "paschal.donohoe@oireachtas.ie"
  },
  {
    area: "Dublin Central",
    name: "Mary Lou McDonald",
    email: "marylou.mcdonald@oireachtas.ie"
  },
  {
    area: "Dublin Central",
    name: "Maureen O'Sullivan",
    email: "maureen.osullivan@oireachtas.ie"
  },
  {
    area: "Dublin Fingal",
    name: "Alan Farrell",
    email: "alan.farrell@oireachtas.ie"
  },
  {
    area: "Dublin Fingal",
    name: "Darragh O'Brien",
    email: "darragh.obrien@oireachtas.ie"
  },
  {
    area: "Dublin Fingal",
    name: "Louise O'Reilly",
    email: "louise.oreilly@oireachtas.ie"
  },
  {
    area: "Dublin Fingal",
    name: "Brendan Ryan",
    email: "brendan.ryan@oireachtas.ie"
  },
  {
    area: "Dublin Mid West",
    name: "John Curran",
    email: "john.curran@oireachtas.ie"
  },
  {
    area: "Dublin Mid West",
    name: "Gino Kenny",
    email: "gino.kenny@oireachtas.ie"
  },
  {
    area: "Dublin Mid West",
    name: "Eoin Ó Broin",
    email: "eoin.obroin@oireachtas.ie"
  },
  {
    area: "Dublin Rathdown",
    name: "Josepha Madigan",
    email: "josepha.madigan@oireachtas.ie"
  },
  {
    area: "Dublin Rathdown",
    name: "Catherine Martin",
    email: "catherine.martin@oireachtas.ie"
  },
  {
    area: "Dublin Rathdown",
    name: "Shane Ross",
    email: "shane.ross@oireachtas.ie"
  },
  {
    area: "Dublin North-West",
    name: "Dessie Ellis",
    email: "dessie.ellis@oireachtas.ie"
  },
  { area: "Dublin North-West", name: "Noel Rock", email: "noel@noelrock.ie" },
  {
    area: "Dublin North-West",
    name: "Róisín Shortall",
    email: "roisin.shortall@oireachtas.ie"
  },
  {
    area: "Dublin South-Central",
    name: "Catherine Byrne",
    email: "catherine.byrne@oireachtas.ie"
  },
  {
    area: "Dublin South-Central",
    name: "Joan Collins",
    email: "joan.collins@oireachtas.ie"
  },
  {
    area: "Dublin South-Central",
    name: "Bríd Smith",
    email: "brid.smith@oireachtas.ie"
  },
  {
    area: "Dublin South-Central",
    name: "Aengus Ó Snodaigh",
    email: "aengus.osnodaigh@oireachtas.ie"
  },
  {
    area: "Dublin South-West",
    name: "Seán Crowe",
    email: "sean.crowe@oireachtas.ie"
  },
  {
    area: "Dublin South-West",
    name: "John Lahart",
    email: "john.lahart@oireachtas.ie"
  },
  {
    area: "Dublin South-West",
    name: "Paul Murphy",
    email: "paul.murphy@oireachtas.ie"
  },
  {
    area: "Dublin South-West",
    name: "Colm Brophy",
    email: "colm.brophy@oireachtas.ie"
  },
  {
    area: "Dublin South-West",
    name: "Katherine Zappone",
    email: "katherine.zappone@oireachtas.ie"
  },
  {
    area: "Dublin West",
    name: "Joan Burton",
    email: "joan.burton@oireachtas.ie"
  },
  { area: "Dublin West", name: "Jack Chambers", email: "jack@jackchambers.ie" },
  {
    area: "Dublin West",
    name: "Ruth Coppinger",
    email: "ruth.coppinger@oireachtas.ie"
  },
  {
    area: "Dublin West",
    name: "Leo Varadkar",
    email: "leo.varadkar@oireachtas.ie"
  },
  {
    area: "Dun Laoghaire",
    name: "Maria Bailey",
    email: "maria.bailey@oireachtas.ie"
  },
  {
    area: "Dun Laoghaire",
    name: "Seán Barrett",
    email: "sean.barrett@oireachtas.ie"
  },
  {
    area: "Dun Laoghaire",
    name: "Richard Boyd Barrett",
    email: "richard.boydbarrett@oireachtas.ie"
  },
  {
    area: "Dun Laoghaire",
    name: "Mary Mitchell O'Connor",
    email: "mary.mitchelloconnor@oireachtas.ie"
  },
  {
    area: "Galway East",
    name: "Seán Canney",
    email: "sean.canney@oireachtas.ie"
  },
  {
    area: "Galway East",
    name: "Ciaran Cannon",
    email: "ciaran.cannon@oireachtas.ie"
  },
  {
    area: "Galway East",
    name: "Anne Rabbitte",
    email: "anne.rabbitte@oireachtas.ie"
  },
  {
    area: "Galway West",
    name: "Catherine Connolly",
    email: "catherine.connolly@oireachtas.ie"
  },
  {
    area: "Galway West",
    name: "Noel Grealish",
    email: "noel.grealish@oireachtas.ie"
  },
  { area: "Galway West", name: "Seán Kyne", email: "sean.kyne@oireachtas.ie" },
  {
    area: "Galway West",
    name: "Hildegarde Naughton",
    email: "hildegarde.naughton@oireachtas.ie"
  },
  {
    area: "Galway West",
    name: "Éamon Ó Cuív",
    email: "eamon.ocuiv@oireachtas.ie"
  },
  { area: "Kerry ", name: "John Brassil", email: "john.brassil@oireachtas.ie" },
  {
    area: "Kerry",
    name: "Martin Ferris",
    email: "martin.ferris@oireachtas.ie"
  },
  {
    area: "Kerry",
    name: "Brendan Griffin",
    email: "brendan.griffin@oireachtas.ie"
  },
  {
    area: "Kerry",
    name: "Danny Healy-Rae",
    email: "danny.healy-rae@oireachtas.ie"
  },
  {
    area: "Kerry",
    name: "Michael Healy-Rae",
    email: "michael.healy-rae@oireachtas.ie"
  },
  {
    area: "Kildare North",
    name: "Bernard Durkan",
    email: "bernard.durkan@oireachtas.ie"
  },
  {
    area: "Kildare North",
    name: "James Lawless",
    email: "james.lawless@oireachtas.ie"
  },
  {
    area: "Kildare North",
    name: "Catherine Murphy",
    email: "catherine.murphy@oireachtas.ie"
  },
  {
    area: "Kildare North",
    name: "Frank O'Rourke",
    email: "frank.orourke@oireachtas.ie"
  },
  {
    area: "Kildare South",
    name: "Martin Heydon",
    email: "martin.heydon@oireachtas.ie"
  },
  {
    area: "Kildare South",
    name: "Fiona O'Loughlin",
    email: "fiona.oloughlin@oireachtas.ie"
  },
  {
    area: "Laois",
    name: "Charles Flanagan",
    email: "charles.flanagan@oireachtas.ie"
  },
  { area: "Laois", name: "Seán Fleming", email: "sean.fleming@oireachtas.ie" },
  {
    area: "Laois",
    name: "Brian Stanley",
    email: "brian.stanley@oireachtas.ie"
  },
  {
    area: "Limerick City",
    name: "Michael Noonan",
    email: "michael.noonan@oireachtas.ie"
  },
  {
    area: "Limerick City",
    name: "Willie O'Dea",
    email: "willie.odea@oireachtas.ie"
  },
  {
    area: "Limerick City",
    name: "Jan O'Sullivan",
    email: "jan.osullivan@oireachtas.ie"
  },
  {
    area: "Limerick City",
    name: "Maurice Quinlivan",
    email: "maurice.quinlivan@oireachtas.ie"
  },
  {
    area: "Limerick County",
    name: "Niall Collins",
    email: "niall.collins@oireachtas.ie"
  },
  {
    area: "Limerick County",
    name: "Tom Neville",
    email: "tom.neville@oireachtas.ie"
  },
  {
    area: "Limerick County",
    name: "Patrick O'Donovan",
    email: "patrick.odonovan@oireachtas.ie"
  },
  {
    area: "Longford-Westmeath",
    name: "Peter Burke",
    email: "peter.burke@oireachtas.ie"
  },
  {
    area: "Longford-Westmeath",
    name: "Kevin Boxer Moran",
    email: "kevin.moran@oireachtas.ie"
  },
  {
    area: "Longford-Westmeath",
    name: "Willie Penrose",
    email: "willie.penrose@oireachtas.ie"
  },
  {
    area: "Longford-Westmeath",
    name: "Robert Troy",
    email: "robert.troy@oireachtas.ie"
  },
  { area: "Louth", name: "Gerry Adams", email: "gerry.adams@oireachtas.ie" },
  {
    area: "Louth",
    name: "Declan Breathnach",
    email: "declan.breathnach@oireachtas.ie"
  },
  {
    area: "Louth",
    name: "Peter Fitzpatrick",
    email: "peterm.fitzpatrick@oireachtas.ie"
  },
  {
    area: "Louth",
    name: "Imelda Munster",
    email: "imelda.munster@oireachtas.ie"
  },
  { area: "Louth", name: "Fergus O'Dowd", email: "fergus.odowd@oireachtas.ie" },
  { area: "Mayo", name: "Dara Calleary", email: "dara.calleary@oireachtas.ie" },
  { area: "Mayo", name: "Lisa Chambers", email: "lisa.chambers@oireachtas.ie" },
  { area: "Mayo", name: "Enda Kenny", email: "enda.kenny@oireachtas.ie" },
  { area: "Mayo", name: "Michael Ring", email: "michael.ring@oireachtas.ie" },
  {
    area: "Meath East",
    name: "Thomas Byrne",
    email: "thomas.byrne@oireachtas.ie"
  },
  {
    area: "Meath East",
    name: "Regina Doherty",
    email: "regina.doherty@oireachtas.ie"
  },
  {
    area: "Meath East",
    name: "Helen McEntee",
    email: "helen.mcentee@oireachtas.ie"
  },
  {
    area: "Meath West",
    name: "Shane Cassells",
    email: "shane.cassells@oireachtas.ie"
  },
  {
    area: "Meath West",
    name: "Damien English",
    email: "damien.english@oireachtas.ie"
  },
  {
    area: "Meath West",
    name: "Peadar Tóibín",
    email: "peadar.toibin@oireachtas.ie"
  },
  {
    area: "Offaly",
    name: "Marcella Corcoran Kennedy",
    email: "marcella.corcorankennedy@oireachtas.ie"
  },
  { area: "Offaly", name: "Barry Cowen", email: "barry.cowen@oireachtas.ie" },
  { area: "Offaly", name: "Carol Nolan", email: "carol.nolan@oireachtas.ie" },
  {
    area: "Roscommon-Galway",
    name: "Michael Fitzmaurice",
    email: "michael.fitzmaurice@oireachtas.ie"
  },
  {
    area: "Roscommon-Galway",
    name: "Eugene Murphy",
    email: "eugene.murphy@oireachtas.ie"
  },
  {
    area: "Roscommon-Galway",
    name: "Denis Naughten",
    email: "Denis.Naughten@oireachtas.ie"
  },
  {
    area: "Sligo-Leitrim",
    name: "Martin Kenny",
    email: "martin.kenny@oireachtas.ie"
  },
  {
    area: "Sligo-Leitrim",
    name: "Marc MacSharry",
    email: "marc.macsharry@oireachtas.ie"
  },
  {
    area: "Sligo-Leitrim",
    name: "Tony McLoughlin",
    email: "tony.mcloughlin@oireachtas.ie"
  },
  {
    area: "Sligo-Leitrim",
    name: "Eamon Scanlon",
    email: "eamon.scanlon@oireachtas.ie"
  },
  {
    area: "Tipperary",
    name: "Jackie Cahill",
    email: "jackie.cahill@oireachtas.ie"
  },
  {
    area: "Tipperary",
    name: "Seamus Healy",
    email: "seamus.healy@oireachtas.ie"
  },
  { area: "Tipperary", name: "Alan Kelly", email: "alan.kelly@oireachtas.ie" },
  {
    area: "Tipperary",
    name: "Michael Lowry",
    email: "michael.lowry@oireachtas.ie"
  },
  {
    area: "Tipperary",
    name: "Mattie McGrath",
    email: "mattie.mcgrath@oireachtas.ie"
  },
  {
    area: "Waterford",
    name: "Mary Butler",
    email: "mary.butler@oireachtas.ie"
  },
  {
    area: "Waterford",
    name: "David Cullinane",
    email: "david.cullinane@oireachtas.ie"
  },
  { area: "Waterford", name: "John Deasy", email: "john.deasy@oireachtas.ie" },
  {
    area: "Waterford",
    name: "John Halligan",
    email: "john.halligan@oireachtas.ie"
  },
  {
    area: "Wexford",
    name: "James Browne",
    email: "james.browne@oireachtas.ie"
  },
  {
    area: "Wexford",
    name: "Michael D'Arcy",
    email: "michael.darcy@oireachtas.ie"
  },
  {
    area: "Wexford",
    name: "Brendan Howlin",
    email: "brendan.howlin@oireachtas.ie"
  },
  { area: "Wexford", name: "Paul Kehoe", email: "paul.kehoe@oireachtas.ie" },
  { area: "Wicklow", name: "John Brady", email: "john.brady@oireachtas.ie" },
  { area: "Wicklow", name: "Pat Casey", email: "pat.casey@oireachtas.ie" },
  {
    area: "Wicklow",
    name: "Stephen Donnelly",
    email: "stephen.donnelly@oireachtas.ie"
  },
  {
    area: "Wicklow",
    name: "Andrew Doyle",
    email: "andrew.doyle@oireachtas.ie"
  },
  { area: "Wicklow", name: "Simon Harris", email: "simon.harris@oireachtas.ie" }
];
