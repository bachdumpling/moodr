export default function checkMood(questionValue, vitalValue) {
  if (questionValue[0] == "Yes") {
    if (questionValue[1] == "Positive") {
      if (questionValue[2] == "3") {
        if (
          (vitalValue[0] >= 70 || vitalValue[0] <= 130) &&
          (vitalValue[1] >= 93 || vitalValue[1] <= 97)
        ) {
          return "Pleased";
        } else {
          return "Okay";
        }
      } else if (questionValue[2] == "4") {
        if (vitalValue[0] >= 150 && vitalValue[1] >= 97) {
          return "Optimistic";
        } else {
          return "Okay";
        }
      } else if (questionValue[2] == "5") {
        if (vitalValue[0] >= 150 && vitalValue[1] >= 97) {
          return "Excited";
        } else {
          return "Happy";
        }
      } else {
        return "Okay";
      }
    } else if (questionValue[1] == "Negative") {
      if (questionValue[2] == "1") {
        if (vitalValue[0] >= 150 && vitalValue[1] >= 97) {
          return "Angry";
        } else if (vitalValue[0] <= 80 && vitalValue[1] >= 97) {
          return "Anxious";
        } else if (vitalValue[0] <= 80 && vitalValue[1] <= 93) {
          return "Sad";
        } else {
          return "Frustrated";
        }
      } else if (questionValue[2] == "2") {
        if (vitalValue[0] <= 80 && vitalValue[1] >= 97) {
          return "Anxious";
        } else if (vitalValue[0] <= 80 && vitalValue[1] <= 93) {
          return "Sad";
        } else {
          return "Frustrated";
        }
      } else if (questionValue[2] == "3") {
        if (
          (vitalValue[0] >= 70 || vitalValue[0] <= 130) &&
          (vitalValue[1] >= 93 || vitalValue[1] <= 97)
        ) {
          return "Pleased";
        } else {
          return "Okay";
        }
      } else {
        return "Okay";
      }
    } else if (questionValue[1] == "Neutral") {
      if (questionValue[2] == "3") {
        if (
          (vitalValue[0] >= 70 || vitalValue[0] <= 130) &&
          (vitalValue[1] >= 93 || vitalValue[1] <= 97)
        ) {
          return "Pleased";
        } else {
          return "Okay";
        }
      } else {
        return "Okay";
      }
    }
  } else {
    if (questionValue[1] == "Positive") {
        if (questionValue[2] == "3") {
          if (
            (vitalValue[0] >= 70 || vitalValue[0] <= 130) &&
            (vitalValue[1] >= 93 || vitalValue[1] <= 97)
          ) {
            return "Pleased";
          } else {
            return "Okay";
          }
        } else if (questionValue[2] == "4") {
          if (vitalValue[0] >= 150 && vitalValue[1] >= 97) {
            return "Optimistic";
          } else {
            return "Okay";
          }
        } else if (questionValue[2] == "5") {
          if (vitalValue[0] >= 150 && vitalValue[1] >= 97) {
            return "Excited";
          } else {
            return "Happy";
          }
        } else {
          return "Okay";
        }
      } else if (questionValue[1] == "Negative") {
        if (questionValue[2] == "1") {
          if (vitalValue[0] >= 150 && vitalValue[1] >= 97) {
            return "Angry";
          } else if (vitalValue[0] <= 80 && vitalValue[1] >= 97) {
            return "Anxious";
          } else if (vitalValue[0] <= 80 && vitalValue[1] <= 93) {
            return "Sad";
          } else {
            return "Frustrated";
          }
        } else if (questionValue[2] == "2") {
          if (vitalValue[0] <= 80 && vitalValue[1] >= 97) {
            return "Anxious";
          } else if (vitalValue[0] <= 80 && vitalValue[1] <= 93) {
            return "Sad";
          } else {
            return "Frustrated";
          }
        } else if (questionValue[2] == "3") {
          if (
            (vitalValue[0] >= 70 || vitalValue[0] <= 130) &&
            (vitalValue[1] >= 93 || vitalValue[1] <= 97)
          ) {
            return "Pleased";
          } else {
            return "Okay";
          }
        } else {
          return "Okay";
        }
      } else if (questionValue[1] == "Neutral") {
        if (questionValue[2] == "3") {
          if (
            (vitalValue[0] >= 70 || vitalValue[0] <= 130) &&
            (vitalValue[1] >= 93 || vitalValue[1] <= 97)
          ) {
            return "Pleased";
          } else {
            return "Okay";
          }
        } else {
          return "Okay";
        }
      }
  }
}
