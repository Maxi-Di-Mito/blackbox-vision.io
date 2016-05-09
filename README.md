#ReactJS Locale Changer

This project is a POC about how to manage the content and the translations for the Application.

We have defined two JSON files under assets folder. There is one located in folder content that will
provide the images, styles, url, etc.
This is the structure of the content.json file

<code>
  "content": {
    "contents": [
      {
        "componentName": {
          "styles": {
          },
          "icons": [
            {
              "iconId": "",
              "iconUrl": ""
            }
          ],
          "images": [
            {
              "imageId": "",
              "imageUrl": ""
            }
          ],
          "videos": [
            {
              "videoId": "",
              "videoUrl": ""
            }
          ]
        }
      }
    ]
  }
</code>

This is the structure of translation.json file:

<code>
  {
    "translation": {
        "selectedLocale": "en",
        "availableLocales": [
          "en",
          "es"
        ],
        "translations": [
          {
            "componentName": {
              "en": {
              },
              "es": {
              }
            }
          }
        ]
    }
  }
</code>