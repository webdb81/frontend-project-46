#!/usr/bin/env node

import { program } from 'commander';

program
  .name('gendiff')
  .description('Comparing of two json-format files with displaying differences.')
  .version('1.0.0');

program.parse(process.arvs);
