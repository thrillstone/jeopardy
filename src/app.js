export class App {
  finalJeopardyCategory = "Social Science";
  dailyDouble = "This colloquialism is commonly used to express when a person is sent to jail.";
  // categories = [
  //   {
  //     name: "Birthdays",
  //     answers: [
  //       {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }, {
  //         answer: "April 29, 1983",
  //         question: "Who is Jingjing"
  //       }, {
  //         answer: "May 25, 2016",
  //         question: "Who is Calvin"
  //       }, {
  //         answer: "September 25, 2012",
  //         question: "Who is Owen"
  //       }, {
  //         answer: "September 11, 1956",
  //         question: "Who is Eva"
  //       }
  //     ]
  //   }, {
  //     name: "Before and After",
  //     answers: [
  //       {
  //         answer: "Solace event broker, sandwich restaurant",
  //         question: "What is Pub Sub Way"
  //       }, {
  //         answer: "Prgramming degree, Star wars genre",
  //         question: "What is computer science fiction"
  //       }, {
  //         answer: "New chief, terrifying monster",
  //         question: "What is Denis King Kong"
  //       }, {
  //         answer: "007 actor, the chairman",
  //         question: "What is Daniel Craig Betts"
  //       }, {
  //         answer: "Framed movie character, terrible technology",
  //         question: "Roger Rabbit MQ"
  //       }
  //     ]
  //   }, {
  //     name: "Famous Quotes",
  //     answers: [
  //       {
  //         answer: "Let's deliver our Solace, simply stunning, 5 p's for this fiscal quarter.",
  //         question: "Who is Les Rechan"
  //       }, {
  //         answer: "This will be short (proceeds to talk for 45 minutes)",
  //         question: "Who is Shawn McAllister"
  //       }, {
  //         answer: "EBITDA is so simple",
  //         question: "Who is Ken Wigglesworth"
  //       }, {
  //         answer: "Somwhere over the rainbow",
  //         question: "Who is David Ng"
  //       }, {
  //         answer: "Co-op Chaufuer: Where do you live? Him: I don't remember.",
  //         question: "Who is David Pochopsky"
  //       }
  //     ]
  //   }, {
  //     name: "Solace Customers",
  //     answers: [
  //       {
  //         answer: "This Solacian ",
  //         question: "Who is Apple"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Singapore Port Authority"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Barclays"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is "
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }
  //     ]
  //   },  {
  //     name: "Silicon Valley North",
  //     answers: [
  //       {
  //         answer: "This arena is home of the senators",
  //         question: "What is the Canadian Tire Centre"
  //       }, {
  //         answer: "This property manager is home to 3.1 million square feet of commerical real-estate",
  //         question: "What is the Kanata Research Park"
  //       }, {
  //         answer: "Order up a XL 12 or B8 from this establishment if you're extra hungry",
  //         question: "What is Kanata Noodle House"
  //       }, {
  //         answer: "Home to the worst designed parking lot in Canada",
  //         question: "What is the Kanata Centrum"
  //       }, {
  //         answer: "Canada is derived from the iriquois word of Kanata, which means this.",
  //         question: "What is village or settlement"
  //       }
  //     ]
  //   }
  // ];
  // round2 = [
  //   {
  //     name: "Tamimi's favourite movies",
  //     answers: [
  //       {
  //         answer: "High school girls can't make fetch happen",
  //         question: "What is Mean Girls"
  //       }, {
  //         answer: "Ping pong champion also goes for a jog",
  //         question: "What is Forrest Gump"
  //       }, {
  //         answer: "Clown doesn't understand why people don't have fun",
  //         question: "What is The Dark Knight"
  //       }, {
  //         answer: "3 wolves are chased down by a tigre",
  //         question: ""
  //       }, {
  //         answer: "Canada is derived from the word Kanata, which means this.",
  //         question: "What is village or settlement"
  //       }
  //     ]
  //   }, {
  //     name: "Your co-workers",
  //     answers: [
  //       {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }
  //     ]
  //   }, {
  //     name: "Co-ops",
  //     answers: [
  //       {
  //         answer: "This Canadian university has produced the most co-ops for Solace",
  //         question: "What is Carleton"
  //       }, {
  //         answer: "A co-op term is this many weeks",
  //         question: "What is 16"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }
  //     ]
  //   }, {
  //     name: "Figure out what kids say",
  //     answers: [
  //       {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }
  //     ]
  //   }, {
  //     name: "The Office",
  //     answers: [
  //       {
  //         answer: "This is Solace's postal code",
  //         question: "What is K2K 3M2"
  //       }, {
  //         answer: "This floor used to be Solace's home in 555 Legget",
  //         question: "What is the fifth floor"
  //       }, {
  //         answer: "This Solacian loves pop so much they're adorned on the machine",
  //         question: "Who is Shawn McAllister"
  //       }, {
  //         answer: "This Solaician has the messiest office",
  //         question: "Who is Shannon Goltz"
  //       }, {
  //         answer: "June 14, 1984",
  //         question: "Who is Kevin"
  //       }
  //     ]
  //   }
  // ];
  round = 1;
  questionVisible = false;

  undoList = [];
  prefix = "/jeopardy/dist/";
  // prefix = "/";
  categories = [
    {
      name: "According to Lauren",
      answers: [
        {
          answer: "To better match her siblings, this should've been Lauren's name",
          question: "What is Kerrie Lidstone"
        }, {
          answer: "To drive across Canada, it will take this many days",
          question: "What is 25"
        }, {
          answer: "This many earths can fit into the sun",
          question: "What is 100"
        }, {
          answer: "Pepto Bismol is used for this",
          question: "What is dipping flowers into"
        }, {
          answer: "Her favourite tv show when she was 16 was this soap opera",
          question: "What is Passions"
        }
      ]
    }, {
      name: "Favourites",
      answers: [
        {
          answer: "Lauren's least favourite Soo high school",
          question: "Sir James Dunn"
        }, {
          answer: "Lauren wasn't allowed to frequent this restaurant because she isn't frickin' rich",
          question: "What is Tim Horton's"
        }, {
          answer: "A 1997 box office smash about a group of girls touring London on a double decker bus",
          question: "What is Spice World"
        }, {
          answer: "When someone annoyed Lauren in high school she would turn to this appropriately named alcoholic drink",
          question: "What is Vex"
        }, {
          answer: "Her favourite tv show when she was 16 was this soap opera",
          question: "What is Passions"
        }
      ]
    }, {
      name: "Brauren",
      answers: [
        {
          answer: "This fiancee said I love you first",
          question: "Who is Les Rechan"
        }, {
          answer: "Watching the Raptors game at Brett's mom's house was the location of this milestone",
          question: "What is their first date"
        }, {
          answer: "After April 30, 2022, Lauren's name will officially be this",
          question: "What is Lauren Heaman"
        }, {
          answer: "Brett and Lauren first met doing this together",
          question: "What is playing soccer"
        }, {
          answer: "Brett and Lauren have this many siblings between them",
          question: "What is 4"
        }
      ]
    }, {
      name: "By the numbers",
      answers: [
        {
          answer: "The age Lauren was when she got her first grey hair",
          question: "What is 28"
        }, {
          answer: "The number of weddings Lauren has been in",
          question: "What is 8"
        }, {
          answer: "The number of times Lauren needed to pass her G1",
          question: "What is twice"
        }, {
          answer: "The most Lauren has ever weighed in pounds",
          question: "What is 140"
        }, {
          answer: "The age Lauren was when she stopped sucking her thumb",
          question: "14"
        } 
      ]
    },  {
      name: "Pics",
      answers: [
        {
          answer: "",
          question: "",
          image: this.prefix + "lauren1.mp3"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "lauren2.mp3"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "lauren3.mp3"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "lauren4.mp3"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "lauren5.mp3"
        }
      ]
    }
  ];
  round2 = [
    {
      name: "According to Lauren",
      answers: [
        {
          answer: "To better match her siblings, this should've been Lauren's name",
          question: "What is Kerrie Lidstone"
        }, {
          answer: "To drive across Canada, it will take this many days",
          question: "What is 25"
        }, {
          answer: "When she was 5 years old she wanted to be this profession",
          question: "What is a face model"
        }, {
          answer: "There are this many countries in the world",
          question: "What is 1000"
        }, {
          answer: "Her favourite tv show when she was 16 was this soap opera",
          question: "What is Passions"
        }
      ]
    }, {
      name: "Favourites",
      answers: [
        {
          answer: "Lauren's least favourite Soo high school",
          question: "Sir James Dunn"
        }, {
          answer: "Lauren wasn't allowed to frequent this restaurant because she isn't frickin' rich",
          question: "What is Tim Horton's"
        }, {
          answer: "A 1997 box office smash about a group of girls touring London on a double decker bus",
          question: "What is Spice World"
        }, {
          answer: "When someone annoyed Lauren in high school she would turn to this appropriately named alcoholic drink",
          question: "What is Vex"
        }, {
          answer: "Her favourite tv show when she was 16 was this soap opera",
          question: "What is Passions"
        }
      ]
    }, {
      name: "Brauren",
      answers: [
        {
          answer: "This fiancee said I love you first",
          question: "Who is Brett"
        }, {
          answer: "Watching the Raptors game at Brett's mom's house was the location of this milestone",
          question: "What is their first date"
        }, {
          answer: "After April 30, 2022, Lauren's name will officially be this",
          question: "What is Lauren Heaman"
        }, {
          answer: "Brett and Lauren first met doing this together",
          question: "What is playing soccer"
        }, {
          answer: "Brett and Lauren have this many siblings between them",
          question: "What is 4"
        }
      ]
    }, {
      name: "By the numbers",
      answers: [
        {
          answer: "The age Lauren was when she got her first grey hair",
          question: "What is 28"
        }, {
          answer: "The number of weddings Lauren has been in",
          question: "What is 8"
        }, {
          answer: "The number of times Lauren needed to pass her G1",
          question: "What is 2"
        }, {
          answer: "The most Lauren has ever weighed in pounds",
          question: "What is 142"
        }, {
          answer: "The age Lauren was when she stopped sucking her thumb",
          question: "What is 13"
        } 
      ]
    },  {
      name: "Pics",
      answers: [
        {
          answer: "",
          question: "",
          image: this.prefix + "lauren1.mp3"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "lauren2.mp3"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "lauren3.mp3"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "lauren4.mp3"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "lauren5.mp3"
        }
      ]
    }
  ];
  
  activate() {
    window.addEventListener('keypress', this.undo.bind(this), false);
  }

  final() {
    this.showFinalJeopardyClue = false;
    this.showFinalJeopardy = true;
  }

  undo(event) {
    let answer = this.undoList.pop(this.undoList.length -1);
    if (answer) {
      answer.viewed = false;
    }
    if (event.key === 'r') {
      this.nextRound();
    }
  }

  showQuestion(answer, event) {
    console.log(event);
    if (answer.viewed) {
      answer.viewed = false;
      return;
    }
    this.undoList.push(answer);
    this.questionVisible = true;
    answer.viewed = true;
    this.question = answer;
    if (answer.song) {
      setTimeout(() => {
        var source = this.audioSource;
        source.src = answer.song;
      
        this.audio.load(); //call this to just preload the audio without playing
        this.audio.play(); //call this to play the song right away
      }, 50)
    }
  }

  returnToBoard() {
    this.questionVisible = false;
    let done = this.categories.filter(category => {
      let r = category.answers.filter(answer => {
        return answer.viewed;
      }).length === category.answers.length;
      return r;
    }).length === this.categories.length;
    if (done) {
      this.nextRound();
    }
  }

  nextRound() {
    if (this.round === 2) {
      this.showFinalJeopardyClue = true;
      this.showFinalJeopardy = false;
      return;
    }
    this.round = 2;
    this.round2.forEach((category, i) => {
      this.categories[i].name = category.name;
      category.answers.forEach((answer, j) => {
        this.categories[i].answers[j].answer = answer.answer;
        this.categories[i].answers[j].question = answer.question;
        this.categories[i].answers[j].viewed = false;
        this.categories[i].answers[j].image = answer.image;
        this.categories[i].answers[j].song = answer.song;
      });
    });
    
  }
}
