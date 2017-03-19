import appMain from "../angular-main.js";
import navbarTemplate from '../../htmls/navbar.html';

appMain.component('navbar', {
  templateUrl: navbarTemplate,
  controller: function() {
    this.user = {name: 'world'};
  }
});
