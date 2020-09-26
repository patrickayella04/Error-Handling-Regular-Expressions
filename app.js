// A try block lets us, after we write a bit code, test for errors. The catch block lets us handle those errors if there are any.

try {
    // This will produce a ReferenceError
    myFunction();
} catch (error) {
    console.log(error);

    // In you just wanted to get the message(myFunction is not defined) in console, and not get the name (ReferenceError:) -
    // console.log(error.message);
    // If you just wanted to get the name which is the type of error - (ReferenceError) -
    // console.log(error.name);
    // To test to see what kind of error it is - we get True if we say ReferenceError but False if we use TypeError -
    // console.log(error instanceof ReferenceError);
}

// With Try and Catch we can handle errors without stoping the entire script running. 

// myfunction(); // if we run this we get horrible error and script doesn't continue. But with try and catch, error is caught elegantly and scripts also contues. 

console.log('Program continues...')