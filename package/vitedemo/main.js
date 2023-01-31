import counter from "./counter";

function getUserInfo () {
  console.log('/// import meta ', import.meta.env)
}

getUserInfo()

console.log('counter', counter)