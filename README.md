# fsdbatch_java

    UI
        HTML (Structure)
            - Websocket
            - Fetch API
            - Local storage
            - App Cache
        CSS (Presentation)
            - CSS 3 Transitions
            - SVG
        JS  (Behavior)
            - Data types
                Loosely typed language
                Functions are treated as objects
                Functions can be passed as arguments
                Function can be retured from within a function
                Function scopes

            Ist Phase - Create scope
                Outer Fn: [x: undefined , inner: undefined]
                Inner Fn: [x: undefined]

            IInd Phase - Execution
                Outer Fn: [x: 2 , inner: fn]
                Inner Fn: [x: undefined]
            
            - Async flow using setTimeout
            - Callbacks in Javascript
            - Callbacks vs Promises - Promises have come up as substitute to Callbacks, you dont have to expose functionality
            http://es6-features.org/#PromiseUsage
            - ECMA Script (ES) 
                ES5, ES6, ES7

    Exercise: Reverse a string
        var name = "Puneet"
        function to reverse the string
        output --> "teenUp"

        capitalize the first letter of a sentence
        "its a rainy Evening here in DELhi"
        -->
        "Its a rainy evening here in delhi"

        JQuery

        Angular 5
            Typescript
    
    Steps to install http-server
        1. NodeJS installed
        2. npm install -g http-server

    Promise based Ajax API's
        1. Fetch (HTML 5 feature supported by all new browsers)
        2. $.ajax (jquery library and will run on all the browsers)

    JQuery: It is a library of common reusable functions in Javascript

    Assignment 1: Load and HTML table using Ajax. Use the employees.json. Table contains following columns
    "id"
    "first_name"
    "last_name"
    "email"
    "gender"
    "ip_address"


