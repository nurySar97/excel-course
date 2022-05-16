import {Excel, Formula, Header, Table, Toolbar} from '@/components'

const excel = new Excel('#root', {
  components: [Header, Toolbar, Formula, Table]
});

excel.render();
