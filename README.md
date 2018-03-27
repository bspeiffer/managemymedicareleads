# ManageMyMedicareLeads

### Initial Dev Steps

1. Login functionality
    * Firebase Auth Google
    * Firebase Auth Email
  
2. Format Lead Table with generated JSON from Firebase
   * Maybe just use [Draft JSON](#draft-json) below

3. Set up [DataTables.js]
    * Search and Filter functions for table

4. set up OCR script from bucket on GCStorage/FirebaseStorage to output JSON into Firebase Database
    * Example Lead Json

6. Populate Module with Lead Img and current lead data in database
    * allow module for each lead per user
    * loading image while lead image is downloading
    * set up [Magnifier.js] for lead image
    * notification of unprocessed leads
    
 ~~7. Automatically Upload leads attachments from users GMail to site~~

   ~~* Use [gmail2gdrive]~~
   
   ~~* Or simplified version in that repo~~
   
   * Leads uploaded to site should be automatically processed by Google Vision *(still needs to happen)*
   
7. Automatically scrap data from leads site
   * on a nightly basis check for new files on leads website
   * download .pdf files to site
   * Leads uploaded to site should be automatically processed by Google Vision
   
    
  
### Draft JSON

    {
      "users" : {
         "UserId" : {
            "name" : "...",
            "email" : "...",
            "profilePic" : "...",
            "password" : "...", --maybe not needed but place holder for email auth
            "leads" : {
               "LeadId" : true,
               "LeadId2" : true
               }
          },
          ...
      },
      "leads" : {
         "LeadId" : {
            "leadURL" : "...",
            "name" : "...",
            "birthDate" : "...",
            "phone" : "...",
            "spouseName" : "...",
            "spousebirthDate" : "...",
            "addressLine1" : "...",
            "addressLine2" : "...",
            "processedDate" : "mm/dd/yyyy 00:00:00" --null if Google Vision is not used
            "confirmedData" : true,
            "manuallyEntered" : true,
            "owner" : {
               "UserId" : true
               }
          },
          ...
      }
    }     
          

[Magnifier.js]: http://mark-rolich.github.io/Magnifier.js/
[DataTables.js]: https://datatables.net/
[gmail2gdrive]: https://github.com/ahochsteger/gmail2gdrive
