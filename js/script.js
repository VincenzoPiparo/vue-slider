Vue.config.devtools = true;
const app = new Vue({
	el: '#root',
	data: {
		autoForwardSlide: null,
		slideActive: 0,
		slides: [
			{
				image: 'img/01.jpg',
				title: 'Svezia',
				text:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
			},
			{
				image: 'img/02.jpg',
				title: 'Svizzera',
				text: 'Lorem ipsum'
			},
			{
				image: 'img/03.jpg',
				title: 'Gran Bretagna',
				text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
			},
			{
				image: 'img/04.jpg',
				title: 'Germania',
				text:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
			},
			{
				image: 'img/05.jpg',
				title: 'Paradise',
				text:
					'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
			}
		]
	},
	methods: {
        // Funzione che permette di mandare avanti le foto
		forwardSlide: function() {
			if (this.slideActive < this.slides.length - 1) {
				this.slideActive++;
			} else {
				this.slideActive = 0;
			}
		},
        // Funzione che permette di mandare indietro le foto
		backwardSlide: function() {
			if (this.slideActive > 0) {
				this.slideActive--;
			} else {
				this.slideActive = this.slides.length - 1;
			}
		},
		changeActiveSlide: function(index) {
			this.slideActive = index;
		},
        // Fuznione che permette di mandare in automatico le foto
		autoNextSlide: function() {
			this.autoForwardSlide = setInterval(() => {
				this.forwardSlide();
			}, 3000);
		},
        // Funzione che stoppa l'automatismo delle foto
		stopAutoNextSlide: function() {
			clearInterval(this.autoForwardSlide);
		}
	},
	created: function() {
		this.autoNextSlide();
	}
});