let randomImage = document.querySelector(".random-image");
console.log("randomImage:",randomImage);

fetch("https://source.unsplash.com/random/")
.then(function(response) {
    if(!response.ok){
        console.log(response);
        return new Error(response);
    }
    console.log("Reponse:",response);
    return response.blob();
})
.then(function(photoBlob) {
    console.log("My Blob:",photoBlob)
    var objectURL = URL.createObjectURL(photoBlob);
    console.log("Object URL:", objectURL);
    randomImage.src = objectURL;

    console.log("randomImage.src:", randomImage.src);
})
.catch(function(err) {
    console.log(err);
})

/*
- (response.blob() reads a response stream to completion and returns a promise
- a "blob" (Binary Large Object) is a file-like object of immutable, raw data
- a blob can be used like a file wherever you use files (they're the underlying data structure for 'File')

How does the Blob get a location for <img src="">?
    URL.createObjectURL() - method creates a DOMstring w/ a URL representing the object
*/