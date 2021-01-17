            var playerInstance=jwplayer("player"); 
            playerInstance.setup( {
                playlist: [ {
                    "sources": [ {
                        "default": false,
    "file":'https://edge4-hr.cvattv.com.ar/live/c3eds/TyCSport/SA_Live_dash_enc/TyCSport.mpd',
    "drm": {
                           "widevine": {
                                "url": "https://televisionenvivo-internet.online/cv.php"
                           }
                       }
                       , "label": "0", "type": "mpd"
                   }
                   ]
               }
               ], width: "100%",  height: "100%", stretching:"bestfit",  autostart: false, cast: {}
                , sharing: {}
            }
            );