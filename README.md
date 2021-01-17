# Work Day Planner
## Description

This app lets users type in information, to-dos, or any other text that could help them be more organized, and save it on their browser. The app contains hour slots from 8am to 5pm in which users can type into. Once the user clicks save on a given slot, the content of the text area next to the clicked button is saved into local storage on client side, and thus persisted over reloads. Note that each save button works with the text area they are next to.

The information typed in can be overwritten simply by changing the text and clicking save. The latest saved version stays in users' browser until their local storage is cleared, so information will come up again after refreshes, or when user closes the app and reopens the app after several days, weeks or even months.

As a visual cue, the backgrounds of text areas are color coded. The colors are assigned at the time of initial load of the app. The backgrounds can be gray for past hours, red for the current hour, or green for future hours. Additionally, the current date is displayed at the top of the page.

The app does not have a really developed styling, as it was aimed more towards functionality in two main areas: local storage and leveraging date/time information.

## Technologies and Tools
This project leverages jQuery for a simple and not cluttery coding experience. Additionally, the Moment.js library is being used to use date and time information for the dynamic hour slot background. Bootstrap CSS was also used for the styling.

### Links
Deployed Project Link: https://umutamac.github.io/day-planner/<br>
Github Link: https://github.com/umutamac/day-planner

### Installation
None! Just go to deployed app at https://umutamac.github.io/day-planner/

### Screenshots
![Day Planner](/Assets/day-planner-SS.png?raw=true "Day Planner")

#### Contact
You can reach out to me via Github [![GitHub Link](https://img.shields.io/badge/Github-umutamac-lightgrey.svg)](https://github.com/umutamac)
Alternatively, you can contact me here: amacalptekin@gmail.com
