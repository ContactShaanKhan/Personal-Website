The purpose of this folder is providing an API for retrieving personal information for areas of the
website such as the body of the 'About me page'

This API is only responsible for handing over all the information a certain page would want including:  
1. Every Image to be shown on a page  
2. Every Body of text to be show    

The General Structure is as follows:
Every Page has its own dedicated folder in the 'Data Folder' (./Data)  
Within each respective folder there is a general Structure as follows:
/PageName
|
|---- /Images : Holds all the images for a page
|
|---- /Text : Holds all the text for a page 
|
|---- index.js : Holds the general layout of the folder for example: 
|                   {
|                       "Title": "Home",
|                       "Images": {},
|                       "Text": {}
|                   }