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
      name: "Eye Spy",
      answers: [
        {
          answer: "",
          question: "",
          image: this.prefix + "eyes1.jpg"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "eyes2.jpg"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "eyes3.jpg"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "eyes4.jpg"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "eyes5.jpg"
        }
      ]
    }, {
      name: "Birthdays",
      answers: [
        {
          answer: "9/11",
          question: "What is Pub Sub Way"
        }, {
          answer: "11/11",
          question: "What is computer science fiction"
        }, {
          answer: "11/4",
          question: "What is Denis King Kong"
        }, {
          answer: "9/1",
          question: "What is Daniel Craig Betts"
        }, {
          answer: "1/9",
          question: "Roger Rabbit MQ"
        }
      ]
    }, {
      name: "Sports",
      answers: [
        {
          answer: "Dig, Block, Centre Line.",
          question: "Who is Les Rechan"
        }, {
          answer: "Approach shot, volley, dink",
          question: "Who is Shawn McAllister"
        }, {
          answer: "Drop, serve, clear",
          question: "Who is Ken Wigglesworth"
        }, {
          answer: "Eagle, lift, binding",
          question: "Who is David Ng"
        }, {
          answer: "Stroke, let, tin",
          question: "Who is David Pochopsky"
        }
      ]
    }, {
      name: "Linda-isms",
      answers: [
        {
          answer: "The smallest breed of dog.",
          question: ""
        }, {
          answer: "Live.Eat.Play.",
          question: ""
        }, {
          answer: "Home to Crooked Tree",
          question: ""
        }, {
          answer: "A sattelite-based radio navigation system",
          question: ""
        }, {
          answer: "A city known for luxury shopping, ultra modern architecture and a lively night life scene",
          question: ""
        } 
      ]
    },  {
      name: "Name that tune",
      answers: [
        {
          answer: "",
          question: "",
          song: this.prefix + "song1.mp3"
        }, {
          answer: "",
          question: "",
          song: this.prefix + "song2.mp3"
        }, {
          answer: "",
          question: "",
          song: this.prefix + "song3.mp3"
        }, {
          answer: "",
          question: "",
          song: this.prefix + "song4.mp3"
        }, {
          answer: "",
          question: "",
          song: this.prefix + "song5.mp3"
        }
      ]
    }
  ];
  round2 = [
    {
      name: "Golf",
      answers: [
        {
          answer: "",
          question: "",
          image: this.prefix + "golf1.jpg"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "golf2.jpg"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "golf3.jpg"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "golf4.jpg"
        }, {
          answer: "",
          question: "",
          image: this.prefix + "golf5.jpg"
        }
      ]
    }, {
      name: "YMCA",
      answers: [
        {
          answer: "Midsize Toyota product.",
          question: ""
        }, {
          answer: "The art of dealing with people in a sensitive and effective way.",
          question: ""
        }, {
          answer: "Queen Elizabeth, Prince Charles and Prince George.",
          question: ""
        }, {
          answer: "One time member of Rytac.",
          question: ""
        }, {
          answer: "An oft visited vacation spot south of the border.",
          question: ""
        }
      ]
    }, {
      name: "Just Desserts",
      answers: [
        {
          answer: "I wonder if this dessert topped with whipped egg whites would prevent scurvy.",
          question: ""
        }, {
          answer: "You wouldnt catch Phil sampling this pie, that oddly enough does not come from nuts.",
          question: ""
        }, {
          answer: "A visit to Thomson farms will supply you with ingredients for this sweet biscuit.",
          question: ""
        }, {
          answer: "The offspring of After Eight and York Patties perhaps. ",
          question: ""
        }, {
          answer: "Sometimes Eva makes Crack  Pie because she forgets to add the main ingredient in this pie.",
          question: ""
        }
      ]
    }, {
      name: "Before and After",
      answers: [
        {
          answer: "Phil and Rob at work watching a Julia Roberts/Sally Field movie.",
          question: ""
        }, {
          answer: "A snow spike team snacking on a candy-coated chocolate treat. ",
          question: ""
        }, {
          answer: "Dancing at the badminton social, a special message of congratulations.",
          question: ""
        }, {
          answer: "A Rolling Stones song about the driveway at the Lidstone’s camp.",
          question: ""
        }, {
          answer: "Small business for fixing your sore back, summer camp activity",
          question: ""
        }
      ]
    }, {
      name: "R-Rated Quotes",
      answers: [
        {
          answer: "Choking feaking dog.",
          question: ""
        }, {
          answer: "F*ck…F*ck Me.",
          question: ""
        }, {
          answer: "I hate this f*ckin game.",
          question: ""
        }, {
          answer: "Is Mike Oxbig here?",
          question: ""
        }, {
          answer: "Coming up the rear.",
          question: ""
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
    let done = this.categories.filter(category => {
      let r = category.answers.filter(answer => {
        return answer.viewed;
      }).length === category.answers.length;
      return r;
    }).length === this.categories.length;
    if (answer.song) {
      setTimeout(() => {
        var source = this.audioSource;
        source.src = answer.song;
      
        this.audio.load(); //call this to just preload the audio without playing
        this.audio.play(); //call this to play the song right away
      }, 50)
    }
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
