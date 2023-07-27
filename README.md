### Hexlet tests and linter status:
[![Actions Status](https://github.com/webdb81/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/webdb81/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/156b68720f2aac60f94e/maintainability)](https://codeclimate.com/github/webdb81/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/156b68720f2aac60f94e/test_coverage)](https://codeclimate.com/github/webdb81/frontend-project-46/test_coverage)
[![Jest](https://github.com/webdb81/frontend-project-46/actions/workflows/jest.yml/badge.svg)](https://github.com/webdb81/frontend-project-46/actions/workflows/jest.yml)


## Usage example

### Comparison of flat structures

```bash
gendiff filePath1.json filePath2.json
```

[![asciicast](https://asciinema.org/a/S1WWBh3EodPebO96rxY54qyPk.svg)](https://asciinema.org/a/S1WWBh3EodPebO96rxY54qyPk)

## Recursive comparison

Recursive comparison by default formatter styling:

```bash
gendiff __fixtures__/file1.yml __fixtures__/file2.yml
```

Recursive comparison with setting formatter styling:

```bash
gendiff --format stylish __fixtures__/file1.yml __fixtures__/file2.yml
```

[![asciicast](https://asciinema.org/a/kKBZkFY97kXqpJa1nQWPpak39.svg)](https://asciinema.org/a/kKBZkFY97kXqpJa1nQWPpak39)

## «Flat» comparison for json-files

```bash
gendiff -f plain __fixtures__/file1.json __fixtures__/file2.json
```

[![asciicast](https://asciinema.org/a/8OBxaRx2Yn3BnH4dWIYj8Rvto.svg)](https://asciinema.org/a/8OBxaRx2Yn3BnH4dWIYj8Rvto)

## «Flat» comparison for yaml-files

```bash
gendiff -f plain __fixtures__/file1.yml __fixtures__/file2.yml
```

[![asciicast](https://asciinema.org/a/2N0ONPDvZ6CgCrB8rdGP00B3U.svg)](https://asciinema.org/a/2N0ONPDvZ6CgCrB8rdGP00B3U)
