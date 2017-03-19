import appMain from "../angular-main.js";
import footerTemplate from '../../htmls/footer.html';

appMain.component('footerComponent', {
  templateUrl: footerTemplate,
  controller: function() {
    this.user = {name: 'world'};
  }
});
