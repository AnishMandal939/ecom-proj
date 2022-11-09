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


----------------------------------------

### ✅ ☀️ day 2:

Actions:
In this session we'll learn how actions are created, called, thumbrules of redux
    1. What is action is redux ?
        => 1.1. Actions are the plain functions
                -> Normal js functions similar , it is used to send data from reactjs to redux
            1.2.  Get Data from Reactjs
                -> anything we want to call from reactjs we call actions
            1.3. Send Data to Reducer after Process
                -> Any time we get data from reactjs we need to send it to reducer through actions
                 Reducer stores that data
                 ? Why can't we put data into reducer -> inside reducer we keep raw data, in which we have to directly store inside store, so inside reducer we cannot process data, every logic is done using 'action' , and reducer doesnot have that capability to directly store, so actions have that capabilities, because it is designed in that architecture
            1.4. Must have type key in return statement
                -> ThumbRule: whenever we return anything inside actions it must have a type key, sothat each other can connect to share data
            1.5. Much Sync type with reducer
                -> the same type key should be provided to reducer also to connect

    2. Make Action function ?
        -> Add to cart functionality - one component to another

    3. Call action function
        -> see diagram architecture in part 1 to understand workflow
            -> create action-> reducer -> store
            3.1 -> do not import directly , use dispatch method to import in redux way -> App.js
                -> Dispatch : sending | dispatching data from action.js
                once type is defined send data and your action is called now 
                but, where the data is going ?
                    ->

    4. Interview Question
        4.1. What is Action & how to use/call ?
            -> call is done through useDispatch hook, which is provided by react-redux, action work is to  get data from react and send to reducer
        4.2. How action know where to send data ?
            -> it is known with the help of key 'type' 
