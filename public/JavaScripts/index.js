var express = require('express');
var app = express();

var mysql = require('mysql');




var db_config = {
    host: '********',
    user: '********',
    password: '************',
    database: '***********'
};

var connection;

function handleDisconnect() {
    console.log('1. connecting to db:');
    connection = mysql.createConnection(db_config); // Recreate the connection, since
													// the old one cannot be reused.

    connection.connect(function(err) {              	// The server is either down
        if (err) {                                     // or restarting (takes a while sometimes).
            console.log('2. error when connecting to db:', err);
            setTimeout(handleDisconnect, 1000); // We introduce a delay before attempting to reconnect,
        }                                     	// to avoid a hot loop, and to allow our node script to
    });                                     	// process asynchronous requests in the meantime.
    											// If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
        console.log('3. db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { 	// Connection to the MySQL server is usually
            handleDisconnect();                      	// lost due to either server restart, or a
        } else {                                      	// connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

handleDisconnect();






var info = [{ "city" : "CHICOPEE", "loc" : [ -72.607962, 42.162046 ], "pop" : 23396, "state" : "MA", "_id" : "01013" }
,{ "city" : "CHICOPEE", "loc" : [ -72.576142, 42.176443 ], "pop" : 31495, "state" : "MA", "_id" : "01020" }
,{ "city" : "WESTOVER AFB", "loc" : [ -72.558657, 42.196672 ], "pop" : 1764, "state" : "MA", "_id" : "01022" }
,{ "city" : "CUMMINGTON", "loc" : [ -72.905767, 42.435296 ], "pop" : 1484, "state" : "MA", "_id" : "01026" }
,{ "city" : "MOUNT TOM", "loc" : [ -72.67992099999999, 42.264319 ], "pop" : 16864, "state" : "MA", "_id" : "01027" }
,{ "city" : "TOCCOA", "loc" : [ -83.31144, 34.566474 ], "pop" : 20324, "state" : "GA", "_id" : "30577" }
,{ "city" : "YOUNG HARRIS", "loc" : [ -83.86882, 34.958791 ], "pop" : 1687, "state" : "GA", "_id" : "30582" }
,{ "city" : "ATHENS", "loc" : [ -83.363174, 33.976097 ], "pop" : 15661, "state" : "GA", "_id" : "30601" }
,{ "city" : "ATHENS", "loc" : [ -83.352508, 33.932097 ], "pop" : 33299, "state" : "GA", "_id" : "30605" }
,{ "city" : "ATHENS", "loc" : [ -83.418019, 33.946085 ], "pop" : 29839, "state" : "GA", "_id" : "30606" }
,{ "city" : "ATHENS", "loc" : [ -83.427761, 34.006978 ], "pop" : 7056, "state" : "GA", "_id" : "30607" }
,{ "city" : "ARNOLDSVILLE", "loc" : [ -83.234137, 33.880338 ], "pop" : 648, "state" : "GA", "_id" : "30619" }
,{ "city" : "BETHLEHEM", "loc" : [ -83.728227, 33.926116 ], "pop" : 2181, "state" : "GA", "_id" : "30620" }
,{ "city" : "BISHOP", "loc" : [ -83.477655, 33.808091 ], "pop" : 3620, "state" : "GA", "_id" : "30621" }
,{ "city" : "BOGART", "loc" : [ -83.50546, 33.934038 ], "pop" : 7245, "state" : "GA", "_id" : "30622" }
,{ "city" : "BOWMAN", "loc" : [ -83.028437, 34.19193 ], "pop" : 2315, "state" : "GA", "_id" : "30624" }
,{ "city" : "JACKSONVILLE", "loc" : [ -81.75557999999999, 30.223137 ], "pop" : 37603, "state" : "FL", "_id" : "32244" }
,{ "city" : "JACKSONVILLE BEA", "loc" : [ -81.406243, 30.28319 ], "pop" : 22392, "state" : "FL", "_id" : "32250" }
,{ "city" : "JACKSONVILLE", "loc" : [ -81.55713900000001, 30.221356 ], "pop" : 17293, "state" : "FL", "_id" : "32256" }
,{ "city" : "JACKSONVILLE", "loc" : [ -81.605042, 30.192703 ], "pop" : 30022, "state" : "FL", "_id" : "32257" }
,{ "city" : "JACKSONVILLE", "loc" : [ -81.573864, 30.145944 ], "pop" : 7261, "state" : "FL", "_id" : "32258" }
,{ "city" : "JACKSONVILLE", "loc" : [ -81.621701, 30.095578 ], "pop" : 6677, "state" : "FL", "_id" : "32259" }
,{ "city" : "NEPTUNE BEACH", "loc" : [ -81.405123, 30.31548 ], "pop" : 6816, "state" : "FL", "_id" : "32266" }
,{ "city" : "TALLAHASSEE", "loc" : [ -84.259337, 30.428563 ], "pop" : 21329, "state" : "FL", "_id" : "32301" }
,{ "city" : "TALLAHASSEE", "loc" : [ -84.318946, 30.487433 ], "pop" : 36053, "state" : "FL", "_id" : "32303" }
,{ "city" : "TALLAHASSEE", "loc" : [ -84.32113200000001, 30.447752 ], "pop" : 33437, "state" : "FL", "_id" : "32304" }
,{ "city" : "TALLAHASSEE", "loc" : [ -84.29559399999999, 30.442152 ], "pop" : 1690, "state" : "FL", "_id" : "32306" }
,{ "city" : "TALLAHASSEE", "loc" : [ -84.206903, 30.507725 ], "pop" : 34857, "state" : "FL", "_id" : "32308" }
,{ "city" : "TALLAHASSEE", "loc" : [ -84.32980000000001, 30.399125 ], "pop" : 30379, "state" : "FL", "_id" : "32310" }
,{ "city" : "TALLAHASSEE", "loc" : [ -84.186995, 30.415625 ], "pop" : 17005, "state" : "FL", "_id" : "32311" }
,{ "city" : "TALLAHASSEE", "loc" : [ -84.262708, 30.518474 ], "pop" : 17743, "state" : "FL", "_id" : "32312" }
,{ "city" : "PLEASANT GROVE", "loc" : [ -90.10249399999999, 34.469951 ], "pop" : 80, "state" : "MS", "_id" : "38657" }
,{ "city" : "POPE", "loc" : [ -90.002735, 34.190559 ], "pop" : 1860, "state" : "MS", "_id" : "38658" }
,{ "city" : "POTTS CAMP", "loc" : [ -89.315073, 34.604742 ], "pop" : 1580, "state" : "MS", "_id" : "38659" }
,{ "city" : "RED BANKS", "loc" : [ -89.519839, 34.875039 ], "pop" : 4860, "state" : "MS", "_id" : "38661" }
,{ "city" : "RIPLEY", "loc" : [ -88.923973, 34.750912 ], "pop" : 8895, "state" : "MS", "_id" : "38663" }
,{ "city" : "ROBINSONVILLE", "loc" : [ -90.30517399999999, 34.809329 ], "pop" : 547, "state" : "MS", "_id" : "38664" }
,{ "city" : "CINCINNATI", "loc" : [ -84.543702, 39.241827 ], "pop" : 44838, "state" : "OH", "_id" : "45231" }
,{ "city" : "CINCINNATI", "loc" : [ -84.514101, 39.185926 ], "pop" : 9364, "state" : "OH", "_id" : "45232" }
,{ "city" : "SAYLOR PARK", "loc" : [ -84.669411, 39.11928 ], "pop" : 15452, "state" : "OH", "_id" : "45233" }
,{ "city" : "TAFT", "loc" : [ -84.394746, 39.207302 ], "pop" : 26113, "state" : "OH", "_id" : "45236" }
,{ "city" : "CINCINNATI", "loc" : [ -84.45799700000001, 39.18797 ], "pop" : 25445, "state" : "OH", "_id" : "45237" }
,{ "city" : "WESTERN HILLS", "loc" : [ -84.608805, 39.111667 ], "pop" : 48302, "state" : "OH", "_id" : "45238" }
,{ "city" : "GROESBECK", "loc" : [ -84.57922499999999, 39.207995 ], "pop" : 27024, "state" : "OH", "_id" : "45239" }
,{ "city" : "PARKDALE", "loc" : [ -84.52629899999999, 39.286424 ], "pop" : 27517, "state" : "OH", "_id" : "45240" }
,{ "city" : "SHARONVILLE", "loc" : [ -84.391161, 39.276745 ], "pop" : 21992, "state" : "OH", "_id" : "45241" }
,{ "city" : "SYCAMORE", "loc" : [ -84.359919, 39.239881 ], "pop" : 21183, "state" : "OH", "_id" : "45242" }
,{ "city" : "MADEIRA", "loc" : [ -84.35934899999999, 39.187847 ], "pop" : 14999, "state" : "OH", "_id" : "45243" }
,{ "city" : "NEWTOWN", "loc" : [ -84.347765, 39.107091 ], "pop" : 12310, "state" : "OH", "_id" : "45244" }
,{ "city" : "NEWTOWN", "loc" : [ -84.277383, 39.091293 ], "pop" : 36134, "state" : "OH", "_id" : "45245" }
,{ "city" : "GLENDALE", "loc" : [ -84.472353, 39.28751 ], "pop" : 13861, "state" : "OH", "_id" : "45246" }
,{ "city" : "GROESBECK", "loc" : [ -84.631608, 39.207604 ], "pop" : 16834, "state" : "OH", "_id" : "45247" }
,{ "city" : "WESTWOOD", "loc" : [ -84.651535, 39.159056 ], "pop" : 20735, "state" : "OH", "_id" : "45248" }
,{ "city" : "ARCADIA", "loc" : [ -92.92452900000001, 32.555643 ], "pop" : 4367, "state" : "LA", "_id" : "71001" }
,{ "city" : "ATHENS", "loc" : [ -93.023875, 32.645073 ], "pop" : 1336, "state" : "LA", "_id" : "71003" }
,{ "city" : "BELCHER", "loc" : [ -93.85079899999999, 32.754393 ], "pop" : 849, "state" : "LA", "_id" : "71004" }
,{ "city" : "BENTON", "loc" : [ -93.69095, 32.697617 ], "pop" : 7234, "state" : "LA", "_id" : "71006" }
,{ "city" : "BETHANY", "loc" : [ -94.003394, 32.366179 ], "pop" : 404, "state" : "LA", "_id" : "71007" }
,{ "city" : "BIENVILLE", "loc" : [ -92.908402, 32.252323 ], "pop" : 445, "state" : "LA", "_id" : "71008" }
,{ "city" : "CASTOR", "loc" : [ -93.093576, 32.245181 ], "pop" : 2784, "state" : "LA", "_id" : "71016" }
,{ "city" : "COTTON VALLEY", "loc" : [ -93.42588499999999, 32.819011 ], "pop" : 2061, "state" : "LA", "_id" : "71018" }
,{ "city" : "HANNA", "loc" : [ -93.31564400000001, 32.050099 ], "pop" : 9339, "state" : "LA", "_id" : "71019" }
,{ "city" : "DOYLINE", "loc" : [ -93.399585, 32.490023 ], "pop" : 3065, "state" : "LA", "_id" : "71023" }
,{ "city" : "DUBBERLY", "loc" : [ -93.21419, 32.519164 ], "pop" : 1117, "state" : "LA", "_id" : "71024" }
,{ "city" : "FRIERSON", "loc" : [ -93.69148800000001, 32.244968 ], "pop" : 1600, "state" : "LA", "_id" : "71027" }
,{ "city" : "GIBSLAND", "loc" : [ -93.07055800000001, 32.529874 ], "pop" : 2219, "state" : "LA", "_id" : "71028" }
,{ "city" : "GILLIAM", "loc" : [ -93.829268, 32.825055 ], "pop" : 367, "state" : "LA", "_id" : "71029" }
,{ "city" : "GLOSTER", "loc" : [ -93.82930899999999, 32.191705 ], "pop" : 1242, "state" : "LA", "_id" : "71030" }
,{ "city" : "GOLDONNA", "loc" : [ -92.961056, 31.999988 ], "pop" : 1378, "state" : "LA", "_id" : "71031" }
,{ "city" : "GRAND CANE", "loc" : [ -93.79406400000001, 32.105 ], "pop" : 1048, "state" : "LA", "_id" : "71032" }
,{ "city" : "SEMINOLE", "loc" : [ -96.668307, 35.252095 ], "pop" : 11673, "state" : "OK", "_id" : "74868" }
,{ "city" : "SPARKS", "loc" : [ -96.81626900000001, 35.61378 ], "pop" : 330, "state" : "OK", "_id" : "74869" }
,{ "city" : "HARDEN CITY", "loc" : [ -96.54289, 34.666194 ], "pop" : 2317, "state" : "OK", "_id" : "74871" }
,{ "city" : "STRATFORD", "loc" : [ -96.976277, 34.771412 ], "pop" : 2773, "state" : "OK", "_id" : "74872" }
,{ "city" : "TECUMSEH", "loc" : [ -96.966713, 35.25023 ], "pop" : 9203, "state" : "OK", "_id" : "74873" }
,{ "city" : "TRYON", "loc" : [ -96.9984, 35.863151 ], "pop" : 1356, "state" : "OK", "_id" : "74875" }
,{ "city" : "WANETTE", "loc" : [ -97.0419, 34.998313 ], "pop" : 1288, "state" : "OK", "_id" : "74878" }
,{ "city" : "WELEETKA", "loc" : [ -96.113609, 35.341582 ], "pop" : 2133, "state" : "OK", "_id" : "74880" }
,{ "city" : "WELLSTON", "loc" : [ -97.059685, 35.675738 ], "pop" : 3452, "state" : "OK", "_id" : "74881" }
,{ "city" : "WELTY", "loc" : [ -96.42762, 35.610727 ], "pop" : 286, "state" : "OK", "_id" : "74882" }
,{ "city" : "WETUMKA", "loc" : [ -96.242082, 35.239552 ], "pop" : 2181, "state" : "OK", "_id" : "74883" }
,{ "city" : "NEW LIMA", "loc" : [ -96.503793, 35.182893 ], "pop" : 8015, "state" : "OK", "_id" : "74884" }
,{ "city" : "ARKOMA", "loc" : [ -94.44031099999999, 35.343352 ], "pop" : 2764, "state" : "OK", "_id" : "74901" }
,{ "city" : "POCOLA", "loc" : [ -94.476029, 35.243603 ], "pop" : 3575, "state" : "OK", "_id" : "74902" }
,{ "city" : "BOKOSHE", "loc" : [ -94.72215799999999, 35.160925 ], "pop" : 3931, "state" : "OK", "_id" : "74930" }
,{ "city" : "BUNCH", "loc" : [ -94.734154, 35.735691 ], "pop" : 1656, "state" : "OK", "_id" : "74931" }
,{ "city" : "CAMERON", "loc" : [ -94.506015, 35.149355 ], "pop" : 935, "state" : "OK", "_id" : "74932" }
,{ "city" : "HEAVENER", "loc" : [ -94.61848999999999, 34.835267 ], "pop" : 5628, "state" : "OK", "_id" : "74937" }
,{ "city" : "HODGEN", "loc" : [ -94.63908000000001, 34.753757 ], "pop" : 756, "state" : "OK", "_id" : "74939" }
,{ "city" : "HOWE", "loc" : [ -94.657072, 34.929936 ], "pop" : 1352, "state" : "OK", "_id" : "74940" }
,{ "city" : "KEOTA", "loc" : [ -94.902822, 35.264541 ], "pop" : 1878, "state" : "OK", "_id" : "74941" }
,{ "city" : "MCCURTAIN", "loc" : [ -95.012737, 35.140403 ], "pop" : 1106, "state" : "OK", "_id" : "74944" }
,{ "city" : "MULDROW", "loc" : [ -94.633216, 35.401985 ], "pop" : 8185, "state" : "OK", "_id" : "74948" }
,{ "city" : "MUSE", "loc" : [ -94.719007, 34.664124 ], "pop" : 183, "state" : "OK", "_id" : "74949" }
,{ "city" : "POTEAU", "loc" : [ -94.60960300000001, 35.060561 ], "pop" : 9466, "state" : "OK", "_id" : "74953" }
,{ "city" : "ROLAND", "loc" : [ -94.52908499999999, 35.453811 ], "pop" : 7047, "state" : "OK", "_id" : "74954" }
,{ "city" : "SALLISAW", "loc" : [ -94.778998, 35.485191 ], "pop" : 11399, "state" : "OK", "_id" : "74955" }
,{ "city" : "SHADY POINT", "loc" : [ -94.666534, 35.129333 ], "pop" : 937, "state" : "OK", "_id" : "74956" }
,{ "city" : "OCTAVIA", "loc" : [ -94.619117, 34.479056 ], "pop" : 442, "state" : "OK", "_id" : "74957" }
,{ "city" : "AUSTIN", "loc" : [ -97.752602, 30.403614 ], "pop" : 27479, "state" : "TX", "_id" : "78759" }
,{ "city" : "UVALDE", "loc" : [ -99.793074, 29.217238 ], "pop" : 19725, "state" : "TX", "_id" : "78801" }
,{ "city" : "ASHERTON", "loc" : [ -99.748611, 28.436421 ], "pop" : 1869, "state" : "TX", "_id" : "78827" }
,{ "city" : "BARKSDALE", "loc" : [ -100.070983, 29.708488 ], "pop" : 353, "state" : "TX", "_id" : "78828" }
,{ "city" : "BATESVILLE", "loc" : [ -99.611457, 28.928648 ], "pop" : 1512, "state" : "TX", "_id" : "78829" }
,{ "city" : "BIG WELLS", "loc" : [ -99.57808300000001, 28.569344 ], "pop" : 882, "state" : "TX", "_id" : "78830" }
,{ "city" : "BRACKETTVILLE", "loc" : [ -100.415495, 29.30963 ], "pop" : 3119, "state" : "TX", "_id" : "78832" }
,{ "city" : "CAMP WOOD", "loc" : [ -100.00838, 29.679491 ], "pop" : 1017, "state" : "TX", "_id" : "78833" }
,{ "city" : "CARRIZO SPRINGS", "loc" : [ -99.863513, 28.52779 ], "pop" : 7682, "state" : "TX", "_id" : "78834" }
,{ "city" : "COMSTOCK", "loc" : [ -101.262755, 29.74842 ], "pop" : 497, "state" : "TX", "_id" : "78837" }
,{ "city" : "CONCAN", "loc" : [ -99.68424400000001, 29.524057 ], "pop" : 201, "state" : "TX", "_id" : "78838" }
,{ "city" : "CRYSTAL CITY", "loc" : [ -99.826412, 28.686953 ], "pop" : 9130, "state" : "TX", "_id" : "78839" }
,{ "city" : "LAUGHLIN A F B", "loc" : [ -100.891555, 29.373881 ], "pop" : 38233, "state" : "TX", "_id" : "78840" }
,{ "city" : "D HANIS", "loc" : [ -99.28348800000001, 29.3398 ], "pop" : 1337, "state" : "TX", "_id" : "78850" }
,{ "city" : "DRYDEN", "loc" : [ -102.33207, 30.165108 ], "pop" : 1410, "state" : "TX", "_id" : "78851" }
,{ "city" : "EAGLE PASS", "loc" : [ -100.48176, 28.702786 ], "pop" : 35136, "state" : "TX", "_id" : "78852" }
,{ "city" : "DUNLAY", "loc" : [ -99.12763699999999, 29.356065 ], "pop" : 8114, "state" : "TX", "_id" : "78861" }
,{ "city" : "KNIPPA", "loc" : [ -99.637171, 29.291119 ], "pop" : 618, "state" : "TX", "_id" : "78870" }
,{ "city" : "LA PRYOR", "loc" : [ -99.85074, 28.948848 ], "pop" : 1520, "state" : "TX", "_id" : "78872" }
,{ "city" : "LEAKEY", "loc" : [ -99.747913, 29.768951 ], "pop" : 1142, "state" : "TX", "_id" : "78873" }
,{ "city" : "SPOFFORD", "loc" : [ -100.574181, 28.942688 ], "pop" : 1242, "state" : "TX", "_id" : "78877" }
,{ "city" : "RIO FRIO", "loc" : [ -99.77233699999999, 29.658295 ], "pop" : 253, "state" : "TX", "_id" : "78879" }
,{ "city" : "ROCKSPRINGS", "loc" : [ -100.231029, 30.018756 ], "pop" : 1904, "state" : "TX", "_id" : "78880" }
,{ "city" : "SABINAL", "loc" : [ -99.478109, 29.326668 ], "pop" : 2203, "state" : "TX", "_id" : "78881" }
,{ "city" : "TARPLEY", "loc" : [ -99.24687400000001, 29.645494 ], "pop" : 20, "state" : "TX", "_id" : "78883" }
,{ "city" : "UTOPIA", "loc" : [ -99.558454, 29.597197 ], "pop" : 593, "state" : "TX", "_id" : "78884" }
,{ "city" : "VANDERPOOL", "loc" : [ -99.555542, 29.741779 ], "pop" : 227, "state" : "TX", "_id" : "78885" }
,{ "city" : "YANCEY", "loc" : [ -99.14277, 29.140398 ], "pop" : 368, "state" : "TX", "_id" : "78886" }
,{ "city" : "BLEIBLERVILLE", "loc" : [ -96.418719, 29.967572 ], "pop" : 1226, "state" : "TX", "_id" : "78931" }
,{ "city" : "CARMINE", "loc" : [ -96.686077, 30.140351 ], "pop" : 356, "state" : "TX", "_id" : "78932" }
,{ "city" : "CAT SPRING", "loc" : [ -96.390029, 29.751204 ], "pop" : 658, "state" : "TX", "_id" : "78933" }
,{ "city" : "COLUMBUS", "loc" : [ -96.5527, 29.703247 ], "pop" : 5234, "state" : "TX", "_id" : "78934" }
,{ "city" : "ALLEYTON", "loc" : [ -96.46312, 29.745286 ], "pop" : 273, "state" : "TX", "_id" : "78935" }
,{ "city" : "ELLINGER", "loc" : [ -96.69663, 29.845915 ], "pop" : 374, "state" : "TX", "_id" : "78938" }
,{ "city" : "FAYETTEVILLE", "loc" : [ -96.646317, 29.886789 ], "pop" : 2290, "state" : "TX", "_id" : "78940" }
,{ "city" : "FLATONIA", "loc" : [ -97.098685, 29.709493 ], "pop" : 2934, "state" : "TX", "_id" : "78941" }
,{ "city" : "GIDDINGS", "loc" : [ -96.93322000000001, 30.177725 ], "pop" : 6799, "state" : "TX", "_id" : "78942" }
,{ "city" : "INDUSTRY", "loc" : [ -96.518849, 29.971789 ], "pop" : 1258, "state" : "TX", "_id" : "78944" }
,{ "city" : "LA GRANGE", "loc" : [ -96.885988, 29.903978 ], "pop" : 10019, "state" : "TX", "_id" : "78945" }
,{ "city" : "LEDBETTER", "loc" : [ -96.761276, 30.238307 ], "pop" : 806, "state" : "TX", "_id" : "78946" }]

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  //response.render('pages/index');
  response.sendFile(__dirname + '/index.html');
});


app.get('/data/:id', function(request, response) {
	response.setHeader('Content-Type', 'application/json');
	
	connection.query('SELECT * FROM tbl_city_info WHERE id = ?',[request.params.id], function(err, rows, fields) {
    if (err) throw err;
	
	response.send(JSON.parse(decodeURI(rows[0].city_data)));
 
    });
	
});

app.get('/insert', function(request, response) {
	
	for(var i=1; i <= 139; i++)
	{
	var data_json = JSON.stringify(info[i]);
	var data = encodeURI(data_json);
	
	connection.query('INSERT INTO tbl_city_info(`id`,`city_data`) VALUES(?,?)',[i,data], function(err,res){
  if(err) 
	  throw err;
         
    });
	 
	}
	response.send('Hello World!!!! Data Inserted !!!!');
  });


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

