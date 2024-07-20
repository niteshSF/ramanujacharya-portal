interface Transliteration {
  kannada: {
    preSutra: string
    sutra: string
    text: string
  }
  roman: {
    preSutra: string
    sutra: string
    text: string
  }
  telugu: {
    preSutra: string
    sutra: string
    text: string
  }
  tamil: {
    preSutra: string
    sutra: string
    text: string
  }
  number: number
}

export const transliterationSelector = (sutraNo: number) => {
  return transliterations.find(
    (transliteration) => transliteration.number === sutraNo
  )
}

const transliterations: Transliteration[] = [
  {
    kannada: {
      preSutra: "",
      sutra: "ಈಕ್ಷತೇರ್ನಾಶಬ್ದಮ್ || ೧-೧-೫||",
      text: "ಯತೋ ವಾ ಇಮಾನಿ' (ತೈ.ಉ.ಭೃ್೧) ಇತ್ಯಾದಿ ಜಗತ್ಕಾರಣವಾದಿವಾಕ್ಯ ಪ್ರತಿಪಾದ್ಯಂ ಸರ್ವಜ್ಞಂ ಸರ್ವಶಕ್ತಿ ಸಮಸ್ತಹೇಯಪ್ರತ್ಯನೀಕಕಲ್ಯಾಣಗುಣೈಕತಾನಂ ಬ್ರಹ್ಮ, ಜಿಜ್ಞಾಸ್ಯಮ್-ಇತ್ಯುಕ್ತಮ್। ಇದಾನೀಂ ಜಗತ್ಕಾರಣವಾದಿವಾಕ್ಯಾನಾಮ್ ಆನುಮಾನಿಕಪ್ರಧಾನಾದಿಪ್ರತಿಪಾದನಾನರ್ಹತಾ ಉಚ್ಯತೇ 'ಈಕ್ಷತೇರ್ನಾಶಬ್ದಮ್' ಇತ್ಯಾದಿನಾ ||\n ಇದಮಾಮ್ನಾಯತೇ ಛಾನ್ದೋಗ್ಯೇ - 'ಸದೇವ ಸೋಮ್ಯೇದಮಗ್ರ ಆಸೀದೇಕಮೇವಾದ್ವಿತೀಯಮ್' (ಛಾಂ.ಉ. ೬-೨-೧) 'ತದೈಕ್ಷತ ಬಹು ಸ್ಯಾಂಪ್ರಜಾಯೇಯೇತಿ, ತತ್ತೇಜೋsಸೃಜತ' (ಛಾಂ.ಉ. ೬-೨-೩) ಇತ್ಯಾದಿ ||\n\n ತತ್ರ ಸಂದೇಹಃ - ಕಿಂ ಸಚ್ಛಬ್ದವಾಚ್ಯಂ ಜಗತ್ಕಾರಣಂ, ಪರೋಕ್ತಮ್ ಆನುಮಾನಿಕಂ ಪ್ರಧಾನಮ್? ಉತ ಉಕ್ತಲಕ್ಷಣಂ ಬ್ರಹ್ಮ? – ಇತಿ। ಕಿಂ ಪ್ರಾಪ್ತಮ್? ಪ್ರಧಾನಮ್ ಇತಿ। ಕುತಃ? 'ಸದೇವ ಸೋಮ್ಯೇದಮಗ್ರ ಆಸೀದೇಕಮೇವಾದ್ವಿತೀಯಂ' (ಛಾಂ.ಉ.೬-೨-೧) ಇತಿ 'ಇದಂ' ಶಬ್ದವಾಚ್ಯಸ್ಯ ಚೇತನಭೋಗ್ಯಭೂತಸ್ಯ ಸತ್ತ್ವರಜಸ್ತಮೋಮಯಸ್ಯ ವಿಯದಾದಿನಾನಾರೂಪವಿಕಾರಾವಸ್ಥಸ್ಯ ವಸ್ತುನಃ ಕಾರಣಾವಸ್ಥಾಂ ವದತಿ। ಕಾರಣಭೂತದ್ರವ್ಯಸ್ಯ ಅವಸ್ಥಾನ್ತರಾಪತ್ತಿರೇವ ಹಿ! ಕಾರ್ಯತಾ। ಅತಃ 'ಯದ್ರವ್ಯಂಯತ್ಸ್ವಭಾವಂ ಚ ಕಾರ್ಯಾವಸ್ಥಮ್, ತತ್ಸ್ವಭಾವಂ ತದೇವ ದ್ರವ್ಯಂ ಕಾರಣಾವಸ್ಥಮ್; ಸತ್ವಾದಿಮಯಂ ಚ ಕಾರ್ಯಮಿತಿ, ಗುಣಸಾಮ್ಯಾವಸ್ಥಂ ಪ್ರಧಾನಮೇವ ಹಿ ಕಾರಣಮ್; ತದೇವ ಉಪಸಂಹೃತಸಕಲವಿಶೇಷಂ ಸನ್ಮಾತ್ರಮಿತಿ, 'ಸದೇವ ಸೋಮ್ಯೇದಮಗ್ರ ಆಸೀದೇಕಮೇವಾದ್ವಿತೀಯಮ್' (ಛಾಂ.ಉ.೬-೨-೧) ಇತ್ಯಭಿಧೀಯತೇ। ತತ ಏವ ಚ, ಕಾರ್ಯ-ಕಾರಣಯೋಃ ಅನನ್ಯತ್ವಮ್ | ತಥಾ ಸತ್ಯೇವ, ಏಕವಿಜ್ಞಾನೇನಸರ್ವವಿಜ್ಞಾನಪ್ರತಿಜ್ಞೋಪಪತ್ತಿ: ಅನ್ಯಥಾ, ಯಥಾ ಸೋಮ್ಯೈಕೇನ ಮೃತ್ಪಿಂಡೇನ' (ಛಾಂ.ಉ.೬-೧-೪) ಇತ್ಯಾದಿಮೃತ್ಪಿಂಡತತ್ಕಾರ್ಯದೃಷ್ಟಾನ್ತದಾರ್ಷ್ಟಾನ್ತಿಕಯೋಃ ವೈರೂಪ್ಯಂ ಚೇತಿ, ಜಗತ್ಕಾರಣವಾದಿವಾಕ್ಯೇನ, ಮಹರ್ಷಿಣಾ ಕಪಿಲೇನೋಕ್ತಂ ಪ್ರಧಾನಮೇವ ಪ್ರತಿಪಾದ್ಯತೇ। ಪ್ರತಿಜ್ಞಾ-ದೃಷ್ಟಾನ್ತರೂಪೇಣ ಅನುಮಾನವೇಷಮೇವ ಚ ಇದಂ ವಾಕ್ಯಮಿತಿ, ಸಚ್ಛಬ್ದವಾಚ್ಯಮ್ ಆನುಮಾನಿಕಮೇವ ।।\n\n ಇತ್ಯೇವಂ ಪ್ರಾಪ್ತೇ, ಅಭಿಧೀಯತೇ - ಈಕ್ಷತೇರ್ನಾಶಬ್ದಮ್ - ಇತಿ । ಯಸ್ಮಿನ್ ಶಬ್ದ ಏವ ಪ್ರಮಾಣಂ ನ ಭವತಿ ತತ್ ಅಶಬ್ದಮ್ –ಆನುಮಾನಿಕಮ್; ಪ್ರಾಧಾನಮಿತ್ಯರ್ಥ। ನ ತತ್ ಜಗತ್ಕಾರಣವಾದಿವಾಕ್ಯಪ್ರತಿಪಾದ್ಯಮ್। ಕುತಃ? ಈಕ್ಷತೇ: - ಸಚ್ಛಬ್ದವಾಚ್ಯಸಂಬನ್ಧಿವ್ಯಾಪಾರ- ವಿಶೇಷಾಭಿಧಾಯಿನಃ ಈಕ್ಷತೇರ್ಧಾತೋಃ ಶ್ರವಣಾತ್ - 'ತದೈಕ್ಷತ ಬಹು ಸ್ಮಾಂ ಪ್ರಜಾಯೇಯ' (ಛಾಂ.ಉ.೬-೨-೩) ಇತಿ।ಈಕ್ಷಣಕ್ರಿಯಾಯೋಗಶ್ಚ ಅಚೇತನೇ ಪ್ರಧಾನೇ ನ ಸಮ್ಭವತಿ। ಅತಃ ಈದೃಶೇಕ್ಷಣಕ್ಷಮಃ ಚೇತನವಿಶೇಷಃ ಸರ್ವಜ್ಞಃ ಸರ್ವಶಕ್ತಿಃ ಪುರುಷೋತ್ತಮಃ ಸಚ್ಛಬ್ದಾಭಿಧೇಯಃ। ತಥಾ 'ಚ ಸರ್ವೆಷ್ವೇವ ಸೃಷ್ಟಿಪ್ರಕರಣೇಷು ಈಕ್ಷಾಪೂರ್ವಿಕೈವ ಸೃಷ್ಟಿ: ಪ್ರತೀಯತೇ - 'ಸ ಈಕ್ಷತ ಲೋಕಾನ್ನು ಸೃಜಾ ಇತಿ' (ಐತ.ಉ.೧-೧) 'ಸ ಇಮಾಂಲ್ಲೋಕಾನಸೃಜತ' (ಐತ.ಉ.೧-೨) 'ಸ ಈಕ್ಷಾಞ್ಚಕ್ರೇ' (ಪ್ರಶ್ನೆ.ಉ.೬-೩) 'ಸ ಪ್ರಾಣಮಸೃಜತ' (ಪ್ರಶ್ನೆ.ಉ.೬-೪) ಇತ್ಯಾದಿಷು ।।\n\n ನನು ಚ - ಕಾರ್ಯಾನುಗುಣೇನೈವ ಕಾರಣೇನ ಭವಿತವ್ಯಮ್? ಸತ್ಯಮ್; ಸರ್ವಕಾರ್ಯಾನುಗುಣ ಏವ ಸರ್ವಜ್ಞಃ ಸರ್ವಶಕ್ತಿ ಸತ್ಯಸಙ್ಕಲ್ಪ: ಪುರುಷೋತ್ತಮಃ ಸೂಕ್ಷ್ಮಚಿದಚಿದ್ವಸ್ತುಶರೀರಕಃ। ಯಥಾಹ 'ಪರಾಽಸ್ಯ​ ಶಕ್ತಿರ್ವಿವಿಧೈವ ಶೂಯತೇ ಸ್ವಾಭಾವಿಕೀ ಜ್ಞಾನಬಲಕ್ರಿಯಾ ಚ' (ಶ್ವೇ.ಉ. ೬-೮) 'ಯಃ ಸರ್ವಜ್ಞಃ ಸರ್ವವಿತ್ ಯಸ್ಯ ಜ್ಞಾನಮಯಂ ತಪಃ' (ಮುಂ.ಉ.೧-೧-೧೦) 'ಯಸ್ಯಾಽವ್ಯಕ್ತಂ ಶರೀರಂ ಯಸ್ಯಾಕ್ಷರಂ ಶರೀರಂ …… ಯಸ್ಯ ಮೃತ್ಯುಶ್ಯರೀರಮ್...ಏಷ ಸರ್ವಭೂತಾನ್ತರಾತ್ಮಾ (ಸು.ಉ. ೭) ಇತಿ।ತದೇತತ್, 'ನ ವಿಲಕ್ಷಣತ್ವಾತ್‌' (ಬ್ರ.ಸೂ.೨-೧-೪) ಇತ್ಯಾದಿಷು ಪ್ರತಿಪಾದಯಿಷ್ಯ​ತೇ। ಅತ್ರ, 'ಸೃಷ್ಟಿವಾಕ್ಯಾನಿ ನ ಪ್ರಧಾನಪ್ರತಿಪಾದನಯೋಗ್ಯಾನಿ' ಇತ್ಯುಚ್ಯತೇ। ವಸ್ತುವಿರೋಧಸ್ತು ತತ್ರೈವ ಪರಿಹರಿಷ್ಯತೇ।\n\nಯತ್ತೂಕ್ತಮ್ - ಪ್ರತಿಜ್ಞಾ - ದೃಷ್ಟಾನ್ತ​ಯೋಗಾತ್ ಅನುಮಾನರೂಪಮೇವ ಇದಂ ವಾಕ್ಕಮಿತಿ, ತದಸತ್ ಹೇತ್ವನುಪಾದನಾತ್, 'ಯೇನಾಽಶ್ರುತಂ ಶ್ರುತಮ್' (ಛಾಂ.ಉ.೬-೧-೩) ಇತಿ, ಏಕವಿಜ್ಞಾನೇನ ಸರ್ವವಿಜ್ಞಾನೇ ಪ್ರತಿಪಿಪಾದಯಿಷಿತೇ, ಸರ್ವಾತ್ಮನಾ ತದಸಂಭವಂ ಮನ್ವಾನಸ್ಯ ತತ್ಸ೦ಭವಮಾತ್ರ- ಪ್ರದರ್ಶನಾಯ ಹಿ, ದೃಷ್ಟಾನ್ತೋಪಾದಾನಮ್। ಈಕ್ಷತ್ಯಾದಿಶ್ರವಣಾದೇವ ಹಿ, ಅನುಮಾನಗನ್ಧಾಭಾವಃ ಅವಗತಃ||",
    },
    roman: {
      preSutra: "",
      sutra: "Sutra 5. Īkshaternāśabdam",
      text: "'yato vā imāni' ityādijagatkāraṇavādivākyapratipādyaṃ sarvajñaṃ sarvaśaktisamastaheyapratyanīkakalyāṇaguṇaikatānaṃ brahma jijñāsyamityuktam . idānīṃ jagatkāraṇavādivākyānāmānumānikapradhānādipratipādanārnahatocyate- īkṣaternāśabdamityādinā\n\nidamāmnāyate chāndogye- 'sadeva somyedamagra āsīdekamevādvitīyam . tadaikṣata bahu syāṃ prajāyeyeti tattejo'sṛjata' ityādi .tatra sandehaḥ, kiṃ sacchabdavācyaṃ jagatkāraṇaṃ paroktamānumānikaṃ pradhānam ?\n\nutoktalakṣaṇaṃ brahma ? iti . kiṃ prāptam ? pradhānamiti . kutaḥ ? 'sadeva somyedamagra āsīdekamevādvitīyam' itīdaṃśabdavācyasya cetanabhogyabhūtasya sattvarajastamomayasya viyadādinānārūpavikārāvasthasya vastunaḥ kāraṇāvasthāṃ vadati, kāraṇabhūtadravyasyāvasthāntarāpattireva hi kāryatā, ato yaddravyaṃ yatsvabhāvaṃ ca kāryāvastham; tatsvabhāvaṃ tadeva dravyaṃ kāraṇāvastham . sattvādimayaṃ ca kāryamiti guṇasāmyāvasthaṃ pradhānameva hi kāraṇam .\n\ntadevopasaṃhṛtasakalaviśeṣaṃ sanmātramiti 'sadeva somyedamagra āsīdekamevādvitīyam' ityabhidhīyate . tata eva ca kāyarkāraṇayorananyatvam, tathā satyevaikavijñānena sarvavijñānapratijñopapattiḥ . anyathā 'yathā somyaikena mṛtpiṇḍena' ityādimṛtpiṇḍatatkāryadṛṣṭāntadārṣṭāntikayorvairūpyaṃ ceti jagatkāraṇavādivākyena maharṣiṇā kapilenoktaṃ pradhānameva pratipādyate . pratijñādṛṣṭāntarūpeṇānumānaveṣameva cedaṃ vākyamiti sacchabdavācyamānumānikameva-\n\nityevaṃprāpte'bhidhīyate- īkṣaternāśabdamiti . yasmin śabda eva pramāṇaṃ na bhavati tadaśabdam . ānumānikam,\n\npradhānamityarthaḥ . na tajjagatkāraṇavādivākyapratipādyam . kutaḥ ? īkṣateḥ sacchabdavācyasambandhivyāpāraviśeṣābhidhāyina īkṣaterdhātoḥ śravaṇāt . 'tadaikṣata bahu syāṃ prajāyeya' iti īkṣaṇakriyāyogaścācetane pradhāne na sambhavati. ataḥ īdṛśekṣaṇakṣamaścetanaviśeṣassarvajñaḥ sarvaśaktiḥ puruṣottamaḥ sacchabdābidheyaḥ . tathā ca sarveṣveva sṛṣṭiprakaraṇeṣvīkṣāpūrvikaiva sṛṣṭiḥ pratīyate 'sa īkṣata lokānnu sṛjā iti sa imāṃllokānasṛjata' 'sa īkṣāñcakre sa prāṇamasṛjata' ityādiṣu . nanu ca kāryānuguṇenaiva kāraṇena bhavitavyam . satyam, sarvakāryānuguṇa eva sarvajñaḥ sarvaśaktiḥ satyasaṅkalpaḥ puruṣottamaḥ sūkṣmacidacidvastuśarīrakaḥ . yathāha 'parā'sya śaktirvividhaiva śrūyate svābhāvikī jñānabalakriyā ca' 'yaḥ sarvajñaḥ sarvavidyasya jñānamayaṃ tapaḥ' 'yasyāvyaktaṃ śarīraṃ yasyākṣaraṃ śarīraṃ yasya mṛtyuḥ śarīram eṣa sarvabhūtāntarātmā' iti . tadetat 'na vilakṣaṇatvāt' ityādiṣu pratipādayiṣyate . atra sṛṣṭivākyāni na pradhānapratipādanayogyānītyucyate . vastuvirodhastu tatraiva parihariṣyate . yattūktampratijñādṛṣṭāntayogādanumānarūpamevedaṃ vākyamiti . tadasat, hetvanupādanāt . 'yenāśrutaṃ śrutam' ityekavijñānena sarvavijñāne pratipipādayiṣite sarvātmanā tadasambhavaṃ manvānasya tatsambhavamātrapradarśanāya hi dṛṣṭāntopādānam . īkṣatyādiśravaṇādeva hyanumānagandhābhāvo'vagataḥ .",
    },
    telugu: {
      preSutra: "",
      sutra: "5. ఈక్షతేః న అశబ్దమ్. 1-1-5.",
      text: "'యతో వా ఇమాని” ఇత్యాది జగత్కారణవాది వాక్య ప్రతిపాద్యం సర్వజ్ఞం సర్వశక్తి సమస్త హేయ ప్రత్యనీక కల్యాణ గుణైకతానం బ్రహ్మ జిజ్ఞాస్యమ్ ఇత్యుక్తమ్. ఇదానీం జగత్కారణవాది వాక్యానామ్ ఆనుమానిక ప్రధానాది ప్రతిపాదనా అనర్హతా ఉచ్యతే - 'ఈక్షతేః న అశబ్దమ్' ఇత్యాదినా.\n\nఇదమ్ అమ్నాయతే ఛాన్డోగ్యే - 'సదేవ సోమ్యేద మగ్ర ఆసీత్ ఏకమేవ అద్వితీయం తదైక్షత బహుస్యాం ప్రజాయేయేతి తత్తేజో అసృజత' ఇత్యాది. తత్ర సన్దేహః - కిం సత్ శబ్దవాచ్యం జగత్కారణం పరోక్తమ్ ఆనుమానికం ప్రధానమ్? ఉత ఉక్త లక్షణం బ్రహ్మ? ఇతి. కిం ప్రాప్తమ్? ప్రధానమ్ ఇతి. కుతః? 'సదేవ సొమ్యేదమగ్ర ఆసీదేకమేవ' ఇతి ఇదం శబ్ద వాచ్యస్య చేతన భోగ్య భూతస్య సత్త్వ రజ స్తమో మయస్య వియదాది నానారూప వికార అవస్థస్య వస్తునః కారణావస్థాం వదతి. కారణ భూత ద్రవ్యస్య అవస్థానర ఆపత్తిః ఏవ హి కార్యతా. అతః యత్ ద్రవ్యం యత్ స్వభావం చ కార్యావస్థం తత్ స్వభావం తదేవ ద్రవ్యం కారణావస్థమ్, సత్త్వాది మయఞ్చ కార్యమ్ ఇతి గుణ సామ్యావస్థం ప్రధానమేవ హి కారణమ్. తదేవ ఉపసంహృత నకల విశేషం సన్మాత్రమ్ ఇతి సత్యమ్, సర్వకార్యానుగుణః ఏవ సర్వజ్ఞః సర్వశక్తిః సత్యసఙ్కల్పః పురుషోత్తమః సూక్ష్మ చిత్ అచిత్ వస్తు శరీరకః. యథా ఆహ - 'పరా స్య శక్తిః వివిధైవ శ్రూయతే స్వాభావికీ జ్ఞానబలక్రియా చ”, 'యస్సర్వజ్ఞః సర్వవిత్ యస్య జ్ఞానమయం తపః”, 'యస్యావ్యక్తం శరీరం”, 'యస్యాక్షరం శరీరం”, 'యస్య మృత్యుశ్శరీరమ్”, 'ఏష సర్వభూతాన్తరాత్మా' ఇతి. తదేతత్ 'నవిలక్షణత్వాత్” ఇత్యాదిషు ప్రతిపాదయిష్యతే, అత్ర సృష్టి వాక్యాని న ప్రధాన ప్రతిపాదన యోగ్యాని ఇత్యుచ్యతే. వస్తు విరోధస్తు తత్రైవ పరిహరిష్యతే.\n\nయత్ తు ఉక్తమ్ - ప్రతిజ్ఞా దృష్టాన్త యోగాత్ అనుమాన రూపమ్ ఏవ ఇదం వాక్యమ్ ఇతి. తదసత్, హేతు అనుపాదానాత్. 'యేనాశ్రుతం శ్రుతమ్' ఇతి ఏకవిజ్ఞానేన సర్వవిజ్ఞానే ప్రతిపిపాదయిషితే, సర్వాత్మనా తత్ అసమ్భవం మన్వానస్య తత్ సమ్భవమాత్ర ప్రదర్శనాయ హి దృష్టాన్త ఉపాదానమ్. ఈక్షత్యాది శ్రవణాత్ ఏవ హి అనుమాన గన్ధ అభావో అవగతః",
    },
    tamil: {
      preSutra: "",
      sutra: "",
      text: "",
    },
    number: 5,
  },
  {
    kannada: {
      preSutra:
        "ಅಥ ಸ್ಯಾತ್ - ನ ಚೇತನಗತಂ ಮುಖ್ಯಮ್ ಈಕ್ಷಣಮ್ ಇಹೋಚ್ಯತೇ, ಅಪಿ ತು ಪ್ರಧಾನಗತಂ ಗೌಣಮೀಕ್ಷಣಮ್; 'ತತ್ತೇಜ ಐಕ್ಷತ' (ಛಾಂ.ಉ.೬-೨-೩) 'ತಾ ಆಪ ಐಕ್ಷನ್ತ' (ಛಾಂ.ಉ.೬-೨-೪) ಇತಿ ಗೌಣೇಕ್ಷಣಸಾಹಚರ್ಯಾತ್ । ಭವತಿ ಚ ಅಚೇತನೇಷ್ವಪಿ ಚೇತನಧರ್ಮೋಪಚಾರಃ; ಯಥಾ - 'ವೃಷ್ಟಿಪ್ರತೀಕ್ಷಾಃ ಶಾಲಯಃ' ವರ್ಷೇಣ ಬೀಜಂ ಪ್ರತಿಸಂಜಹರ್ಷ (ವಾ.ರಾ.ಸು.ಕಾ.೨೬-೬) ಇತಿ। 'ಅತಃ ಗೌಣಮೀಕ್ಷಣಮ್' ಇತಿ ಇಮಾಮಾಶಂಕಾಮ್ ಅನುಭಾವ್ಯ ಪರಿಹರತಿ ।",
      sutra: "ಗೌಣಶ್ಚೇನ್ನಾತ್ಮಶಬ್ದಾತ್ || ೧-೧-೬ ||",
      text: "ಯದುಕ್ತಮ್ - ಗೌಣೇಕ್ಷಣಸಾಹಚರ್ಯಾತ್, ಸತೋSಪಿ ಈಕ್ಷಣವ್ಯಪದೇಶಃ ಸರ್ಗನಿಯತ ಪೂರ್ವಾವಸ್ಥಾಭಿಪ್ರಾಯೋ ಗೌಣಃ – ಇತಿ | ತನ್ನ 'ಏತದಾತ್ಮಮಿದಂ ಸರ್ವಮ್ | ತತ್ಸತ್ಯಂ, ಸ ಆತ್ಮಾ' (ಛಾಂ.ಉ. ೬-೮-೭) ಇತಿ, ಸಚ್ಛಪ್ರತಿಪಾದಿತಸ್ಯ 'ಆತ್ಮ' ಶಬ್ಧೇನ ವ್ಯಪದೇಶಾತ್ ||\n\n ಏತದುಕ್ತಂ ಭವತಿ – 'ಏತದಾತ್ಮಮಿದಂ ಸರ್ವಂ ….. ಸ ಆತ್ಮಾ' ಇತಿ ಚೇತನಾಚೇತನಪ್ರಪಂಚೋದ್ದೇಶೇನ ಸತಃ ಆತ್ಮತ್ಯೋಪದೇಶೋಽಯಮ್, ನ ಅಚೇತನೇ ಪ್ರಧಾನೇ ಸಙ್ಗಚ್ಛತೇ - ಇತಿ ।। ಅತಃ ತೇಜೋಬನ್ನಾನಾಮಪಿ ಪರಮಾತ್ಯೈವ ಆತ್ಮೇತಿ, ತೇಜಃಪ್ರಕೃತಯೋSಪಿ ಶಬ್ದಾಃ ಪರಮಾತ್ಮನ ಏವ ವಾಚಕಾಃ । ತಥಾ ಹಿ – 'ಹನ್ತಾಹಮಿಮಾಸ್ತಿಸ್ರೋ ದೇವತಾ ಅನೇನ ಜೀವೇನಾತ್ಮನಾನುಪ್ರವಿಶ್ಯನಾಮರೂಪೇ ವ್ಯಾಕರವಾಣಿ' (ಛಾಂ.ಉ.೬-೩-೨) ಇತಿ ಪರಮಾತ್ಮಾನುಪ್ರವೇಶಾದೇವ ತೇಜಃಪ್ರಭೃತೀನಾಂ ವಸ್ತುತ್ವಂ ತತ್ತನ್ನಾಮಭಾಕ್ತ್ವಂ ಚೇತಿ, 'ತತ್ತೇಜ ಐಕ್ಷತ' (ಛಾಂ.ಉ.೬-೨-೪) 'ತಾ ಆಪ ಐಕ್ಷನ್ತ' (ಛಾಂ.ಉ.೬-೨-೪) ಇತ್ಯಪಿ, ಮುಖ್ಯ ಏವ ಈಕ್ಷಣವ್ಯಪದೇಶಃ। ಅತಃ ಸಾಹಚರ್ಯಾದಪಿ, 'ತದೈಕ್ಷತ' (ಛಾಂ.ಉ.೬-೨-೩) ಇತ್ಯತ್ರ ಗೌಣತ್ವಾಶಂಕಾ ದೂರೋತ್ಸಾರಿತಾ - ಇತಿ ಸೂತ್ರಾಭಿಪ್ರಾಯಃ ||",
    },
    roman: {
      preSutra:
        "atha syāt na cetanagataṃ mukhyamīkṣaṇamihocyate, api tu pradhānagataṃ gauṇamīkṣaṇam 'tatteja aikṣatatā āpa aikṣanta' iti gauṇekṣaṇasāhacaryāt . bhavati cācetaneṣvapi cetanadharmopacāraḥ . yathā 'vṛṣṭipratīkṣāḥ śālayaḥ' 'varṣeṇa bījaṃ pratisañjaharṣa' iti . ato gauṇamīkṣaṇamitīmāmāśaṅkāmanubhāṣya pratiharati –",
      sutra: "Sutra 6. Gauṇaśchenātmashabdāt",
      text: "yaduktam- gauṇekṣaṇasāhacaryāt sato'pīkṣaṇavyapadeśaḥ sagarniyatapūrvāvasthābhiprāyo gauṇa iti . tanna 'aitadātmyamidaṃ sarvaṃ tatsatyaṃ sa ātmā' iti sacchabdapratipāditasya ātmaśabdena vyapadeśāt . etaduktaṃ bhavati 'aitadātmyamidaṃ sarvam sa ātmā' iti cetanācetanaprapañcoddeśena sata ātmatvopadeśo'yaṃ nācetane pradhāne saṅgacchata iti, atastejobannānāmapi paramātmaivātmati tejaḥprabhṛtayo'pi śabdāḥ paramātmana eva vācakāḥ . tathā hi 'hantā'hamimāstisro devatā anena jīvenātmanā'nupraviśya nāmarūpe vyākaraṇāni' iti paramātmānupraveśādeva\n\ntejaḥprabhṛtīnāṃ vastutvaṃ tattannāmabhāktavaṃ ceti 'tatteja aikṣatatā āpa aikṣanta' ityapi mukhya evekṣaṇavyapadeśaḥ, ataḥ sāhacaryādapi 'tadaikṣata' ityatra gauṇatvāśaṅkā dūrotsāriteti sūtrābhiprāyaḥ .. itaśca na pradhānaṃ sacchabdapratipādyam .\n\ntejaḥprabhṛtīnāṃ vastutvaṃ tattannāmabhāktavaṃ ceti 'tatteja aikṣatatā āpa aikṣanta' ityapi mukhya evekṣaṇavyapadeśaḥ, ataḥ sāhacaryādapi 'tadaikṣata' ityatra gauṇatvāśaṅkā dūrotsāriteti sūtrābhiprāyaḥ ..",
    },
    telugu: {
      preSutra:
        "అథ స్యాత్ - న చేతనగతం ముఖ్యమ్ ఈక్షణమ్ ఇహ ఉచ్యతే, అపి తు ప్రధానగతం గౌణమ్ ఈక్షణమ్ –\n\n'తత్తేజ ఐక్షత', 'తా ఆప ఐక్షన్త' గౌణ ఈక్షణ సాహచర్యాత్ ఇతి. భవతి చ అచేతనేషు అపి చేతన ధర్మ ఉపచారః. యథా 'వృష్టి ప్రతీక్షాః శాలయః', 'వర్షేణ బీజం ప్రతిసంజహర్ష' ఇతి. అతః గౌణమ్ ఈక్షణమ్ ఇతి.",
      sutra: "6. గౌణశ్చేత్, న, ఆత్మశబ్దాత్. 1-1-6.",
      text: "యదుక్తం గౌణమ్ ఈక్షణమ్ ఇతి గౌణ ఈక్షణ  సాహచర్యాత్ సతో అపి ఈక్షణ వ్యపదేశః సర్గ నియత పూర్వ అవస్థా అభిప్రాయః గౌణః ఇతి, తత్ న, 'ఐతదాత్మ్యమిదం సర్వం తత్సత్యం స ఆత్మా' ఇతి సత్ శబ్ద ప్రతిపాదితస్య ఆత్మ శబ్దేన వ్యపదేశాత్. ఏతదుక్తం భవతి 'ఐతదాత్మ్యమిదం సర్వం స ఆత్మా' ఇతి చేతనాచేతన ప్రపఞ్చద్దేశేన సత ఆత్మత్వ ఉపదేశః అయం న అచేతనే ప్రధానే సఙ్గచ్ఛతే” ఇతి.\n\nఅతః తేజోబన్నానామ్ అపి పరమాత్మా ఏవ ఆత్మా ఇతి తేజః ప్రభృతయోః అపి శబ్దాః పరమాత్మనః ఏవ వాచకాః. తథా హి' హన్తాహమిమాస్తిస్రో దేవతాః అనేన జీవేనాత్మనా అనుప్రవిశ్య నామరూపే వ్యాకరవాణి' ఇతి పరమాత్మా అనుప్రవేశాత్ ఏవ తేజః ప్రభృతీనాం వస్తుత్వం, తత్తన్నామ భాక్త్వం చ ఇతి 'తత్తేజ ఐక్షత', 'తా ఆప ఐక్షన్త' ఇత్యపి ముఖ్యః ఏవ ఈక్షణ వ్యపదేశః. అతః సాహచర్యాత్ అపి 'తదైక్షత' ఇత్యత్ర గౌణత్వ ఆశఙ్కా దూరోత్సారితా",
    },
    tamil: {
      preSutra: "",
      sutra: "",
      text: "",
    },
    number: 6,
  },
  {
    kannada: {
      preSutra: "ಇತಶ್ಚ, ನ ಪ್ರಧಾನಂ ಸಚ್ಛಬ್ದ ಪ್ರತಿಪಾದ್ಯಮ್ -",
      sutra: "ತನ್ನಿಷ್ಠಸ್ಯ ಮೋಕ್ಷೋಪದೇಶಾತ್ || ೧-೧-೭ ||",
      text: "ಮುಮುಕ್ಷೋಃ ಶ್ವೇತಕೇತೋಃ, 'ತತ್ ತ್ವಮಸಿ' (ಛಾಂ.ಉ.೬-೮-೭) ಇತಿ ಸದಾತ್ಮಕತ್ವಾನುಸಂಧಾನಮ್ ಉಪದಿಶ್ಯ, ತನ್ನಿಷ್ಠಸ್ಯ 'ತಸ್ಯ ತಾವದೇವ ಚಿರಂ, ಯಾವನ್ನ ವಿಮೋಕ್ಷೆ, ಅಥ ಸಂಪತ್ಸ್ಯೇ’ (ಛಾಂ.ಉ.೬-೧೪-೨) ಇತಿ 'ಶರೀರಪಾತಮಾತ್ರಾನ್ತರಾಯಃ ಬ್ರಹ್ಮಸಂಪತ್ತಿಲಕ್ಷಣೋ ಮೋಕ್ಷಃ' ಇತ್ಯುಪದಿಶತಿ । ಯದಿ ಚ ಪ್ರಧಾನಮ್ ಅಚೇತನಂ ಕಾರಣಮುಪದಿಶ್ಯೇತ; ತದಾ ತದಾತ್ಮಕತ್ವಾನುಸಂಧಾನಸ್ಯ ಮೋಕ್ಷಸಾಧನತ್ವೋಪದೇಶಃ ನೋಪಪದ್ಯತೇ । 'ಯಥಾಕ್ರತುರಸ್ಮಿಂಲ್ಲೋಕೇ ಪುರುಷೋ ಭವತಿ, ತಥೇತಃ ಪ್ರೇತ್ಯ ಭವತಿ' (ಛಾ೦.ಉ.೩-೧೪-೧) ಇತಿ, ತನ್ನಿಷ್ಠಸ್ಯ ಅಚೇತನಸಂಪತ್ತಿರೇವ ಸ್ಯಾತ್ | ನ ಚ, ಮಾತಾಪಿತೃ- ಸಹಸ್ರೇಭ್ಯೋSಪಿ ವತ್ಸಲತರಂ ಶಾಸ್ತ್ರಮ್, ಏವಂವಿಧತಾಪತ್ರಯಾಭಿಹತಿಹೇತುಭೂತಾಮ್ ಅಚಿತ್ಸಂಪತ್ತಿಮ್ ಉಪದಿಶತಿ | ಪ್ರಧಾನಕಾರಣವಾದಿನೋsಪಿ ಹಿ ಪ್ರಧಾನನಿಷ್ಠಸ್ಯ ಮೋಕ್ಷಂ ನಾಭ್ಯುಪಗಚ್ಛನ್ತಿ ।।",
    },
    roman: {
      preSutra: "itaśca na pradhānaṃ sacchabdapratipādyam .",
      sutra: "Sutra 7. Tannishṭhasya mokshopadeśāt.",
      text: "mumukṣoḥ śvetaketoḥ 'tattvamasi' iti sadātmakatvānusandhānamupadiśya tanniṣṭhasya 'tasya tāvadeva ciraṃ yāvanna\n\nvimokṣye atha sampatsye' iti śarīrapātamātrāntarāyo brahmasampattilakṣaṇo mokṣa ityupadiśati . yadi ca pradhānamacetanaṃ kāraṇamupadiśyeta; tadā tadātmakatvānusandhānasya mokṣasādhanatvopadeśo nopapadyate 'yathā kraturasmin loke puruṣo bhavati tathetaḥ pretya bhavati' iti tanniṣṭhasyācetanasampattireva syāt . na ca mātāpitṛsahasrebhyo'pi\n\nvatsalataraṃ śāstramevaṃvidhatāpatrayābhihatihetubhūtāmacitsampattimupadiśati . pradhānakāraṇāvādino'pi hi pradhānaniṣṭhasya mokṣaṃ nābhyupagacchanti .\n\n",
    },
    telugu: {
      preSutra: "ఇతి సూత్రాభిప్రాయః. ఇతశ్చ న ప్రధానం సత్ శబ్ద ప్రతిపాద్యమ్....",
      sutra: "7. తత్ నిష్ఠస్య మోక్షోపదేశాత్, 1-1-7.",
      text: "ముముక్షోః శ్వేతకేతోః 'తత్త్వమసి' ఇతి సదాత్మకత్వ అనుసన్దానమ్ ఉపదిశ్య తన్నిష్ఠస్య 'తస్య తావదేవ చిరం యావత్ న విమోక్ష్యే అథ సమ్పత్స్యే' ఇతి శరీరపాతమాత్ర అన్తరాయః బ్రహ్మ సంపత్తి లక్షణో మోక్షః ఇతి ఉపదిశతి. యది చ ప్రధానమ్ అచేతనం కారణమ్ ఉపదిశ్యేత, తదా తదాత్మకత్వ అనుసన్దానస్య మోక్షసాధనత్వ ఉపదేశో న ఉపపద్యతే. 'యథాక్రతు రస్మిన్ లోకే పురుషో భవతి, తథేతః ప్రేత్య భవతి' ఇతి తన్నిష్ఠస్య అచేతన సమ్పత్తిః ఏవ స్యాత్, న చ మాతా పితృ సహస్రేభ్యః అపి వత్సల తరం శాస్త్రమ్ ఏవం విధ తాపత్రయ అభిహతి హేతుభూతామ్ అచిత్ సమ్పత్తిమ్ ఉపదిశతి. ప్రధాన కారణవాదిన: అపి హి ప్రధాన నిష్ఠస్య మోక్షం న అభ్యుపగచ్ఛన్తి.",
    },
    tamil: {
      preSutra: "",
      sutra: "",
      text: "",
    },
    number: 7,
  },
  {
    kannada: {
      preSutra: "ಇತಶ್ಚ, ನ ಪ್ರಧಾನಮ್ -",
      sutra: "ಹೇಯತ್ವಾವಚನಾಚ್ಚ || ೧-೧-೮ ||",
      text: "ಯದಿ ಪ್ರಧಾನಮೇವ ಕಾರಣಂ ಸಚ್ಛಬ್ದಾಭಿಹಿತಂ ಭವೇತ್; ತದಾ ಮುಮುಕ್ಷೋ ಶ್ವೇತಕೇತೋಃ ತದಾತ್ಮಕತ್ವಮ್, ಮೋಕ್ಷವಿರೋಧಿತ್ವಾತ್ ಹೇಯತ್ತ್ವೇನೈವ ಉಪದೇಶಂ ಸ್ಮಾತ್ | ನ ಚ ತತ್ ಕ್ರಿಯತೇ, ಪ್ರತ್ಯುತ ಉಪಾದೇಯತ್ವೇನೈವ, 'ತತ್ತ್ವಮಸಿ' (ಛಾಂ.ಉ ೬-೮-೭) 'ತಸ್ಯ ತಾವದೇವ ಚಿರಮ್' (ಛಾಂ.ಉ.೬-೧೪-೨) ಇತ್ಯುಪದಿಶ್ಯತೇ ।।",
    },
    roman: {
      preSutra: "itaśca na pradhānam –",
      sutra: "Sutra 8. heyatvāvacanācca ",
      text: "yadi pradhānameva kāraṇaṃ sacchabdābhihitaṃ bhavet tadā mumukṣoḥ śvetaketostadātmakatvaṃ mokṣavirodhitvāddheyatvenaivopadeśyaṃ syāt . na ca tatkriyate, pratyuta upādeyatvenaiva 'tattvamasi' 'tasya tāvadeva ciram' ityupadiśyate .",
    },
    telugu: {
      preSutra: "ఇతశ్చ న ప్రధానమ్...",
      sutra: "హేయత్వ అవచనాత్ చ. 1-1-8.",
      text: "యది ప్రధానమేవ కారణం సత్ శబ్దాభిహితం భవేత్, తదా ముముక్షో: శ్వేతకేతో: తదాత్మకత్వం మోక్షవిరోధిత్వాత్ హేయత్వేన ఏవ ఉపదేశ్యం స్యాత్. న చ తత్ క్రియతే, ప్రత్యుత ఉపాదేయత్వేన ఏవ 'తత్త్వమసి', 'తస్య తావదేవచిరమ్' ఇతి ఉపదిశ్యతే.",
    },
    tamil: {
      preSutra: "",
      sutra: "",
      text: "",
    },
    number: 8,
  },
  {
    kannada: {
      preSutra: "ಇತಶ್ಚ, ನ ಪ್ರಧಾನಮ್ -",
      sutra: "ಪ್ರತಿಜ್ಞಾವಿರೋಧಾತ್ || ೧-೧-೯ ||",
      text: "ಪ್ರಧಾನಕಾರಣತ್ವೇ, ಪ್ರತಿಜ್ಞಾವಿರೋಧಶ್ಚ ಭವತಿ । ವಾಕ್ಯೋಪಕ್ರಮೇ ಹಿ ಏಕವಿಜ್ಞಾನೇನ ಸರ್ವವಿಜ್ಞಾನಂ ಪ್ರತಿಜ್ಞಾತಮ್ । ತಚ್ಚ ಕಾರ್ಯ-ಕಾರಣಯೋಃ 'ಅನನ್ಯತ್ವೇನ, ಕಾರಣಭೂತಸದ್ವಿಜ್ಞಾನಾತ್ ತತ್ಕಾರ್ಯಭೂತ ಚೇತನಾಚೇತನಪ್ರಪಂಚಸ್ಯ ಜ್ಞಾತತಯೈವ, ಉಪಪಾದನೀಯಮ್ | ತತ್ತು, ಪ್ರಧಾನಕಾರಣತ್ವೇ ಚೇತನವರ್ಗಸ್ಯ ಪ್ರಧಾನಕಾರ್ಯತ್ವಾಭಾವಾತ್, ಪ್ರಧಾನವಿಜ್ಞಾನೇನ ಚೇತನವರ್ಗವಿಜ್ಞಾನಾಸಿದ್ದೇಃ ವಿರುದ್ಧ್ಯತೇ ।।\"",
    },
    roman: {
      preSutra: "itaśca na pradhānam -",
      sutra: "Sutra 9. Pratijñāvirodhāt.",
      text: "pradhānakāraṇatve pratijñāvirodhaśca bhavati . vākyopakrame hyekavijñānena sarvavijñānaṃ pratijñātam . tacca kāryakāraṇayorananyatvena kāraṇabhūtasadvijñānāttatkāryabhūtacetanācetanaprapañcasya jñātatayaivopapādanīyam .\n\ntattu pradhānakāraṇatve cetanavargasya pradhānakāryatvābhāvāt pradhānavijñānena cetanavargavijñānāsiddherviruddhayate.",
    },
    telugu: {
      preSutra: "ఇతశ్చ న ప్రధానమ్.....",
      sutra: "9. ప్రతిజ్ఞా విరోధాత్, 1-1-9.",
      text: "ప్రధాన కారణత్వే ప్రతిజ్ఞా విరోధశ్చ భవతి. వాక్య ఉపక్రమే హి ఏకవిజ్ఞానేన సర్వ విజ్ఞానం ప్రతిజ్ఞాతమ్. తత్ చ కార్యకారణయోః అనన్యత్వేన కారణభూత సత్ విజ్ఞానాత్ తత్ కార్యభూత చేతనాచేతన ప్రపఞ్చస్య జ్ఞాతతయా ఏవ ఉపపాదనీయమ్. తత్ తు ప్రధాన కారణత్వే చేతన వర్గస్య ప్రధాన కార్యత్వ అభావాత్ ప్రధాన విజ్ఞానేన చేతన వర్గ విజ్ఞాన అసిద్ధేః విరుద్ధ్యతే.",
    },
    tamil: {
      preSutra: "",
      sutra: "",
      text: "",
    },
    number: 9,
  },
  {
    kannada: {
      preSutra: "ಇತಶ್ಚ, ನ ಪ್ರಧಾನಮ್",
      sutra: "ಸ್ವಾಪ್ಯಯಾತ್‌ || ೧-೧-೧೦ ||",
      text: "ತದೇವ ಸಚ್ಚಬ್ದವಾಚ್ಯಂ ಪ್ರಕೃತ್ಯ ಆಹ - 'ಸ್ವಪ್ನಾನ್ತಂ ಮೇ ಸೋಮ್ಯ ವಿಜಾನೀಹೀತಿ । ಯತ್ರೈತತ್ಪುರುಷಃ ಸ್ವಪಿತಿ ನಾಮ, ಸತಾ ಸೋಮ್ಯ ತದಾ ಸಂಪನ್ನೋ ಭವತಿ | ಸ್ವಮಪೀತೋ ಭವತಿ |ತಸ್ಮಾದೇನಂ ಸ್ವಪಿತೀತ್ಯಚಕ್ಷತೇ, 'ಸ್ವಂ ಹ್ಯಪೀತೋ ಭವತಿ' (ಛಾಂ.ಉ.೬೮-೧) ಇತಿ, ಸುಷುಪ್ತಂ ಜೀವಂ ಸತಾ ಸಮ್ಪನ್ನಮ್, 'ಸ್ವಮಪೀತಃ - ಸ್ವಸ್ಮಿನ್ ಪ್ರಲೀನಃ' ಇತಿ ವ್ಯಪದಿಶತಿ | ಪ್ರಲಯಶ್ಚ ಸ್ವಕಾರಣೇ ಲಯಃ | ನ ಚ ಅಚೇತನಂ ಪ್ರಧಾನಂ, ಚೇತನಸ್ಯ ಜೀವಸ್ಯ ಕಾರಣಂ ಭವಿತುಮರ್ಹತಿ ॥'ಸ್ವಮಪೀತೋ ಭವತಿ' - ಆತ್ಮಾನಮೇವ, ಜೀವಃ ಅಪೀತೋ ಭವತೀತ್ಯರ್ಥಃ | ಚಿದ್ವಸ್ತುಶರೀರಕಂ ತದಾತ್ಮಭೂತಂ ಬ್ರಹ್ಯೈವ ಜೀವಶಬ್ಧೇನ ಅಭಿಧೀಯತೇ ಇತಿ, ನಾಮರೂಪವ್ಯಾಕರಣಶ್ರುತ್ಯಾ ಉಕ್ತಮ್ | ತತ್ ಜೀವಶಬ್ದಾಭಿಧೇಯಂ ಬ್ರಹ್ಮ, ಸುಷುಪ್ತಿ ಕಾಲೇSಪಿ ಪ್ರಲಯಕಾಲ ಇವ ನಾಮರೂಪಪರಿಷ್ವಙ್ಗಾಭಾವಾತ್ ಕೇವಲ ಸಚ್ಛಬ್ಧಾಭಿಧೇಯಮಿತಿ, 'ಸತಾ ಸೋಮ್ಯ ತದಾ ಸಮ್ಪನ್ನೋ ಭವತಿ, ಸ್ವಮಪೀತೋ ಭವತಿ' (ಛಾಂ.ಉ.೬-೮-೧) ಇತ್ಯುಚ್ಯತೇ । ತಥಾ ಸಮಾನಪ್ರಕರಣೇ, ನಾಮ-ರೂಪಪರಿಷ್ವಂಗಾಭಾವೇನ ಪ್ರಾಜ್ಞನೈವ ಪರಿಷ್ವಙ್ಗಾತ್, 'ಪ್ರಾಜ್ಞೇನಾತ್ಮನಾ ಸಂಪರಿಷ್ವಕ್ತೋ ನ ಬಾಹ್ಯಂ ಕಿಞ್ಚನ ವೇದ, ನಾನ್ತರಮ್' (ಬೃ.ಉ.೬-೩-೨೧) ಇತ್ಯುಚ್ಯತೇ ।।ಆಮೋಕ್ಷಾತ್ ಜೀವಸ್ಯ ನಾಮರೂಪಪರಿಷ್ವಙ್ಗಾದೇವ ಹಿ ಸ್ವವ್ಯತಿರಿಕ್ತವಿಷಯಜ್ಞಾನೋದಯ: ಸುಷುಪ್ತಿಕಾಲೇ ಹಿ ನಾಮರೂಪೇ ವಿಹಾಯ ಸತಾ ಸಂಪರಿಷ್ವಕ್ತಃ, ಪುನರಪಿ ಜಾಗರದಶಾಯಾಂ ನಾಮ- ರೂಪೇ ಪರಿಷ್ವಜ್ಯ, ತತ್ತನ್ನಾಮರೂಪೋ ಭವತೀತಿ, ಶ್ರುತ್ಯಂತರೇ ಸ್ಪಷ್ಟಮಭಿಧೀಯತೇ – 'ಯದಾ ಸುಪ್ತಃ ಸ್ವಪ್ನಂ ನ ಕಥಞ್ಚನ ಪಶ್ಯತಿ, ಅರ್ಥಾಸ್ಮಿನ್ ಪ್ರಾಣ ಏವೈಕಧಾ ಭವತಿ' (ಕೌಷೀ.ಉ.೪-೩೯) 'ಏತಸ್ಮಾದಾತ್ಮನಃ ಪ್ರಾಣಾ ಯಥಾಯತನಂ ವಿಪ್ರತಿಷ್ಠನ್ತೇ' (ಕೌಪೀ.ಉ.೪-೪೦) ತಥಾ - 'ತ ಇಹ ವ್ಯಾಘ್ರೋ ವಾ ಸಿಂಹೋ ವಾ ವೃಕೋ ವಾ ವರಾಹೋ ವಾ ದಂಶೋ ವಾ ಮಶಕೋ ವಾ ಯದ್ಭದ್ಭವನ್ತಿ ತದಾಭವನ್ತಿ' (ಛಾಂ.ಉ.೬-೯-೩) ಇತಿ ।।'ತಥಾ ಸುಷುಪ್ತಂ ಜೀವಮ್ - 'ಪ್ರಾಜ್ಞೇನಾಽಽತ್ಮನಾ ಸಮ್ಪರಿಷ್ವಕ್ತಃ’ (ಬೃ.ಉ. ೬-೩-೨೧) ಇತಿ ಚ ವದತಿ । ತಸ್ಮಾತ್, ಸಚ್ಛಬ್ದವಾಚ್ಯಃ ಪರಂ ಬ್ರಹ್ಮ, ಸರ್ವಜ್ಞಃ ಪರಮೇಶ್ವರಃ ಪುರುಷೋತ್ತಮ ಏವ । ತದಾಹವೃತ್ತಿಕಾರಃ - 'ಸತಾ ಸೋಮ್ಯ ತದಾ ಸಮ್ಪನ್ನೋ ಭವತೀತಿ ಸಂಪತ್ಯಸಂಪತ್ತಿಭ್ಯಾಮ್ ಏತದಧ್ಯವಸೀಯತೇ । 'ಪ್ರಾಜ್ಞೇನಾಽಽತ್ಮನಾ ಸಮ್ಪರಿಷ್ವಕ್ತಃ’ ಇತಿ ಚಾಹ' (ಬೋ. ವೃ.) ಇತಿ ।।",
    },
    roman: {
      preSutra: "taśca na pradhānam –",
      sutra: "Sutra 10. Svāpyayāt.\r",
      text: "tadeva sacchabdavācyaṃ prakṛtyāha 'svapnāntaṃ me samomya vijānīhīti yatraitatpuruṣaḥ svapiti nāma satā somya tadā sampanno bhavati svamapīto bhavati tasmādenaṃ svapitītyācakṣate svaṃ hyapīto bhavati' iti suṣuptaṃ jīvaṃ satā\n\nsampannaṃ, svamapītaḥ- svasmin pralīna iti vyapadiśati . pralayaśca svakāraṇe layaḥ . na cācetanaṃ pradhānaṃ cetanasya jīvasya kāraṇaṃ bhavitumarhati . svamapīto bhavati ātmānameva jīvo'pīto bhavatītyarthaḥ . cidvastuśarīrakaṃ tadātmabhūtaṃ brahmaiva jīvaśabdenābhidhīyata iti nāmarūpavyākaraṇaśrutyoktam . tajjīvaśabdābhidheyaṃ brahma suṣuptikāle'pi\n\npralayakālaïva nāmarūpapariṣvaṅgābhāvāt kevalasacchabdābhidheyamiti 'satā somya tadā sampanno bhavati svamapīto bhavati ityucyate . tathā samānaprakaraṇe nāmarūpapariṣvaṅgābhāvena prājñenaiva pariṣvaṅgāt 'prājñenātmanā sampariṣvakto na bāhyaṃ kiñcana veda nāntaram' ityucyate . āmokṣājjīvasya nāmarūpapariṣvaṅgādeva\n\nhi svavyatiriktaviṣayajñānodayaḥ . suṣuptikāle hi nāmarūpe vihāya satā sampariṣvaktaḥ punarapi jāgaradaśāyāṃ nāmarūpe pariṣvajya tannāmarūpo bhavatīti śrutyantare spaṣṭamabhidhīyate 'yadvā suptaḥ svapnaṃ na kathañcana paśyati atha hāsmin prāṇa evaikadhā bhavati' tasmādvā ātmanaḥ prāṇā yathāyatanaṃ vipratiṣṭhante' tathā 'ta iha vyāghro vā siṃho vā vṛko vā varāho vā daṃśo vā maśako vā yadyadbhavanti tathā bhavanti' iti . tathā suṣuptaṃ jīvaṃ 'prājñe-\n\nnātmanā sampariṣvaktaḥ' iti ca vadati . tasmātsacchabdavācyaḥ paraṃ brahma sarvajñaḥ parameśvaraḥ puruṣottama eva . tadāha vṛttikāraḥ 'satā somya tadā sampanno bhavatīti, sampattyasampattibhyāmetadadhyavasīyate 'prājñenātmanā sampariṣvakta' iti cāheti .",
    },
    telugu: {
      preSutra: "ఇతశ్చ న ప్రధానమ్.......",
      sutra: "10. స్వ అప్యయాత్. 1-1-10.",
      text: "తదేవ సత్ శబ్ద వాచ్యం ప్రకృత్య ఆహ- 'స్వప్నాన్తం మే సోమ్య విజానీహి ఇతి, యత్ర ఏతత్ పురుషః స్వపితి నామ సతా సొమ్య తదా సంపన్నో భవతి, స్వమపీతో భవతి, తస్మాత్ ఏనం స్వపితి ఇత్యాచక్షతే, స్వం హ్యపీతో భవతి' ఇతి సుషుప్తం జీవం సతా సంపన్నం స్వమపీతః - స్వస్మిన్ ప్రలీనః ఇతి వ్యపదిశతి. ప్రలయశ్చ, స్వకారణే లయః న చ అచేతనం ప్రధానం చేతనస్య జీవస్య కారణం భవితుమ్ అర్హతి. స్వమపీతో భవతి - ఆత్మానమ్ ఏవ జీవః అపీతః భవతి ఇత్యర్థః. చిద్వస్తు శరీరకం తదాత్మభూతం బ్రహ్మ ఏవ జీవశబ్దేన అభిధీయతే ఇతి నామరూప వ్యాకరణ శ్రుత్యా ఉక్తమ్. తత్ జీవశబ్ద అభిధేయం బ్రహ్మ సుషుప్తి కాలే అపి ప్రలయకాలే ఇవ నామరూప పరిష్వఙ్గ అభావాత్ కేవల సత్ శబ్ద అభిధేయమ్ ఇతి సతా సోమ్య తదా సమ్పన్నః భవతి స్వమపీతః భవతి ఇత్యుచ్యతే.\n\nతథా సమాన ప్రకరణే నామరూప పరిష్వఙ్గ అభావేన ప్రాజ్ఞేన ఏవ పరిష్వక్గాత్ 'ప్రాజ్ఞేనాత్మనా సమ్పరిష్వక్తో న బాహ్యం కిఞ్చన వేద నాన్తరమ్' ఇత్యుచ్యతే. ఆమోక్షాత్ జీవస్య నామరూప పరిష్వజ్గాత్ ఏవ హి స్వవ్యతిరిక్త విషయ జ్ఞానోదయః. సుషుప్తికాలే హి నామరూపే విహాయ సతా సమ్పరిష్వక్తః పునరపి జాగర దశాయాం నామరూపే పరిష్వజ్య తత్తత్ నామరూపో భవతి ఇతి శ్రుత్యన్తరే స్పష్టమ్ అభిధీయతే. 'యదా సుప్తః స్వప్నం న కఞ్చన పశ్యతి అథాస్మిన్ ప్రాణః ఏవైకధా భవతి... ఏతస్మాత్ ఆత్మనః ప్రాణాః యథా యథం విప్రతిష్ఠన్తో”, తథా 'త ఇహ వ్యాఘ్ర వా సింహో వా వృకో వా వరాహో వా దంశో వా మశ వా యద్యత్ భవన్తి తదా భవన్తి' ఇతి చ. తథా సుషుప్తం జీవం 'ప్రాజ్ఞేనాత్మనా సమ్పరిష్వక్త:' ఇతి చ వదతి. తస్మాత్ సత్ శబ్దవాచ్యః పరంబ్రహ్మ సర్వజ్ఞః పరమేశ్వరః పురుషోత్తమః ఏవ. తదాహ వృత్తికారః - 'సతా సోమ్య తదా సమ్పన్నో భవతి' ఇతి సమ్పత్తి అసమ్పత్తిభ్యామ్ ఏతత్ అధ్యవసీయతే 'ప్రాజ్ఞేన ఆత్మనా సమ్పరిష్వక్తే' ఇతి చ ఆహ ఇతి.",
    },
    tamil: {
      preSutra: "",
      sutra: "",
      text: "",
    },
    number: 10,
  },
  {
    kannada: {
      preSutra: "ಇತಶ್ಚ, ನ ಪ್ರಧಾನಮ್ -",
      sutra: "ಗತಿಸಾಮಾನ್ಯಾತ್‌ || ೧-೧-೧೧ ||",
      text: "ಆತ್ಮಾ ವಾ ಇದಮೇಕ ಏವಾಗ್ರ ಆಸೀತ್ ನಾನ್ಯತ್ ಕಿಞ್ಚನ ಮಿಷತ್ | ಸ ಈಕ್ಷತ ಲೋಕಾನ್ನು ಸೃಜಾ ಇತಿ' | (ಐತ.ಉ.೧-೧) 'ಸ ಇಮಾಂಲ್ಲೋಕಾನಸೃಜತ' (ಐತ.ಉ.೧-೨) 'ಸಂಭೂತಃ ಆತ್ಮನ ಆಕಾಶಃ ಸಂಭೂತಃ | ಆಕಾಶಾದ್ವಾಯುಃ । ವಾಯೋರಗ್ನಿ: ಅಸ್ಯ ಅಗ್ನೇರಾಪಃ | ಅದ್ಭ್ಯಃ ಪೃಥಿವೀ | (ತೈ.ಉ.ಆನ೧-೨) 'ಅಸ್ಯ ಮಹತೋ ಭೂತಸ್ಯ ನಿಃಶ್ವಸಿತಮೇತತ್, ಯತ್ ಋಗ್ವೇದಃ' (ಸುಬಾ.ಉ.೨) ಇತ್ಯಾದಿಸೃಷ್ಟಿವಾಕ್ಯಾನಾಂ ಯಾ ಗತಿಃ – ಪ್ರವೃತ್ತಿಃ, ತತ್ಸಾಮಾನ್ಯಾತ್ - ತತ್ಸಮಾನಾರ್ಥತ್ವಾದಸ್ಯ | ತೇಷು ಚ ಸರ್ವೇಷು, ಸರ್ವೇಶ್ವರಃ ಕಾರಣಮವಗಮ್ಯತೇ | ತಸ್ಮಾತ್ ಅತ್ರಾಪಿ ಸರ್ವೇಶ್ವರ ಏವ ಕಾರಣಮಿತಿ ನಿಶ್ಚೀಯತೇ ||",
    },
    roman: {
      preSutra: "itaśca na pradhānam -",
      sutra: "Sutra 11. Gatisāmanyāt.",
      text: "'ātmā vā idameka evāgra āsīnnānyat kiñcana miṣat . sa īkṣata lokānnu sṛjā iti sa imāṃllokānasṛjata' 'tasmādvā etasmādātmana ākāśassambhūtaḥ . ākāśādvāyuḥ . vāyoragniḥ . agnerāpaḥ .adybhaḥ pṛthivī' 'tasya ha vā etasya mahato bhūtasya niśvasitametadyadṛgvedaḥ' ityādisṛṣṭivākyānāṃ yā gatiḥ- pravṛttiḥ, tatsāmānyāt tatsamānārthatvādasya; teṣu ca sarveṣu sarveśvaraḥ kāraṇamavagamyate . tasmādatrāpi sarveśvara eva kāraṇamiti niścīyate .",
    },
    telugu: {
      preSutra: "ఇతశ్చ న ప్రధానమ్.....",
      sutra: "11. గతి సామాన్యాత్. 1-1-11.",
      text: "'ఆత్మా వా ఇదమేక ఏవాగ్ర ఆసీత్ నాన్యత్కిఞ్చన మిషత్, స ఈక్షత లోకాన్ను సృజా ఇతి, స ఇమా ల్లోకాన్ అసృజత', 'తస్మాద్వా ఏతస్మాదాత్మన ఆకాశః సమ్భూతః ఆకాశాత్ వాయుః వాయోరగ్నిః అగ్నేరాపః అద్భ్యః పృథివీ', 'తస్య హ వా ఏతస్య మహతో భూతస్య నిశ్వసితమ్ ఏతత్ యత్ ఋగ్వేదః' ఇత్యాది సృష్టి వాక్యానాం యా 'గతిః' - ప్రవృత్తిః, 'తత్సామాన్యాత్' - తత్ సమానార్థత్వాత్ అస్య. తేషు చ సర్వేషు సర్వేశ్వరః కారణమ్ అవగమ్యతే. తస్మాత్ అత్రాపి సర్వేశ్వరః ఏవ కారణమ్ ఇతి నిశ్చయతే.",
    },
    tamil: {
      preSutra: "",
      sutra: "",
      text: "",
    },
    number: 11,
  },
  {
    kannada: {
      preSutra: "ಇತಶ್ಚ, ನ ಪ್ರಧಾನಮ್ -",
      sutra: "ಶ್ರುತತ್ವಾಚ್ಚ || ೧-೧-೧೨ ||",
      text: "ಶ್ರುತಮೇವ ಹಿ ಅಸ್ಯಾಮ್ ಉಪನಿಷದಿ-ಅಸ್ಯ ಸಚ್ಛಬ್ದವಾಚ್ಯಸ್ಯ, ಆತ್ಮತ್ವೇನ ನಾಮ- ರೂಪಯೋರ್ವ್ಯಾಕರ್ತೃತ್ವಂ, ಸರ್ವಜ್ಞತ್ವಂ, ಸರ್ವಶಕ್ತಿತ್ವಂ, ಸರ್ವಾಧಾರತ್ವಮ್, ಅಪಹತಪಾಪ್ಮತ್ವಾದಿಕಂ, ಸತ್ಯಕಾಮತ್ವಂ, ಸತ್ಯಸಙ್ಕಲ್ಪತ್ವಂ ಚ; 'ಅನೇನ ಜೀವೇನಾಽಽತ್ಮನಾಽನುಪ್ರವಿಶ್ಯ ನಾಮರೂಪೇ ವ್ಯಾಕರವಾಣಿ' (ಛಾಂ.ಉ.೬-೩-೨) 'ಸನ್ಮೂಲಾಃ ಸೋಮ್ಯೇಮಾಃ ಸರ್ವಾ: ಪ್ರಜಾಃ ಸದಾಯತನಾಃ ಸತ್ಪ್ರತಿಷ್ಠಾಃ, (ಛಾಂ.ಉ.೬-೮-೬) 'ಐತದಾತ್ಮ್ಯಮಿದಂ ಸರ್ವಂ ತತ್ಸತ್ಯಂ ಸ ಆತ್ಮಾ' (ಛಾಂ.ಉ.೬-೮-೭) 'ಯಚ್ಚಾಸ್ಯೇಹಾಽಸ್ತಿ ಯಚ್ಚ ನಾಽಸ್ತಿ, ಸರ್ವಮ್ ತದಸ್ಮಿನ್ ಸಮಾಹಿತಮ್' (ಛಾಂ.ಉ.೮-೧-೩) 'ಅಸ್ಮಿನ್ ಕಾಮಾಃ ಸಮಾಹಿತಾಃ' (ಛಾಂ.ಉ.೮-೧-೫) 'ಏಷ ಆತ್ಮಾಽಪಹತಪಾಪ್ಮಾ ವಿಜರೋ ವಿಮೃತ್ಯುರ್ವಿಶೋಕಃ ವಿಜಿಘತ್ಸೋsಪಿಪಾಸಃ ಸತ್ಯಕಾಮಃ ಸತ್ಯಸಂಕಲ್ಪಃ' (ಛಾಂ.ಉ.೮-೧೫) ಇತಿ ||\n\n ತಥಾ ಚ ಶ್ರುತ್ಯಂತರಾಣಿ - 'ನ ತಸ್ಯ ಕಶ್ಚಿತ್ ಪತಿರಸ್ತಿ ಲೋಕೇ ನ ಚೇಶಿತಾ ನೈವ ಚ ತಸ್ಯ ಲಿಙ್ಗಮ್ । ಸ ಕಾರಣಂ ಕರಣಾಧಿಪಾಧಿಪೋ ನ ಚಾಽಸ್ಯ ಕಶ್ಚಿಜ್ಜನಿತಾ ನ ಚಾಽಧಿಪಃ' ॥ (ಶ್ವೇ.ಉ.೬-೯) 'ಸರ್ವಾಣಿ ರೂಪಾಣಿ ವಿಚಿತ್ರ ಧೀರೋ ನಾಮಾನಿ ಕೃತ್ವಾsಭಿವದನ್ ಯದಾssಸ್ತೇ' (ತೈ.ಆರ.ಪು.೩-೧೨-೧೬) 'ಅನ್ತಃಪ್ರವಿಷ್ಟಃ ಶಾಸ್ತಾ ಜನಾನಾಂ ಸರ್ವಾತ್ಮಾ' (ತೈ.ಆರ.೩-೧೧-೩) 'ವಿಶ್ವಾತ್ಮಾನಂ ಪರಾಯಣಮ್' (ತೈ.ನಾ.ಉ.೧೧-೩) 'ಪತಿಂ ವಿಶ್ವಸ್ಯಾತ್ವೇಶ್ವರಮ್' (ತೈ.ನಾ.ಉ.೧೧-೩) 'ಯಚ್ಚ ಕಿಞ್ಚಿಜ್ಜಗತ್ಯಸ್ಮಿನ್ ದೃಶ್ಯತೇ ಶೂಯತೇSಪಿ ವಾ । ಅನ್ತರ್ಬಹಿಶ್ಚ ತತ್ಸರ್ವಂ ವ್ಯಾಪ್ಯ ನಾರಾಯಣಃ ಸ್ಥಿತಃ' ॥ (ತೈ.ನಾ.ಉ.೧೧-೫) 'ಏಷ ಸರ್ವಭೂತಾನ್ತರಾತ್ಮಾಪಹತಪಾಪ್ಮಾ ದಿವ್ಯೋ ದೇವ ಏಕೋ ನಾರಾಯಣಃ' (ಸುಬಾ.ಉ. ೭) ಇತ್ಯಾದೀನಿ ।। ತಸ್ಮಾತ್ - ಜಗತ್ಕಾರಣವಾದಿವಾಕ್ಯಂ ನ ಪ್ರಧಾನಾದಿಪ್ರತಿಪಾದನಯೋಗ್ಯಮ್ । ಅತಃ ಸರ್ವಜ್ಞಃ ಸರ್ವಶಕ್ತಿಃ ಸರ್ವೇಶ್ವರೇಶ್ವರಃ ನಿರಸ್ತನಿಖಿಲದೋಷಗನ್ಧಃ ಅನವಧಿಕಾತಿಶಯಾಸಂಖ್ಯೆಯಕಲ್ಯಾಣಗುಣಗಣೌಘ- ಮಹಾರ್ಣವಃ ಪುರುಷೋತ್ತಮಃ ನಾರಾಯಣ ಏವ, ನಿಖಿಲಜಗದೇಕಕಾರಣಂ ಜಿಜ್ಞಾಸ್ಯಂ ಬ್ರಹ್ಮ ಇತಿ ಸ್ಥಿತಮ್ ||ಆತ ವಿವ, ನಿರ್ವಿಶೇಷಚಿನ್ಮಾತ್ರಬ್ರಹ್ಮವಾದೋSಪಿ, ಸೂತ್ರಕಾರೇಣ, ಅಭಿಃ ಶ್ರುತಿಭಿಃ ನಿರಸ್ತೋ ವೇದಿತವ್ಯಃ: 'ಪಾರಮಾರ್ಥಿಕಮುಖೇಕ್ಷಣಾದಿಗುಣಯೋಗಿ ಜಿಜ್ಞಾಸ್ಯಂ ಬ್ರಹ್ಮ' ಇತಿ ಸ್ಥಾಪನಾತ್ । ನಿರ್ವಿಶೇಷವಾದೇ ಹಿ ಸಾಕ್ಷಿತ್ವಮಪಿ ಅಪಾರಮಾರ್ಥಿಕಮ್ । ವೇದಾಂತವೇದ್ಯಂ ಬ್ರಹ್ಮ ಜಿಜ್ಞಾಸ್ಯತಯಾ ಪ್ರತಿಜ್ಞಾತಮ್; ತಚ್ಚ ಚೇತನಮ್ ಇತಿ 'ಈಕ್ಷತೇರ್ನಾಶಬ್ದಮ್' ಇತ್ಯಾದಿಭಿಃ ಸೂತ್ರೈಃ ಪ್ರತಿಪಾದ್ಯತೇ । ಚೇತನತ್ವಂ ನಾಮ ಚೈತನ್ಯಗುಣಯಗ ಅತಃ ಈಕ್ಷಣಗುಣವಿರಹಿಣಃ ಪ್ರಧಾನತುಲ್ಯತ್ವಮೇವ ।। ಕಿಂಚ - ನಿರ್ವಿಶೇಷಪ್ರಕಾಶಮಾತ್ರಬ್ರಹ್ಮವಾದೇ, ತಸ್ಯ ಪ್ರಕಾಶತ್ವಮಸಿ ದುರುಪಪಾದಮ್ | ಪ್ರಕಾಶೋ ಹಿ ನಾಮ ಸ್ವಸ್ಯ ಪರಸ್ಯ ಚ ವ್ಯವಹಾರಯೋಗ್ಯತಾಮಾಪಾದಯನ್ ವಸ್ತು ವಿಶೇಷಃ | ನಿರ್ವಿಶೇಷಸ್ಯ ವಸ್ತುನಃ ತದುಭಯರೂಪತ್ವಾಭಾವಾತ್ ಘಟಾದಿವತ್ ಅಚಿತ್ತ್ವಮೇವ । ತದುಭಯರೂಪತ್ವಾಭಾವೇsಪಿ ತತ್ಕ್ಷಮತ್ವಮಸ್ತಿ - ಇತಿ ಚೇತ್, ತನ; ತತ್ಸಮತ್ವಂ ಹಿ ತತ್ಸಾಮರ್ಥ್ಯಮೇವ | ಸಾಮರ್ಥ್ಯಗುಣಯೋಗೇ ಹಿ ನಿರ್ವಿಶೇಷವಾದಃ ಪರಿತ್ಯಕ್ತಃ ಸ್ಯಾತ್ ।। ಅಥ - ಶ್ರುತಿಪ್ರಾಮಾಣ್ಯಾತ್ ಅಯಮೇಕೋ ವಿಶೇಷಃ ಅಭ್ಯುಪಗಮ್ಯತೇ - ಇತಿ ಚೇತ್, ಹನ್ತತರ್ಹಿ! ತತ ಏವ ಸರ್ವಜ್ಞತಾ, ಸರ್ವಶಕ್ತಿತ್ವಮ್, ಸರ್ವೇಶ್ವರೇಶ್ವರತ್ವಮ್, ಸರ್ವಕಲ್ಯಾಣಗುಣಾಕರತ್ವಮ್, ಸಕಲಹೇಯಪ್ರತ್ಯನೀಕತಾ ಇತ್ಯಾದಯಃ ಸರ್ವೇ ಅಭ್ಯುಪಗನ್ತವ್ಯಾಃ | ಶಕ್ತಿಮತ್ವಂ ಚ ಕಾರ್ಯ- ವಿಶೇಷಾನುಗುಣತ್ವಮ್ | ತಚ್ಚ ಕಾರ್ಯವಿಶೇಷೈಕನಿರೂಪಣೀಯಮ್ | ಕಾರ್ಯವಿಶೇಷಸ್ಯ ನಿಷ್ಪ್ರಮಾಣಕತ್ವೇ ತದೇಕನಿರೂಪಣೀಯಂ ಶಕ್ತಿಮತ್ವಮಪಿ ನಿಷ್ಟ್ರಮಾಣಕಂ ಸ್ಯಾತ್ ||ಕಿಞ್ಚ-ನಿರ್ವಿಶೇಷವಸ್ತುವಾದಿನಃ ವಸ್ತುತ್ವಮಪಿ ನಿಷ್ಪ್ರಮಾಣಮ್ । ಪ್ರತ್ಯಕ್ಷಾನುಮಾನಾಗಮ- ಸ್ವಾನುಭವಾಃ ಸವಿಶೇಷಗೋಚರಾಃ - ಇತಿ ಪೂರ್ವಮೇವೋಕ್ತಮ್ । ತಸ್ಮಾತ್ ವಿಚಿತ್ರಚೇತನಾಚೇತನಾತ್ಮಕ ಜಗದ್ರೂಪೇಣ ಬಹು ಸ್ಯಾಮ್ ಇತಿ ಈಕ್ಷಣಕ್ಷಮಃ, ಪುರುಷೋತ್ತಮ ಏವ ಜಿಜ್ಞಾಸ್ಯಃ - ಇತಿ ಸಿದ್ಧಮ್ ।।",
    },
    roman: {
      preSutra: "itaśca na pradhānam -",
      sutra: "Sutra 12. Śrutvāchcha.",
      text: "śrutameva hyasyāmupaniṣadi asya sacchabdavācyasya ātmatvena nāmarūpayorvyāktatvaṃ sarvajñatvaṃ sarvaśaktitvaṃ sarvādhāratvamapahatapāpmatvādikaṃ satyakāmatvaṃ satyasaṅkalpatvañca 'anena jīvenātmanā'nupraviśya nāmarūpe vyākaravāṇi' 'sanmūlāḥ somyemāḥ sarvāḥ prajāḥ sadāyatanāḥ satpratiṣṭhāḥ' 'aitadātmyamidaṃ sarvaṃ tatsatyaṃ sa ātmā' 'yaccāsyehāsti yacca nāsti sarvaṃ tadasmin samāhitam . tasminkāmāḥ samāhitāḥ' eṣa ātmā'pahatapāpmā vijaro vimṛtyurviśoko'vijaghatso'pipāsassatyakāmassatyasaṅkalpaḥ' iti . tathā ca śrutyantarāṇi\n\n'na tasya kaścitpatirasti loke na ceśitā naiva ca tasya liṅgam . sa kāraṇaṃ kāraṇādhipādhipo na cāsya kaścijjanitā na cādhipaḥ' sarvāṇi rūpāṇi vicitya dhīro nāmāni kṛtvā'bhivadan yadāste' 'antaḥ praviṣṭaḥ śāstā janānāṃ sarvātmā' 'viśvātmānaṃ parāyaṇam' 'patiṃ viśvasyātmeśvaram' 'yacca kiñcijjagatyasmin dṛśyate śrūyate'pi vā . antarbahiśca tatsarvaṃ vyāpya nārāyaṇaḥ sthitaḥ' 'eṣa sarvabhūtāntarātmā'pahatapāpmā divyo deva eko nārāyaṇaḥ' ityādīni . tasmājjagatkāraṇavādivākyaṃ na pradhānādipratipādanayogyam, ataḥ sarvajñassarvaśaktissarveśvareśvaro nirastanikhiladoṣagandho'navadhikātiśayāsaṅkhayeyakalyāṇaguṇagaṇaughamahārṇavaḥ puruṣottamo nārāyaṇa eva nikhilajagadekakāraṇaṃ jijñāsyaṃ brahmeti sthitam .\n\nata eva nirviśeṣacinmātrabrahmavādopi sūtrakāreṇābhiḥ śrutibhinirrasto veditavyaḥ, pāramārthikamukhyekṣaṇā\n\ndiguṇayogi jijñāsyaṃ brahmeti sthāpanāt . nirviśeṣavāde hi sākṣitvamapyapāramārthikaṃ vedāntavedyaṃ brahma jijñāsyatayā pratijñātam, tacca cetanamiti 'īkṣaternāśabdam' ityādibhissūtraiḥ pratipādyate . cetanatvaṃ nāma caitanyaguṇayogaḥ . ata īkṣaṇaguṇavirahiṇaḥ pradhānatulyatvameva . kiñca nirviśeṣaprakāśamātrabrahmavāde tasya prakāśatvamapi durupapādam . prakāśo hi nāma svasya parasya ca vyavahārayogyatāmāpādayan vastuviśeṣaḥ . nirviśeṣasya vastunastadubhayarūpatvābhāvādghaṭādivadacittvameva . tadubhayarūpatvābhāve'pi tatkṣamatvamastīti cet tanna, tatkṣamatvaṃ hi tatsāmarthyameva . sāmarthyaguṇayogo hi nirviśeṣavādaḥ parityaktaḥ syāt . atha śrutiprāmāṇyāda\n\nyameko viśeṣo'bhyupagamyata iti cet, hanta tarhi tata eva sarvajñatā, sarvaśaktitvam, sarveśvareśvaratvaṃ, sarvakalyāṇaguṇākaratvam, sakalaheyapratyanīkatetyādayaḥ sarve'bhyupagantavyāḥ . śaktimattvaṃ ca kāryaviśeṣānuguṇatvam; tacca kāryaviśeṣaikanirūpaṇīyam . kāryaviśeṣasya niṣpramāṇakatve tadekanirūpaṇīye śaktimattvamapi niṣpramāṇakaṃ syāt . kiñca nirviśeṣavastuvādino vastutvamapi niṣpramāṇam . pratyakṣānumānāgamasvānubhavāḥ saviśeṣagocarā iti pūrvamevoktam . tasmādvicitracetanācetanātmakajagadrūpeṇa 'bahu syā'mitīkṣaṇakṣamaḥ puruṣottama eva jijñāsya iti siddham .",
    },
    telugu: {
      preSutra: "ఇతశ్చ న ప్రధానమ్.....",
      sutra: "12. శ్రుతత్వాత్ చ. 1-1-12.",
      text: "శ్రుతమేవ హి అస్యామ్ ఉపనిషది అస్య సత్ శబ్ద వాచ్యస్య ఆత్మత్వేన నామరూపయోః వ్యాకర్తృత్వం సర్వజ్ఞత్వం సర్వశక్తిత్వం సర్వాధారత్వమ్ అపహతపాప్మత్వాదికం సత్యకామత్వం సత్యసఙ్కల్పత్వఞ్చ. 'అనేన జీవేనాత్మనా అనుప్రవిశ్య నామరూపే వ్యాకరవాణి”, 'సన్మూలాః సోమ్య ఇమాస్సర్వాః ప్రజాః సదాయతనాః సత్ ప్రతిష్ఠాః”, 'ఐతదాత్మ్య మిదం సర్వం తత్సత్యం స ఆత్మా', 'యచ్చా స్యేహస్తి యచ్చ నాస్తి సర్వం తదస్మిన్ సమాహితమ్”, 'తస్మిన్ కామాః సమాహితః', 'ఏష ఆత్మా అపహత పాప్మా విజరో విమృత్యుః విశోకో అవిజిఘత్సా అపిపాసః సత్యకామః సత్య సంకల్పః' ఇతి.\n\nతథా చ శ్రుత్యన్తరాణి 'న తస్య కశ్చిత్పతిరస్తి లోకే న చేశితా నైవ చ తస్య లిఙ్గమ్, స కారణం కరణాధిపాధిపో న చాస్య కశ్చిత్ జనితా న చాధిపః:”, 'సర్వాణి రూపాణి విచిత్య ధీరః నామాని కృత్వా అభివదన్యదాస్తే”, 'అన్తః ప్రవిష్టః శాస్తా జనానాం సర్వాత్మా', 'విశ్వాత్మానం పరాయణమ్”, 'పతిం విశ్వస్యాత్మేశ్వరమ్”, 'యచ్చ కిక్చోత్ జగత్యస్మిన్ దృశ్యతే శ్రూయతే పి వా అన్తర్బహిశ్చ తత్సర్వం వ్యాప్య నారాయణస్థిత:”, 'ఏష సర్వభూతాన్తరాత్మా అపహతపాప్మా దివ్యో దేవ ఏకో నారాయణః' ఇత్యాదీని. తస్మాత్ జగత్ కారణవాది వాక్యం న ప్రధానాది ప్రతిపాదన యోగ్యమ్. అతః సర్వజ్ఞః సర్వశక్తిః సర్వేశ్వరేశ్వరః నిరస్త నిఖిల దోషగన్ధః అనవధిక అతిశయ అసంఖ్యేయ కల్యాణ గుణగణెఘ మహార్ణవః పురుషోత్తమః నారాయణ: ఏవ నిఖిల\n\nజగదేక కారణం జిజ్ఞాస్యం బ్రహ్మ ఇతి స్థితమ్.\n\nఅతః ఏవ నిర్విశేష చిన్మాత్ర బ్రహ్మవాదః అపి సూత్రకారేణాభిః శ్రుతిభిః నిరస్త వేదితవ్యః, పారమార్థిక ముఖ్య ఈక్షణాది గుణయోగి జిజ్ఞాస్యం బ్రహ్మ ఇతి స్థాపనాత్. నిర్విశేష వాదే హి సాక్షిత్వమ్ అపి అపారమార్థికమ్. వేదాన్తవేద్యం బ్రహ్మ జిజ్ఞాస్యతయా ప్రతిజ్ఞాతమ్. తత్ చ చేతనమ్ ఇతి 'ఈక్షతేః న అశబ్దమ్'ఇత్యాదిభిః సూత్రై: ప్రతిపాద్యతే. చేతనత్వం నామ చైతన్య గుణ యోగః. అతః ఈక్షణ గుణ విరహిణః ప్రధాన తుల్యత్వమ్ ఏవ.\n\nకిఞ్చ, నిర్విశేష ప్రకాశమాత్ర బ్రహ్మవాదే తస్య ప్రకాశత్వమ్ అపి దురుపపాదమ్. ప్రకాశో హి నామ స్వస్య పరస్య చ వ్యవహార యోగ్యతామ్ ఆపాదయన్ వస్తు విశేషః. నిర్విశేషస్య వస్తునః తదుభయ రూపత్వ అభావాత్ ఘటాదివత్ అచిత్త్వమేవ. తదుభయ రూపత్వ అభావే అపి తత్ క్షమత్వమ్ అస్తి ఇతి చేత్, తత్ న. తతక్షమత్వం హి తత్ సామర్థ్యమ్ ఏవ. సామర్థ్య గుణయోగే హి నిర్విశేషవాదః పరిత్యక్తః స్యాత్. అథ శ్రుతి ప్రామాణ్యాత్ అయమ్ ఏకో విశేష అభ్యుపగమ్యతే ఇతి చేత్, హస్త తర్హి తత ఏవ సర్వజ్ఞతా, సర్వశక్తిత్వమ్, సర్వేశ్వరేశ్వరత్వమ్, సర్వకల్యాణ గుణాకరత్వమ్, సకలహేయ ప్రత్యనీకతా ఇత్యాదయః సర్వే అభ్యుపగన్తవ్యాః. శక్తిమత్త్వం చ కార్య విశేష అనుగుణత్వమ్, తత్ చ కార్య విశేషైక నిరూపణీయమ్. కార్యవిశేషస్య నిష్ప్రమాణకత్వే తదేక నిరూపణీయం శక్తిమత్త్వమ్ అపి నిష్ప్రమాణకం స్యాత్. కిఞ్చ నిర్విశేష వస్తు వాదినః వస్తుత్వమపి నిష్ప్రమాణమ్. ప్రత్యక్ష అనుమాన ఆగమ స్వానుభవాః సవిశేష గోచరాః ఇతి పూర్వమేవ ఉక్తమ్. తస్మాత్ విచిత్ర చేతనాచేతనాత్మక జగత్ రూపేణ 'బహుస్యామ్' ఇతి ఈక్షణ క్రమః పురుషోత్తమః ఏవ జిజ్ఞాస్యః ఇతి సిద్ధమ్.",
    },
    tamil: {
      preSutra: "",
      sutra: "",
      text: "",
    },
    number: 12,
  },
]
