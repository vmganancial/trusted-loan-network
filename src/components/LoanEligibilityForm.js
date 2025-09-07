import React, { useEffect, useState } from 'react';

// Provinces and municipalities/cities in the Philippines
const philippinesLocations = {
  "Abra": ["Bangued", "Boliney", "Bucay", "Bucloc", "Daguioman", "Danglas", "Dolores", "La Paz", "Lacub", "Lagangilang", "Lagayan", "Langiden", "Licuan-Baay", "Luba", "Malibcong", "Manabo", "Peñarrubia", "Pidigan", "Pilar", "Sallapadan", "San Isidro", "San Juan", "San Quintin", "Tayum", "Tineg", "Tubo", "Villaviciosa"],
  "Agusan del Norte": ["Butuan City", "Cabadbaran City", "Buenavista", "Carmen", "Jabonga", "Kitcharao", "Las Nieves", "Magallanes", "Nasipit", "Remedios T. Romualdez", "Santiago", "Tubay"],
  "Agusan del Sur": ["Bayugan City", "Prosperidad", "Bunawan", "Esperanza", "La Paz", "Loreto", "Rosario", "San Francisco", "San Luis", "Sibagat", "Talacogon", "Trento", "Veruela"],
  "Aklan": ["Kalibo", "Altavas", "Balete", "Banga", "Batan", "Buruanga", "Ibajay", "Lezo", "Libacao", "Madalag", "Makato", "Malay", "Malinao", "Nabas", "New Washington", "Numancia", "Tangalan"],
  "Albay": ["Legazpi City", "Ligao City", "Tabaco City", "Bacacay", "Camalig", "Daraga", "Guinobatan", "Jovellar", "Malilipot", "Malinao", "Manito", "Oas", "Pio Duran", "Polangui", "Rapu-Rapu", "Santo Domingo", "Tiwi"],
  "Antique": ["San Jose de Buenavista", "Anini-y", "Barbaza", "Belison", "Bugasong", "Caluya", "Culasi", "Hamtic", "Laua-an", "Libertad", "Pandan", "Patnongon", "Sebaste", "Sibalom", "Tibiao", "Tobias Fornier", "Valderrama"],
  "Apayao": ["Kabugao", "Calanasan", "Conner", "Flora", "Kabugao", "Luna", "Pudtol", "Santa Marcela"],
  "Aurora": ["Baler", "Casiguran", "Dilasag", "Dinalungan", "Dingalan", "Dipaculao", "Maria Aurora", "San Luis"],
  "Basilan": ["Isabela City", "Lamitan City", "Akbar", "Al-Barka", "Hadji Mohammad Ajul", "Hadji Muhtamad", "Lantawan", "Maluso", "Sumisip", "Tabuan-Lasa", "Tipo-Tipo", "Tuburan", "Ungkaya Pukan"],
  "Bataan": ["Balanga City", "Abucay", "Bagac", "Dinalupihan", "Hermosa", "Limay", "Mariveles", "Morong", "Orani", "Orion", "Pilar", "Samal"],
  "Batanes": ["Basco", "Itbayat", "Ivana", "Mahatao", "Sabtang", "Uyugan"],
  "Batangas": ["Batangas City", "Lipa City", "Tanauan City", "Agoncillo", "Alitagtag", "Balayan", "Balete", "Calaca", "Calatagan", "Cuenca", "Fernando", "Ibaan", "Laurel", "Lemery", "Lian", "Lobo", "Mabini", "Malvar", "Mataasnakahoy", "Nasugbu", "Padre Garcia", "Rosario", "San Jose", "San Juan", "San Luis", "San Nicolas", "San Pascual", "Santa Teresita", "Taal", "Talisay", "Taysan", "Tingloy", "Tuy"],
  "Benguet": ["Baguio City", "La Trinidad", "Atok", "Bakun", "Bokod", "Buguias", "Itogon", "Kabayan", "Kapangan", "Kibungan", "Mankayan", "Sablan", "Tuba", "Tublay"],
  "Biliran": ["Naval", "Almeria", "Biliran", "Cabucgayan", "Caibiran", "Culaba", "Kawayan", "Maripipi"],
  "Bohol": ["Tagbilaran City", "Alburquerque", "Alicia", "Anda", "Antequera", "Baclayon", "Balilihan", "Batuan", "Bien Unido", "Bilar", "Calape", "Candijay", "Canlaon", "Carmen", "Catigbian", "Clarin", "Corella", "Cortes", "Dagohoy", "Danao", "Dauis", "Dimiao", "Duero", "Garcia Hernandez", "Guindulman", "Inabanga", "Jagna", "Jetafe", "Lila", "Loay", "Loboc", "Loon", "Mabini", "Maribojoc", "Panglao", "Pilar", "Pres. Carlos P. Garcia", "Sagbayan", "San Isidro", "San Miguel", "Sevilla", "Sierra Bullones", "Sikatuna", "Talibon", "Trinidad", "Tubigon", "Ubay", "Valencia"],
  "Bukidnon": ["Malaybalay City", "Valencia City", "Baungon", "Cabanglasan", "Damulog", "Dangcagan", "Don Carlos", "Impasug-ong", "Kadingilan", "Kalilangan", "Kibawe", "Kitaotao", "Lantapan", "Libona", "Malitbog", "Manolo Fortich", "Maramag", "Pangantucan", "Quezon", "San Fernando", "Sumilao", "Talakag"],
  "Bulacan": ["Malolos City", "Meycauayan City", "San Jose del Monte City", "Baliuag", "Balagtas", "Bocaue", "Bulakan", "Bustos", "Calumpit", "Doña Remedios Trinidad", "Guiguinto", "Hagonoy", "Marilao", "Norzagaray", "Obando", "Pandi", "Paombong", "Plaridel", "Pulilan", "San Ildefonso", "San Miguel", "San Rafael", "Santa Maria"],
  "Cagayan": ["Tuguegarao City", "Abulug", "Alcala", "Allacapan", "Amulung", "Aparri", "Baggao", "Ballesteros", "Buguey", "Calayan", "Camalaniugan", "Claveria", "Enrile", "Gattaran", "Gonzaga", "Iguig", "Lal-lo", "Lasam", "Pamplona", "Penablanca", "Piat", "Rizal", "Sanchez-Mira", "Santa Ana", "Santa Praxedes", "Santa Teresita", "Santo Niño", "Solana", "Tuao"],
  "Camarines Norte": ["Daet", "Basud", "Capalonga", "Jose Panganiban", "Labo", "Mercedes", "Paracale", "San Lorenzo Ruiz", "San Vicente", "Santa Elena", "Talisay", "Vinzons"],
  "Camarines Sur": ["Naga City", "Iriga City", "Baao", "Balatan", "Bato", "Bombon", "Buhi", "Bula", "Cabusao", "Calabanga", "Canaman", "Caramoan", "Del Gallego", "Gainza", "Garchitorena", "Goa", "Lagonoy", "Libmanan", "Lupi", "Magarao", "Milaor", "Minalabac", "Nabua", "Ocampo", "Pamplona", "Pasacao", "Pili", "Presentacion", "Ragay", "Sagñay", "Salinas", "San Fernando", "San Jose", "Sipocot", "Siruma", "Tigaon", "Tinambac"],
  "Camiguin": ["Mambajao", "Catarman", "Guinsiliban", "Mahinog", "Sagay"],
  "Capiz": ["Roxas City", "Cuartero", "Dao", "Dumalag", "Dumarao", "Ivisan", "Jamindan", "Maayon", "Mambusao", "Panay", "Panitan", "Pilar", "Pontevedra", "President Roxas", "Sapian", "Sigma", "Tapaz"],
  "Catanduanes": ["Virac", "Bagamanoc", "Baras", "Bato", "Caramoran", "Gigmoto", "Pandan", "Panganiban", "San Andres", "San Miguel", "Viga"],
  "Cavite": ["Cavite City", "Bacoor City", "Carmona City", "Dasmariñas City", "General Trias City", "Imus City", "Tagaytay City", "Trece Martires City", "Alfonso", "Amadeo", "Indang", "Kawit", "Magallanes", "Maragondon", "Mendez", "Naic", "Noveleta", "Rosario", "Silang", "Tanza", "Ternate"],
  "Cebu": ["Cebu City", "Lapu-Lapu City", "Mandaue City", "Talisay City", "Carcar City", "Danao City", "Toledo City", "Bogo City", "Naga City", "Balamban", "Bantayan", "Barili", "Bogo", "Boljoon", "Borbon", "Carcar", "Carmen", "Catmon", "Compostela", "Consolacion", "Cordova", "Daanbantayan", "Dalaguete", "Dumanjug", "Ginatilan", "Liloan", "Madridejos", "Malabuyoc", "Medellin", "Minglanilla", "Moalboal", "Pinamungajan", "Poro", "Ronda", "Samboan", "San Fernando", "San Francisco", "San Remigio", "Santa Fe", "Santander", "Sibonga", "Sogod", "Tabogon", "Tabuelan", "Tuburan", "Tudela"],
  "Cotabato": ["Kidapawan City", "Alamada", "Aleosan", "Antipas", "Arakan", "Banisilan", "Carmen", "Kabacan", "Libungan", "M'lang", "Magpet", "Makilala", "Matalam", "Midsayap", "Pigkawayan", "Pikit", "President Roxas", "Tulunan"],
  "Davao de Oro": ["Monkayo", "Compostela", "Laak", "Mabini", "Maco", "Maragusan", "Mawab", "Nabunturan", "New Bataan", "Pantom", "Sta. Cruz", "Sta. Maria", "Trento", "Veruela"],
  "Davao del Norte": ["Tagum City", "Panabo City", "Samal Island City", "Asuncion", "Braulio E. Dujali", "Carmen", "Kapalong", "New Corella", "San Isidro", "Santo Tomas", "Talaingod"],
  "Davao del Sur": ["Davao City", "Digos City", "Bansalan", "Hagonoy", "Kiblawan", "Magsaysay", "Malalag", "Matanao", "Padada", "Santa Cruz", "Sulop"],
  "Davao Oriental": ["Mati City", "Baganga", "Banaybanay", "Boston", "Caraga", "Cateel", "Governor Generoso", "Lupon", "Manay", "San Isidro", "Tarragona"],
  "Davao Occidental": ["Malita", "Don Marcelino", "Jose Abad Santos", "Sarangani", "Sta. Maria"],
  "Dinagat Islands": ["San Jose", "Basilisa", "Cagdianao", "Dinagat", "Libjo", "Loreto", "Tubajon"],
  "Eastern Samar": ["Borongan City", "Arteche", "Balangkayan", "Can-avid", "Dolores", "Giporlos", "Guiuan", "Hernani", "Jipapad", "Lawaan", "Llorente", "Maslog", "Maydolong", "Mercedes", "Oras", "Quinapondan", "Salcedo", "San Julian", "San Policarpo", "Sulat", "Taft"],
  "Guimaras": ["Jordan", "Buenavista", "Nueva Valencia", "San Lorenzo", "Sibunag"],
  "Ifugao": ["Lagawe", "Aguinaldo", "Alfonso Lista", "Asipulo", "Banaue", "Hingyon", "Hungduan", "Kiangan", "Lamut", "Mayoyao", "Potia", "Tinoc"],
  "Ilocos Norte": ["Laoag City", "Batac City", "Adams", "Bacarra", "Badoc", "Bangui", "Banna", "Burgos", "Carasi", "Currimao", "Dingras", "Dumalneg", "Marcos", "Nueva Era", "Pagudpud", "Paoay", "Pasuquin", "Piddig", "Pinili", "San Nicolas", "Sarrat", "Solsona", "Vintar"],
  "Ilocos Sur": ["Vigan City", "Candon City", "Alilem", "Banayoyo", "Bantay", "Burgos", "Cabugao", "Caoayan", "Cervantes", "Galimuyod", "Gregorio del Pilar", "Lidlidda", "Magsingal", "Nagbukel", "Narvacan", "Quirino", "Salcedo", "San Emilio", "San Esteban", "San Ildefonso", "San Juan", "San Vicente", "Santa Catalina", "Santa Cruz", "Santa Lucia", "Santa Maria", "Santiago", "Santo Domingo", "Sigay", "Sinait", "Sugpon", "Suyo", "Tagudin"],
  "Iloilo": ["Iloilo City", "Passi City", "Ajuy", "Alimodian", "Anilao", "Badiangan", "Balasan", "Banate", "Barotac Nuevo", "Barotac Viejo", "Batad", "Bingawan", "Cabatuan", "Calinog", "Carles", "Concepcion", "Dingle", "Duenas", "Dumangas", "Estancia", "Guimbal", "Igbaras", "Janiuay", "Lambunao", "Leganes", "Lemery", "Leon", "Maasin", "Miagao", "Mina", "New Lucena", "Oton", "Pavia", "Pototan", "San Dionisio", "San Enrique", "San Joaquin", "San Miguel", "Santa Barbara", "Sara", "Tigbauan", "Tubungan", "Zarraga"],
  "Isabela": ["Cauayan City", "Ilagan City", "Santiago City", "Alicia", "Angadanan", "Aurora", "Benito Soliven", "Burgos", "Cabagan", "Cabatan", "Cagayan", "Calao", "Cordon", "Dinapigue", "Divilacan", "Echague", "Gam", "Jones", "Luna", "Magsaysay", "Mallig", "Naguilian", "Palanan", "Quezon", "Ramon", "Reina Mercedes", "Roxas", "San Agustin", "San Guillermo", "San Manuel", "San Mariano", "San Mateo", "San Pablo", "Santa Maria", "Tumauini"],
  "Kalinga": ["Tabuk City", "Balbalan", "Lubuagan", "Pasli", "Pinukpuk", "Rizal", "Tanudan", "Tinglayan"],
  "La Union": ["San Fernando City", "Agoo", "Aringay", "Bacnotan", "Bagulin", "Balaoan", "Bangar", "Bauang", "Burgos", "Caba", "Damortis", "Luna", "Naguilian", "Pugo", "Rosario", "San Gabriel", "San Juan", "Santol", "Sudipen", "Tubao"],
  "Laguna": ["Biñan City", "Calamba City", "Cabuyao City", "San Pablo City", "San Pedro City", "Santa Rosa City", "Los Baños", "Alaminos", "Bay", "Calauan", "Cavinti", "Famy", "Kalayaan", "Liliw", "Luisiana", "Lumban", "Mabitac", "Magdalena", "Majayjay", "Nagcarlan", "Paete", "Pagsanjan", "Pangil", "Pila", "Rizal", "Siniloan", "Victoria"],
  "Lanao del Norte": ["Iligan City", "Balo-i", "Baroy", "Kapatagan", "Sapad", "Bacoor", "Balo-i", "Kauswagan", "Kolambugan", "Lala", "Linamon", "Magsaysay", "Maigo", "Matungao", "Munai", "Nunungan", "Pantao Ragat", "Pantar", "Poona Piagapo", "Salvador", "Sapad", "Sultan Naga Dimaporo", "Tagoloan", "Tangcal", "Tubod"],
  "Lanao del Sur": ["Marawi City", "Balabagan", "Balindong", "Bumbaran", "Butig", "Calanogas", "Ditsaan-Ramain", "Ganassi", "Lumbatan", "Lumbayanague", "Madalum", "Madamba", "Maguing", "Malabang", "Marantao", "Marogong", "Masiu", "Mulondo", "Pagayawan", "Piagapo", "Poona Bayabao", "Pualas", "Saguiaran", "Tamparan", "Taraka", "Tomin", "Wao"],
  "Leyte": ["Ormoc City", "Tacloban City", "Abuyog", "Albuera", "Babatngon", "Barugo", "Bato", "Burauen", "Calubian", "Capoocan", "Carigara", "Dagami", "Dulag", "Hilongos", "Hindang", "Inopacan", "Isabel", "Jaro", "Javier", "Julita", "Kananga", "La Paz", "Leyte", "MacArthur", "Mahaplag", "Matag-ob", "Matalom", "Mayorga", "Merida", "Palo", "Palompon", "Pastrana", "San Isidro", "San Miguel", "Santa Fe", "Tabango", "Tabontabon", "Tanauan", "Tolosa", "Tunga"],
  "Maguindanao del Norte": ["Sultan Kudarat", "Barira", "Buldon", "Datu Blah Sinsuat", "Datu Odin Sinsuat", "Kabuntalan", "Matanog", "Northern Kabuntalan", "Parang", "Sultan Mastura", "Talitay"],
  "Maguindanao del Sur": ["Datu Paglas", "Datu Piang", "Datu Saudi-Ampatuan", "Datu Unsay", "General Salipada K. Pendatun", "Guindulungan", "Pagalungan", "Shariff Aguak", "Shariff Saydona Mustapha", "Sultan sa Barongis", "Talayan"],
  "Marinduque": ["Boac", "Buenavista", "Gasan", "Mogpog", "Santa Cruz", "Torrijos"],
  "Masbate": ["Masbate City", "Aroroy", "Baleno", "Balud", "Batuan", "Cataingan", "Cawayan", "Claveria", "Dimasalang", "Esperanza", "Mandaon", "Milagros", "Mobo", "Monreal", "Palanas", "Pili", "Placer", "San Fernando", "San Jacinto", "San Pascual", "Uson"],
  "Metro Manila": ["Manila", "Caloocan", "Las Piñas", "Makati", "Malabon", "Mandaluyong", "Marikina", "Muntinlupa", "Navotas", "Parañaque", "Pasay", "Pasig", "Pateros", "Quezon City", "San Juan", "Taguig", "Valenzuela"],
  "Mindoro Occidental": ["Mamburao", "Abra de Ilog", "Calintaan", "Looc", "Lubang", "Magsaysay", "Paluan", "Rizal", "Sablayan", "San Jose", "Santa Cruz"],
  "Mindoro Oriental": ["Calapan City", "Baco", "Bansud", "Bongabong", "Bulalacao", "Gloria", "Mansalay", "Naujan", "Pinamalayan", "Pola", "Puerto Galera", "Roxas", "San Teodoro", "Socorro", "Victoria"],
  "Misamis Occidental": ["Oroquieta City", "Ozamiz City", "Tangub City", "Aloran", "Baliangao", "Bonifacio", "Calamba", "Clarin", "Don Victoriano Chiongbian", "Jimenez", "Panaon", "Plaridel", "Sapang Dalaga", "Sinacaban", "Tudela"],
  "Misamis Oriental": ["Cagayan de Oro City", "El Salvador City", "Gingoog City", "Alubijid", "Balingasag", "Balingoan", "Binuangan", "Claveria", "Initao", "Jasaan", "Kinoguitan", "Lagonglong", "Laguindingan", "Libertad", "Lourdes", "Medina", "Naawan", "Opol", "Salay", "Sugbongcogon", "Tagoloan", "Talisayan"],
  "Mountain Province": ["Bontoc", "Barlig", "Besao", "Bauko", "Natonin", "Paracelis", "Sabangan", "Sadanga", "Sagada", "Tadian"],
  "Negros Occidental": ["Bacolod City", "Bago City", "Cadiz City", "Escalante City", "Himamaylan City", "Kabankalan City", "La Carlota City", "Sagay City", "San Carlos City", "Silay City", "Sipalay City", "Talisay City", "Victorias City", "Binalbagan", "Calatrava", "Candoni", "Cauayan", "Don Salvador Benedicto", "E.B. Magalona", "Hinigaran", "Hinoba-an", "Ilog", "Isabela", "La Castellana", "Manapla", "Moises Padilla", "Murcia", "Pontevedra", "Pulupandan", "San Enrique", "Toboso", "Valladolid"],
  "Negros Oriental": ["Dumaguete City", "Bais City", "Bayawan City", "Canlaon City", "Guihulngan City", "Tanjay City", "Amlan", "Ayungon", "Bacong", "Basay", "Bindoy", "Dauin", "Jimalalud", "La Libertad", "Manjuyod", "Pamplona", "San Jose", "Santa Catalina", "Siaton", "Sibulan", "Tanjay", "Tayasan", "Valencia", "Vallehermoso", "Zamboanguita"],
  "Northern Samar": ["Catarman", "Allen", "Biri", "Bobon", "Capul", "Gamay", "Laoang", "Las Navas", "Lope de Vega", "Mapanas", "Mondragon", "Palapag", "Pambujan", "Rosario", "San Isidro", "San Jose", "San Roque", "San Vicente", "Silvino Lubos", "Victoria"],
  "Nueva Ecija": ["Cabanatuan City", "Gapan City", "Muñoz City", "Palayan City", "San Jose City", "Aliaga", "Bongabon", "Cabiao", "Carranglan", "Cuyapo", "Gabaldon", "General Mamerto Natividad", "General Tinio", "Guimba", "Jaen", "Laur", "Licab", "Llanera", "Lupao", "Nampicuan", "Pantabangan", "Peñaranda", "Quezon", "Rizal", "San Antonio", "San Isidro", "Santa Rosa", "Santo Domingo", "Talavera", "Talugtug", "Zaragoza"],
  "Nueva Vizcaya": ["Bayombong", "Aritao", "Bambang", "Bagabag", "Diadi", "Dupax del Norte", "Dupax del Sur", "Kasibu", "Kayapa", "Quezon", "Santa Fe", "Solano", "Villaverde"],
  "Palawan": ["Puerto Princesa City", "Aborlan", "Agutaya", "Araceli", "Balabac", "Bataraza", "Brooke's Point", "Busuanga", "Cagayancillo", "Coron", "Culion", "Cuyo", "Dumaran", "El Nido", "Kalayaan", "Linapacan", "Magsaysay", "Narra", "Quezon", "Roxas", "San Vicente", "Sofronio Española", "Taytay"],
  "Pampanga": ["San Fernando City", "Angeles City", "Mabalacat City", "Apalit", "Arayat", "Bacolor", "Candaba", "Floridablanca", "Guagua", "Lubao", "Macabebe", "Magalang", "Masantol", "Mexico", "Minalin", "Porac", "San Luis", "San Simon", "Santa Ana", "Santa Rita", "Santo Tomas", "Sasmuan"],
  "Pangasinan": ["Dagupan City", "Alaminos City", "San Carlos City", "Urdaneta City", "Agno", "Aguilar", "Alcala", "Anda", "Asingan", "Balungao", "Bani", "Basista", "Bautista", "Bayambang", "Binalonan", "Binmaley", "Bolinao", "Bugallon", "Burgos", "Calasiao", "Dasol", "Infanta", "Labrador", "Laoac", "Lingayen", "Mabini", "Malasiqui", "Manaoag", "Mangaldan", "Mangatarem", "Mapandan", "Natividad", "Pozorrubio", "Rosales", "San Fabian", "San Jacinto", "San Manuel", "San Nicolas", "San Quintin", "Santa Barbara", "Santa Maria", "Santo Tomas", "Sison", "Sual", "Tayug", "Umingan", "Urdaneta", "Urdaneta City", "Villasis"],
  "Quezon": ["Lucena City", "Tayabas City", "Agdangan", "Alabat", "Atimonan", "Buenavista", "Burdeos", "Calauag", "Candelaria", "Catanauan", "Dolores", "General Luna", "General Nakar", "Gumaca", "Infanta", "Jomalig", "Lopez", "Lucban", "Macalelon", "Mauban", "Mulanay", "Padre Burgos", "Pagbilao", "Panukulan", "Patnanungan", "Perez", "Pitogo", "Plaridel", "Polillo", "Quezon", "Real", "Sampaloc", "San Andres", "San Antonio", "San Francisco", "San Narciso", "Sariaya", "Tagkawayan", "Tiaong", "Unisan"],
  "Quirino": ["Cabarroguis", "Diffun", "Nagtipunan", "Saguday"],
  "Rizal": ["Antipolo City", "Angono", "Baras", "Binangonan", "Cainta", "Cardona", "Jalajala", "Morong", "Pililla", "Rodriguez", "San Mateo", "Tanay", "Taytay", "Teresa"],
  "Romblon": ["Romblon", "Alcantara", "Banton", "Cajidiocan", "Calatrava", "Concepcion", "Corcuera", "Ferrol", "Looc", "Magdiwang", "Odiongan", "San Agustin", "San Andres", "San Fernando", "San Jose", "Santa Fe", "Santa Maria"],
  "Samar": ["Calbayog City", "Catbalogan City", "Basey", "Calbiga", "Daram", "Gandara", "Hinabangan", "Jiabong", "Marabut", "Matuguinao", "Motiong", "Pinabacdao", "San Jose de Buan", "San Sebastian", "Santa Margarita", "Santa Rita", "Santo Niño", "Tagapul-an", "Talalora", "Villareal", "Zumarraga"],
  "Sarangani": ["Alabel", "Glan", "Kiamba", "Maasim", "Maitum", "Malungon", "Malapatan"],
  "Siquijor": ["Siquijor", "Enrique Villanueva", "Lazi", "Larena", "Maria", "San Juan"],
  "Sorsogon": ["Sorsogon City", "Barcelona", "Bulan", "Bulusan", "Casiguran", "Castilla", "Donsol", "Gubat", "Irosin", "Juban", "Magallanes", "Matnog", "Pilar", "Prieto Diaz", "Santa Magdalena"],
  "South Cotabato": ["General Santos City", "Koronadal City", "Banga", "Lake Sebu", "Norala", "Polomolok", "Santo Niño", "Surallah", "Tampakan", "Tupi", "T'boli"],
  "Southern Leyte": ["Maasin City", "Anahawan", "Bontoc", "Hinunangan", "Hinundayan", "Libagon", "Liloan", "Limasawa", "Macrohon", "Malitbog", "Padre Burgos", "Pintuyan", "Saint Bernard", "San Francisco", "San Juan", "San Ricardo", "Silago", "Sogod", "Tomas Oppus"],
  "Sultan Kudarat": ["Isulan", "Bagumbayan", "Columbio", "Esperanza", "Isulan", "Kalamansig", "Lebak", "Lutayan", "Palimbang", "President Quirino", "Sen. Ninoy Aquino", "Tacurong City"],
  "Sulu": ["Jolo", "Indanan", "Lugus", "Maimbung", "Old Panamao", "Panglima Estino", "Pangutaran", "Parang", "Pata", "Patikul", "Siasi", "Tapul", "Tongkil"],
  "Surigao del Norte": ["Surigao City", "Del Carmen", "General Luna", "Mainit", "Malimono", "Pilar", "Placer", "San Francisco", "San Isidro", "Sison", "Tagana-an", "Tubod"],
  "Surigao del Sur": ["Bislig City", "Tandag City", "Barobo", "Bayabas", "Cagwait", "Cantilan", "Carmen", "Carrascal", "Cortes", "Hinatuan", "Lanuza", "Lianga", "Lingig", "Madrid", "Marihatag", "San Agustin", "San Miguel", "Tagbina", "Tago"],
  "Tarlac": ["Tarlac City", "Anao", "Bamban", "Camiling", "Capas", "Concepcion", "Gerona", "La Paz", "Mayantoc", "Moncada", "Paniqui", "Pura", "Ramos", "San Clemente", "San Jose", "Santa Ignacia", "Victoria"],
  "Tawi-Tawi": ["Bongao", "Languyan", "Mapun", "Panglima Sugala", "Sapa-Sapa", "Sibutu", "Simunul", "Sitangkai", "South Ubian", "Turtle Islands"],
  "Zambales": ["Iba", "Subic", "Cabangan", "Candelaria", "Castillejos", "Botolan", "Masinloc", "Palauig", "San Antonio", "San Felipe", "San Marcelino", "San Narciso", "Santa Cruz"],
  "Zamboanga del Norte": ["Dipolog City", "Dapitan City", "Zamboanga City", "Baliguian", "Godod", "Gutalac", "Jose Dalman", "Kalawit", "Katipunan", "La Libertad", "Labason", "Liloy", "Manukan", "Mutia", "Piñan", "Polanco", "Rizal", "Salug", "Siayan", "Sibuco", "Sibutad", "Sindangan", "Siocon", "Sirawai", "Tampilisan"],
  "Zamboanga del Sur": ["Pagadian City", "Zamboanga City", "Aurora", "Bayog", "Dimataling", "Dinas", "Dumalinao", "Labangan", "Lakewood", "Kumalarang", "Midsalip", "Molave", "Pagadian City", "Panaon", "Pitogo", "Ramon Magsaysay", "San Miguel", "San Pablo", "Tabina", "Tigbao", "Tukuran", "Vincenzo A. Sagun"],
  "Zamboanga Sibugay": ["Ipil", "Alicia", "Buug", "Diplahan", "Imelda", "Kabasalan", "Mabuhay", "Naga", "Olutanga", "Payao", "Roseller Lim", "Siay", "Talusan", "Titay", "Tungawan"]
};

const LoanEligibilityForm = ({ loanType = "Personal Loan" }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    isFilipinoCitizen: null,
    isAgeEligible: null,
    desiredLoanAmount: '',
    desiredLoanTerm: '',
    loanApplicationType: '',
    purposeOfLoan: '',
    sourceOfApplication: '',
    gender: null,
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    maritalStatus: null,
    educationalAttainment: null,
    mothersMaidenName: '',
    nationality: '',
    sssGsisNo: '',
    philsysNo: '',
    tin: '',
    spouseFirstName: '',
    spouseMiddleName: '',
    spouseLastName: '',
    spouseDateOfBirth: '',
    spouseMobileNumber: '',
    isSpouseWorking: null,
    spouseEmployerBusinessName: '',
    phoneNumber: '',
    homePhoneNumber: '',
    alternativePhoneNumber: '',
    personalEmail: '',
    residenceType: '',
    residencePaymentAmount: '',
    province: '',
    municipality: '',
    homeAddress: '',
    subdivisionBarangay: '',
    postalCode: '',
    yearsMonthsOfStay: '',
    sourceOfIncome: null,
    isPermanent: null,
    isPartOwner: null,
    companyType: null,
    natureOfBusiness: '',
    employerBusinessName: '',
    position: '',
    workSetup: '',
    rank: '',
    employerBusinessAddress: '',
    yearsMonthsPresent: '',
    hrEmail: '',
    basicSalary: '',
    allowance: '',
    familyIncome: '',
    bankName: '',
    branch: '',
    accountType: '',
    accountNumber: '',
    referenceInstitutionName: '',
    referenceSavingAccount: '',
    referenceAddress: '',
    referencePhoneNumber: '',
  });

  const [agree, setAgree] = useState(false);

  const formOptions = {
    loanTerms: ['12 months', '18 months', '24 months', '36 months', '48 months'],
    loanApplicationTypes: ['New Application', 'With Existing Loan', 'With Previous Loan', 'With Previous Application'],
    purposesOfLoan: ['Appliances/Gadgets', 'Balance Transfer', 'Education', 'Health/Hospitalization', 'Home Improvement', 'Pay-off Personal Loan', 'Travel', 'For Other Personal Consumption'],
    sourceOfApplications: ['Website', 'Facebook', 'Agent Referral', 'LinkedIn'],
    genders: ['Male', 'Female'],
    maritalStatus: ['Single', 'Married', 'Widowed', 'Separated'],
    educationalAttainments: ['High School', 'College Level', 'College Graduate', 'Post Graduate'],
    residenceTypes: ['Owned (Not Mortgaged)', 'Owned (Mortgaged)', 'Rented', 'Amortization/Month', 'Rent/Month', 'Used Free', 'Staying with Parents', 'Staying with Relatives', 'Company Provided', 'Others'],
    workSetups: ['On-site', 'Work from Home', 'Hybrid'],
    ranks: ['Staff', 'Supervisor', 'Manager', 'Executive'],
    companyTypes: ['Private', 'Government', 'Other'],
    accountTypes: ['Savings', 'Checking'],
    sourceOfIncomes: ['Employment', 'Business'],
    yesNoOptions: ['Yes', 'No'],
    partOwnerOptions: ['Yes', 'No'],
    provinces: Object.keys(philippinesLocations).sort(),
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? value : value,
    }));
  };

  const handleProvinceChange = (e) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      province: value,
      municipality: ''
    }));
  };

  const validatePage = () => true;

  const handleNext = () => {
    if (validatePage()) setCurrentPage(p => p + 1);
  };
  const handleBack = () => setCurrentPage(p => Math.max(0, p - 1));

  const renderRadioButton = (name, value, label) => (
    <label key={value} className="flex items-center space-x-2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={formData[name] === value}
        onChange={handleChange}
        className="form-radio text-indigo-600 rounded-full w-4 h-4"
      />
      <span>{label}</span>
    </label>
  );

  const renderSelect = (name, label, options, onChangeHandler = handleChange) => (
    <div className="flex flex-col mb-8 w-full">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        name={name}
        value={formData[name]}
        onChange={onChangeHandler}
        className="form-select w-full rounded-md border-2 border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="" disabled>Please Select</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );

  const renderInput = (name, label, type = 'text', placeholder = '') => (
    <div className="flex flex-col mb-8 w-full">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="form-input w-full rounded-md border-2 border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
  );

  const renderContactInput = (name, label, type = 'text', placeholder = '', description = '') => {
    let finalPlaceholder = placeholder;
    if (name === 'phoneNumber' || name === 'homePhoneNumber' || name === 'alternativePhoneNumber') {
      finalPlaceholder = '(000) 000-0000';
    } else if (name === 'personalEmail') {
      finalPlaceholder = 'e.g., example@example.com';
    }
    return (
      <div className="flex items-center mb-8">
        <label className="w-1/3 text-sm font-medium text-gray-700">{label}</label>
        <div className="w-2/3 flex flex-col">
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={finalPlaceholder}
            className="form-input rounded-md border-2 border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {description && (
            <span className="text-xs text-gray-400 mt-1">{description}</span>
          )}
        </div>
      </div>
    );
  };

  const renderFileUploader = (label) => (
    <div className="mb-8">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex justify-center items-center h-24 p-4 border-2 border-dashed border-gray-500 rounded-md bg-gray-50 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 0 003 3h10a3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
        <span>Browse Files</span>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Eligibility Check</h2>
            <div className="space-y-6">
              <div className="flex flex-col">
                <label className="block text-gray-700 font-medium mb-2">Are you a Filipino Citizen?</label>
                <div className="flex space-x-6">
                  {renderRadioButton('isFilipinoCitizen', 'Yes', 'Yes')}
                  {renderRadioButton('isFilipinoCitizen', 'No', 'No')}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="block text-gray-700 font-medium mb-2">Are you between the ages of 23 and 65 years old?</label>
                <div className="flex space-x-6">
                  {renderRadioButton('isAgeEligible', 'Yes', 'Yes')}
                  {renderRadioButton('isAgeEligible', 'No', 'No')}
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button onClick={handleNext} className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
                Next
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Loan Details</h2>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderInput('desiredLoanAmount', 'Desired Loan Amount')}
              {renderSelect('desiredLoanTerm', 'Desired Loan Term', formOptions.loanTerms)}
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderSelect('loanApplicationType', 'Loan Application Type', formOptions.loanApplicationTypes)}
              {renderSelect('purposeOfLoan', 'Purpose of Loan', formOptions.purposesOfLoan)}
            </div>
            <div className="flex justify-between pt-4">
              <button onClick={handleBack} className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out">
                Back
              </button>
              <button onClick={handleNext} className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Required Documents</h2>
            {renderFileUploader('Proof of Identification')}
            {renderFileUploader('Company ID')}
            {renderFileUploader('Payslip')}
            {renderFileUploader('Proof of Billing')}
            <div className="flex justify-between pt-4">
              <button onClick={handleBack} className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out">
                Back
              </button>
              <button onClick={handleNext} className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Borrower's Personal Details</h2>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderSelect('sourceOfApplication', 'Source of Loan Application', formOptions.sourceOfApplications)}
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">Gender</label>
                <div className="flex items-center space-x-4">
                  {renderRadioButton('gender', 'Male', 'Male')}
                  {renderRadioButton('gender', 'Female', 'Female')}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderInput('firstName', 'First Name')}
              {renderInput('middleName', 'Middle Name')}
              {renderInput('lastName', 'Last Name')}
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderInput('dateOfBirth', 'Date of Birth (MM-DD-YYYY)', 'date')}
              {renderInput('placeOfBirth', 'Place of Birth')}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">Marital Status</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {formOptions.maritalStatus.map(status => renderRadioButton('maritalStatus', status, status))}
              </div>
            </div>
            {formData.maritalStatus === 'Married' && (
              <div className="space-y-6 pt-6">
                <h3 className="text-lg font-semibold text-gray-800">Spouse Details</h3>
                <div className="flex flex-col sm:flex-row sm:space-x-8">
                  {renderInput('spouseFirstName', 'Spouse First Name')}
                  {renderInput('spouseMiddleName', 'Spouse Middle Name')}
                  {renderInput('spouseLastName', 'Spouse Last Name')}
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-8">
                  {renderInput('spouseDateOfBirth', 'Spouse Date of Birth (MM-DD-YYYY)', 'date')}
                  {renderInput('spouseMobileNumber', 'Spouse Mobile Number', 'tel')}
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">Is your spouse working?</label>
                  <div className="flex items-center space-x-6">
                    {renderRadioButton('isSpouseWorking', 'Yes', 'Yes')}
                    {renderRadioButton('isSpouseWorking', 'No', 'No')}
                  </div>
                </div>
                {formData.isSpouseWorking === 'Yes' && (
                  <div className="flex flex-col sm:flex-row sm:space-x-8 mt-4">
                    {renderInput('spouseEmployerBusinessName', "Spouse's Employer/Business Name")}
                  </div>
                )}
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">Educational Attainment</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {formOptions.educationalAttainments.map(e => renderRadioButton('educationalAttainment', e, e))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-8 mt-12">
              {renderInput('mothersMaidenName', "Mother's Maiden Name")}
              {renderInput('nationality', 'Nationality')}
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderInput('sssGsisNo', 'SSS/GSIS No.')}
              {renderInput('philsysNo', 'PhilSys No.')}
              {renderInput('tin', 'TIN')}
            </div>
            <div className="flex justify-between pt-4">
              <button onClick={handleBack} className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out">
                Back
              </button>
              <button onClick={handleNext} className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
                Next
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
            {renderContactInput('phoneNumber', 'Phone Number', 'tel', '(000) 000-0000', 'Please enter a valid phone number.')}
            {renderContactInput('homePhoneNumber', 'Home Phone Number (Optional)', 'tel', '(000) 000-0000', 'Please enter a valid phone number.')}
            {renderContactInput('alternativePhoneNumber', 'Alternative Phone Number (Optional)', 'tel', '(000) 000-0000', 'Please enter a valid phone number.')}
            {renderContactInput('personalEmail', 'Personal Email', 'email', 'e.g., example@example.com')}
            <h2 className="text-xl font-semibold text-gray-800 pt-4">Home Address</h2>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderSelect('residenceType', 'Residence Type', formOptions.residenceTypes)}
            </div>
            {(formData.residenceType === 'Amortization/Month' || formData.residenceType === 'Rent/Month') && (
              <div className="flex flex-col mb-8 w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">{formData.residenceType.replace('/', ' ')}</label>
                <input
                  type="number"
                  name="residencePaymentAmount"
                  value={formData.residencePaymentAmount}
                  onChange={handleChange}
                  placeholder="Enter amount"
                  className="form-input rounded-md border-2 border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            )}
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderSelect('province', 'Province', formOptions.provinces, handleProvinceChange)}
              {renderSelect('municipality', 'Municipality/City', philippinesLocations[formData.province] || [])}
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderInput('homeAddress', 'Home Address')}
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderInput('subdivisionBarangay', 'Subdivision/Barangay')}
              {renderInput('postalCode', 'Postal/Zip Code')}
              {renderInput('yearsMonthsOfStay', 'Years and Months of Stay')}
            </div>
            <div className="flex justify-between pt-4">
              <button onClick={handleBack} className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out">
                Back
              </button>
              <button onClick={handleNext} className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
                Next
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Work and Finance Details</h2>
            <div className="space-y-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Source of Income</label>
                <div className="flex items-center space-x-6">
                  {renderRadioButton('sourceOfIncome', 'Employment', 'Employment')}
                  {renderRadioButton('sourceOfIncome', 'Business', 'Business')}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Permanent</label>
                <div className="flex items-center space-x-6">
                  {renderRadioButton('isPermanent', 'Yes', 'Yes')}
                  {renderRadioButton('isPermanent', 'No', 'No')}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Part Owner</label>
                <div className="flex items-center space-x-6">
                  {renderRadioButton('isPartOwner', 'Yes', 'Yes')}
                  {renderRadioButton('isPartOwner', 'No', 'No')}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Company Type</label>
                <div className="flex flex-wrap space-x-4">
                  {formOptions.companyTypes.map(type => renderRadioButton('companyType', type, type))}
                </div>
              </div>
            </div>
            {renderInput('natureOfBusiness', 'Nature of Business')}
            {renderInput('employerBusinessName', 'Employer/Business Name')}
            {renderInput('position', 'Position')}
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderSelect('workSetup', 'Work Set-up', formOptions.workSetups)}
              {renderSelect('rank', 'Rank', formOptions.ranks)}
            </div>
            {renderInput('employerBusinessAddress', 'Employer/Business Address')}
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderInput('yearsMonthsPresent', 'Years/Months Present in the Company')}
              {renderInput('hrEmail', "HR's Email Address", 'email')}
            </div>
            <div className="flex justify-between pt-4">
              <button onClick={handleBack} className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out">
                Back
              </button>
              <button onClick={() => alert('Form submitted!')} className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out">
                Submit
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Monthly Income</h2>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderInput('basicSalary', 'Basic Salary')}
              {renderInput('allowance', 'Allowance')}
              {renderInput('familyIncome', 'Family Income')}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 pt-4">Bank/Credit References</h2>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderInput('bankName', "Bank's Name")}
              {renderInput('branch', 'Branch')}
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderSelect('accountType', 'Account Type', formOptions.accountTypes)}
              {renderInput('accountNumber', 'Account Number')}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 pt-4">Personal Reference</h2>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderInput('referenceInstitutionName', 'Institution Name')}
              {renderInput('referenceSavingAccount', 'Saving Account #')}
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              {renderInput('referenceAddress', 'Address')}
              {renderInput('referencePhoneNumber', 'Phone Number')}
            </div>
            <div className="flex justify-between pt-4">
              <button onClick={handleBack} className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out">
                Back
              </button>
              <button onClick={() => alert('Form submitted!')} className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out">
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-800">Thank You!</h2>
            <p className="mt-2 text-gray-600">Your application has been submitted.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center pt-0 pb-10 md:pb-14">
      <div className="w-full h-8 bg-secondary mb-8"></div>
      <div className="bg-white rounded-xl shadow-lg px-6 sm:px-8 py-8 sm:py-10 max-w-3xl w-full">
        <div className="mb-4 sm:mb-6">
          {currentPage === 0 && (
            <>
              <h2 className="text-xl font-bold text-center mb-1">Excited to have you here!</h2>
              <h3 className="text-lg font-semibold text-center">
                Before we begin, let's first see if you are eligible for a {loanType.toLowerCase()}.
              </h3>
            </>
          )}
          <p className="text-center text-gray-500 mt-2">Page {currentPage + 1} of 6</p>
        </div>
        <div className="max-w-2xl mx-auto">
          {renderPage()}
        </div>
        {currentPage === 0 && (
          <div className="mt-6 flex items-center">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="mr-2"
            />
            <label htmlFor="agree" className="text-sm">
              I agree to Trusted Loan Network's Data Privacy Statement.
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanEligibilityForm;


