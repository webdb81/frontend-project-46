#!/usr/bin/env node

import { program } from 'commander';

program
  .name('gendiff')
  .description('Comparing of two json-format files with displaying differences.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>');

program.parse();
