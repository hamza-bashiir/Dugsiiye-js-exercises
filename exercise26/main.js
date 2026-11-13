// Blocking(synchronous)
function blockingDelay() {
  const start = Date.now();
  
  while (Date.now() - start < 2000) {
    // Doing nothing, completely blocking execution
  }
  
  return "Blocking delay complete!";
}

console.log("Start blocking...");
const message = blockingDelay();
console.log(message);
console.log("End blocking.");

//Non-blocking(Asynchronous)

function nonBlockingCallback(callback) {
  setTimeout(() => {
    callback("Non-blocking delay complete!");
  }, 2000);
}

console.log("Start non-blocking...");
nonBlockingCallback((message) => {
  console.log(message);
});
console.log("End non-blocking.");