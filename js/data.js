var data = [
    {
        "id" : 1,
        "cash": 55,
        "name" : "Teatr Bagatela",
        "description" : "Historia teatru sięga roku 1918, kiedy to Marian Dąbrowski, wydawca i redaktor krakowskiego 'Ilustrowanego Kuryera Codziennego' zainicjował powstanie sceny. Budynek zaprojektował w latach 1918-1919 architekt Janusz Zarzecki, a wnętrza zaprojektował malarz i dekorator Henryk Uziembło.",
        "value" : 4,
        "address" : "Karmelicka 6, Kraków",
        "type": "theatre",
        "options": [

        ],
        "rates" : [
            {"user": "Janusz", "opinion" : "polecam i pozdrawiam"},
            {"user": "Ola", "opinion" : "dobrzy aktorzy"}
        ]
    },
    {
        "id" : 2,
        "cash": 8,
        "name" : "Klub Kulturalny",
        "description" : "Klub Kulturalny - bar. Są takie miejsca w Krakowie do których dobrze jest chadzać, a KK na pewno do nich należy.",
        "value" : 3,
        "address" : "Szewska 25, Kraków",
        "options": [
            "music","karaoke"
        ],
        "type": "bar",
        "rates" : [
            {"user": "Tomasz", "opinion" : "dobre drinki miła atmosfera"},
            {"user": "Ewa", "opinion" : "polecam i pozdrawiam"}
        ]
    },
    {
        "id" : 3,
        "cash": 60,
        "name" : "Teatr Słowackiego",
        "description" : "Budynek teatru wzniesiono w latach 1891-1893 na miejscu wyburzonego w 1892 kościoła Św. Ducha. Budynek jest utrzymany w stylu eklektycznym z przewagą neobaroku. Tę nową scenę narodową w Krakowie zaprojektował Jan Zawiejski. Był to pierwszy budynek w Krakowie, który posiadał oświetlenie elektryczne. Początkowo nosił nazwę \"Teatr Miejski\", dopiero w 1909 otrzymał imię Juliusza Słowackiego.",
        "value" : 5,
        "address": "plac Świętego Ducha 1, Kraków",
        "type": "theatre",
        "rates" : [
            {"user": "Maciej", "opinion" : "Klasa sama w sobie"},
            {"user": "Leszek", "opinion" : "ierwszy teatr, w którym byłem, który idealnie punktualnie zaczyna spektakle. Nie polecam się spóźniać"}
        ]
    },
    {
        "id" : 4,
        "cash": 15,
        "name" : "Kino Cinema City",
        "description" : "Kino",
        "value" : 3,
        "address" : "Bonarka City Center, Kamieńskiego 11, 30-644 Kraków",
        "type" : "film",
        "rates" : [
            {"user": "Igor", "opinion" : "Fajne miejsce."},
            {"user": "Maria", "opinion" : "Przyjemne kino"}
        ]
    },
    {
        "id" : 5,
        "cash": 30,
        "name" : "Kino Kijów",
        "description" : "Lorem ipsum, super bar, polecam",
        "value" : 4,
        "address": "aleja Zygmunta Krasińskiego 34, 30-101 Kraków",
        "type" : "film",
        "rates" : [
            {"user": "Mateusz", "opinion" : "Wspaniałe kino!"}
        ]
    },
    {
        "id": 6,
        "cash": 70,
        "name" : "Klub Studio",
        "description" : "Klub STUDIO to jeden z najbardziej rozpoznawalnych i uznanych klubów muzycznych w Polsce. Na tle innych wyróżnia się bogatym i różnorodnym repertuarem, unikalnym klimatem oraz specyficzną- twórczą atmosferą. Położony w sercu miasteczka studenckiego AGH stanowi sztandarowy punkt na mapie imprezowej każdego, kto w kulturze szuka inspiracji i niezaprzeczalnych wartości.",
        "value" : 4,
        "address" : "Witolda Budryka 4, 30-072 Kraków",
        "type": "bar",
        "options": [
            "music","dancefloor"
        ],
        "rates" : [
            {"user": "Janusz", "opinion" : "polecam i pozdrawiam"},
            {"user": "Janusz", "opinion" : "polecam i pozdrawiam"}
        ]
    },
    {
        "id": 7,
        "cash": 50,
        "name": "Restauracja Sphinx",
        "description": "Restauracja Sphinx jest jedną z najlepiej renomowanych restauracji działających na terenie Krakowa. Cechuje się wysokiej klasu obsługą, niezwykłym klimatem i spokojną atmosferą. W ostatnim czasie do dyspozycji została oddana największa restauracja sieci Sphinx W Krakowie.",
        "value": 5,
        "address": "Rynek Główny 25, 30-072 Kraków",
        "type": "restaurant",
        "options": [
            "music","freshair"
        ],
        "rates": [
            { "user": "Anita", "opinion": "Jestem zachwycona!!!" },
            { "user": "Janusz", "opinion": "Z rodziną na niedzielny obiad? Nie ma lepszego wyboru!" }
        ]
    },
    {
        "id": 8,
        "cash": 25,
        "name": "Go Healthy",
        "description": "Go Healthy to restauracja promująca zdrowie żywienie i zdrowy tryb życia. W naszej restauracji przeważają wytwory wegetariańskie, niegotowane, pochodzące z ekologiczych źródeł. Wierzymy, że dbanie o odpowiednie żywienie przyczynia się do lepszego zdrowia,a w konsekwencji samopoczucia.",
        "value": 3,
        "address": "Smoleńsk 27, 32-332 Kraków",
        "type": "restaurant",
        "options": [
            "music"
        ],
        "rates": [
            { "user": "Karolina", "opinion": "Kocham <3 !!!" },
            { "user": "Witek", "opinion": "Jedzenie bez smaku" }
        ]
    },
    {
        "id": 9,
        "cash": 30,
        "name": "Muzeum Lotnictwa Polskiego",
        "description": "Powstanie Muzeum związane jest z zorganizowaniem w 1964 roku przez Aeroklub Krakowski wielkiej Wystawy Lotniczej na terenie byłego lotniska Rakowice-Czyżyny. Akutalnie prezentujemy maszyny lotnicze związane z Polskimi Siłami Powietrznymi od 20-lecia między wojennego do czasów teraźniejszych.",
        "value": 5,
        "address": "al. Jana Pawła II 39, 31-864 Kraków",
        "type": "museum",
        "options": [
            "freshair"
        ],
        "rates": [
            { "user": "Konrad", "opinion": "Genialne!" },
            { "user": "Jan K.", "opinion": "Niezapomniana przygoda z historią" },
            { "user": "Ewelina", "opinion": "Można zobacyzć polskie Łosie !" }
        ]
    },
    {
        "id": 10,
        "cash": 20,
        "name": "Muzeum Narodowe",
        "description": "Muzeum utworzone przez Radę Miasta Krakowa uchwałą z 7 października 1879. Od tamtego czasu to muzeum promuje poslką historią,kulturę i myśl ideową w celu ukazania walorów naszego narodu młodym pokoleniom.",
        "value": 3,
        "address": "Al. 3 Maja 1, 30-062 Kraków",
        "options": [

        ],
        "type": "museum",
        "rates": [
            { "user": "Tadeusz", "opinion": "Może być, ale wolę Muzeum Lotnictwa" },
            { "user": "Janusz", "opinion": "polecam i pozdrawiam" }
        ]
    },
    {
        "id": 11,
        "name": "Parada Smoków",
        "description": "W Wielkiej Paradzie Smoków bierze udział ponad tysiąc dzieci z całego kraju. To właśnie one animują zaprojektowane przez siebie i własnoręcznie wykonane czterometrowe i większe smoki. Wszystkich zainteresowanych zapraszamy !",
        "value": 5,
        "cash": 0,
        "address": "plac Na Groblach 23, 31-101 Kraków",
        "type": "event",
        "options": [
            "music",
            "freshair"
        ],
        "rates": [
            { "user": "Kasia", "opinion": "Przestraszyłam się :( !!!!" },
            { "user": "Marek", "opinion": "Efekty genialne" },
            { "user": "Mateusz", "opinion": "Za rok robimy konkurencję! :D" }
        ]
    },
    {
        "id": 12,
        "name": "Juwenalia Krakowskie",
        "description": "Juwenalia Krakowskie to przygotowywany przez środowisko studenckie festiwal muzyki i rozrywki. Podczas tego wydarzenia macie okazję spotkań najlepsze zespoły muzyczne w Polsce. Organizowane przez studentów dla studentów, przy zachowaniu najwyższych standardów bezpieczeństwa.",
        "value": 5,
        "cash": 20,
        "address": "Rynek Główny 1, 30-062 Kraków",
        "type": "event",
        "options": [
            "music",
            "dancefloor",
            "freshair"
        ],
        "rates": [
            { "user": "Piotr G.", "opinion": "Od teraz zostaję wiecznym studentem" },
            { "user": "Jagna", "opinion": "Każdy student MUSI  w tym uczestniczyć" },
            { "user": "Aga", "opinion": "Mój pierwszy debiut na scenie. Nieszapomniane przeżycie!" },
            { "user": "Łukasz", "opinion": "Z moją Martą polecamy :D" },
            { "user": "Bartek Imprezowicz", "opinion": "Kiedy chcesz zrobić z Krakowa akademik ... :D" }
        ]
    }
];