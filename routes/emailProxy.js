// emailProxy.js
const express = require("express");
const { verifyhttpsMethod } = require("../middlewares/allowedHttpsMethod");
const router = express.Router();

const emailMap = {
  ait: "ait@aitpune.edu.in",
  jd: "jd@aitpune.edu.in",
  deanrd: "deanrd@aitpune.edu.in",
  stiwari: "stiwari@aitpune.edu.in",
  hodasge: "hodasge@aitpune.edu.in",
  //! asge  Faculty
  gmundhe: "gmundhe@aitpune.edu.in",
  skulkarni: "skulkarni@aitpune.edu.in",
  mchandola: "mchandola@aitpune.edu.in",
  aahire: "aahire@aitpune.edu.in",
  vhivrale: "vhivrale@aitpune.edu.in",
  rushikeshpatil: "rushikeshpatil@aitpune.edu.in",
  sachintanawade: "sachintanawade@aitpune.edu.in",
  nityabhaskar: "nityabhaskar@aitpune.edu.in",
  surekhagite: "surekhagite@aitpune.edu.in",
  sonalibhosle: "sonalibhosle@aitpune.edu.in",
  amrutashinde: "amrutashinde@aitpune.edu.in",
  ketankumarganure: "ketankumarganure@aitpune.edu.in",
  snehalmore: "snehalmore@aitpune.edu.in",
  physicaldirector: "physicaldirector@aitpune.edu.in",
  //! asge staff
  ssalunkhe: "ssalunkhe@aitpune.edu.in",
  vkulkarni: "vkulkarni@aitpune.edu.in",
  rbabar: "rbabar@aitpune.edu.in",
  gitanjalisalunke: "gitanjalisalunke@aitpune.edu.in",
  // ! IT HOD
  hodit: "hodit@aitpune.edu.in",
  // ! IT FACULTY
  dgauradkar: "dgauradkar@aitpune.edu.in",
  rahuldesai: "rahuldesai@aitpune.edu.in",
  asapkal: "asapkal@aitpune.edu.in",
  gwalunjkar: "gwalunjkar@aitpune.edu.in",
  vingale: "vingale@aitpune.edu.in",
  gpatil: "gpatil@aitpune.edu.in",
  ygholap: "ygholap@aitpune.edu.in",
  ssamleti: "ssamleti@aitpune.edu.in",
  rbagate: "rbagate@aitpune.edu.in",
  drdipika: "dipikabirari@aitpune.edu.in",
  anjalihudedamani: "anjalihudedamani@aitpune.edu.in",
  kavitaarkeri: "kavitaarkeri@aitpune.edu.in",
  priyajadhav: "priyajadhav@aitpune.edu.in",
  jayshreelavhare: "jayshreelavhare@aitpune.edu.in",
  truptinajan: "truptinajan@aitpune.edu.in",

  // ! IT STAFF
  jyotitaralkar: "jyotitaralkar@aitpune.edu.in",
  rohansonavane: "rohansonavane@aitpune.edu.in",
  shitalsuvarnakar: "shitalsuvarnakar@aitpune.edu.in",
  suryakantkenjale: "suryakantkenjale@aitpune.edu.in",
  pushpakalane: "pushpakalane@aitpune.edu.in",
  makarandsaste: "makarandsaste@aitpune.edu.in",
  aditiganure: "aditiganure@aitpune.edu.in",
  shankarlavhare: "shankarlavhare@aitpune.edu.in",
  pratikshagaikwad: "pratikshagaikwad@aitpune.edu.in",

  // ! COMP HOD
  hodcomp: "hodcomp@aitpune.edu.in",
  // ! COMP FACULTY
  nkbansode: "nkbansode@aitpune.edu.in",
  rjayadevan: "rjayadevan@aitpune.edu.in",
  sagarrane: "sagarrane@aitpune.edu.in",
  mblonare: "mblonare@aitpune.edu.in",
  prsonawane: "prsonawane@aitpune.edu.in",
  asathe: "asathe@aitpune.edu.in",
  vganganwar: "vganganwar@aitpune.edu.in",
  sshirke: "sshirke@aitpune.edu.in",
  rpatil: "rpatil@aitpune.edu.in",
  slokhande: "slokhande@aitpune.edu.in",
  ythambir: "ythambir@aitpune.edu.in",
  akadam: "akadam@aitpune.edu.in",
  ngupta: "ngupta@aitpune.edu.in",
  syadav: "syadav@aitpune.edu.in",
  kuldeephule: "kuldeephule@aitpune.edu.in",
  mangeshhajare: "mangeshhajare@aitpune.edu.in",
  poonamrayakar: "poonamrayakar@aitpune.edu.in",
  agangshetty: "agangshetty@aitpune.edu.in",
  umakantdhatrak: "umakantdhatrak@aitpune.edu.in",
  truptikatte: "truptikatte@aitpune.edu.in",
  pradnyatapkir: "pradnyatapkir@aitpune.edu.in",
  // ! COMP STAFF
  kkdass: "kkdass@aitpune.edu.in",
  updeolankar: "updeolankar@aitpune.edu.in",
  kprakash: "kprakash@aitpune.edu.in",
  rkadam: "rkadam@aitpune.edu.in",
  rdesai: "rdesai@aitpune.edu.in",
  priyankaholkar: "priyankaholkar@aitpune.edu.in",
  varshasadawarte: "varshasadawarte@aitpune.edu.in",
  pramodpatil: "pramodpatil@aitpune.edu.in",
  shraddhasuvarnakar: "shraddhasuvarnakar@aitpune.edu.in",
  sandipsonwalkar: "sandipsonwalkar@aitpune.edu.in",
  mohanmane: "mohanmane@aitpune.edu.in",
  amrutagaikwad: "amrutagaikwad@aitpune.edu.in",

  // ! ENTC HOD
  hodetc: "hodetc@aitpune.edu.in",
  // ! ENTC FACULTY
  principal: "principal@aitpune.edu.in",
  pkarandikar: "pkarandikar@aitpune.edu.in",
  sdoza: "sdoza@aitpune.edu.in",
  rbhandari: "rbhandari@aitpune.edu.in",
  swadar: "swadar@aitpune.edu.in",
  rsuryavanshi: "rsuryavanshi@aitpune.edu.in",
  jjawale: "jjawale@aitpune.edu.in",
  vkarra: "vkarra@aitpune.edu.in",
  apatil: "apatil@aitpune.edu.in",
  pwarrier: "pwarrier@aitpune.edu.in",
  gkapse: "gkapse@aitpune.edu.in",
  spawar: "spawar@aitpune.edu.in",
  smarathe: "smarathe@aitpune.edu.in",
  dhanashreepatil: "dhanashreepatil@aitpune.edu.in",
  pragatirana: "pragatirana@aitpune.edu.in",
  sandeepbidwai: "sandeepbidwai@aitpune.edu.in",
  mahimajain: "mahimajain@aitpune.edu.in",
  ashishdudhale: "ashishdudhale@aitpune.edu.in",
  ashwinikale: "ashwinikale@aitpune.edu.in",
  supriyahadke: "supriyahadke@aitpune.edu.in",
  sukumarchougule: "sukumarchougule@aitpune.edu.in",

  komalgill: "komalgill@aitpune.edu.in",
  pranitatambe: "pranitatambe@aitpune.edu.in",
  // ! ENTC STAFF
  rajashreesc: "rajashreesc@aitpune.edu.in",
  skadam: "skadam@aitpune.edu.in",
  akatole: "akatole@aitpune.edu.in",
  nsukhadeve: "nsukhadeve@aitpune.edu.in",
  mohinis: "mohinis@aitpune.edu.in",
  vidyajadhav: "vidyajadhav@aitpune.edu.in",
  pravinsangle: "pravinsangle@aitpune.edu.in",
  deepaliapraj: "deepaliapraj@aitpune.edu.in",
  paurnimapatil: "paurnimapatil@aitpune.edu.in",
  bhagyashripawar: "bhagyashripawar@aitpune.edu.in",
  namratapawshe: "namratapawshe@aitpune.edu.in",
  bhikajigadekar: "bhikajigadekar@aitpune.edu.in",

  // ! MECH HOD
  hodmech: "hodmech@aitpune.edu.in",
  // ! MECH FACULTY
  rsverma: "rsverma@aitpune.edu.in",
  vrkulkarni: "vrkulkarni@aitpune.edu.in",
  jdpatil: "jdpatil@aitpune.edu.in",
  pmpurohit: "pmpurohit@aitpune.edu.in",
  pvdorlikar: "pvdorlikar@aitpune.edu.in",
  rbgurav: "rbgurav@aitpune.edu.in",
  yvpatel: "yvpatel@aitpune.edu.in",
  smgaikwad: "smgaikwad@aitpune.edu.in",
  aaramgude: "aaramgude@aitpune.edu.in",
  mphatangare: "mphatangare@aitpune.edu.in",
  rgodse: "rgodse@aitpune.edu.in",
  laxmikantjathar: "laxmikantjathar@aitpune.edu.in",
  gourideepakbhasale: "gourideepakbhasale@aitpune.edu.in",

  // ! MECH STAFF
  agjirgale: "agjirgale@aitpune.edu.in",
  ergagote: "ergagote@aitpune.edu.in",
  bdsonawane: "bdsonawane@aitpune.edu.in",
  mtsankpal: "mtsankpal@aitpune.edu.in",
  sbshikare: "sbshikare@aitpune.edu.in",
  sandipkarande: "sandipkarande@aitpune.edu.in",
  nishadbarathe: "nishadbarathe@aitpune.edu.in",

  // ! EXTERNAL MEMBERS
  rkumar: "rkumar@udchalo.com",
  vijenderyadav: "vijender.yadav@accops.com",
  sumitshahi: "sumit.shahi@hdfcbank.com",
  sameerdalal: "sameer.dalal@ust-global.com",
  rponkshe: "rponkshe@bhateponkshe.com",
  pawanyadav: "pawanyadav@aitpune.edu.in",
  abhijeetdeogirikar: "abhijeetdeogirikar@gmail.com",
  vijaytalele: "ceo.bhau@coep.ac.in",

  // ! STUDENT MEMBERS
  akishitkotnala: "akishitkotnala_22352@aitpune.edu.in",
  rohitsingh: "rohitsingh_22694@aitpune.edu.in",
  laxyasangwan: "laxyasangwan_22266@aitpune.edu.in",
  gauravsingh: "gauravsingh_230652@aitpune.edu.in",
  nepalsingh: "nepalsingh_22383@aitpune.edu.in",
  vikrantsingh: "vikrantsingh_22928@aitpune.edu.in",
  deepshikharawat: "deepshikharawat_22924@aitpune.edu.in",
  ankitsharma: "ankitsharma_22248@aitpune.edu.in",
  prathamkumar: "prathamkumar_22261@aitpune.edu.in",
  khairnardarshan: "khairnardarshan_22206@aitpune.edu.in",
  sumitkumar: "sumitkumar_22403@aitpune.edu.in",
  adityasingh: "adityasingh_22183@aitpune.edu.in",
  nikhildhariwal: "nikhildhariwal_22514@aitpune.edu.in",
  yashpathak: "yashpathak_22474@aitpune.edu.in",
  shivanksingh: "shivanksingh_21281@aitpune.edu.in",
  gulshankumar: "gulshankumar_22224@aitpune.edu.in",
  shashvatkhajuria: "shashvatkhajuria_21035@aitpune.edu.in",
  ganga: "ganga_21718@aitpune.edu.in",
  tejaswi: "tejaswi_21001@aitpune.edu.in",
  satyamsatpathi: "satyamsatpathi_22353@aitpune.edu.in",
  ankanasardar: "ankanasardar_21681@aitpune.edu.in",
  arnavsingh: "arnavsingh_21157@aitpune.edu.in",
  adityasharma: "adityasharma_22592@aitpune.edu.in",
  basantkumar: "basantkumar_21433@aitpune.edu.in",
  akanshadhami: "akanshadhami_21221@aitpune.edu.in",
  alamraju: "alamraju_21792@aitpune.edu.in",
  abhishekthakur: "abhishekthakur_20169@aitpune.edu.in",
  sauravkumar: "sauravkumar_22425@aitpune.edu.in",
  rohitkumar: "rohitkumar_22945@aitpune.edu.in",
  ashish: "ashish_22218@aitpune.edu.in",
  krishnatripathi: "krishnatripathi_21944@aitpune.edu.in",
  kumarabhishek: "kumarabhishek_22536@aitpune.edu.in",
  praveshkumar: "praveshkumar_21195@aitpune.edu.in",
  hritiksingh: "hritiksingh_21186@aitpune.edu.in",
  rohityadav: "rohityadav_20382@aitpune.edu.in",
  abhaykatoch: "abhaykatoch_21509@aitpune.edu.in",

  // ! EXTRA
  tpo: "tpo@aitpune.edu.in",
  pvdoralikar: "pvdoralikar@aitpune.edu.in",
  vhivarale: "vhivarale@aitpune.edu.in",
  oiclibrary: "oiclibrary@aitpune.edu.in",

  // ! ALUMNI MEMBERS
  rajukumar: "rajukumar.ait@gmail.com",
  amitaggarwal: "amit_agy@rediffmail.com",
  devenmali: "dev15j1998@gmail.com",
  pawanyadav01: "bootstrapping.pawan@gmail.com",
  jeetendersingh: "jeetender005@gmail.com",

  // !IIC
  iic6: "iic6_faculty@aitpune.edu.in",
};

router.get("/:key", verifyhttpsMethod, (req, res) => {
  const emailKey = req.params.key;
  const email = emailMap[emailKey]
    ? emailMap[emailKey]
    : emailKey + "@aitpune.edu.in";

  if (email) {
    res.json({ success: true, email });
  } else {
    res.status(404).json({ success: false, message: "Email not found." });
  }
});

module.exports = router;
