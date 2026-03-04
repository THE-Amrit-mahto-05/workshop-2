#!/usr/bin/env node
const { Command } = require("commander")

const program = new Command()

class Calculator {
    add(a, b) {
         return a + b }
    sub(a, b) { 
        return a - b }
    multi(a, b) {
         return a * b }
    div(a, b) {
        if (b === 0) return "Not divisible"
        return a / b
    }
    mod(a, b) { 
        return a % b }
    floor(a) { 
        return Math.floor(a) }
    ceil(a) { 
        return Math.ceil(a) }
    sqrt(a) { 
        return Math.sqrt(a) }
    exponential(base, exponent) { 
        return Math.pow(base, exponent) }
}


class Greeter {
    greet(name) {
        return `Hello ${name}`
    }
}


class JokeService {
    async getJoke() {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke")
        return await res.json()
    }
}

class FactService {
    async getFact() {
        const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
        return await res.json()
    }
}

class AdviceService {
    async getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice")
        return await res.json()
    }
}


const calculator = new Calculator()
const greeter = new Greeter()
const jokeService = new JokeService()
const factService = new FactService()
const adviceService = new AdviceService()


program
    .command("greet <name>")
    .action((name) => {
        console.log(greeter.greet(name))
    })

program
    .command("add <a> <b>")
    .action((a, b) => {
        console.log(calculator.add(Number(a), Number(b)))
    })

program
    .command("sub <a> <b>")
    .action((a, b) => {
        console.log(calculator.sub(Number(a), Number(b)))
    })

program
    .command("multi <a> <b>")
    .action((a, b) => {
        console.log(calculator.multi(Number(a), Number(b)))
    })

program
    .command("div <a> <b>")
    .action((a, b) => {
        console.log(calculator.div(Number(a), Number(b)))
    })

program
    .command("mod <a> <b>")
    .action((a, b) => {
        console.log(calculator.mod(Number(a), Number(b)))
    })

program
    .command("floor <a>")
    .action((a) => {
        console.log(calculator.floor(Number(a)))
    })

program
    .command("ceil <a>")
    .action((a) => {
        console.log(calculator.ceil(Number(a)))
    })

program
    .command("sqrt <a>")
    .action((a) => {
        console.log(calculator.sqrt(Number(a)))
    })

program
    .command("exponential <base> <exponent>")
    .action((base, exponent) => {
        console.log(calculator.exponential(Number(base), Number(exponent)))
    })

program
    .command("joke")
    .description("Get a random joke")
    .action(async () => {
        try {
            const joke = await jokeService.getJoke()
            console.log(`${joke.setup}\n... ${joke.punchline}`)
        } catch (err) {
            console.error("Failed to fetch joke")
        }
    })

program
    .command("fact")
    .description("Get a random fact")
    .action(async () => {
        try {
            const fact = await factService.getFact()
            console.log(`Fun Fact: ${fact.text}`)
        } catch (err) {
            console.error("Failed to fetch fact")
        }
    })

program
    .command("advice")
    .description("Get a random advice")
    .action(async () => {
        try {
            const advice = await adviceService.getAdvice()
            console.log(`Advice: ${advice.slip.advice}`)
        } catch (err) {
            console.error("Failed to fetch advice")
        }
    })

program.parse()