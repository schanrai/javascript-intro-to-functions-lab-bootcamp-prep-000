function shout (string){
  return string.toUpperCase()
}

function whisper (string){
  return string.toLowerCase()
}

function logShout (string){
  console.log("string".toUpperCase());
}

console.log(shout("hello"));
console.log(whisper("GOODBYE"));
logShout("hello");