<template>
  <div>
    <navbar />
    <div class="app-main">
      <router-view />
    </div>
    <page-footer />
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import { Navbar, PageFooter } from './components';

@Component({
  name: 'Layout',
  components: {
    Navbar,
    PageFooter,
  },
})
export default class Layout extends Vue {
}
</script>
