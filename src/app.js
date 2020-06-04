export class App {
  finalJeopardyCategory = "Families";
  dailyDouble = "Who's family is the best?";
  categories = [
    {
      name: "Birthdays",
      answers: [
        {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "April 29, 1983",
          question: "Who is Jingjing"
        }, {
          answer: "May 25, 2016",
          question: "Who is Calvin"
        }, {
          answer: "September 25, 2012",
          question: "Who is Owen"
        }, {
          answer: "September 11, 1956",
          question: "Who is Eva"
        }
      ]
    }, {
      name: "Before and After",
      answers: [
        {
          answer: "Solace event broker, sandwich restaurant",
          question: "What is Pub Sub Way"
        }, {
          answer: "Prgramming degree, Star wars genre",
          question: "What is computer science fiction"
        }, {
          answer: "New chief, terrifying monster",
          question: "What is Denis King Kong"
        }, {
          answer: "007 actor, the chairman",
          question: "What is Daniel Craig Betts"
        }, {
          answer: "Framed movie character, terrible technology",
          question: "Roger Rabbit MQ"
        }
      ]
    }, {
      name: "Famous Quotes",
      answers: [
        {
          answer: "Let's deliver our Solace, simply stunning, 5 p's for this fiscal quarter.",
          question: "Who is Les Rechan"
        }, {
          answer: "This will be short (proceeds to talk for 45 minutes)",
          question: "Who is Shawn McAllister"
        }, {
          answer: "EBITDA is so simple",
          question: "Who is Ken Wigglesworth"
        }, {
          answer: "Somwhere over the rainbow",
          question: "Who is David Ng"
        }, {
          answer: "Co-op Chaufuer: Where do you live? Him: I don't remember.",
          question: "Who is David Pochopsky"
        }
      ]
    }, {
      name: "Solace Customers",
      answers: [
        {
          answer: "This Solacian ",
          question: "Who is Apple"
        }, {
          answer: "June 14, 1984",
          question: "Who is Singapore Port Authority"
        }, {
          answer: "June 14, 1984",
          question: "Who is Barclays"
        }, {
          answer: "June 14, 1984",
          question: "Who is "
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }
      ]
    },  {
      name: "Silicon Valley North",
      answers: [
        {
          answer: "This arena is home of the senators",
          question: "What is the Canadian Tire Centre"
        }, {
          answer: "This property manager is home to 3.1 million square feet of commerical real-estate",
          question: "What is the Kanata Research Park"
        }, {
          answer: "Order up a XL 12 or B8 from this establishment if you're extra hungry",
          question: "What is Kanata Noodle House"
        }, {
          answer: "Home to the worst designed parking lot in Canada",
          question: "What is the Kanata Centrum"
        }, {
          answer: "Canada is derived from the iriquois word of Kanata, which means this.",
          question: "What is village or settlement"
        }
      ]
    }
  ];
  round2 = [
    {
      name: "Tamimi's favourite movies",
      answers: [
        {
          answer: "High school girls can't make fetch happen",
          question: "What is Mean Girls"
        }, {
          answer: "Ping pong champion also goes for a jog",
          question: "What is Forrest Gump"
        }, {
          answer: "Clown doesn't understand why people don't have fun",
          question: "What is The Dark Knight"
        }, {
          answer: "3 wolves are chased down by a tigre",
          question: ""
        }, {
          answer: "Canada is derived from the word Kanata, which means this.",
          question: "What is village or settlement"
        }
      ]
    }, {
      name: "Your co-workers",
      answers: [
        {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }
      ]
    }, {
      name: "Co-ops",
      answers: [
        {
          answer: "This Canadian university has produced the most co-ops for Solace",
          question: "What is Carleton"
        }, {
          answer: "This co-op student ",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }
      ]
    }, {
      name: "Figure out what kids say",
      answers: [
        {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }
      ]
    }, {
      name: "Speed bumps",
      answers: [
        {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }, {
          answer: "June 14, 1984",
          question: "Who is Kevin"
        }
      ]
    }
  ];
  round = 1;
  questionVisible = false;

  showQuestion(answer) {
    this.questionVisible = true;
    answer.viewed = true;
    this.question = answer;
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
      return;
    }
    this.round = 2;
    this.round2.forEach((category, i) => {
      this.categories[i].name = category.name;
      category.answers.forEach((answer, j) => {
        this.categories[i].answers[j].answer = answer.answer;
        this.categories[i].answers[j].question = answer.question;
        this.categories[i].answers[j].viewed = false;
      });
    });
    
  }
}
