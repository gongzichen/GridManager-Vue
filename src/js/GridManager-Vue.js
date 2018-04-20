import Vue from 'vue';
import '../../node_modules/gridmanager/js/gm.js';
import '../../node_modules/gridmanager/css/gm.css';

Vue.component('grid-manager', Vue.extend({
	template: '<table v-bind:grid-manager="option.gridManagerName" ref="gmTable"></table>',
	props: ['option'],
	mounted: function(){
		var table = this.$refs.gmTable;
		table && table.GM && table.GM(this.option);
	}
}));