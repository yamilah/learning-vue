Vue.component('tabs', {
	template: `
	<div>
		<div class="tabs">
			<ul>
				<li v-for="tab in tabs">
					<a href="#">{{ tab.name }}</a>
				</li>
			</ul>
		</div>

		<div class="tab-details">
			<slot></slot>
		</div>
	</div>
	`,
	data () {
		return {
			tabs: []
		};
	},
	created() {
		this.tabs = this.$children;
	}
});

Vue.component('tab', {
	template: `
	<div><slot></slot></div>
	`,
	props: {
		name: {
			required: true
		}
	}
});

new Vue({
	el: "#root"
});
