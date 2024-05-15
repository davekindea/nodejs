const os= require("os")
const user=os.userInfo()
console.log(user)

console.log(`the time required is ${os.uptime()} left`)
const currentos={
    name: os.type(),
    release:os.release(),
    totalemem:os.totalmem(),
    freemem:os.freemem(),

}
console.log(currentos)