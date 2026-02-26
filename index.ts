#!/usr/bin/env node
const { Command } = require("commander")

const program = new Command()

program
.command("greet <name>")
.action((name)=>{
    console.log(`Hello ${name}`)
})
program
.command("add <a> <b>")
.action((a,b)=>{
    console.log(Number(a) + Number(b))
})
program
.command("sub <a> <b>")
.action((a,b)=>{
    console.log(Number(a) - Number(b))
})
program
.command("multi <a> <b>")
.action((a,b)=>{
    console.log(Number(a) * Number(b))
})
program
.command("div <a> <b>")
.action((a,b)=>{
    if (Number(b)!==0){
    console.log(Number(a) / Number(b))}
    else{
        console.log("not divisible")
    }
})
program
.command("mod <a> <b>")
.action((a,b)=>{

    console.log(Number(a) % Number(b))}
 )
program
.command("floor <a>")
.action((a)=>{

    console.log(Math.floor(Number(a)))}
 )
program
.command("ceil <a>")
.action((a)=>{

    console.log(Math.ceil(Number(a)))}
 )
program
.command("sqrt <a>")
.action((a)=>{

    console.log(Math.sqrt(Number(a)))}
 )
program
.command("exponential <base> <exponent>")
.action((base, exponent)=>{

    console.log(Math.pow(Number(base),Number(exponent)))}
 )


program.parse()

