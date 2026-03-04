# Workshop CLI

This is a helpful command-line interface tool with various utilities.

## Available Commands

### Greeting

#### Command:
```bash
node dist/index.js greet <name>
```

#### Example:
```bash
node dist/index.js greet John
```

#### Output:
```
Hello John
```

---

### Calculator Commands

#### Add
```bash
node dist/index.js add 5 3
```

#### Output:
```
8
```

#### Subtract
```bash
node dist/index.js sub 10 4
```

#### Output:
```
6
```

#### Multiply
```bash
node dist/index.js multi 6 7
```

#### Output:
```
42
```

#### Divide
```bash
node dist/index.js div 10 2
```

#### Output:
```
5
```

If dividing by 0:
```
Not divisible
```

#### Modulus
```bash
node dist/index.js mod 10 3
```

#### Output:
```
1
```

#### Floor
```bash
node dist/index.js floor 5.8
```

#### Output:
```
5
```

#### Ceil
```bash
node dist/index.js ceil 5.2
```

#### Output:
```
6
```

#### Square Root
```bash
node dist/index.js sqrt 16
```

#### Output:
```
4
```

#### Exponential (Power)
```bash
node dist/index.js exponential 2 3
```

#### Output:
```
8
```

---

### API Commands

#### Random Joke

```bash
node dist/index.js joke
```

#### Example Output:
```
Why did the scarecrow win an award?
... Because he was outstanding in his field!
```

#### API Used:
`https://official-joke-api.appspot.com/random_joke`

#### Random Fact

```bash
node dist/index.js fact
```

#### Example Output:
```
Fun Fact: Honey never spoils.
```

#### API Used:
`https://uselessfacts.jsph.pl/api/v2/facts/random`

#### Random Advice

```bash
node dist/index.js advice
```

#### Example Output:
```
Advice: Don't sweat the small stuff.
```

#### API Used:
`https://api.adviceslip.com/advice`
