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


    Writing more and more Javascript is essential to utlize client's (mobile/desktop) resources

    Javascript makes our code cubersome, not easy to maintain. For even small things we need to write a lot of Javascipt

    Is there a solution?

    Frameworks come to rescue, Angular, React, Ember...

    For a dynamic UI, what is your preference
    1. Javascript: Low level programming language.
    2. JQuery: Gives you the commonly used functions, but still its a small library.
    3. Angular: Framework, where its gives you everything needed go create a dynamic UI.

    Assignment 2. Create a clock that ticks every 1 second using JQuery

    Assignment 3. Practice grid layout and test for different resolution



