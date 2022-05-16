import {Excel} from '@/components';

const excel = new Excel('#root', {
  component: []
});

console.log('Excel element: ', excel.$el);
