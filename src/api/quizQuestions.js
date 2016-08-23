var quizQuestions = [
  {
      question: "Select a Year ",
      answers: [
          {
              type: "Bad",
              content: 2014,
              nextquesId: 3
          },
          {
             type: "Good",
             content: 2015,
             nextquesId: 2

          },
          {
            type: "Excellent",
            content: 2016,
            nextquesId: 2
          },

      ],
     questionId: 1
  },

  {
      question: "Choose your Make",
      answers: [
          {
              type: "Excellent",
              content: "Audi",
              nextquesId: 3
          },
          {
              type: "Bad",
              content: "Ferrari",
              nextquesId: 3
          },
          {
              type: "Good",
              content: "Honda",
              nextquesId: 3
          },

      ],
      questionId: 2
  },
  {
      question: "Select your city",
      answers: [
          {
              type: "Good",
              content: "Dallas",
              nextquesId: 4
          },
          {
              type: "Excellent",
              content: "Austin",
              nextquesId: 4
          },
          {
              type: "Bad",
              content: "Houston",
              nextquesId: 4
          }
      ],
      questionId: 3
  },
  {
      question: "Select Your drive Condition",
      answers: [
          {
              type: "Good",
              content: "Exterior Damage",
              nextquesId: 5
          },
          {
              type: "Excellent",
              content: "Internal Damage",
              nextquesId: 5
          },
          {
              type: "Bad",
              content: "Fire or Flood",
              nextquesId: 5
          }
      ],
      questionId: 4
  },
  {
      question: "Rate your car out of 100",
      answers: [
          {
              type: "Excellent",
              content: "75-100 %",
              nextquesId: 6
          },
          {
              type: "Good",
              content: "50-75 %",
              nextquesId: 6
          },
          {
              type: "Bad",
              content: "0-50 %",
              nextquesId: 6
          }
      ],
      questionId: 5
  }
];

export default quizQuestions;
