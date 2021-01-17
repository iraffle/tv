var playerInstance=jwplayer("player");
        playerInstance.setup( {

            playlist: [ {
            title : titulo,
             description: description,
             image: image,
                "sources": [ {
                    "default": false, "file": canal, "drm": {
                        "widevine": {
                             "url": key
                        }
                    }
                    , "label": "0", "type": "mpd"
                }
                ]
            }
            ], width: "100%",  height: "100%", aspectratio: "16:9", autostart: false, cast: {}
            , sharing: {}
        }
        );