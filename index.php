<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
        <!--<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCt35iw5FaGOqDw52qBMMxgB-HcP4yH-e4&region=PL"></script>-->
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyCt35iw5FaGOqDw52qBMMxgB-HcP4yH-e4"></script>
        <script src="js/gmap3.js" type="text/javascript"></script>
        <script src="js/data.js" type="text/javascript"></script>
        <script src="js/mapStyles.js" type="text/javascript"></script>
        <script src="js/map.js" type="text/javascript"></script>
        <script src="js/main.js"></script>
        <link rel="stylesheet" type="text/css" href="style/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="style/style.css">
        <link rel="stylesheet" type="text/css" href="style/pulsing.css">
        <link href="https://fonts.googleapis.com/css?family=Ubuntu&amp;subset=latin-ext" rel="stylesheet">
        <link rel="icon" href="logo.png"/>
        <title>Culture Cup App</title>
    </head>
    <body>
    <div id="wrapper">
        <!--FILTER SCREEN-->
            <img id="header" src="header-new.png">
            <div class="welcome-text" id="first-title" >Gdzie dziś idziemy?</div>

            <div class="block">
                <p class="title"></p>
                <span class="line"></span>
                <input type="number" id="cash" placeholder="Budżet?"/>
                <span class="tip">(zostaw pusty jeśli nie gra roli)</span>
                <span class="line"></span>
            </div>

            <div class="block">
                <p class="title">Typ miejsca</p>
                <span class="line"></span>
                <div>
                    <?php //list all ?>
                    <li class="radio" data-type="theatre" id="r1">Teatr</li>
                    <li class="radio" data-type="film" id="r2">Kino</li>
                    <li class="radio" data-type="bar" id="r3">Bar</li>
                    <li class="radio" data-type="restaurant" id="r4">Restauracja</li>
                    <li class="radio" data-type="museum" id="r5">Muzeum</li>
                    <li class="radio" data-type="event" id="r6">Wydarzenia</li>
                </div>
                <span class="line"></span>
            </div>
            <div id="map"></div>

            <div class="block">
                <p class="title">Dotatkowe opcje</p>
                <span class="line"></span>
                <ul>
                    <?php //list all ?>
                    <li class="multi" data-val="freshair" id="m0">Świeże powietrze</li>
                    <li class="multi" data-val="music" id="m1">Muzyka na żywo</li>
                    <li class="multi" data-val="dancefloor" id="m2">Dancefloor</li>
                    
                    <span class="line"></span>
                    <li class="multi" data-val="new" id="m3">Gdzie jeszcze nie byłem</li>
                </ul>
                <span class="line"></span>
            </div>
            <div id="search"><i class="fa fa-search" aria-hidden="true"></i></div>
        </div>

        <!--LIST SCREEN-->
        <div class="block" id="list"></div>

        <!--DETAILS SCREEN-->
        <div class="block" style="display: none"></div>
 
    </div>
    
    <div class="hidden">
        <div class="list-row" id="listTpl">
            <div class="info">
                <p class="place-name"></p>
                <p class="place-price"></p>
            </div>
            <div class="buttons">
                <div class="navigate" data-address="" >Prowadź !</div>
                <div class="more-info" data-state="0" >Zobacz więcej</div>
            </div>
            <span class="clearfix"></span>

            <div class="details" style="display: none;"></div>
            <div class="opinions" style="display: none;"><br> 
                <p>Opinie:</p> 
                <div class="recent-opinions" style="text-align: center">
                    <div class="comment"><span>Anita: </span><p style="margin-top: 0;">Jestem zachwycona!!!</p></div>
                    <div class="comment"><span>Janusz: </span><p style="margin-top: 0;">Z rodziną na niedzielny obiad? Nie ma lepszego wyboru!</p></div>
                </div>  
            </div>
        </div>
    </div>
    </body>
</html>