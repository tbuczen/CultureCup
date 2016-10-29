<?php require_once "./back/back.php"; ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <script
                src="https://code.jquery.com/jquery-2.2.4.min.js"
                integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
                crossorigin="anonymous"></script>
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js"></script>

        <link rel="stylesheet" type="text/css" href="style.css">
        <link href="https://fonts.googleapis.com/css?family=Ubuntu&amp;subset=latin-ext" rel="stylesheet">
    </head>
    <body>

        <div id="start" class="full">
            <div class="tekst">CultureDate</div>
            <div id="logo"></div>
            <div id="bt1" class="button">ZACZYNAMY!</div>
        </div>


        <div id="main" class="hidden full">
            <div class="tekst">Gdzie dziś wyruszamy?</div>

            <input type="number" id="kasa" min="0" placeholder="ile masz pieniedzy?"/>

            <div class="tekst" id="preferences">Wybierz typ miejsca :</div>
            <div id="types-list">
                <ul>
                    <?php foreach ($types as $type) : ?>
                        <li>
                            <label for="<?= $type ?>"><?= ucfirst($type); ?></label>
                            <input id="<?= $type ?>" type="radio" name="type" value="<?= $type ?>"/>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <div id="map"></div>

            <div class="tekst" id="preferences">Wybierz typ miejsca :</div>
            <div id="types-list">
                <ul>
                    <?php foreach ($types as $type) : ?>
                        <li>
                            <label for="<?= $type ?>"><?= ucfirst($type); ?></label>
                            <input id="<?= $type ?>" type="radio" name="type" value="<?= $type ?>"/>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <script src="script.js"></script>
            <script src="map.js"></script>
            <button id="getData"></button>
            <script async defer
                    src="https://maps.googleapis.com/maps/api/js?sensor=true&key=AIzaSyCkd-J0b0vERWrzzQR5_yfhMMKwOxJbL6g&callback=initMap">
            </script>
        </div>
    </body>
</html>