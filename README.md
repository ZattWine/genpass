# Simple Password Generator

Simple password generator `cli` using `node`.

Containing characters for password generation:
- alphabets - `a-zA-Z`
- numbers - `0-9`
- symbols - `!@#$%^&*_-+=`

## Options

Available options for password generation.
- `-l, --length` - length of password to be generated
- `-save` - save generated passwords to `passwords.txt` file
- `-nn, --no-numbers` - generate password without numbers
- `-ns, --no-symbols` - generate password without symbols

## Usages
Sample usages
```bash
# generate password with length {15}
$ genpass --length=15

# generate password with length {15} and without numbers
$ genpass --length=15 --no-numbers

# generate password with length {15} and without numbers and symbols
$ genpass --length=15 -nn -ns

# generate password and save to passwords.txt
$ genpass --length=15 --save
```

## Libraries
The following third-party libraries are used:
- `commander` - for cli
- `chalk` - to colorize console output
- `clipboardy` - to copy to clipboard