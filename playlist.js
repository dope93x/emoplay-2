      var tag = document.getElementByTagName("img")
      var emotion= tag.getAttribute("title");
      console.log(emotion);
      //= document.getElementByClassName('chromoji')[0].title;
      // var emotion = document.querySelectorAll("span.chromoji,");
      switch(emotion){
          case 'anger':
              $(document).ready(function() {
                   $('#angry').mediaelementplayer({
                        alwaysShowControls: true,
                        features: ['playpause','volume'],
                        audioVolume: 'horizontal',
                        audioWidth: 400,
                        audioHeight: 120
                       });
                  });
          break;

          case "happiness":
              $(document).ready(function() {
                 $('#happy').mediaelementplayer({
                          alwaysShowControls: true,
                          features: ['playpause','volume'],
                          audioVolume: 'horizontal',
                          audioWidth: 400,
                          audioHeight: 120
                  });
              });
          break;

          case "sadness":
              $(document).ready(function() {
                  $('#sad').mediaelementplayer({
                      alwaysShowControls: true,
                      features: ['playpause','volume'],
                      audioVolume: 'horizontal',
                      audioWidth: 400,
                      audioHeight: 120
                  });
              });
          break;

          default:
              $(document).ready(function() {
                  $('#starter').mediaelementplayer({
                      alwaysShowControls: true,
                      features: ['playpause','volume'],
                      audioVolume: 'horizontal',
                      audioWidth: 400,
                      audioHeight: 120
                  });
              });
      }
