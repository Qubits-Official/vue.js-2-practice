var data = {
    title: "The VueJs Instance",
    showParagraph: false
};

Vue.component("hello", {
    template: "<h1>Hello!</h1>"
});

var vm1 = new Vue({
    data: data,
    methods: {
        show: function() {
            this.showParagraph = true;
            this.updateTitle("The VueJs Instance (Updated)");
            console.log(this.$refs.myButton.innerText);
            console.log(this.$refs.myButton);
            this.$refs.myButton.innerText = "Test";
        },
        updateTitle: function(title) {
            this.title = title;
        }
    },
    computed: {
        lowerCaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            alert("Title changed, new value: " + value);
        }
    }
});

vm1.$mount("#app-1");

vm1.newProp = "New!";
console.log(vm1);
console.log(vm1.$data === data);

vm1.$refs.heading.innerText = "Something else";

setTimeout(function() {
    vm1.title = "Changed by the Timer";
    vm1.show();
}, 3000);

var vm2 = new Vue({
    el: "#app-2",
    data: {
        title: 'The second Instance'
    },
    methods: {
        onChange: function() {
            vm1.title = "Changed";
        }
    }
});

var vm3 = new Vue({
    el: "#app-3",
    template: `<h1>Hello</h1>`
});

// vm3.$mount("#app-3");
// vm3.$mount();
// document.getElementById("app-3").appendChild(vm3.$el);

new Vue({
    el: "#app-4",
    data: {
        title: "The VueJs Instance"
    },
    beforeCreate: function() {
        console.log("beforeCreate()");
    },
    created: function() {
        console.log("created()");
    },
    beforeMount: function() {
        console.log("beforeMount()");
    },
    mounted: function() {
        console.log("mounted()");
    },
    beforeUpdate: function() {
        console.log("beforeUpdate()");
    },
    updated: function() {
        console.log("updated()");
    },
    beforeDestroy: function() {
        console.log("beforeDestroy()");
    },
    destroyed: function() {
        console.log("destroyed()");
    },
    methods: {
        destroy: function() {
            this.$destroy();
        }
    }
});
