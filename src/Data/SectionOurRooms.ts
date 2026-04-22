export type Room = {
    images: string[];
    title: string;
    description: string;
};

export const roomsData: Room[] = [
    {
        images: ["/assets/img/card1img1.png", "/assets/img/card1img2.png" ,"/assets/img/card1img3.png","/assets/img/card1img4.png","/assets/img/card1img4.png","/assets/img/card1img4.png"],
        title: "Classrooms",
        description: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."
    },
    {
        images: ["/assets/img/card2img1.png", "/assets/img/card2img2.png","/assets/img/card2img3.png","/assets/img/card2img4.png"],
        title: "Library",
        description: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."
    },
    {
        images: ["/assets/img/card3img1.png", "/assets/img/card3img2.png","/assets/img/card3img3.png","/assets/img/card3img4.png"],
        title: "Science Lab",
        description: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way."
    },
    {
        images: ["/assets/img/card4img1.png", "/assets/img/card4img2.png","/assets/img/card4img3.png","/assets/img/card4img4.png"],
        title: "Computer Lab",
        description: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills"
    },
    {
        images: ["/assets/img/card5img1.png", "/assets/img/card5img2.png","/assets/img/card5img3.png","/assets/img/card5img4.png"],
        title: "Garden and Nature Area",
        description: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."
    },
];