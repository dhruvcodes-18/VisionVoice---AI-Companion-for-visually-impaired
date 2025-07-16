# React Js Voice Controlled Simple Website 

This is voice controlled website 
## Preprerequisite

1. Enable Youtube Data API v3 on Google Cloud Console
2. Youtube API key from Google Cloud Console
3. Nodejs
4. Python (may or may not required)
5. Browser
6. Microphone

## Installation

1. Clone this repo

   ```bash
   git clone git@github.com:TusharG22/voice_controlled_web.git
   ```

2. download the dependencies

   ```bash
   npm install
   ```

3. Edit a `.env` file in root directory and add the following

   ```bash
   VITE_APP_YOUTUBE_API_KEY=YOUR_YOUTUBE_API
   VIET_APP_YOUTUBE_API_URL=https://www.googleapis.com/youtube/v3
   ```

4. Run the project

   ```bash
   npm run dev
   ```

5. Open the browser and go to `http://localhost:5173`

## How to use

1. Open the website
2. Click on the close icon on top right corner to start voice commands
3. Say the commands
4. Stop the voice commands by saying `Stop taking commands`
5. You can also stop the voice commands by clicking on the mic icon on top bottom right corner
6. Follow the commands given below

## Features in version 1.0

    1. Voice controlled navigation with all validations
    2. Voice controlled scrolling
    3. Voice controlled video opening (videos fetching dynamically from youtube api)
    4. Voice controlled application history
    5. Voice controlled pagination with all validations

## Added features in version 1.1

    6. Voice controlled search
    7. Voice controlled video controls
    8. Voice controlled form filling

    Not only this it is giving responses also

## This is having more than 35+ commands

## Commands:-

<div class="card-body"><p class="py-5">These are the following commands which will help you to run it with voice commands:-</p><p class="bg-primary text-white border-bottom py-3 my-4 text-center">Stop Taking Voice Commands</p><table class="table table-bordered"><thead class="shadow text-center"><tr><th class="text-capitalize" scope="col">commands</th><th class="text-capitalize" scope="col">use</th></tr></thead><tbody class="text-center text-capitalize"><tr><td><p class="text-center small bg-dark text-white py-1 px-2 my-2">Stop Recognition</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">Stop Taking Commands</p></td><td><p>to stop commands after starting with commands</p></td></tr></tbody></table><p class="bg-primary text-white border-bottom py-3 my-4 text-center">Navigation Commands</p><table class="table table-bordered"><thead class="shadow text-center"><tr><th class="text-capitalize" scope="col">commands</th><th class="text-capitalize" scope="col">use</th></tr></thead><tbody class="text-center text-capitalize"><tr><td><p class="text-center small bg-dark text-white py-1 px-2 my-2">Navigate to &lt;_page_name_&gt; page/route</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">Navigate to &lt;_page_name_&gt;</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">Navigate to &lt;_route_name_&gt; page/route</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">Navigate to &lt;_route_name_&gt;</p></td><td><p>This will help you to navigate to pages <br> Example:- Navigate to Home/Index Page/route, Navigate to Home/Index, Navigate to video/videos page/route </p></td></tr></tbody></table><p class="bg-primary text-white border-bottom py-3 my-4 text-center">Open Video Commands - Home Page</p><table class="table table-bordered"><thead class="shadow text-center"><tr><th class="text-capitalize" scope="col">commands</th><th class="text-capitalize" scope="col">use</th></tr></thead><tbody class="text-center text-capitalize"><tr><td><p class="text-center small bg-dark text-white py-1 px-2 my-2">open video number &lt;_number_&gt;</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">open video number &lt;_number_&gt; from uploads</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">open video number &lt;_number_&gt; from popular uploads</p></td><td><p>This will help you to select the particular video in home page <br> Example:- open video number 1, open video number 1 from uploads, open video number 1 from popular uploads </p></td></tr></tbody></table><p class="bg-primary text-white border-bottom py-3 my-4 text-center">Open Video Commands - Home Page Dialog Box</p><table class="table table-bordered"><thead class="shadow text-center"><tr><th class="text-capitalize" scope="col">commands</th><th class="text-capitalize" scope="col">use</th></tr></thead><tbody class="text-center text-capitalize"><tr><td><p class="text-center small bg-dark text-white py-1 px-2">open video number &lt;_number_&gt;</p></td><td><p>In home page when you will select any video using <p class="bg-dark text-white py-1 px-2 mt-2  ">open video number &lt;_number_&gt;</p> command in home page a dialog box will appear <br> Example:- <br> step 1 :- say  `open video number 1` <br> step 2 :- Dialog box will appear to select from two videos <br> step 3 :- now choose one of two videos from dialog box by command `open video number 1 or 2`</p></td></tr></tbody></table><p class="bg-primary text-white border-bottom py-3 my-4 text-center">Open Video Commands - Videos Page</p><table class="table table-bordered"><thead class="shadow text-center"><tr><th class="text-capitalize" scope="col">commands</th><th class="text-capitalize" scope="col">use</th></tr></thead><tbody class="text-center text-capitalize"><tr><td><p class="text-center small bg-dark text-white py-1 px-2 my-2">open video number &lt;_number_&gt;</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">next page</p></td><td><p>This will help you to select any video showing per page from 12 videos. <br> You can select only one video from showing 12 videos. <br> Videos page will consist of 12 videos per page as it contains pagination. <br> pagination commands are given in next table. <br> Example:- open video number 10</p></td></tr></tbody></table><p class="bg-primary text-white border-bottom py-3 my-4 text-center">Open Next/Prev page of pagination - videos page</p><table class="table table-bordered"><thead class="shadow text-center"><tr><th class="text-capitalize" scope="col">commands</th><th class="text-capitalize" scope="col">use</th></tr></thead><tbody class="text-center text-capitalize"><tr><td><p class="text-center small bg-dark text-white py-1 px-2 my-2">next page</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">next</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">prev page</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">prev</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">previous</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">previous page</p></td><td><p>This will help you to make next and previous page in videos page as it contains pagination. <br> Ther commands will work only in videos page. <br> Example:- next page, previous page, next, previous</p></td></tr></tbody></table><p class="bg-primary text-white border-bottom py-3 my-4 text-center">Go Back/Next Route/History of the application commands</p><table class="table table-bordered"><thead class="shadow text-center"><tr><th class="text-capitalize" scope="col">commands</th><th class="text-capitalize" scope="col">use</th></tr></thead><tbody class="text-center text-capitalize"><tr><td><p class="text-center small bg-dark text-white py-1 px-2 my-2">go back</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">go to prev page</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">go to previous page</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">go backward</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">go forward</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">go next</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">go to next page</p></td><td><p>These commands will help you to move next/back of the page in browser history of the application</p></td></tr></tbody></table><p class="bg-primary text-white border-bottom py-3 my-4 text-center">Scrolling commands</p><table class="table table-bordered"><thead class="shadow text-center"><tr><th class="text-capitalize" scope="col">commands</th><th class="text-capitalize" scope="col">use</th></tr></thead><tbody class="text-center text-capitalize"><tr><td><p class="text-center small bg-dark text-white py-1 px-2 my-2">go bottom</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">go to bottom</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">go top</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">go to top</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">go to half</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">go to half of the page</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">scroll to half</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">scroll to bottom/top</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">scroll/move by &lt;_number_&gt; px/pixel/percentage/percent/%</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">scroll/move to &lt;_number_&gt; px/pixel/percentage/percent/%</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">scroll up/down</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">move up/down</p></td><td><p>This will help you to scroll the page <br> Example:- go bottom, go to bottom, scroll to bottom, scroll to bottom, scroll to 10%, scroll by 10px </p></td></tr></tbody></table><p class="bg-primary text-white border-bottom py-3 my-4 text-center">Search with voice commands</p><table class="table table-bordered"><thead class="shadow text-center"><tr><th class="text-capitalize" scope="col">commands</th><th class="text-capitalize" scope="col">use</th></tr></thead><tbody class="text-center text-capitalize"><tr><td><p class="text-center small bg-dark text-white py-1 px-2 my-2">open search page</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">open search</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">search for me</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">search</p><p class="text-center small bg-dark text-white py-1 px-2 my-2">search video</p></td><td><p>This will help you to open search page <br> Example:- open search page, open search, search for me, search, search video</p></td></tr><tr><td><p class="text-center small bg-dark text-white py-1 px-2">search for &lt;_keyword_&gt;</p></td><td><p>This will help you to search for any keyword using voice <br> Example:- search for web tutorials</p></td></tr></tbody></table><p class="bg-primary text-white border-bottom py-3 my-4 text-center">Open Commands Table command</p><table class="table table-bordered"><thead class="shadow text-center"><tr><th class="text-capitalize" scope="col">commands</th><th class="text-capitalize" scope="col">use</th></tr></thead><tbody class="text-center text-capitalize"><tr><td><p class="text-center small bg-dark text-white py-1 px-2">open commands table</p></td><td><p>This will help you to open commands table </p></td></tr></tbody></table><button type="button" class="btn btn-primary mx-auto mb-4 w-100">Next</button></div>

# More/Pending Features Coming in next Update!
"# voice_controlled_web" 
