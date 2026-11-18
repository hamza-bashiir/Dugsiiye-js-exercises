function getSuccessMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const succes = true
            if (succes) {
                resolve("Success! The operation completed successfully.");
            }else {
                reject("error: something went wrong during the process");
            }
            
        }, 2000);
    });
}

// Handle the Promise
getSuccessMessage()
    .then((message) => console.log(message))
    .catch((error) => console.log("Error:", error));