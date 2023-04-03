var app = Vue.createApp({
    data(){
        return{
            msg: "Welcome to vuejs Bus Ticket Booking System",
            info: {
                name: "mizanur rahman",
                skills: ["HTML", "CSS", "JS", "PHP", "MySQL", "LARAVEL", "LIVEWIRE", "VUEJS"],
                web: "https://www.devmizanur.com",
                mobile: "01710472020",
                email: "mizanurrahman615@gmail.com",
                projects: [
                    {
                        pname: "Patient Management",
                        link: "https://ecoh.mydoctorpoint.com"
                    },
                    {
                        pname: "Inventory Management",
                        link: "https://showroom.devmizanur.com"
                    },
                    {
                        pname: "Pharmacy Management",
                        link: "https://pharmacy.devmizanur.com"
                    }
                ]
            },
            count: 0,
            seats:[
                {
                    name:'A1',
                    type:'available',
                    price: 500
                },
                {
                    name:'A2',
                    type:'available',
                    price: 500
                },
                {
                    name:'A3',
                    type:'available',
                    price: 500
                },
                {
                    name:'A4',
                    type:'available',
                    price: 500
                },
                {
                    name:'B1',
                    type:'available',
                    price: 500
                },
                {
                    name:'B2',
                    type:'available',
                    price: 500
                },
                {
                    name:'B3',
                    type:'available',
                    price: 500
                },
                {
                    name:'B4',
                    type:'available',
                    price: 500
                },
                {
                    name:'C1',
                    type:'booked',
                    price: 500
                },
                {
                    name:'C2',
                    type:'sold',
                    price: 500
                },
                {
                    name:'C3',
                    type:'booked',
                    price: 500
                },
                {
                    name:'C4',
                    type:'available',
                    price: 500
                },
                {
                    name:'D1',
                    type:'sold',
                    price: 500
                },
                {
                    name:'D2',
                    type:'available',
                    price: 500
                },
                {
                    name:'D3',
                    type:'available',
                    price: 500
                },
                {
                    name:'D4',
                    type:'available',
                    price: 500
                },
                {
                    name:'E1',
                    type:'available',
                    price: 500
                },
                {
                    name:'E2',
                    type:'available',
                    price: 500
                },
                {
                    name:'E3',
                    type:'available',
                    price: 500
                },
                {
                    name:'E4',
                    type:'available',
                    price: 500
                },
                {
                    name:'F1',
                    type:'available',
                    price: 500
                },
                {
                    name:'F2',
                    type:'available',
                    price: 500
                },
                {
                    name:'F3',
                    type:'available',
                    price: 500
                },
                {
                    name:'F4',
                    type:'available',
                    price: 500
                },
                {
                    name:'G1',
                    type:'available',
                    price: 500
                },
                {
                    name:'G2',
                    type:'available',
                    price: 500
                },
                {
                    name:'G3',
                    type:'available',
                    price: 500
                },
                {
                    name:'G4',
                    type:'available',
                    price: 500
                }
            ]
        };
    },
    computed:{
        selectedSeats(){
            let ss = this.seats.filter((item) => item.type === 'selected');
            return ss;
        },
        total(){
            let total = 0;
            this.selectedSeats.forEach(seat => {
                total += seat.price;
            });
            return total;
        }
    },
    methods:{
        handleClick(i){
            let clickedSeat = this.seats[i];
            if(clickedSeat.type == 'sold'){
                alertify.set('notifier','position', 'top-right');
                alertify.warning('This Ticket Sold');
                return;
            }else if(clickedSeat.type == 'booked'){
                alertify.set('notifier','position', 'top-right');
                alertify.warning('This Ticket Booked');
                return;
            }
            if(this.selectedSeats.length >= 3){
                alertify.set('notifier','position', 'top-right');
                alertify.warning('You can not select more than 3');
                return;
            }
            clickedSeat.type = clickedSeat.type === 'selected'?'available':'selected';
            
            
            console.log(clickedSeat);
        }
    }
});

app.mount("#app");