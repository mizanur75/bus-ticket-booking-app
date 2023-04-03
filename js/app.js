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
            count: 0
        };
    },
    methods:{
        
    }
});

app.mount("#app");