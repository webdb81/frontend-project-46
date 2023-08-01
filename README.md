# Utility for comparison of two structured-data files with displaying differences

### Hexlet tests and linter status:
[![Actions Status](https://github.com/webdb81/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/webdb81/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/156b68720f2aac60f94e/maintainability)](https://codeclimate.com/github/webdb81/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/156b68720f2aac60f94e/test_coverage)](https://codeclimate.com/github/webdb81/frontend-project-46/test_coverage)
[![Jest](https://github.com/webdb81/frontend-project-46/actions/workflows/jest.yml/badge.svg)](https://github.com/webdb81/frontend-project-46/actions/workflows/jest.yml)
[![Node CI](https://github.com/webdb81/frontend-project-46/actions/workflows/node-ci.yml/badge.svg)](https://github.com/webdb81/frontend-project-46/actions/workflows/node-ci.yml)

## Prerequisites

- [Node.js](https://nodejs.org/en) version 16 or higher.
- Terminal for performing files comparison via command line interface (CLI).
- Unix-like operating system.

## Install

1. Clone project to your computer.

```bash
# via HTTPS
git clone https://github.com/webdb81/frontend-project-46.git

# or via Github CLI
gh repo clone webdb81/frontend-project-46
```

2. Go to the main directory of cloning project.

```bash
cd frontend-project-46
```

3. Install all the necessary dependencies.

```bash
make install
```

4. Linking package to be able to run commands. This command may require admin rights aka `sudo`.

```bash
make link
```

Viewing the help about the utility:

```bash
gendiff -h
```

[![asciicast](https://asciinema.org/a/h5n1alMwhxmwq5ycI2dTr63Z7.svg)](https://asciinema.org/a/h5n1alMwhxmwq5ycI2dTr63Z7)

## Usage example

### Comparison of flat structures

```bash
gendiff filePath1.json filePath2.json
```

[![asciicast](https://asciinema.org/a/S1WWBh3EodPebO96rxY54qyPk.svg)](https://asciinema.org/a/S1WWBh3EodPebO96rxY54qyPk)

### Recursive comparison

Recursive comparison by default formatter styling:

```bash
gendiff __fixtures__/file1.json __fixtures__/file2.json
```

```bash
gendiff __fixtures__/file1.yml __fixtures__/file2.yml
```

Recursive comparison with setting formatter styling:

```bash
gendiff --format stylish __fixtures__/file1.json __fixtures__/file2.json
```

```bash
gendiff --format stylish __fixtures__/file1.yml __fixtures__/file2.yml
```

[![asciicast](https://asciinema.org/a/kKBZkFY97kXqpJa1nQWPpak39.svg)](https://asciinema.org/a/kKBZkFY97kXqpJa1nQWPpak39)

### «Flat» comparison for json-files

```bash
gendiff -f plain __fixtures__/file1.json __fixtures__/file2.json
```

[![asciicast](https://asciinema.org/a/8OBxaRx2Yn3BnH4dWIYj8Rvto.svg)](https://asciinema.org/a/8OBxaRx2Yn3BnH4dWIYj8Rvto)

### «Flat» comparison for yaml-files

```bash
gendiff -f plain __fixtures__/file1.yml __fixtures__/file2.yml
```

[![asciicast](https://asciinema.org/a/2N0ONPDvZ6CgCrB8rdGP00B3U.svg)](https://asciinema.org/a/2N0ONPDvZ6CgCrB8rdGP00B3U)

### Output of the compared data in a structured json-format

```bash
gendiff -f json __fixtures__/file1.json __fixtures__/file2.json
```

```bash
gendiff -f json __fixtures__/file1.yml __fixtures__/file2.yml
```

[![asciicast](https://asciinema.org/a/JS4vbkgUZtvEPd4IuEaheaJlZ.svg)](https://asciinema.org/a/JS4vbkgUZtvEPd4IuEaheaJlZ)
