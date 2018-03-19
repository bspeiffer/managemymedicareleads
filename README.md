# ManageMyMedicareLeads

### Initial Dev Steps

1. Login functionality
    * Firebase Auth Google
    * Firebase Auth Email
  
2. Format Lead Table with generated JSON from Firebase

3. Set up DataTable.js
    * Search and Filter functions for table

4. set up OCR script from bucket on GCStorage/FirebaseStorage to output JSON into Firebase Database
    * Example Lead Json

5. Reconfigure Lead Table to pull correct Data From

6. Populate Module with Lead Img and current lead data in database
    * allow module for each lead per user
    * loading image while lead image is downloading
    * notification of unprocessed leads
    
  
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
            "processed" : false
            "owner" : {
               "UserId" : true
               }
          },
          ...
      }
    }     
          
