import DarkThemeChatBot from '../../Images/DarkThemeChatBot.png';
import LightThemeChatBot from '../../Images/LightThemeChatBot.png';
export const InitialPropmtState = {
  transcript: "",
  ChatData:{
    "2-March-22": [
      {
        "Asked": [
          "Hello can you generate profile report",
          "This can't be done easily",
          "Show me steps for making tea"
        ],
        "Replied": {
          "AskedQuestion_1": {
            "Heading": "Hello yes I can generate profile report",
            "Steps": [],
            "SubHeading": "Thank you for connecting"
          },
          "AskedQuestion_2": {
            "Heading": "This can't be done easily but we can do it in another way",
            "Steps": [],
            "SubHeading": "Thank you for connecting"
          },
          "AskedQuestion_3": {
            "Heading": "Sure I can help you making tea",
            "Steps": [
              "Take glass of water",
              "Put it on gas",
              "Let it boil for 2 minutes",
              "Add sugar",
              "Add Tea",
              "Wait for 2 mins",
              "Add half glass of milk"
            ],
            "SubHeading": "Here we go your tea is ready enjoy"
          }
        }
      }
    ],
    "5-March-22": [
      {
        "Asked": [
          "Can you provide me with some healthy breakfast ideas?",
          "How can I improve my coding skills?",
          "What are the best practices for time management?"
        ],
        "Replied": {
          "AskedQuestion_1": {
            "Heading": "Certainly, here are some healthy breakfast ideas:",
            "Steps": [
              "Oatmeal with fruits and nuts",
              "Greek yogurt with berries and honey",
              "Avocado toast with eggs and spinach",
              "Smoothie bowl with mixed fruits and granola"
            ],
            "SubHeading": "Enjoy your nutritious breakfast!"
          },
          "AskedQuestion_2": {
            "Heading": "To improve your coding skills, you can:",
            "Steps": [
              "Practice coding regularly",
              "Work on coding projects",
              "Participate in coding competitions or hackathons",
              "Read coding books and articles",
              "Collaborate with other developers"
            ],
            "SubHeading": "Keep coding and learning!"
          },
          "AskedQuestion_3": {
            "Heading": "Best practices for time management include:",
            "Steps": [
              "Prioritize tasks",
              "Break tasks into smaller chunks",
              "Use time blocking techniques",
              "Set achievable goals",
              "Limit distractions",
              "Take regular breaks"
            ],
            "SubHeading": "Manage your time effectively!"
          }
        }
      }
    ]
  },
  darkIcon:DarkThemeChatBot,
  lightIcon:LightThemeChatBot,
  DarkTheme: {
    width: 1200,
    iconColor:"#3F9CFF",
    borderRadius:"16px",
    backgroundColor: "var(--Dark-Slider, #091B25)",
    "& .MuiOutlinedInput-root": {
      color:"#fff",
      borderRadius:"16px",
      border: "1px solid var(--Dark-Heading, #3F9CFF",
    },
    "&:hover .MuiOutlinedInput-root": {
      border: "1px solid var(--Dark-Heading, #3F9CFF)",
    }
  },
  LightTheme: {
    width: 1200,
    iconColor:"#968864",
    backgroundColor: "#fff",
    borderRadius:"16px",
    "& .MuiOutlinedInput-root": {
      color:"#968864",
      borderRadius:"16px",
      borderColor: "1px solid var(--Light-Primary, #968864)",
    },
    "&:hover .MuiOutlinedInput-root": {
      color:"#968864",
      borderRadius:"16px",
      borderColor: "1px solid var(--Light-Primary, #968864)",
    }
  },
};
