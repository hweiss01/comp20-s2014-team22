[mockup1]: login_wireframe_001.png
[mockup2]: mobile_wireframe_001.png
[mockup3]: website_wireframe_001.png

README.txt
Comp20 Semester Group Project: Team 22 

###Project title:###
SpendingRetriever (logo: picture a golden retriever with a calculator and a receipt in its mouth)

###Problem statement (i.e., what is the problem?):###
Currently, there is no easy way to track or limit the money you spent across a wide variety of online services. Each online store and credit card company stores your spending data separately. This leads to overspending, difficult-to-track purchasing, and disorganized receipts. If only there was something to fetch all of that data...

###How do you solve the problem?:###
SpendingRetriever creates a way to centralize and track your online spending/shopping/ordering. Users forward email receipts from online stores to our service. From there, SpendingRetriever sniffs around and paws through the data, analyzing the contents of the messages to track the user’s spending. On our website, users can then examine their data, creating folders and budgets to manage their online spending activities all in one place.

Use Scenario: When the user first visits the website, they are prompted to create an account. Next, they are given instructions on how to forward their online shopping emails to SpendingRetriever. From there, we take over. Once emails begin arriving, logged-in users will see data from those expenditures on the SpendingRetriever website, namely:
    *A bar chart of monthly expenditures for the last 12 months
    *A total of expenditures for the current month
    *Recent spending receipts 
    *Clicking on a receipt allows the user to read more about their expenditure.

### List of all the features that your team will implement (including which of the "Pick 5" items were chosen by the team). Your team will be held accountable for the features you list!: ###
    *Data / screen scraping
    *Reporting with charts and graphs
    *Send/receive emails
    *Data storage in the clouds (Amazon AWS)
    *Front-end framework (Bootstrap)
    
###What data will your prototype be using and collecting:### 
    *Parsed data from emails
    
        -User
        
        -Vendor website
        
        -Product name(s)
        
        -Order date
        
        -Amount spent
        
        -Shipping information
    
    *Dictionary for parsing receipts from different supported shopping sites
        
        -e.g. Amazon, eBay

###Any algorithms or special techniques that will be necessary:###
    *Parsing email for appropriate information (i.e. vendor, product, price)
    *Allowing users to organize/tag receipts
    *Summing spending by category

###Electronic mockups of what your team will be developing using wireframes. No hand-drawn mockups accepted.:###
![Computer Generated Mock-Ups][mockup1]
![Computer Generated Mock-Ups][mockup2]
![Computer Generated Mock-Ups][mockup3]


###Future Features: In the future of this product’s development, we are dreaming up features like:###
    *Keeping track of when packages are expected to arrive
    *SMS alerts
    *Notifications for reaching user-set budget limits
    *Links back to the product description on the original vendor site
    *Manual input (on our site) for purchases we did not (or could not) detect

