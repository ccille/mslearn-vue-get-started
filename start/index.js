const app = Vue.createApp({
    data() {
        return {
            productName: 'Book a Cruise to the moon',
            productDescription: 'Cruise to the moon in our luxious shuttle. Watch the astronauts working outside the International space station.',
            
            //Add additional properties later
            classObjects: { centered: true, active: true},
            styleObject: {'background-color': 'red'},
            productImage: './assets/cruise.jpg',
            productImageDescription: 'An astronaut floats outside the window while you sit in comfort',
            productImageStyle: { 'border-radius': '15px'}
            
        }
    }
}).mount('#app')

