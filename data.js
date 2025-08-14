var APP_DATA = {
  "scenes": [
    {
      "id": "0-mva-entrada",
      "name": "MVA-Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.054344535434198704,
        "pitch": 0.06869504721210262,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.11187637414817964,
          "pitch": 0.09942444008605555,
          "rotation": 0,
          "target": "1-espaciocentral"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.10533505939847032,
          "pitch": 0.4917722229309778,
          "title": "Museo Virtual de la Acuarela",
          "text": "Un espacio inmersivo dedicado a la contemplación y difusión de la acuarela contemporánea."
        }
      ]
    },
    {
      "id": "1-espaciocentral",
      "name": "EspacioCentral",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.3318646451430922,
        "pitch": -0.8288139835066879,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.1581762373023334,
          "pitch": 0.34084123156964097,
          "rotation": 0,
          "target": "2-galeria2-general"
        },
        {
          "yaw": 2.3571956551430855,
          "pitch": -0.2614551012347075,
          "rotation": 0,
          "target": "0-mva-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6291007787397547,
          "pitch": -0.07844149278060897,
          "title": "Galerias II",
          "text": "Espacio expositivo para artistas contemporaneos de la acuarela"
        }
      ]
    },
    {
      "id": "2-galeria2-general",
      "name": "Galeria2-General",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.30140207454939016,
        "pitch": 0.002545848281009455,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.691476852630716,
          "pitch": 0.10477443461323865,
          "rotation": 0,
          "target": "1-espaciocentral"
        },
        {
          "yaw": -0.5709342551654597,
          "pitch": 0.06529862528936548,
          "rotation": 0,
          "target": "3-galeria2-retratos"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.08937046612619426,
          "pitch": 0.39805477941993495,
          "title": "Galerias II",
          "text": "Con sus 4 Alas Expositivas"
        }
      ]
    },
    {
      "id": "3-galeria2-retratos",
      "name": "galeria2-retratos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.08282777187606705,
        "pitch": -0.040493663833613525,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.0474422404792882,
          "pitch": 0.15699992551089892,
          "rotation": 0,
          "target": "2-galeria2-general"
        },
        {
          "yaw": 2.4232761911968366,
          "pitch": 0.25614175300076525,
          "rotation": 0,
          "target": "4-jardinesculturas"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.49186931888883123,
          "pitch": 0.11079656288992368,
          "title": "El Viejo y el Mar",
          "text": "<strong></strong><p><strong>Breve Descripcion:</strong></p><p><strong>Título:</strong> <em>[Nombre de la obra]</em><br>\n<strong>Autor:</strong> Juan Armas<br>\n<strong>Técnica:</strong> Acuarela sobre papel<br>\n<strong>Dimensiones:</strong> [Ancho] × [Alto] cm<br>\n<strong>Año:</strong> [Año de realización]<br>\n<strong>Contacto del artista:</strong> JuanArmasAcuarelas@gmail.com</p>"
        },
        {
          "yaw": 0.9693773271906956,
          "pitch": 0.09176071644819217,
          "title": "Nostalgia de los Años",
          "text": "<p style=\"font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; font-size: 13px; font-family: Helvetica, Arial, sans-serif;\"><strong>Breve Descripcion:</strong></p><p style=\"font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; font-size: 13px; font-family: Helvetica, Arial, sans-serif;\"><strong>Título:</strong>&nbsp;<em>[Nombre de la obra]</em><br><strong>Autor:</strong>&nbsp;Anonimus<br><strong>Técnica:</strong>&nbsp;Acuarela sobre papel<br><strong>Dimensiones:</strong>&nbsp;[Ancho] × [Alto] cm<br><strong>Año:</strong>&nbsp;[Año de realización]<br><strong>Contacto del artista:</strong>&nbsp;anonimusacuarelas@gmail.com</p>"
        }
      ]
    },
    {
      "id": "4-jardinesculturas",
      "name": "JardinEsculturas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.4185189329353882,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.9500491116902596,
          "pitch": 0.26079274021107857,
          "rotation": 0,
          "target": "3-galeria2-retratos"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3615401073095743,
          "pitch": 0.29934705820661733,
          "title": "Escultura: Amanecer",
          "text": "Serie Amanecer<div>Artista: Diego Peñalver Denis</div>"
        }
      ]
    }
  ],
  "name": "MVA-Capsula2-Prueba",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
