new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: "https://google.com",
		finishedLink: `<a href="https://google.com">Google</a>`,

		counter: 0,
		x: 0,
		y: 0,

		name: "Marc",

		secondCounter: 0,

		attachRed: false,

		color: "green",

		width: "100"
	},
	computed: {
		output: function () {
			console.log("computed0");
			return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
		},
		test1: function () {
			console.log("computed1")
			this.counter = this.counter + 1 - 1;
			console.log(this.counter);
			// alert("computed 1  " + this.counter);
			return;
		},
		test2: function () {
			console.log("computed1")
			this.counter = this.counter + 1 - 1;
			console.log(this.counter);
			// alert("computed 1  " + this.counter);
			return;
		},
		divClasses: function () {
			return {
				red: this.attachRed,
				blue: !this.attachRed
			}
		},
		myStyle: function() {
			return {
				backgroundColor: this.color,
				width: this.width + "px"
			}
		}
	},
	watch: {
		counter: function (value) {
			console.log("watch0");	

			var vm = this;
			setTimeout(function() {
				console.log(vm.counter);
				vm.counter = 0;
			}, 2000);
		}
	},
	methods: {
		sayHello: function () {
			console.log("method5");
			return this.title = "Hello";
		},
		increase: function (step, event) {
			console.log("method4");
			console.log(event);
			this.counter += step;
		},
		updateCoordinates: function (event) {
			console.log("method3");
			this.x = event.clientX;
			this.y = event.clientY;
		},
		/*
		dummy: function(event) {
			event.stopPropagation();
		}
		*/
		alertMe: function () {
			console.log("method2");
			alert();
		},
		result: function () {
			console.log("method1");
			return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
		},
		test0: function () {
			console.log("method6");
			return;
		}
	}
})
