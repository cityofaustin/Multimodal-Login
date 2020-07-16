# multimodal-login
## dev notes
to run the app in development mode I usually do a combination of ```npm run dev``` and ```npm run webpack:watch``` that way it transpiles the server code and the client code, you might be able to just do ```npm run dev``` but sometimes it seems like it doesn't load some client code sometimes. ```npm start``` also works but it doesn't do server live reload like ```npm run dev``` does.
