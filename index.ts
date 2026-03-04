#!/usr/bin/env node
const { Command } = require("commander")

const program = new Command()

program
    .command("greet <name>")
    .action((name) => {
        console.log(`Hello ${name}`)
    })
program
    .command("add <a> <b>")
    .action((a, b) => {
        console.log(Number(a) + Number(b))
    })
program
    .command("sub <a> <b>")
    .action((a, b) => {
        console.log(Number(a) - Number(b))
    })
program
    .command("multi <a> <b>")
    .action((a, b) => {
        console.log(Number(a) * Number(b))
    })
program
    .command("div <a> <b>")
    .action((a, b) => {
        if (Number(b) !== 0) {
            console.log(Number(a) / Number(b))
        }
        else {
            console.log("not divisible")
        }
    })
program
    .command("mod <a> <b>")
    .action((a, b) => {

        console.log(Number(a) % Number(b))
    }
    )
program
    .command("floor <a>")
    .action((a) => {

        console.log(Math.floor(Number(a)))
    }
    )
program
    .command("ceil <a>")
    .action((a) => {

        console.log(Math.ceil(Number(a)))
    }
    )
program
    .command("sqrt <a>")
    .action((a) => {

        console.log(Math.sqrt(Number(a)))
    }
    )
program
    .command("exponential <base> <exponent>")
    .action((base, exponent) => {

        console.log(Math.pow(Number(base), Number(exponent)))
    }
    )


program
    .command("joke")
    .description("Get a random joke")
    .action(async () => {
        try {
            const res = await fetch("https://official-joke-api.appspot.com/random_joke");
            const data = await res.json();
            console.log(`${data.setup} \n... ${data.punchline}`);
        } catch (err) {
            console.error("Failed to fetch joke");
        }
    });

program
    .command("fact")
    .description("Get a random interesting fact")
    .action(async () => {
        try {
            const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
            const data = await res.json();
            console.log(`Fun Fact: ${data.text}`);
        } catch (err) {
            console.error("Failed to fetch fact");
        }
    });

program
    .command("advice")
    .description("Get a random piece of advice")
    .action(async () => {
        try {
            const res = await fetch("https://api.adviceslip.com/advice");
            const data = await res.json();
            console.log(`Advice: ${data.slip.advice}`);
        } catch (err) {
            console.error("Failed to fetch advice");
        }
    });

program.parse()
