Part 4 : Make redux wrapper
    1. Make all files(Action, Reducer, store)
    2. Make wrapper around React App
        2.1. Provider in index.js(Wrapper)
    3. Make Redux Store
    4. Interview Question


Workflow: 

        Action -------> Reducer --------> Store ----
           /\                                       |
           |                                        |
           |        Redux Architecture              |
           |                                        |
           |                                        |
            ----------- View <-----------------------


View : will be wrapped with provider which helps to connect from react with redux

Folder Creation:🗂
    Redux📂: can be named any
        Files:▤
            - action.js
            - reducer.js
            - rootReducer.js - to make connection or combine 
            - store.js
            - saga will also be created if you use it
    
        Now Wrap with Redux Provider in index.js(main file)
            - creating provider
                - Provider comes with attributes of store , i.e : store={props}, without this your app will break
                - ? what is store - Store is a place where all your data is kept 
                - so now work in store file - to create store
                - once you pass as a props store to index.js, to connect your store should link with reducer


Interview Questions: 
1. What is the use of provider ?
    => It is imported from react-redux, it's work is to connect react with redux

2. What is store ?
    => The connection that we are making with react-redux , store keeps all the data of application. 

3. What is the input and output of Store ?
    => Input of store is : `` Reducer ``  : output of Store is :`` createStore function which helps to inject data into our application ``
##### ☣️ in next branch we will create - action & reducer 