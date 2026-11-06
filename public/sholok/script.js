const LOCATION_URL="https://iqbalhasandev.github.io/bangladesh-geo-json/bangladesh-geo.json";
const LOCATION_CACHE_KEY="sholok_bangladesh_locations_v5";
const GROUP_KEY="sholok_delivery_rate_groups_v3";
const CUSTOM_AREA_KEY="sholok_delivery_custom_areas_v5";
const CUSTOM_DISTRICT_KEY="sholok_delivery_custom_districts_v5";
const ASSIGN_KEY="sholok_delivery_assignments_v3";
const AREA_STATUS_KEY="sholok_delivery_area_status_v1";
const AREA_OVERRIDE_KEY="sholok_delivery_area_overrides_v1";
const DISTRICT_RENAME_KEY="sholok_delivery_district_renames_v1";
const PROVIDED_LOCATION_DATA=[{"name":"Dhaka","districts":[{"name":"Dhaka","upazilas":[{"name":"Adabor"},{"name":"Agargaon"},{"name":"Ainusbag (Dakshinkhan)"},{"name":"Ashkona"},{"name":"Askona Airport Road"},{"name":"Azimpur"},{"name":"Badda (Middle Badda)"},{"name":"Badda (Merul Badda)"},{"name":"Badda (North Badda)"},{"name":"Badda (South Badda)"},{"name":"Baigertek (Mirpur)"},{"name":"Bailey Road"},{"name":"Banani (Block A)"},{"name":"Banani (Block B to K)"},{"name":"Banani DOHS"},{"name":"Banga Bazar"},{"name":"Bangabandhu Avenue"},{"name":"Bangshal"},{"name":"Baridhara DOHS"},{"name":"Baridhara J-Block"},{"name":"Basabo"},{"name":"Bashundhara R/A (Block A-C)"},{"name":"Bashundhara R/A (Block D-I)"},{"name":"Bashundhara R/A (Block J-N)"},{"name":"Begum Bazar"},{"name":"Bijoynagar"},{"name":"Bongo Bhaban Area"},{"name":"Bosila (Mohammadpur)"},{"name":"Cantonment"},{"name":"Chawkbazar"},{"name":"Chankarpul"},{"name":"Dakshinkhan"},{"name":"Darussalam"},{"name":"Dayaganj"},{"name":"Demra"},{"name":"Dhamrai"},{"name":"Dhania"},{"name":"Dhanmondi (Road 1 to 15)"},{"name":"Dhanmondi (Road 16 to 32)"},{"name":"Dhakeshwari"},{"name":"Dholaikhal"},{"name":"Dholaipar"},{"name":"Dohar"},{"name":"Elephant Road"},{"name":"Eskaton (New Eskaton)"},{"name":"Eskaton (Old Eskaton)"},{"name":"Fakirapul"},{"name":"Farmgate"},{"name":"Fayedabad"},{"name":"Gabtoli"},{"name":"Gendaria"},{"name":"Golartek (Mirpur)"},{"name":"Gudaraghat (Badda)"},{"name":"Gulshan 1"},{"name":"Gulshan 2"},{"name":"Gulistan"},{"name":"Hajipara (Rampura)"},{"name":"Hatirjheel Area"},{"name":"Hazaribagh"},{"name":"High Court Area"},{"name":"Ibrahimpur (Kafrul)"},{"name":"Imamganj"},{"name":"Islampur"},{"name":"Jatrabari"},{"name":"Jhilpar (Shahjadpur)"},{"name":"Jigatola"},{"name":"Jurain"},{"name":"Kafrul"},{"name":"Kajla"},{"name":"Kakrail"},{"name":"Kalabagan"},{"name":"Kallayanpur"},{"name":"Kalshi (Mirpur)"},{"name":"Kamalapur"},{"name":"Kaptan Bazar"},{"name":"Kawla"},{"name":"Kellar Mor (Lalbagh)"},{"name":"Keraniganj (Abdullahpur)"},{"name":"Keraniganj (Hasnabad)"},{"name":"Keraniganj (Jinjira)"},{"name":"Keraniganj (Kadamtoli)"},{"name":"Keraniganj (Rohitpur)"},{"name":"Khilgaon (Block A-C)"},{"name":"Khilgaon (Tazmahal Road)"},{"name":"Khilkhet"},{"name":"Kochukhet"},{"name":"Kotwali"},{"name":"Kuril"},{"name":"Lalbagh"},{"name":"Lalmatia"},{"name":"Laxmibazar"},{"name":"Madartek"},{"name":"Moghbazar"},{"name":"Malibagh"},{"name":"Maniknagar"},{"name":"Matuail"},{"name":"Midford"},{"name":"Middle Para (Khilkhet)"},{"name":"Mirpur 1"},{"name":"Mirpur 2"},{"name":"Mirpur 6"},{"name":"Mirpur 7"},{"name":"Mirpur 10"},{"name":"Mirpur 11"},{"name":"Mirpur 12"},{"name":"Mirpur 13"},{"name":"Mirpur 14"},{"name":"Mirpur DOHS"},{"name":"Mirpur Section 11.5"},{"name":"Mirpur Zoo Road"},{"name":"Mohammadpur (Asad Avenue)"},{"name":"Mohammadpur (Housing)"},{"name":"Mohammadpur (Japan Garden)"},{"name":"Mohammadpur (Town Hall)"},{"name":"Monipur (60-Feet)"},{"name":"Monipuripara"},{"name":"Motijheel"},{"name":"Mouchak"},{"name":"Mugda"},{"name":"Naddapara"},{"name":"Narinda"},{"name":"Naya Bazar"},{"name":"Naya Paltan"},{"name":"Nawabganj"},{"name":"Nawabpur"},{"name":"New Market"},{"name":"Niketon"},{"name":"Nikunja 1"},{"name":"Nikunja 2"},{"name":"Nilkhet"},{"name":"Paikpara (Mirpur)"},{"name":"Palashi"},{"name":"Pallabi"},{"name":"Panthapath"},{"name":"Postogola"},{"name":"Press Club"},{"name":"Purana Paltan"},{"name":"Puran Dhaka (General)"},{"name":"Rajarbagh"},{"name":"Rajendrapur (Keraniganj)"},{"name":"Rampura"},{"name":"Rayer Bazar"},{"name":"Rayerbagh"},{"name":"Rupnagar (Mirpur)"},{"name":"Sabujbagh"},{"name":"Sadarghat"},{"name":"Sayedabad"},{"name":"Sector 1 (Uttara)"},{"name":"Sector 3 (Uttara)"},{"name":"Sector 4 (Uttara)"},{"name":"Sector 5 (Uttara)"},{"name":"Sector 6 (Uttara)"},{"name":"Sector 7 (Uttara)"},{"name":"Sector 9 (Uttara)"},{"name":"Sector 10 (Uttara)"},{"name":"Sector 11 (Uttara)"},{"name":"Sector 12 (Uttara)"},{"name":"Sector 13 (Uttara)"},{"name":"Sector 14 (Uttara)"},{"name":"Shahbagh"},{"name":"Shahjahanpur"},{"name":"Shantinagar"},{"name":"Shere Bangla Nagar"},{"name":"Shewra (Kuril)"},{"name":"Shewrapara (East)"},{"name":"Shewrapara (West)"},{"name":"Shiddheswari"},{"name":"Shonir Akhra"},{"name":"Shyampur"},{"name":"Siddique Bazar"},{"name":"Subidbazar"},{"name":"Sutrapur"},{"name":"Taltola (Agargaon)"},{"name":"Tatibazar"},{"name":"Tejgaon Industrial Area"},{"name":"Tejkunipara"},{"name":"Tikatuly"},{"name":"Tipu Sultan Road"},{"name":"Tolna (Khilkhet)"},{"name":"Uttara Model Town"},{"name":"Uttarkhan"},{"name":"Uttar Para (Khilkhet)"},{"name":"Vasantek"},{"name":"Wari"},{"name":"Zigatola"},{"name":"Ashulia"},{"name":"Birulia"},{"name":"DEPZ (Savar)"},{"name":"Jirabo"},{"name":"Nabinagar"},{"name":"Savar Sadar"},{"name":"Savar Cantonment"}]},{"name":"Gazipur","upazilas":[{"name":"Board Bazar"},{"name":"Chandra"},{"name":"Cherag Ali"},{"name":"Chowrasta"},{"name":"Gacha"},{"name":"Gazipur Sadar"},{"name":"Kaliakair"},{"name":"Kaliganj"},{"name":"Kapasia"},{"name":"Konabari"},{"name":"Mawna"},{"name":"Mouchak"},{"name":"Pubail"},{"name":"Safipur"},{"name":"Shibbari"},{"name":"Sreepur"},{"name":"Tongi (East)"},{"name":"Tongi (West)"}]},{"name":"Narayanganj","upazilas":[{"name":"Araihazar"},{"name":"Bandar"},{"name":"Chashara"},{"name":"Fatullah"},{"name":"Gauchhia"},{"name":"Gopaldi"},{"name":"Kanchpur"},{"name":"Madanpur"},{"name":"Mandalpara"},{"name":"Narayanganj Sadar"},{"name":"Nitaiaganj"},{"name":"Purbachal"},{"name":"Rupganj"},{"name":"Shiddhirganj"},{"name":"Sonargaon"}]},{"name":"Faridpur","upazilas":[{"name":"Alfadanga"},{"name":"Bhanga"},{"name":"Boalmari"},{"name":"Charbhadrasan"},{"name":"Faridpur Sadar"},{"name":"Madhukhali"},{"name":"Nagarkanda"},{"name":"Sadarpur"},{"name":"Saltha"}]},{"name":"Gopalganj","upazilas":[{"name":"Gopalganj Sadar"},{"name":"Kashiani"},{"name":"Kotalipara"},{"name":"Muksudpur"},{"name":"Tungipara"}]},{"name":"Kishoreganj","upazilas":[{"name":"Austagram"},{"name":"Bajitpur"},{"name":"Bhairab"},{"name":"Hossainpur"},{"name":"Itna"},{"name":"Karimganj"},{"name":"Katiadi"},{"name":"Kishoreganj Sadar"},{"name":"Kuliarchar"},{"name":"Mithamain"},{"name":"Nikli"},{"name":"Pakundia"},{"name":"Tarail"}]},{"name":"Madaripur","upazilas":[{"name":"Kalkini"},{"name":"Madaripur Sadar"},{"name":"Rajoir"},{"name":"Shibchar"}]},{"name":"Manikganj","upazilas":[{"name":"Daulatpur"},{"name":"Ghior"},{"name":"Harirampur"},{"name":"Manikganj Sadar"},{"name":"Saturia"},{"name":"Shibalaya"},{"name":"Singair"}]},{"name":"Munshiganj","upazilas":[{"name":"Gajaria"},{"name":"Hasara"},{"name":"Louhajang"},{"name":"Mawa"},{"name":"Muktarpur"},{"name":"Munshiganj Sadar"},{"name":"Sirajdikhan"},{"name":"Sreenagar"},{"name":"Tongibari"}]},{"name":"Narsingdi","upazilas":[{"name":"Belabo"},{"name":"Ghorashal"},{"name":"Madhabdi"},{"name":"Monohardi"},{"name":"Narsingdi Sadar"},{"name":"Palash"},{"name":"Raipura"},{"name":"Shekherchar"},{"name":"Shibpur"}]},{"name":"Rajbari","upazilas":[{"name":"Baliakandi"},{"name":"Goalanda"},{"name":"Kalukhali"},{"name":"Pangsha"},{"name":"Rajbari Sadar"}]},{"name":"Shariatpur","upazilas":[{"name":"Damudya"},{"name":"Gosairhat"},{"name":"Naria"},{"name":"Shariatpur Sadar"},{"name":"Bhedarganj"},{"name":"Zanjira"}]},{"name":"Tangail","upazilas":[{"name":"Basail"},{"name":"Bhuapur"},{"name":"Delduar"},{"name":"Dhanbari"},{"name":"Elenga"},{"name":"Ghatail"},{"name":"Gopalpur"},{"name":"Gorai"},{"name":"Kalihati"},{"name":"Madhupur"},{"name":"Mirzapur"},{"name":"Nagarpur"},{"name":"Sakhipur"},{"name":"Tangail Sadar"}]}]},{"name":"Chattogram","districts":[{"name":"Chattogram","upazilas":[{"name":"Agrabad"},{"name":"Akbar Shah"},{"name":"Anwara"},{"name":"Baizid Bostami"},{"name":"Bakalia"},{"name":"Bandar"},{"name":"Banshkhali"},{"name":"Baraiyarhat"},{"name":"Bhatiari"},{"name":"Boalkhali"},{"name":"Chandanaish"},{"name":"Chandgaon"},{"name":"Chawkbazar"},{"name":"Choudhury Hat"},{"name":"Dewanhart"},{"name":"Dohazari"},{"name":"Double Mooring"},{"name":"EPZ"},{"name":"GEC Circle"},{"name":"Halishahar"},{"name":"Hathazari"},{"name":"Khulshi"},{"name":"Kotwali"},{"name":"Kumira"},{"name":"Lalkhan Bazar"},{"name":"Lohagara"},{"name":"Madarbari"},{"name":"Mirsharai"},{"name":"Nasirabad"},{"name":"Pahartali"},{"name":"Panchlaish"},{"name":"Patenga"},{"name":"Patiya"},{"name":"Rangunia"},{"name":"Raozan"},{"name":"Sandwip"},{"name":"Satkania"},{"name":"Sitakunda"}]},{"name":"Cox's Bazar","upazilas":[{"name":"Chakaria"},{"name":"Cox's Bazar Sadar"},{"name":"Kutubdia"},{"name":"Kolatoli"},{"name":"Link Road"},{"name":"Maheshkhali"},{"name":"Pekua"},{"name":"Ramu"},{"name":"Teknaf"},{"name":"Ukhia"}]},{"name":"Cumilla","upazilas":[{"name":"Barura"},{"name":"Brahmanpara"},{"name":"Burichang"},{"name":"Chandina"},{"name":"Chauddagram"},{"name":"Cumilla EPZ"},{"name":"Cumilla Sadar"},{"name":"Cumilla Sadar South"},{"name":"Daudkandi"},{"name":"Debidwar"},{"name":"Homna"},{"name":"Kandirpar"},{"name":"Laksam"},{"name":"Meghna"},{"name":"Monohargonj"},{"name":"Muradnagar"},{"name":"Nangalkot"},{"name":"Paduar Bazar"},{"name":"Shasongachha"},{"name":"Titas"}]},{"name":"Bandarban","upazilas":[{"name":"Alikadam"},{"name":"Bandarban Sadar"},{"name":"Lama"}]},{"name":"Brahmanbaria","upazilas":[{"name":"Akhaura"},{"name":"Ashuganj"},{"name":"Bancharampur"},{"name":"Bijoynagar"},{"name":"Brahmanbaria Sadar"},{"name":"Kasba"},{"name":"Nabinagar"},{"name":"Nasirnagar"},{"name":"Sarail"}]},{"name":"Chandpur","upazilas":[{"name":"Chandpur Sadar"},{"name":"Faridganj"},{"name":"Haimchar"},{"name":"Hajiganj"},{"name":"Kachua"},{"name":"Matlab North"},{"name":"Matlab South"},{"name":"Puranbazar"},{"name":"Shahrasti"}]},{"name":"Feni","upazilas":[{"name":"Chhagalnaiya"},{"name":"Daganbhuiyan"},{"name":"Feni Sadar"},{"name":"Fulgazi"},{"name":"Parshuram"},{"name":"Sonagazi"},{"name":"Trunk Road"}]},{"name":"Khagrachhari","upazilas":[{"name":"Khagrachhari Sadar"},{"name":"Matiranga"},{"name":"Ramgarh"}]},{"name":"Lakshmipur","upazilas":[{"name":"Kamalnagar"},{"name":"Lakshmipur Sadar"},{"name":"Ramganj"},{"name":"Ramgati"},{"name":"Raipur"}]},{"name":"Noakhali","upazilas":[{"name":"Begumganj (Chowmuhani)"},{"name":"Bosurhat"},{"name":"Chatkhil"},{"name":"Companiganj"},{"name":"Hatiya"},{"name":"Kabirhat"},{"name":"Maijdee (Noakhali Sadar)"},{"name":"Senbagh"},{"name":"Sonaimuri"},{"name":"Subarnachar"}]},{"name":"Rangamati","upazilas":[{"name":"Kaptai"},{"name":"Kaukhali"},{"name":"Rangamati Sadar"}]}]},{"name":"Rajshahi","districts":[{"name":"Bogra","upazilas":[{"name":"Adamdighi"},{"name":"Banani (Bogra)"},{"name":"Bogra Sadar"},{"name":"Dhunat"},{"name":"Dupchanchia"},{"name":"Gabtali"},{"name":"Joleshoritola"},{"name":"Kahaloo"},{"name":"Nandigram"},{"name":"Santahar"},{"name":"Sariakandi"},{"name":"Satmatha"},{"name":"Shajahanpur"},{"name":"Sherpur"},{"name":"Shibganj"},{"name":"Sonatala"}]},{"name":"Chapainawabganj","upazilas":[{"name":"Bholahat"},{"name":"Chapainawabganj Sadar"},{"name":"Gomastapur"},{"name":"Kansat"},{"name":"Nachole"},{"name":"Shibganj"}]},{"name":"Joypurhat","upazilas":[{"name":"Akkelpur"},{"name":"Joypurhat Sadar"},{"name":"Kalai"},{"name":"Khetlal"},{"name":"Panchbibi"}]},{"name":"Naogaon","upazilas":[{"name":"Atrai"},{"name":"Badalgachhi"},{"name":"Dhamoirhat"},{"name":"Mahadevpur"},{"name":"Manda"},{"name":"Naogaon Sadar"},{"name":"Niamatpur"},{"name":"Patnitala"},{"name":"Porsha"},{"name":"Raninagar"},{"name":"Sapahar"}]},{"name":"Natore","upazilas":[{"name":"Bagatipara"},{"name":"Baraigram"},{"name":"Bonpara"},{"name":"Gurudaspur"},{"name":"Lalpur"},{"name":"Naldanga"},{"name":"Natore Sadar"},{"name":"Singra"}]},{"name":"Pabna","upazilas":[{"name":"Atgharia"},{"name":"Bera"},{"name":"Bhangoora"},{"name":"Chatmohar"},{"name":"Faridpur"},{"name":"Ishwardi"},{"name":"Pabna Sadar"},{"name":"Rooppur"},{"name":"Santhia"},{"name":"Sujanagar"}]},{"name":"Rajshahi","upazilas":[{"name":"Bagha"},{"name":"Bagmara"},{"name":"Bhabaniganj"},{"name":"Binodpur"},{"name":"Charghat"},{"name":"Durgapur"},{"name":"Godagari"},{"name":"Kazla"},{"name":"Mohanpur"},{"name":"New Market (Rajshahi)"},{"name":"Paba"},{"name":"Puthia"},{"name":"Rajshahi City Center"},{"name":"Saheb Bazar"},{"name":"Tanore"},{"name":"Uposhahar"}]},{"name":"Sirajganj","upazilas":[{"name":"Belkuchi"},{"name":"Chouhali"},{"name":"Enayetpur"},{"name":"Kamarkhanda"},{"name":"Kazipur"},{"name":"Raiganj"},{"name":"Shahjadpur"},{"name":"Sirajganj Sadar"},{"name":"Tarash"},{"name":"Ullahpara"}]}]},{"name":"Khulna","districts":[{"name":"Bagerhat","upazilas":[{"name":"Bagerhat Sadar"},{"name":"Chitalmari"},{"name":"Fakirhat"},{"name":"Kachua"},{"name":"Mollahat"},{"name":"Mongla"},{"name":"Morrelganj"},{"name":"Rampal"},{"name":"Sharankhola"}]},{"name":"Chuadanga","upazilas":[{"name":"Alamdanga"},{"name":"Chuadanga Sadar"},{"name":"Damurhuda"},{"name":"Darshana"},{"name":"Jibannagar"}]},{"name":"Jashore","upazilas":[{"name":"Abhaynagar (Nawapara)"},{"name":"Bagherpara"},{"name":"Benapole"},{"name":"Chanchra"},{"name":"Chaugachha"},{"name":"Jashore Sadar"},{"name":"Jhikargachha"},{"name":"Keshabpur"},{"name":"Manirampur"},{"name":"Palbari"},{"name":"Sharsha"}]},{"name":"Jhenaidah","upazilas":[{"name":"Harinakunda"},{"name":"Jhenaidah Sadar"},{"name":"Kaliganj"},{"name":"Kotchandpur"},{"name":"Maheshpur"},{"name":"Shailkupa"}]},{"name":"Khulna","upazilas":[{"name":"Batiaghata"},{"name":"Boyra"},{"name":"Chalna"},{"name":"Dacope"},{"name":"Dighalia"},{"name":"Daulatpur"},{"name":"Dumuria"},{"name":"Khalishpur"},{"name":"Khulna City Center"},{"name":"Koyra"},{"name":"Paikgachha"},{"name":"Phultala"},{"name":"Rupsha"},{"name":"Shibbari"},{"name":"Terokhada"}]},{"name":"Kushtia","upazilas":[{"name":"Bheramara"},{"name":"Chourhas"},{"name":"Daulatpur"},{"name":"Khoksa"},{"name":"Kumarkhali"},{"name":"Kushtia Sadar"},{"name":"Mirpur"}]},{"name":"Magura","upazilas":[{"name":"Magura Sadar"},{"name":"Mohammadpur"},{"name":"Shalikha"},{"name":"Sreepur"}]},{"name":"Meherpur","upazilas":[{"name":"Gangni"},{"name":"Meherpur Sadar"},{"name":"Mujibnagar"}]},{"name":"Narail","upazilas":[{"name":"Kalia"},{"name":"Lohagara"},{"name":"Narail Sadar"}]},{"name":"Satkhira","upazilas":[{"name":"Assasuni"},{"name":"Debhata"},{"name":"Kalaroa"},{"name":"Kaliganj"},{"name":"Satkhira Sadar"},{"name":"Shyamnagar"},{"name":"Tala"}]}]},{"name":"Sylhet","districts":[{"name":"Habiganj","upazilas":[{"name":"Ajmiriganj"},{"name":"Bahubal"},{"name":"Baniyachong"},{"name":"Chunarughat"},{"name":"Habiganj Sadar"},{"name":"Lakhai"},{"name":"Madhabpur"},{"name":"Nabiganj"},{"name":"Shayestaganj"}]},{"name":"Moulvibazar","upazilas":[{"name":"Barlekha"},{"name":"Juri"},{"name":"Kamalganj"},{"name":"Kulaura"},{"name":"Moulvibazar Sadar"},{"name":"Rajnagar"},{"name":"Sreemangal"}]},{"name":"Sunamganj","upazilas":[{"name":"Chhatak"},{"name":"Dharmapasha"},{"name":"Dowarabazar"},{"name":"Jagannathpur"},{"name":"Jamalganj"},{"name":"Shalai"},{"name":"South Sunamganj"},{"name":"Sunamganj Sadar"},{"name":"Tahirpur"}]},{"name":"Sylhet","upazilas":[{"name":"Balaganj"},{"name":"Beani Bazar"},{"name":"Bishwanath"},{"name":"Chowhatta"},{"name":"Companiganj"},{"name":"Fenchuganj"},{"name":"Golapganj"},{"name":"Gowainghat"},{"name":"Jaintiapur"},{"name":"Jindabazar"},{"name":"Kanaighat"},{"name":"Osmani Nagar"},{"name":"South Surma"},{"name":"Sylhet City Center"},{"name":"Tilagarh"},{"name":"Uposhahar"},{"name":"Zakiganj"}]}]},{"name":"Barishal","districts":[{"name":"Barguna","upazilas":[{"name":"Amtali"},{"name":"Bamna"},{"name":"Barguna Sadar"},{"name":"Betagi"},{"name":"Patharghata"},{"name":"Taltali"}]},{"name":"Barishal","upazilas":[{"name":"Agailjhara"},{"name":"Babuganj"},{"name":"Bakerganj"},{"name":"Banaripara"},{"name":"Barishal City Center"},{"name":"Gournadi"},{"name":"Hijla"},{"name":"Mehendiganj"},{"name":"Muladi"},{"name":"Nathullabad"},{"name":"Rupatali"},{"name":"Uzirpur"}]},{"name":"Bhola","upazilas":[{"name":"Baborhanuddin"},{"name":"Bhola Sadar"},{"name":"Char Fasson"},{"name":"Daulatkhan"},{"name":"Lalmohan"},{"name":"Manpura"},{"name":"Tazumuddin"}]},{"name":"Jhalokathi","upazilas":[{"name":"Jhalokathi Sadar"},{"name":"Kathalia"},{"name":"Nalchity"},{"name":"Rajapur"}]},{"name":"Patuakhali","upazilas":[{"name":"Bauphal"},{"name":"Dashmina"},{"name":"Dumki"},{"name":"Galachipa"},{"name":"Kalapara (Kuakata)"},{"name":"Mirzaganj"},{"name":"Patuakhali Sadar"},{"name":"Rangabali"}]},{"name":"Pirojpur","upazilas":[{"name":"Bhandaria"},{"name":"Kawkhali"},{"name":"Mathbaria"},{"name":"Nazirpur"},{"name":"Nesarabad (Swarupkathi)"},{"name":"Pirojpur Sadar"},{"name":"Zianagar"}]}]},{"name":"Rangpur","districts":[{"name":"Dinajpur","upazilas":[{"name":"Biral"},{"name":"Birampur"},{"name":"Birganj"},{"name":"Bochaganj"},{"name":"Chirirbandar"},{"name":"Dinajpur Sadar"},{"name":"Ghoraghat"},{"name":"Hakimpur (Hili)"},{"name":"Kaharole"},{"name":"Khansama"},{"name":"Nawabganj"},{"name":"Parbatipur"},{"name":"Phulbari"}]},{"name":"Gaibandha","upazilas":[{"name":"Fulchhari"},{"name":"Gaibandha Sadar"},{"name":"Gobindaganj"},{"name":"Palashbari"},{"name":"Sadullapur"},{"name":"Saghata"},{"name":"Sundarganj"}]},{"name":"Kurigram","upazilas":[{"name":"Bhurungamari"},{"name":"Char Rajibpur"},{"name":"Chilmari"},{"name":"Kurigram Sadar"},{"name":"Nageshwari"},{"name":"Phulbari"},{"name":"Rajarhat"},{"name":"Roumari"},{"name":"Ulipur"}]},{"name":"Lalmonirhat","upazilas":[{"name":"Aditmari"},{"name":"Burimari"},{"name":"Hatibandha"},{"name":"Kaliganj"},{"name":"Lalmonirhat Sadar"},{"name":"Patgram"}]},{"name":"Nilphamari","upazilas":[{"name":"Dimla"},{"name":"Domar"},{"name":"Jaldhaka"},{"name":"Kishoreganj"},{"name":"Nilphamari Sadar"},{"name":"Saidpur"}]},{"name":"Panchagarh","upazilas":[{"name":"Atwari"},{"name":"Banglabandha"},{"name":"Boda"},{"name":"Debiganj"},{"name":"Panchagarh Sadar"},{"name":"Tetulia"}]},{"name":"Rangpur","upazilas":[{"name":"Badarganj"},{"name":"Gangachhara"},{"name":"Kaunia"},{"name":"Lalbagh (Rangpur)"},{"name":"Mithapukur"},{"name":"Pirgachha"},{"name":"Pirganj"},{"name":"Rangpur City Center"},{"name":"Shapla Chottor"},{"name":"Taraganj"}]},{"name":"Thakurgaon","upazilas":[{"name":"Baliadangi"},{"name":"Haripur"},{"name":"Pirganj"},{"name":"Ranisankail"},{"name":"Thakurgaon Sadar"}]}]},{"name":"Mymensingh","districts":[{"name":"Jamalpur","upazilas":[{"name":"Baksiganj"},{"name":"Dewanganj"},{"name":"Islampur"},{"name":"Jamalpur Sadar"},{"name":"Madarganj"},{"name":"Melandohn"},{"name":"Sarishabari"}]},{"name":"Mymensingh","upazilas":[{"name":"Dhobaura"},{"name":"Fulbaria"},{"name":"Gafargaon"},{"name":"Ganginar Paar"},{"name":"Gauripur"},{"name":"Haluaghat"},{"name":"Ishwarganj"},{"name":"Maskanda"},{"name":"Muktagachha"},{"name":"Mymensingh Sadar"},{"name":"Nandail"},{"name":"Phulpur"},{"name":"Seedstore"},{"name":"Square Masterbari"},{"name":"Tarakanda"},{"name":"Town Hall Area"},{"name":"Trishal"},{"name":"Bhaluka"}]},{"name":"Netrokona","upazilas":[{"name":"Atpara"},{"name":"Barhatta"},{"name":"Durgapur"},{"name":"Kalmakanda"},{"name":"Kendua"},{"name":"Khaliajuri"},{"name":"Madan"},{"name":"Mohanganj"},{"name":"Netrokona Sadar"},{"name":"Purbadhala"}]},{"name":"Sherpur","upazilas":[{"name":"Jhenaigati"},{"name":"Nakla"},{"name":"Nalitabari"},{"name":"Sherpur Sadar"},{"name":"Sreebardi"}]}]}];


let locations=[];
const DIVISION_ORDER=["Dhaka","Chattogram","Rajshahi","Khulna","Barishal","Sylhet","Rangpur","Mymensingh"];
const DISTRICT_ORDER={
  Dhaka:["Dhaka","Faridpur","Gazipur","Gopalganj","Kishoreganj","Madaripur","Manikganj","Munshiganj","Narayanganj","Narsingdi","Rajbari","Shariatpur","Tangail"],
  Chattogram:["Bandarban","Brahmanbaria","Chandpur","Chattogram","Cumilla","Cox's Bazar","Feni","Khagrachhari","Lakshmipur","Noakhali","Rangamati"],
  Rajshahi:["Bogura","Joypurhat","Naogaon","Natore","Chapainawabganj","Pabna","Rajshahi","Sirajganj"],
  Khulna:["Bagerhat","Chuadanga","Jashore","Jhenaidah","Khulna","Kushtia","Magura","Meherpur","Narail","Satkhira"],
  Barishal:["Barguna","Barishal","Bhola","Jhalokathi","Patuakhali","Pirojpur"],
  Sylhet:["Habiganj","Moulvibazar","Sunamganj","Sylhet"],
  Rangpur:["Dinajpur","Gaibandha","Kurigram","Lalmonirhat","Nilphamari","Panchagarh","Rangpur","Thakurgaon"],
  Mymensingh:["Jamalpur","Mymensingh","Netrokona","Sherpur"]
};
function orderDivisions(data){
  const rank=new Map(DIVISION_ORDER.map((name,i)=>[name,i]));
  return [...data].sort((a,b)=>(rank.get(a.name)??999)-(rank.get(b.name)??999)).map(division=>{
    const order=DISTRICT_ORDER[division.name]||[];
    const districtRank=new Map(order.map((name,i)=>[name,i]));
    return {...division,districts:[...(division.districts||[])].sort((a,b)=>(districtRank.get(a.name)??999)-(districtRank.get(b.name)??999))};
  });
}
const readJSON=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch{return fallback}};
let groups=readJSON(GROUP_KEY,{});
let customAreas=readJSON(CUSTOM_AREA_KEY,[]);
let customDistricts=readJSON(CUSTOM_DISTRICT_KEY,[]);
let assignments=readJSON(ASSIGN_KEY,{});
let areaStatuses=readJSON(AREA_STATUS_KEY,{});
let areaOverrides=readJSON(AREA_OVERRIDE_KEY,{});
let districtRenames=readJSON(DISTRICT_RENAME_KEY,{});
const $=id=>document.getElementById(id);
const save=()=>{localStorage.setItem(GROUP_KEY,JSON.stringify(groups));localStorage.setItem(CUSTOM_AREA_KEY,JSON.stringify(customAreas));localStorage.setItem(CUSTOM_DISTRICT_KEY,JSON.stringify(customDistricts));localStorage.setItem(ASSIGN_KEY,JSON.stringify(assignments));localStorage.setItem(DISTRICT_RENAME_KEY,JSON.stringify(districtRenames));
  localStorage.setItem(AREA_STATUS_KEY,JSON.stringify(areaStatuses));
  localStorage.setItem(AREA_OVERRIDE_KEY,JSON.stringify(areaOverrides))};
const esc=v=>String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const fmt=n=>Number(n||0).toLocaleString("en-BD");
const toast=s=>{const t=$("toast");t.textContent=s;t.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove("show"),2200)};
const key=(store,div,district,area)=>`${store}||${div}||${district}||${area}`;


function savedDeliveryAreas(){
  return [...defaultAreas().map(a=>({...a,source:"Saved"})),...customAreas.map(a=>({...a,source:"Saved"}))];
}
function allAreas(){return savedDeliveryAreas()}
function areaStatus(id){return areaStatuses[id]===false?"Disable":"Enable"}

function divisionOptions(includeAll=false){
  return (includeAll?`<option value="*">All Divisions</option>`:"")+locations.map((d,i)=>`<option value="${i}">${esc(d.name)}</option>`).join("");
}
function setDivisionSelect(id,all=false){$(id).innerHTML=divisionOptions(all)}

function fillDistrictSelect(id,divValue,all=false){
  const ds=districtRecordsForDivision(divValue,all);
  $(id).innerHTML=(all?`<option value="*">All Districts</option>`:"")+ds.map(x=>`<option value="${esc(x.value)}">${esc(x.name)}${divValue==="*"?" — "+esc(x.division):""}</option>`).join("");
}

function getDivisionName(v){return v==="*"?"All Divisions":locations[+v]?.name||""}
function storeOptions(selected="",includeAll=false){
  return (includeAll?`<option value="">All Store Locations</option>`:"")+locations.map(d=>`<option value="${esc(d.name)}" ${d.name===selected?"selected":""}>${esc(d.name)}</option>`).join("");
}

async function init(){
  let data=null;
  try{
    const res=await fetch(LOCATION_URL,{cache:"no-store"});
    if(!res.ok) throw Error("Location request failed");
    const remote=await res.json();
    if(Array.isArray(remote) && remote.length===8){
      const districtCount=remote.reduce((n,d)=>n+(Array.isArray(d.districts)?d.districts.length:0),0);
      const areaCount=remote.reduce((n,d)=>n+(d.districts||[]).reduce((m,c)=>m+(Array.isArray(c.upazilas)?c.upazilas.length:0),0),0);
      if(districtCount===64 && areaCount===763) data=remote;
    }
  }catch(e){}
  if(!data) data=PROVIDED_LOCATION_DATA;

  const districtCount=data.reduce((n,d)=>n+(Array.isArray(d.districts)?d.districts.length:0),0);
  const areaCount=data.reduce((n,d)=>n+(d.districts||[]).reduce((m,c)=>m+(Array.isArray(c.upazilas)?c.upazilas.length:0),0),0);
  if(data.length!==8 || districtCount!==64 || areaCount!==763){
    $("zoneList").innerHTML='<div class="empty">Bangladesh location data could not be loaded. The bundled 8 Division / 64 District / 763 Area data is invalid.</div>';
    return;
  }
  locations=orderDivisions(data);
  cleanupUnusedCustomDistricts();
  localStorage.setItem(LOCATION_CACHE_KEY,JSON.stringify(locations));
  setupSelects(); setupEnhancedFilters(); renderAll(); updateStats();
}
function setupSelects(){
  setDivisionSelect("areaDivision");
  setDivisionSelect("areaFilterDivision",true);
  setDivisionSelect("assignDivision",true);
  $("groupStore").innerHTML=storeOptions();
  $("assignStore").innerHTML=storeOptions();
  $("assignedStoreFilter").innerHTML=storeOptions("",true);

  fillDistrictSelect("areaDistrict",$("areaDivision").value);
  fillDistrictSelect("areaFilterDistrict",$("areaFilterDivision").value,true);
  fillDistrictSelect("assignDistrict",$("assignDivision").value,true);

  $("areaDivision").onchange=()=>fillDistrictSelect("areaDistrict",$("areaDivision").value);
  $("areaFilterDivision").onchange=()=>{fillDistrictSelect("areaFilterDistrict",$("areaFilterDivision").value,true);renderAreaTable()};
  $("areaFilterDistrict").onchange=renderAreaTable;
  $("assignDivision").onchange=()=>{fillDistrictSelect("assignDistrict",$("assignDivision").value,true);renderZoneList()};
  $("assignDistrict").onchange=renderZoneList;
  $("assignStore").onchange=renderZoneList;
  $("groupStore").onchange=()=>{};
  $("assignedStoreFilter").onchange=renderAssignments;
  $("assignedGroupFilter").onchange=renderAssignments;
}






function removeArea(id){
  const a=customAreas.find(x=>x.id===id);if(!a)return;
  if(!confirm(`Remove ${a.area}?`))return;
  Object.keys(assignments).forEach(k=>{if(assignments[k].areaId===id)delete assignments[k]});
  customAreas=customAreas.filter(x=>x.id!==id);save();renderAll();updateStats();toast("Delivery Area removed.");
}

function groupStoreOptions(selected=""){return locations.map((d,i)=>`<option value="${esc(d.name)}" ${d.name===selected?"selected":""}>${esc(d.name)}</option>`).join("")}

function closeGroupForm(){$("groupForm").classList.add("hidden");$("groupStore").disabled=false;$("groupName").disabled=false;$("groupForm").dataset.edit="";$("groupForm").dataset.assignedRateEdit=""}

function editGroup(id){openGroupForm(id)}


function rateGroupLabel(g){
  return `${g.name} — ৳${fmt(g.base)} + ৳${fmt(g.additional)}/KG`;
}


function assignmentKey(store,areaId){return `${store}||${areaId}`;}





function selectVisible(state){document.querySelectorAll("#zoneList input[type=checkbox]:not(:disabled)").forEach(x=>x.checked=state)}
$("newAreaBtn").onclick=()=>openAreaForm();
$("cancelArea").onclick=closeAreaForm;
$("saveArea").onclick=saveArea;
$("areaSearch").oninput=renderAreaTable;
$("newGroupBtn").onclick=()=>openGroupForm();
$("cancelGroup").onclick=closeGroupForm;
$("saveGroup").onclick=saveGroup;
$("assignAllBtn").onclick=assignSelected;
$("selectAll").onclick=()=>selectVisible(true);
$("clearAll").onclick=()=>selectVisible(false);
$("zoneSearch").oninput=renderZoneList;
$("assignmentSearch").oninput=renderAssignments;
$("menuBtn").onclick=()=>$("sidebar").classList.toggle("open");
init();

/* ===== Sholok Delivery Area & Rate Management — Enhancement Layer ===== */
const ENHANCE_KEY="sholok_delivery_management_enhancements_v1";
let editingAssignmentKey=null;
const uiState={
  areaPage:1, assignmentPage:1, pageSize:25,
  areaSort:{key:"division",dir:1}, assignmentSort:{key:"division",dir:1}
};
let enhancedBound=false;
const norm=v=>String(v??"").normalize("NFKC").trim().replace(/\s+/g," ").toLowerCase();
const parseSlabs=v=>{
  const out={};
  String(v||"").split(",").forEach(part=>{
    const [w,r]=part.split(":").map(x=>Number(String(x).trim()));
    if(Number.isFinite(w)&&w>0&&Number.isFinite(r)&&r>0) out[w]=r;
  });
  return out;
};
const slabText=v=>Object.entries(v||{}).sort((a,b)=>Number(a[0])-Number(b[0])).map(([w,r])=>`${w}:${r}`).join(", ");

function groupRatePreview(g){
  if(!g)return "";
  return `<div class="preview-title">Rate Group: <b>${esc(g.name)}</b></div>
    <div class="preview-rates">${[1,2,3].map(w=>`<span>${w} KG — <b>৳${fmt(rateForWeight(g,w))}</b></span>`).join("")}</div>
    ${g.slabs?`<small>Slabs: ${esc(slabText(parseSlabs(g.slabs)))}</small>`:""}`
}
function assignmentCountForArea(id){return Object.values(assignments).filter(a=>a.areaId===id && groups[a.groupId]).length}
function assignmentCountForGroup(id){return Object.values(assignments).filter(a=>a.groupId===id).length}
function updateSelectionCounts(){
  const ac=document.querySelectorAll('#areaTable input.area-check:checked').length;
  const rc=document.querySelectorAll('#assignmentTable input.assignment-check:checked').length;
  if($("areaSelectionCount"))$("areaSelectionCount").textContent=`${ac} selected`;
  if($("assignmentSelectionCount"))$("assignmentSelectionCount").textContent=`${rc} selected`;
}
function makePager(id,total,page,onPage){
  const el=$(id); if(!el)return;
  const pages=Math.max(1,Math.ceil(total/page));
  const cur=Math.min(uiState[id==="areaPagination"?"areaPage":"assignmentPage"],pages);
  uiState[id==="areaPagination"?"areaPage":"assignmentPage"]=cur;
  el.innerHTML=`<div class="pager-left">Showing page ${cur} of ${pages} · ${total.toLocaleString("en-BD")} records</div>
    <div class="pager-right"><label>Per page <select data-page-size><option ${page===25?"selected":""}>25</option><option ${page===50?"selected":""}>50</option><option ${page===100?"selected":""}>100</option></select></label>
    <button class="btn small" data-prev ${cur<=1?"disabled":""}>‹</button>
    <button class="btn small" data-next ${cur>=pages?"disabled":""}>›</button></div>`;
  el.querySelector("[data-page-size]").onchange=e=>{uiState.pageSize=Number(e.target.value);uiState.areaPage=uiState.assignmentPage=1;renderAreaTable();renderAssignments()};
  el.querySelector("[data-prev]").onclick=()=>{if(cur>1){uiState[id==="areaPagination"?"areaPage":"assignmentPage"]=cur-1;onPage()}};
  el.querySelector("[data-next]").onclick=()=>{if(cur<pages){uiState[id==="areaPagination"?"areaPage":"assignmentPage"]=cur+1;onPage()}};
}
function areaSortValue(a,k){
  if(k==="assignments")return assignmentCountForArea(a.id);
  if(k==="status")return norm(areaStatus(a.id));
  return norm(a[k]);
}
function assignmentSortValue(a,k){
  if(k==="rate")return rateForWeight(groups[a.groupId],1);
  if(k==="group")return norm(groups[a.groupId]?.name||"");
  return norm(a[k]||"");
}
function sortRows(rows,fn,state){
  return [...rows].sort((a,b)=>{
    const av=fn(a,state.key),bv=fn(b,state.key);
    if(av<bv)return -1*state.dir;if(av>bv)return 1*state.dir;return 0;
  });
}
function sortIndicator(state,key){return state.key===key?(state.dir===1?" ↑":" ↓"):" ↕"}
function areaDuplicate(div,district,area,edit){
  return allAreas().some(a=>a.id!==edit && norm(a.division)===norm(div) && norm(a.district)===norm(district) && norm(a.area)===norm(area));
}






function addAreaSortHeaders(){
  const table=document.querySelector("#deliveryAreas table");
  if(!table)return;
  table.querySelector("thead tr").innerHTML=`<th><input id="areaHeadCheck" type="checkbox"></th>
  <th data-sort="division">Region / Division${sortIndicator(uiState.areaSort,"division")}</th>
  <th data-sort="district">City / District${sortIndicator(uiState.areaSort,"district")}</th>
  <th data-sort="area">Zone / Area${sortIndicator(uiState.areaSort,"area")}</th>
  <th data-sort="status">Status${sortIndicator(uiState.areaSort,"status")}</th>
  <th data-sort="assignments">Assignments${sortIndicator(uiState.areaSort,"assignments")}</th><th>Action</th>`;
  table.querySelectorAll("[data-sort]").forEach(th=>th.onclick=()=>{const k=th.dataset.sort;uiState.areaSort=uiState.areaSort.key===k?{key:k,dir:-uiState.areaSort.dir}:{key:k,dir:1};uiState.areaPage=1;renderAreaTable();addAreaSortHeaders()});
  $("areaHeadCheck").onchange=e=>{document.querySelectorAll("#areaTable .area-check").forEach(x=>x.checked=e.target.checked);updateSelectionCounts();};
}
function openGroupForm(id=null){
  $("groupForm").classList.remove("hidden");$("groupForm").dataset.edit=id||"";$("groupForm").dataset.assignedRateEdit="";
  $("groupStore").disabled=false;$("groupName").disabled=false;
  if(id){const g=groups[id];$("groupStore").value=g.store;$("groupName").value=g.name;$("baseRate").value=g.base;$("additionalRate").value=g.additional;$("slabRates").value=slabText(parseSlabs(g.slabs))}
  else{$("groupStore").selectedIndex=0;$("groupName").value="";$("baseRate").value="";$("additionalRate").value="";$("slabRates").value=""}
  $("groupName").focus();
}

function renderGroups(){
  const arr=Object.values(groups);
  $("groupGrid").innerHTML=arr.map(g=>{
    const count=assignmentCountForGroup(g.id);
    return `<article class="group-card"><div class="card-head"><div><h3>${esc(g.name)}</h3><small>${esc(g.store)}</small></div></div>
      <div class="rates"><div class="rate-box"><small>Base — 1 KG</small><b>৳${fmt(rateForWeight(g,1))}</b></div><div class="rate-box"><small>Additional / KG</small><b>৳${fmt(g.additional)}</b></div></div>
      <div class="rate-summary">1kg ৳${fmt(rateForWeight(g,1))} · 2kg ৳${fmt(rateForWeight(g,2))} · 3kg ৳${fmt(rateForWeight(g,3))}</div>
      ${g.slabs?`<div class="slab-note">Weight slabs: ${esc(slabText(parseSlabs(g.slabs)))}</div>`:""}
      <div class="usage-count">${count} Zone${count===1?"":"s"} Assigned</div>
      <div class="card-actions"><button class="btn small" onclick="viewGroupAssignments('${esc(g.id)}')">View Assignments → ${count}</button><button class="btn small" onclick="editGroup('${esc(g.id)}')">Edit</button><button class="btn small danger" onclick="deleteGroup('${esc(g.id)}')">Remove</button></div></article>`;
  }).join("")||'<div class="empty">No Rate Groups yet.</div>';
}
function deleteGroup(id){
  const count=assignmentCountForGroup(id);
  if(count)return toast(`Cannot delete: ${count} assignment(s). Use View Assignments first.`);
  if(!confirm("Delete this Rate Group?"))return;
  delete groups[id];save();renderAll();updateStats();toast("Rate Group removed.");
}
function renderAssignmentControls(){
  const options=Object.values(groups).map(g=>`<option value="${esc(g.id)}">${esc(rateGroupLabel(g))}</option>`).join("");
  $("assignGroup").innerHTML='<option value="">Select Rate Group</option>'+options;
  $("assignedGroupFilter").innerHTML='<option value="">All Rate Groups</option>'+options;
}
function renderAssignmentPreview(){
  const g=groups[$("assignGroup").value];
  $("assignmentPreview").innerHTML=g?groupRatePreview(g):'<span>Select a Rate Group to preview delivery charges.</span>';
}
function assignmentAreas(){
  const div=$("assignDivision").value,dist=$("assignDistrict").value,q=norm($("zoneSearch").value);
  return allAreas().filter(a=>{const divOK=div==="*"||a.division===getDivisionName(div);const dc=getDistrictRecord(dist);const distOK=dist==="*"||!dist||(dc&&a.division===dc.division&&a.district===dc.name);return divOK&&distOK&&(!q||norm(`${a.division} ${a.district} ${a.area}`).includes(q));});
}
function renderZoneList(){
  const arr=assignmentAreas(),div=$("assignDivision").value,dist=$("assignDistrict").value,store=$("assignStore").value;
  $("zoneTitle").textContent=`Saved Delivery Areas (${arr.length})`;
  $("zoneMeta").textContent=div==="*"?"All Divisions":(dist==="*"?"All Districts":getDistrictRecord(dist)?.name||"");
  $("zoneList").innerHTML=arr.map(a=>{
    const k=assignmentKey(store,a.id),as=assignments[k],g=as?groups[as.groupId]:null,disabled=areaStatus(a.id)==="Disable";
    return `<label class="zone-item${disabled?" disabled":""}"><input type="checkbox" data-key="${esc(k)}" data-areaid="${esc(a.id)}" ${as?"checked":""} ${disabled?"disabled":""}><span><b>${esc(a.area)}</b><small>${esc(a.district)}, ${esc(a.division)}</small></span>${disabled?`<em class="disabled-label">Disabled</em>`:(g?`<span class="badge saved">${esc(g.name)}</span>`:"")}</label>`;
  }).join("")||'<div class="empty">No saved Delivery Areas match this selection.</div>';
  renderAssignmentPreview();
}
function assignSelected(){
  const store=$("assignStore").value,groupId=$("assignGroup").value;
  if(!store)return toast("Select a Store Location first.");if(!groupId)return toast("Select a Rate Group first.");
  if(editingAssignmentKey){
    const a=assignments[editingAssignmentKey];if(!a){editingAssignmentKey=null;return assignSelected();}
    if(a.groupId===groupId){toast("No Rate Group change was made.");editingAssignmentKey=null;$("assignAllBtn").textContent="Assign Selected Zones";return;}
    const oldName=groups[a.groupId]?.name||"Unknown",newName=groups[groupId]?.name||"Unknown";
    if(!confirm(`Change "${oldName}" → "${newName}"?`))return;
    a.groupId=groupId;save();editingAssignmentKey=null;$("assignAllBtn").textContent="Assign Selected Zones";renderAssignments();renderZoneList();renderGroups();toast("Assignment Rate Group updated.");
    return;
  }
  const checked=[...document.querySelectorAll("#zoneList input[type=checkbox]:checked")];
  if(!checked.length)return toast("Select at least one Delivery Area.");
  const areaMap=new Map(allAreas().map(a=>[a.id,a])),duplicates=[],toAssign=[];
  checked.forEach(ch=>{const a=areaMap.get(ch.dataset.areaid);if(!a)return;const k=assignmentKey(store,a.id);if(assignments[k]){const eg=groups[assignments[k].groupId];duplicates.push(`${a.area}${eg?` (${eg.name})`:""}`);return;}toAssign.push({k,a});});
  if(duplicates.length)toast(`Already assigned: ${duplicates.slice(0,3).join(", ")}${duplicates.length>3?` +${duplicates.length-3} more`:""}.`);
  toAssign.forEach(({k,a})=>assignments[k]={key:k,store,division:a.division,district:a.district,area:a.area,areaId:a.id,groupId});
  if(toAssign.length){save();renderAssignments();renderZoneList();renderGroups();updateCoverage();}
  if(!duplicates.length)toast(`${toAssign.length} area(s) assigned successfully.`);
}
function readAssignedDistrictFilter(value){
  if(!value || value==="*") return {division:"",district:""};
  const raw=String(value);
  if(raw.startsWith("d:")){
    const parts=raw.slice(2).split("|").map(Number);
    const d=locations[parts[0]]?.districts?.[parts[1]];
    if(d){
      const division=locations[parts[0]].name;
      return {division,district:effectiveBaseDistrictName(division,d.name)};
    }
  }
  if(raw.startsWith("c:")){
    const x=customDistricts.find(d=>d.id===raw.slice(2));
    if(x)return {division:x.division,district:x.name};
  }
  try{
    const parsed=JSON.parse(raw);
    if(Array.isArray(parsed)) return {division:String(parsed[0]??""),district:String(parsed[1]??"")};
  }catch{}
  const i=raw.indexOf("||");
  return i>=0 ? {division:raw.slice(0,i),district:raw.slice(i+2)} : {division:"",district:raw};
}
function renderAssignments(){
  const q=norm($("assignmentSearch").value),sf=$("assignedStoreFilter").value,gf=$("assignedGroupFilter").value;
  const dvRaw=$("assignedDivisionFilter").value||"*",di=$("assignedDistrictFilter").value||"*";
  const dv=readAssignedDivisionFilter(dvRaw);
  const districtFilter=readAssignedDistrictFilter(di);
  let rows=Object.values(assignments).filter(a=>{
    const g=groups[a.groupId];
    if(!g)return false;
    const divOK=dv==="*" || norm(a.division)===norm(dv);
    const distOK=di==="*" || (norm(a.division)===norm(districtFilter.division) && norm(a.district)===norm(districtFilter.district));
    return (!sf||a.store===sf)&&(!gf||a.groupId===gf)&&divOK&&distOK&&(!q||norm(`${a.store} ${g.name} ${a.division} ${a.district} ${a.area}`).includes(q));
  });
  rows=sortRows(rows,(a,k)=>k==="rate"?assignmentRateForWeight(a,1):assignmentSortValue(a,k),uiState.assignmentSort);
  const pages=Math.max(1,Math.ceil(rows.length/uiState.pageSize));uiState.assignmentPage=Math.min(uiState.assignmentPage,pages);
  const start=(uiState.assignmentPage-1)*uiState.pageSize,pageRows=rows.slice(start,start+uiState.pageSize);
  $("assignmentTable").innerHTML=pageRows.map(a=>{const g=groups[a.groupId];return `<tr><td><input class="assignment-check" type="checkbox" data-key="${esc(a.key)}"></td><td>${esc(a.store)}</td><td>${esc(g.name)}</td><td>${esc(a.division)}</td><td>${esc(a.district)}</td><td>${esc(a.area)}</td><td class="money">৳${fmt(assignmentRateForWeight(a,1))}</td><td class="money">৳${fmt(assignmentRateForWeight(a,2))}</td><td class="money">৳${fmt(assignmentRateForWeight(a,3))}</td><td><button class="btn small" onclick="editAssignment('${encodeURIComponent(a.key)}')">Edit Rates</button> <button class="btn small" onclick="changeAssignmentGroup('${encodeURIComponent(a.key)}')">Change Group</button> <button class="btn small danger" onclick="removeAssignment('${encodeURIComponent(a.key)}')">Remove</button></td></tr>`}).join("")||'<tr><td colspan="10" class="empty">No assigned Zone Rates yet.</td></tr>';
  makePager("assignmentPagination",rows.length,uiState.pageSize,()=>renderAssignments());updateSelectionCounts();
}
function addAssignmentSortHeaders(){
  const table=document.querySelector("#assignedRates table");if(!table)return;
  table.querySelector("thead tr").innerHTML=`<th><input id="assignmentHeadCheck" type="checkbox"></th><th data-sort="store">Store Location${sortIndicator(uiState.assignmentSort,"store")}</th><th data-sort="group">Rate Group${sortIndicator(uiState.assignmentSort,"group")}</th><th data-sort="division">Region${sortIndicator(uiState.assignmentSort,"division")}</th><th data-sort="district">City / District${sortIndicator(uiState.assignmentSort,"district")}</th><th data-sort="area">Zone / Area${sortIndicator(uiState.assignmentSort,"area")}</th><th data-sort="rate">Base Charge (1kg)${sortIndicator(uiState.assignmentSort,"rate")}</th><th>Charge (2kg)</th><th>Charge (3kg)</th><th>Action</th>`;
  table.querySelectorAll("[data-sort]").forEach(th=>th.onclick=()=>{const k=th.dataset.sort;uiState.assignmentSort=uiState.assignmentSort.key===k?{key:k,dir:-uiState.assignmentSort.dir}:{key:k,dir:1};uiState.assignmentPage=1;renderAssignments();addAssignmentSortHeaders()});
  $("assignmentHeadCheck").onchange=e=>{document.querySelectorAll("#assignmentTable .assignment-check").forEach(x=>x.checked=e.target.checked);updateSelectionCounts();};
}
let editingAssignedRateKey=null;
function openAssignedRateEdit(encoded){
  const k=decodeURIComponent(encoded),a=assignments[k];if(!a)return;
  const g=groups[a.groupId];if(!g)return;
  editingAssignedRateKey=k;
  $("assignedEditBase").value=assignmentRateForWeight(a,1);
  $("assignedEdit2kg").value=assignmentRateForWeight(a,2);
  $("assignedEdit3kg").value=assignmentRateForWeight(a,3);
  $("assignedRateEditSubtitle").textContent=`${a.area} · ${a.district}, ${a.division} · ${g.name}`;
  $("assignedRateEditModal").classList.remove("hidden");
  $("assignedEditBase").focus();
}
function closeAssignedRateEdit(){
  editingAssignedRateKey=null;
  $("assignedRateEditModal").classList.add("hidden");
}
function saveAssignedRateEdit(){
  if(!editingAssignedRateKey)return;
  const a=assignments[editingAssignedRateKey],g=a?groups[a.groupId]:null;if(!a||!g)return closeAssignedRateEdit();
  const base=Number($("assignedEditBase").value),r2=Number($("assignedEdit2kg").value),r3=Number($("assignedEdit3kg").value);
  if(![base,r2,r3].every(Number.isFinite)||[base,r2,r3].some(v=>v<=0))return toast("All rates must be greater than 0.");
  if(!confirm(`Update rates only for “${a.area}” under “${g.name}”? The Rate Group rate will not change.`))return;
  a.rateOverride={base,rate2kg:r2,rate3kg:r3};
  save();closeAssignedRateEdit();renderAll();updateStats();updateCoverage();toast("Assigned Zone Rate updated successfully.");
}
function editAssignment(encoded){openAssignedRateEdit(encoded)}
function changeAssignmentGroup(encoded){
  const k=decodeURIComponent(encoded),a=assignments[k];if(!a)return;
  const oldGroup=groups[a.groupId];if(!oldGroup)return;
  const available=Object.values(groups).filter(g=>g.id!==a.groupId);
  if(!available.length)return toast("No other Rate Group is available.");
  const options=available.map((g,i)=>`${i+1}. ${g.name} — ${g.store}`).join("\n");
  const answer=prompt(`Change Rate Group for “${a.area}”.\n\n${options}\n\nEnter the number of the new Rate Group:`);
  if(answer===null)return;
  const idx=Number(answer)-1,newGroup=available[idx];
  if(!newGroup)return toast("Invalid Rate Group selection.");
  if(!confirm(`Change “${oldGroup.name}” → “${newGroup.name}”?`))return;
  a.groupId=newGroup.id;delete a.rateOverride;save();renderAll();updateStats();updateCoverage();toast("Assignment Rate Group updated. It now uses the new Rate Group rates.");
}
function removeAssignment(encoded){
  const k=decodeURIComponent(encoded);if(!assignments[k])return;delete assignments[k];save();renderAll();updateStats();updateCoverage();toast("Assignment removed.");
}
function bulkRemoveAssignments(){
  const keys=[...document.querySelectorAll("#assignmentTable .assignment-check:checked")].map(x=>x.dataset.key);
  if(!keys.length)return toast("Select at least one assignment.");
  if(!confirm(`Remove ${keys.length} selected assignment(s)?`))return;
  keys.forEach(k=>delete assignments[k]);save();renderAll();updateStats();updateCoverage();toast(`${keys.length} assignment(s) removed.`);
}
function bulkSetAreaStatus(value){
  const ids=[...document.querySelectorAll("#areaTable .area-check:checked")].map(x=>x.dataset.areaid);
  if(!ids.length)return toast("Select at least one Delivery Area.");
  ids.forEach(id=>areaStatuses[id]=value==="Enable");save();renderAreaTable();renderZoneList();updateStats();updateCoverage();toast(`${ids.length} area(s) ${value}d.`);
}
function updateCoverage(){
  const areas=allAreas(),assignedIds=new Set(Object.values(assignments).filter(a=>groups[a.groupId]).map(a=>a.areaId));
  const enabled=areas.filter(a=>areaStatus(a.id)==="Enable").length,disabled=areas.length-enabled,assigned=areas.filter(a=>assignedIds.has(a.id)).length,unassigned=areas.length-assigned,pct=areas.length?assigned/areas.length*100:0;
  $("assignedAreasCount").textContent=`${assigned.toLocaleString("en-BD")} / ${areas.length.toLocaleString("en-BD")}`;
  $("unassignedAreasCount").textContent=unassigned.toLocaleString("en-BD");$("enabledAreasCount").textContent=enabled.toLocaleString("en-BD");$("disabledAreasCount").textContent=disabled.toLocaleString("en-BD");$("coveragePercent").textContent=`${pct.toFixed(1)}%`;
}

function viewGroupAssignments(id){
  const g=groups[id];if(!g)return;
  const rows=Object.values(assignments).filter(a=>a.groupId===id);
  $("modalTitle").textContent=`${g.name} — ${rows.length} Assignments`;
  $("modalSubtitle").textContent=`${g.store} · View current assigned Zones before removing this Rate Group.`;
  $("modalBody").innerHTML=rows.length?`<div class="table-wrap"><table><thead><tr><th>Store Location</th><th>Division</th><th>District</th><th>Area</th></tr></thead><tbody>${rows.map(a=>`<tr><td>${esc(a.store)}</td><td>${esc(a.division)}</td><td>${esc(a.district)}</td><td>${esc(a.area)}</td></tr>`).join("")}</tbody></table></div>`:'<div class="empty">No assignments.</div>';
  $("assignmentModal").classList.remove("hidden");
}
function closeAssignmentModal(){$("assignmentModal").classList.add("hidden")}
function csvCell(v){return `"${String(v??"").replace(/"/g,'""')}"`}
function downloadCSV(filename,headers,rows){
  const csv=[headers, ...rows].map(r=>r.map(csvCell).join(",")).join("\r\n");
  const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);
}
function exportAreasCSV(){downloadCSV("sholok_delivery_areas.csv",["Division","District","Area","Status","Assignments"],allAreas().map(a=>[a.division,a.district,a.area,areaStatus(a.id),assignmentCountForArea(a.id)]))}
function exportAssignmentsCSV(){downloadCSV("sholok_assigned_zone_rates.csv",["Store Location","Rate Group","Division","District","Area","1 KG","2 KG","3 KG"],Object.values(assignments).filter(a=>groups[a.groupId]).map(a=>{const g=groups[a.groupId];return[a.store,g.name,a.division,a.district,a.area,assignmentRateForWeight(a,1),assignmentRateForWeight(a,2),assignmentRateForWeight(a,3)]}))}

function enhancedRenderAll(){
  renderAreaTable();addAreaSortHeaders();renderGroups();renderAssignmentControls();renderZoneList();renderAssignments();addAssignmentSortHeaders();updateCoverage();if(!enhancedBound)setupEnhancedFilters();updateSelectionCounts();
}
function setAreaStatus(id,value){
  areaStatuses[id]=value==="Enable";save();renderAreaTable();renderZoneList();updateStats();updateCoverage();toast(`Delivery Area status changed to ${value}.`);
}
function renderAll(){
  if(!enhancedBound)setupEnhancedFilters();
  renderAreaTable();addAreaSortHeaders();renderGroups();renderAssignmentControls();renderZoneList();renderAssignments();addAssignmentSortHeaders();updateCoverage();updateSelectionCounts();
}
function enhancedInitHook(){
  if(!enhancedBound)setupEnhancedFilters();
  addAreaSortHeaders();addAssignmentSortHeaders();updateCoverage();updateSelectionCounts();
}
window.addEventListener("load",()=>setTimeout(enhancedInitHook,0));


/* ===== Final integrity / entity-separation layer =====
   Delivery Area editing never changes City / District.
   City / District rename is a separate operation and is persisted by base-district identity.
*/
function districtRenameKey(division, originalDistrict){return `${norm(division)}||${norm(originalDistrict)}`;}
function effectiveBaseDistrictName(division, originalDistrict){return districtRenames[districtRenameKey(division,originalDistrict)] || originalDistrict;}
function baseDistrictOriginal(division, currentName){
  const d=locations.find(x=>norm(x.name)===norm(division));
  return (d?.districts||[]).find(x=>norm(effectiveBaseDistrictName(division,x.name))===norm(currentName))?.name || null;
}
function effectiveDistrictForArea(division, district){
  const original=baseDistrictOriginal(division,district);
  return original ? effectiveBaseDistrictName(division,original) : district;
}
function defaultAreas(){
  const out=[];
  locations.forEach(d=>d.districts?.forEach(c=>c.upazilas?.forEach(z=>{
    const id=`D-${d.name}-${c.name}-${z.name}`;
    const override=areaOverrides[id];
    out.push(override?{...override,id,source:"Default"}:{id,division:d.name,district:effectiveBaseDistrictName(d.name,c.name),area:z.name,source:"Default"});
  })));
  return out;
}
function districtRecordsForDivision(divValue,all=false){
  const out=[];
  if(divValue==="*"){
    locations.forEach((division,di)=>(division.districts||[]).forEach((d,ci)=>out.push({name:effectiveBaseDistrictName(division.name,d.name),originalName:d.name,division:division.name,value:`d:${di}|${ci}`,custom:false})));
    customDistricts.forEach(d=>out.push({name:d.name,division:d.division,value:`c:${d.id}`,custom:true,id:d.id}));
  }else{
    const di=Number(divValue),division=locations[di];
    (division?.districts||[]).forEach((d,ci)=>out.push({name:effectiveBaseDistrictName(division.name,d.name),originalName:d.name,division:division.name,value:`d:${di}|${ci}`,custom:false}));
    customDistricts.filter(d=>norm(d.division)===norm(division?.name)).forEach(d=>out.push({name:d.name,division:d.division,value:`c:${d.id}`,custom:true,id:d.id}));
  }
  return out;
}
function getDistrictRecord(value){
  if(!value||value==="*")return null;
  if(value.startsWith("c:")){const id=value.slice(2),x=customDistricts.find(d=>d.id===id);return x?{...x,custom:true,value}:null;}
  if(value.startsWith("d:")){const [di,ci]=value.slice(2).split("|").map(Number),d=locations[di]?.districts?.[ci];return d?{name:effectiveBaseDistrictName(locations[di].name,d.name),originalName:d.name,division:locations[di].name,di,ci,custom:false,value}:null;}
  return null;
}
function isBaseDistrict(div,district){return !!baseDistrictOriginal(div,district);}
function cleanupUnusedCustomDistricts(){
  const used=allAreas();
  customDistricts=customDistricts.filter(d=>used.some(a=>norm(a.division)===norm(d.division)&&norm(a.district)===norm(d.name)));
}
function updateStats(){
  const base=locations.reduce((n,d)=>n+(d.districts||[]).length,0);
  $("districtsCount").textContent=base+customDistricts.length;
  $("areasCount").textContent=allAreas().length;
  $("groupsCount").textContent=Object.keys(groups).length;
}
function openAreaForm(id=null){
  $("areaForm").classList.remove("hidden");$("areaForm").dataset.edit=id||"";
  const editing=!!id;
  $("areaDivision").disabled=editing;$("areaDistrict").disabled=editing;$("areaDistrictInput").disabled=editing;
  if(id){
    const a=allAreas().find(x=>x.id===id);if(!a)return;
    const di=locations.findIndex(x=>norm(x.name)===norm(a.division));
    $("areaDivision").value=di>=0?String(di):0;
    fillDistrictSelect("areaDistrict",String(Math.max(di,0)));
    const drec=districtRecordsForDivision(String(Math.max(di,0)),false).find(x=>norm(x.name)===norm(a.district));
    $("areaDistrict").value=drec?.value||"";
    $("areaDistrictInput").value="";
    $("areaName").value=a.area;
    $("areaFormHint").innerHTML=`Editing <b>${esc(a.area)}</b>. City / District is locked. Use <b>Edit District</b> in the table if the District itself needs to be renamed.`;
  }else{
    $("areaDivision").disabled=false;$("areaDistrict").disabled=false;$("areaDistrictInput").disabled=false;
    $("areaDistrictInput").value="";$("areaName").value="";
    $("areaFormHint").innerHTML=`For a new Delivery Area, choose an existing City / District or enter a new one. To rename an existing District, use <b>Edit District</b> in the table.`;
  }
  $("areaName").focus();
}
function closeAreaForm(){
  $("areaForm").classList.add("hidden");$("areaForm").dataset.edit="";
  $("areaDivision").disabled=false;$("areaDistrict").disabled=false;$("areaDistrictInput").disabled=false;
}
function saveArea(){
  const edit=$("areaForm").dataset.edit;
  const div=locations[+$('areaDivision').value]?.name;
  const current=edit?allAreas().find(x=>x.id===edit):null;
  const selected=getDistrictRecord($('areaDistrict').value);
  const typedDistrict=edit ? "" : $('areaDistrictInput').value.trim();
  const district=(edit?current?.district:(typedDistrict||selected?.name||"")).trim();
  const area=$('areaName').value.trim();
  if(!div||!district||!area)return toast("Select a division and district, then enter a delivery area.");
  if(areaDuplicate(div,district,area,edit))return toast("Duplicate blocked: this Division + District + Area already exists.");
  if(!edit && typedDistrict && !isBaseDistrict(div,typedDistrict) && !customDistricts.some(d=>norm(d.division)===norm(div)&&norm(d.name)===norm(typedDistrict))){
    customDistricts.push({id:"CD-"+Date.now(),division:div,name:typedDistrict});
  }
  if(edit){
    const customIndex=customAreas.findIndex(x=>x.id===edit);
    const assigned=assignmentCountForArea(edit);
    if(assigned>0 && current?.area!==area){
      if(!confirm(`This area is currently assigned to ${assigned} assignment(s). Updating its Zone / Area name will affect existing assignments. Continue?`))return;
    }
    Object.entries(assignments).forEach(([oldKey,a])=>{
      if(a.areaId!==edit)return;
      const newKey=assignmentKey(a.store,edit);delete assignments[oldKey];
      assignments[newKey]={...a,key:newKey,division:current.division,district:current.district,area};
    });
    if(customIndex>=0)customAreas[customIndex]={...customAreas[customIndex],area,source:"Saved"};
    else areaOverrides[edit]={...current,area};
  }else customAreas.push({id:"C-"+Date.now(),division:div,district,area,source:"Saved"});
  cleanupUnusedCustomDistricts();save();renderAll();updateStats();closeAreaForm();toast(edit?"Delivery Area updated.":"Delivery Area saved.");
}
function openDistrictForm(division,district){
  $("districtForm").classList.remove("hidden");
  $("districtForm").dataset.division=division;$("districtForm").dataset.district=district;
  $("districtDivision").value=division;$("districtCurrent").value=district;$("districtNew").value=district;$("districtFormSubtitle").textContent=`Rename the City / District used by Delivery Areas under ${division}.`;
  $("districtNew").focus();$("districtNew").select();
}
function closeDistrictForm(){$("districtForm").classList.add("hidden");$("districtForm").dataset.division="";$("districtForm").dataset.district="";}
function saveDistrict(){
  const division=$("districtForm").dataset.division,current=$("districtForm").dataset.district,newName=$("districtNew").value.trim();
  if(!division||!current||!newName)return toast("Enter a City / District name.");
  if(norm(current)===norm(newName)){closeDistrictForm();return;}
  const baseOriginal=baseDistrictOriginal(division,current);
  const custom=customDistricts.find(d=>norm(d.division)===norm(division)&&norm(d.name)===norm(current));
  const duplicate=allAreas().some(a=>norm(a.division)===norm(division)&&norm(a.district)===norm(newName)&&norm(a.district)!==norm(current));
  if(duplicate)return toast("Duplicate blocked: this City / District already exists in the selected Division.");
  const affected=allAreas().filter(a=>norm(a.division)===norm(division)&&norm(a.district)===norm(current));
  const assigned=affected.reduce((n,a)=>n+assignmentCountForArea(a.id),0);
  if(assigned&&!confirm(`This City / District is used by ${affected.length} Delivery Area(s) and ${assigned} assignment(s). Renaming it will update them. Continue?`))return;
  if(baseOriginal){districtRenames[districtRenameKey(division,baseOriginal)]=newName;}
  else if(custom){custom.name=newName;}
  affected.forEach(a=>{
    const ci=customAreas.findIndex(x=>x.id===a.id);
    if(ci>=0) customAreas[ci].district=newName;
    else if(areaOverrides[a.id]) areaOverrides[a.id]={...areaOverrides[a.id],district:newName};
    Object.entries(assignments).forEach(([k,as])=>{if(as.areaId===a.id)as.district=newName;});
  });
  cleanupUnusedCustomDistricts();save();closeDistrictForm();renderAll();updateStats();toast("City / District updated successfully.");
}
function renderAreaTable(){
  const q=norm($("areaSearch").value),dv=$("areaFilterDivision").value,di=$("areaFilterDistrict").value;
  let rows=allAreas().filter(a=>
    (!q||norm(`${a.division} ${a.district} ${a.area}`).includes(q)) &&
    (dv==="*"||a.division===getDivisionName(dv)) &&
    (di==="*"||!di||(()=>{const dc=getDistrictRecord(di);return dc?(norm(a.district)===norm(dc.name)&&norm(a.division)===norm(dc.division)):false})())
  );
  rows=sortRows(rows,areaSortValue,uiState.areaSort);
  const start=(uiState.areaPage-1)*uiState.pageSize,pageRows=rows.slice(start,start+uiState.pageSize);
  $("areaTable").innerHTML=pageRows.map(a=>`<tr><td><input class="area-check" type="checkbox" data-areaid="${esc(a.id)}"></td><td>${esc(a.division)}</td><td>${esc(a.district)}</td><td>${esc(a.area)}</td><td><select class="status-select" aria-label="Delivery Area Status" onchange="setAreaStatus('${esc(a.id)}',this.value)"><option value="Enable" ${areaStatus(a.id)==="Enable"?"selected":""}>Enable</option><option value="Disable" ${areaStatus(a.id)==="Disable"?"selected":""}>Disable</option></select></td><td><span class="assignment-count">Assignments: ${assignmentCountForArea(a.id)}</span></td><td><button class="btn small" onclick="openAreaForm('${esc(a.id)}')">Edit Area</button> <button class="btn small" onclick="openDistrictForm('${esc(a.division)}','${esc(a.district)}')">Edit District</button></td></tr>`).join("")||'<tr><td colspan="7" class="empty">No delivery areas found.</td></tr>';
  makePager("areaPagination",rows.length,uiState.pageSize,()=>renderAreaTable());updateSelectionCounts();
}
function rateForWeight(g,weight){
  const w=Number(weight);if(!Number.isFinite(w)||w<=0)return 0;
  const slabs=parseSlabs(g?.slabs);if(Object.prototype.hasOwnProperty.call(slabs,String(w)))return Number(slabs[w]);
  return Number(g?.base||0)+Math.max(0,w-1)*Number(g?.additional||0);
}
function assignmentRateForWeight(a,weight){
  if(a?.rateOverride){
    const w=Number(weight);
    if(w===1)return Number(a.rateOverride.base||0);
    if(w===2)return Number(a.rateOverride.rate2kg||0);
    if(w===3)return Number(a.rateOverride.rate3kg||0);
  }
  return rateForWeight(groups[a?.groupId],weight);
}
function showUnassigned(){
  const assignedIds=new Set(Object.values(assignments).filter(a=>groups[a.groupId]).map(a=>a.areaId));
  const rows=allAreas().filter(a=>!assignedIds.has(a.id));$("unassignedPanel").classList.remove("hidden");
  $("unassignedTable").innerHTML=rows.map(a=>`<tr><td>${esc(a.division)}</td><td>${esc(a.district)}</td><td>${esc(a.area)}</td><td>${esc(areaStatus(a.id))}</td><td>${assignmentCountForArea(a.id)}</td></tr>`).join("")||'<tr><td colspan="5" class="empty">All Delivery Areas have at least one assignment.</td></tr>';
  $("unassignedPanel").scrollIntoView({behavior:"smooth",block:"start"});
}
function assignedDivisionOptions(selected="*"){
  return `<option value="*" ${selected==="*"?"selected":""}>All Divisions</option>` +
    locations.map((d,i)=>{
      const value=`d:${i}`;
      const isSelected=selected!=="*" && norm(String(selected).replace(/^d:/,""))===norm(d.name);
      return `<option value="${value}" ${isSelected?"selected":""}>${esc(d.name)}</option>`;
    }).join("");
}
function readAssignedDivisionFilter(value){
  if(!value || value==="*") return "*";
  const raw=String(value);
  if(raw.startsWith("d:")){
    const i=Number(raw.slice(2));
    return locations[i]?.name||"";
  }
  return raw;
}
function assignedDistrictOptions(division="*",selected="*"){
  const divisionName=readAssignedDivisionFilter(division);
  const rows=[];
  locations.forEach(d=>{
    if(divisionName!=="*" && norm(d.name)!==norm(divisionName)) return;
    (d.districts||[]).forEach((x,ci)=>rows.push({division:d.name,name:effectiveBaseDistrictName(d.name,x.name),value:`d:${locations.indexOf(d)}|${ci}`}));
  });
  customDistricts.forEach(x=>{
    if(divisionName!=="*" && norm(x.division)!==norm(divisionName)) return;
    rows.push({division:x.division,name:x.name,value:`c:${x.id}`});
  });
  const selectedFilter=readAssignedDistrictFilter(selected);
  return `<option value="*" ${selected==="*"?"selected":""}>All Districts</option>` +
    rows.map(x=>{
      const isSelected=selected!=="*" && norm(selectedFilter.division)===norm(x.division) && norm(selectedFilter.district)===norm(x.name);
      return `<option value="${esc(x.value)}" ${isSelected?"selected":""}>${esc(x.name)}${divisionName==="*"?` — ${esc(x.division)}`:""}</option>`;
    }).join("");
}
function setupEnhancedFilters(){
  if(enhancedBound || !locations.length)return;
  $("assignedDivisionFilter").innerHTML=assignedDivisionOptions();
  $("assignedDistrictFilter").innerHTML=assignedDistrictOptions();
  $("assignedRateEditModal").onclick=e=>{if(e.target.id==="assignedRateEditModal")closeAssignedRateEdit();};
  $("closeAssignedRateEdit").onclick=closeAssignedRateEdit;
  $("cancelAssignedRateEdit").onclick=closeAssignedRateEdit;
  $("saveAssignedRateEdit").onclick=saveAssignedRateEdit;
  $("assignedDivisionFilter").onchange=()=>{
    const div=$("assignedDivisionFilter").value || "*";
    $("assignedDistrictFilter").innerHTML=assignedDistrictOptions(div,"*");
    uiState.assignmentPage=1;
    renderAssignments();
  };
  $("assignedDistrictFilter").onchange=()=>{uiState.assignmentPage=1;renderAssignments();};
  $("assignGroup").onchange=renderAssignmentPreview;
  $("assignmentSearch").oninput=()=>{uiState.assignmentPage=1;renderAssignments();};
  $("assignedStoreFilter").onchange=()=>{uiState.assignmentPage=1;renderAssignments();};
  $("assignedGroupFilter").onchange=()=>{uiState.assignmentPage=1;renderAssignments();};
  $("areaSearch").oninput=()=>{uiState.areaPage=1;renderAreaTable();};
  $("areaFilterDivision").onchange=()=>{fillDistrictSelect("areaFilterDistrict",$("areaFilterDivision").value,true);uiState.areaPage=1;renderAreaTable();};
  $("areaFilterDistrict").onchange=()=>{uiState.areaPage=1;renderAreaTable();};
  $("areaSelectAll").onclick=()=>{document.querySelectorAll("#areaTable .area-check").forEach(x=>x.checked=true);updateSelectionCounts();};
  $("areaClearAll").onclick=()=>{document.querySelectorAll("#areaTable .area-check").forEach(x=>x.checked=false);updateSelectionCounts();};
  $("areaEnableSelected").onclick=()=>bulkSetAreaStatus("Enable");$("areaDisableSelected").onclick=()=>bulkSetAreaStatus("Disable");$("exportAreasBtn").onclick=exportAreasCSV;
  $("assignmentSelectAll").onclick=()=>{document.querySelectorAll("#assignmentTable .assignment-check").forEach(x=>x.checked=true);updateSelectionCounts();};
  $("assignmentClearAll").onclick=()=>{document.querySelectorAll("#assignmentTable .assignment-check").forEach(x=>x.checked=false);updateSelectionCounts();};
  $("assignmentRemoveSelected").onclick=bulkRemoveAssignments;$("exportAssignmentsBtn").onclick=exportAssignmentsCSV;
  $("viewUnassignedBtn").onclick=showUnassigned;$("closeUnassignedBtn").onclick=()=>$("unassignedPanel").classList.add("hidden");
  $("closeModal").onclick=closeAssignmentModal;$("assignmentModal").onclick=e=>{if(e.target.id==="assignmentModal")closeAssignmentModal();};
  $("cancelDistrict").onclick=closeDistrictForm;$("cancelDistrict2").onclick=closeDistrictForm;$("saveDistrict").onclick=saveDistrict;$("districtForm").onclick=e=>{if(e.target.id==="districtForm")closeDistrictForm();};
  document.addEventListener("change",e=>{if(e.target.matches("#areaTable .area-check,#assignmentTable .assignment-check"))updateSelectionCounts();});
  enhancedBound=true;
}

function saveGroup(){
  const store=$("groupStore").value,name=$("groupName").value.trim(),base=Number($("baseRate").value),additional=Number($("additionalRate").value),raw=$("slabRates").value.trim(),slabs=parseSlabs(raw),edit=$("groupForm").dataset.edit;
  if(!store||!name||!Number.isFinite(base)||base<=0||!Number.isFinite(additional)||additional<=0)return toast("Base Rate and Additional Per KG must be greater than 0.");
  if(raw){
    const parts=raw.split(",").map(x=>x.trim()).filter(Boolean);
    if(!parts.length||parts.some(part=>{const m=part.match(/^\s*(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)\s*$/);return !m||Number(m[1])<=0||Number(m[2])<=0;}))return toast("Invalid slab. Use: 1:60, 2:80, 3:100, 5:140, 10:240.");
    const weights=parts.map(part=>Number(part.split(":")[0]));
    if(new Set(weights).size!==weights.length)return toast("Duplicate weight slab is not allowed.");
  }
  if(!edit && Object.keys(groups).length>=17)return toast("Maximum 17 Rate Groups are allowed. Edit an existing group instead.");
  const duplicate=Object.values(groups).some(g=>g.id!==edit&&norm(g.store)===norm(store)&&norm(g.name)===norm(name));
  if(duplicate)return toast("This Rate Group already exists for the selected Store Location.");
  if(edit){
    const old=groups[edit],assigned=assignmentCountForGroup(edit);
    if(assigned && (Number(old.base)!==base || Number(old.additional)!==additional || String(old.slabs||"")!==slabText(slabs))){
      if(!confirm(`This Rate Group is assigned to ${assigned} Zone(s). Updating its rates will affect all of those assignments. Continue?`))return;
    }
  }
  const id=edit||"G-"+Date.now();groups[id]={id,store,name,base,additional,slabs:slabText(slabs)};
  save();closeGroupForm();renderAll();updateStats();
  $("groupStore").disabled=false;$("groupName").disabled=false;$("groupForm").dataset.assignedRateEdit="";
  toast(edit?"Rate Group updated successfully.":"Rate Group saved.");
}

// Phone menu: close after choosing a section or tapping outside
document.addEventListener("click",function(e){var s=document.getElementById("sidebar");if(!s||!s.classList.contains("open"))return;if(e.target.closest("#menuBtn"))return;if(e.target.closest("#sidebar nav a")||!e.target.closest("#sidebar"))s.classList.remove("open")});
