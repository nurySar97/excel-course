import './assets/scss/index.scss';

import {sleep} from './module';

void (async function() {
  console.log('Sleep 2 seconds!');

  await sleep(2000);

  console.log('I have got up already!');
})();
