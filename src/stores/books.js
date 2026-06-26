import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books',  {
   state: () => {
      const books = {
          0:{
            id:1,
              image:"/book1.jpg",
              name:"Emotional selfcare for black women",
              price:2200,
              description:"Used to help black women explore their inner value",
              author:"Alicia Magoro",
              long_description:"Alicia Magoro’s Emotional Self-Care for Black Women is a powerful guide that blends psychology, lived experience, and practical strategies to help Black women reclaim joy, resilience, and inner peace despite the unique challenges they face. It emphasizes self-esteem, healing from trauma, and dismantling negative thought patterns, offering tools to transform emotions into sources of strength",
              genre:"Self-help",
              rating:4,
      
          },
          1:{
              id:2,
              image:"/book2.jpeg",
              name:"The Chef",
              price:2500,
              description:"It is tasty thriller used to bring out a vast range of emotions",
              author:"James Patterson",
              long_description:" It’s a fast-paced novel that blends culinary culture with gritty crime drama, following Caleb Rooney—a New Orleans police officer who moonlights as a food truck chef. When he’s accused of murder, his life spirals into chaos, forcing him to balance his passion for food with the dangerous realities of law enforcement and criminal investigation.",
              genre:"Thriller",
              rating:4,
      
          },
          2:{
              id:3,
              image:"/book3.jpeg",
              name:"Diary of a wimpy Kid",
              price:2399,
              description:"A classic comedic book for children",
              author:"Jeff Kinney",
              long_description:"Kinney captures the voice of adolescence with sharp wit and authenticity, showing Greg’s struggles with fitting in, dealing with his older brother Rodrick, navigating friendships (especially with his loyal but quirky best friend Rowley), and surviving the everyday disasters of middle school life. The humor is both exaggerated and relatable, making young readers laugh while also recognizing their own experiences in Greg’s misadventures.",
              genre:"Children's fiction",
              rating:4,
      
          },
          3:{
              id:4,
              image:"/book4.jpeg",
              name:"Heart and Hustle",
              price:2300,
              description:"A nurturing book",
              author:"Patricia bright",
              long_description:"Patricia Bright’s Heart and Hustle is a vibrant and empowering book  with a strong focus on business, personal growth, and lifestyle empowerment. Bright, a successful entrepreneur and digital creator, blends her own journey with practical advice to help readers navigate the challenges of building a career, managing finances, and staying true to themselves.",
              genre:"Motivational memoir",
              rating:4,
      
          },
          4:{
              id:5,
              image:"/book5.jpeg",
              name:"Why im here and why",
              price:4000,
              description:"Giving us life purpose",
              author:"Sophia Jefferson",
              long_description:"Why I’m Here and Why by Sophia Jefferson is a heartfelt exploration of identity, purpose, and resilience. Through candid storytelling, Jefferson reflects on the pivotal moments that shaped her life, weaving together themes of faith, perseverance, and self-discovery. The book is not a chronological autobiography but rather a memoir centered on meaning and purpose, inviting readers to pause and consider their own “why.”",
              genre:"Inspirational",
              rating:4,
      
          },
          5:{
              id:6,
              image:"/book6.jpeg",
              name:"Indescribable",
              price: 2400,
              description:"A kids book meant to steward kids to Christ",
              author:"Louie Giglio",
              long_description:"Indescribable by Louie Giglio is a beautifully crafted devotional that invites children to explore the majesty of God’s creation through the lens of science. Based on Giglio’s popular messages “Indescribable” and “How Great Is Our God,” the book contains 100 devotions that cover topics such as space, galaxies, planets, stars, Earth’s geology, oceans, weather, animals, and even the human body. Each devotion includes a Bible verse, a short reflection, a “Be Amazed” section with fascinating scientific facts, a hands-on STEM activity, and a closing prayer.",
              genre:"Inspirational",
              rating:4,
      
          },
          6:{
              id:7,
              image:"/book7.jpeg",
              name:"Everday with Jesus",
              price:2500,
              description:"It is a devotional designed to encourage spiritual growth, personal victory",
              author:"Andrew Wommack",
              long_description:"Every Day With Jesus by Andrew Wommack is a comprehensive devotional that provides 365 short, powerful readings designed to strengthen faith and inspire daily living. Each entry draws from Wommack’s extensive teaching on God’s unconditional love and grace, emphasizing how believers can live in victory regardless of circumstances. The book highlights the life, death, and resurrection of Jesus, connecting Old Testament prophecies with their fulfillment in Christ, and offering fresh revelation of God’s compassion.",
              genre:"Inspirational",
              rating:4,
      
          },
          7:{
              id:8,
              image:"/book8.jpeg",
              name:"The how and the Why",
              price:2700,
              description:"Finding our purpose on earth",
              author:"Sarah Treem",
              long_description:"The How and the Why premiered in 2011 at the McCarter Theatre in Princeton, NJ, directed by Emily Mann and starring Mercedes Ruehl and Bess Rous. The play introduces Zelda Kahn, a renowned evolutionary biologist famous for her work on the grandmother hypothesis, and Rachel Hardeman, a young scientist preparing to present a radical new theory about menstruation. Meeting for the first time on the eve of a prestigious conference, the two women engage in a sharp, intellectual, and emotional debate that intertwines scientific inquiry with personal revelation.",
              genre:"Drama",
              rating:4,
      
          },
          8:{
              id:9,
              image:"/book9.jpeg",
              name:"Me Before You",
              price:2700,
              description:"Jojo Moyes’ Me Before You is a romantic contemporary fiction novel with strong elements of drama and emotional romance.",
              author:"Jojo Moyes",
              long_description:"Me Before You tells the story of Louisa Clark, a quirky, small-town young woman who takes a job caring for Will Traynor, a wealthy, adventurous man left paralyzed after an accident. What begins as a practical arrangement slowly evolves into a deep, transformative relationship. Louisa brings warmth, humor, and hope into Will’s life, while Will challenges Louisa to expand her horizons and live boldly.",
              genre:"Romance",
              rating:3,
      
          },
          9:{
              id:10,
              image:"/book10.jpeg",
              name:"Born a crime",
              price: 2800,
              description:"is a memoir / autobiographical nonfiction work that blends humor, history, and deeply personal storytelling",
              author:"Trevor Noah",
              long_description:" Born a Crime is both hilarious and heartbreaking. Noah recounts growing up in poverty, navigating racial identity, and surviving the dangers of a divided society. At the heart of the book is his relationship with his fiercely independent mother, Patricia, whose faith, courage, and determination shaped his worldview. Through vivid anecdotes—ranging from being thrown out of a moving car to learning multiple languages to fit in with different communities—Noah illustrates the absurdities and cruelties of apartheid while also celebrating the resilience of ordinary people.",
              genre:"Comedy",
              rating:4,
      
          },
          10:{
              id:11,
              image:"/book11.jpeg",
              name:"Faith ,Hope,Love Devotional",
              price:2900,
              description:" It is a children’s Christian devotional designed to nurture spiritual growth through simple, engaging daily readings.",
              author:"Amy Parker",
              long_description:"Faith, Hope, Love Devotional by Amy Parker is a beautifully written guide that helps children discover how these three virtues can shape their lives. Each devotion is short and easy to read, making it perfect for family devotion time or independent reflection for older kids. Parker uses relatable stories, Scripture passages, and practical applications to show how faith anchors us in God, hope gives us courage for the future, and love transforms how we treat others.",
              genre:"Inspirational",
              rating:4,
      
          },
          11:{
              id:12,
              image:"/book12.jpeg",
              name:"FireBird",
              price:3000,
              description:" It is a children’s Christian picture book that belongs to the genre of juvenile fiction / inspirational literature",
              author:"Amy Parker",
              long_description:"Firebird tells the story of a bright, soaring bird who represents the light of God’s love. Through vivid imagery and gentle storytelling, Amy Parker helps children see that even when life feels dark or uncertain, God’s love shines through like a firebird in the sky. The book encourages young readers to trust in God’s plan, embrace hope, and live with courage.",
              genre:"Comedy",
              rating:5,
      
          },
          12:{
              id:13,
              image:"/book13.jpeg",
              name:"The Animal Rescue Energy",
              price:3100,
              description:" It is a middle-grade children’s adventure series that blends humor, animal fantasy, and conservation themes.",
              author:"Eliot Schrefer",
              long_description:"The Animal Rescue Agency by Eliot Schrefer is a hilarious and heartwarming series that combines fast-paced adventure with important lessons about wildlife conservation. The story follows Esquire Fox, once a cunning trickster, who reforms her life after meeting Mr. Pepper, a blustery rooster with a big heart. Together, they form the Animal Rescue Agency, coordinating daring missions across the globe to save animals in distress",
              genre:"Comedy",
              rating:5,
      
          },
          13:{
              id:14,
              image:"/book14.jpeg",
              name:"Bible bites",
              price:3200,
              description:"A book written to help the reader grow in faith",
              author:"Ladeane Lindsay",
              long_description:"Bible Bites is a warm, engaging devotional designed to help families with children aged 3–12 grow together in faith through short, interactive daily lessons. Written by Ladeane Lindsay and published by Anglican Youthworks in 2010, this book offers 365 bite-sized devotions that make Bible study approachable, enjoyable, and deeply relevant to everyday family life.",
              genre:"Inspirational",
              rating:4.5,
      
          },
         
         
      }
       const selectedBook = ref(null)

       return{
           books,
           selectedBook
       }
   },
   actions:{
       updateSelectedBook (payload) {
           this.selectedBook = payload
       },
       	addBook(payload) {
            //get the last key in the books object
            const existingKeys = Object.keys(this.books).map(Number);
            //below is an if statement to check if the number of existing keys is greater than 0
            const maxKey = existingKeys.length > 0 ? Math.max(...existingKeys) : 0;
            const nextKey = maxKey + 1;

            //imsert into object
            this.books[nextKey] = {
                ...payload,//date the user puts on the tect field
                id: nextKey //optional
            };
        },
        edit(id, payload) {
            //find the book in the object
            const book = Object.entries(this.books).find(
                ([key, item]) => item.id === id //compare the ids to make sure they match
            );
                //means if theres no book then alert the user
            if (!book) {
                console.error(`No book found with id: ${id}`);
                return;
            }

            const [objectKey] = book;
            //replace the existing book data with what was received in payload
            this.books[objectKey] = {
                ...this.books[objectKey], //the spread operator allows you to bind it in the object and let you change from there
                ...payload
            };
        },
        deleteBook(id) {
            const book = Object.entries(this.books).find(
                ([key, item]) => item.id === id
            );
            if (!book) {
                console.error(`Cannot delete: No book found id: ${id}`);
                return;
            }

            const [objectKey] = book;

            delete this.books[objectKey];
        }









   },

   persist: true,
})